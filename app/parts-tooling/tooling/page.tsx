'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { searchTooling, getToolingCategories, ToolingItem } from './tooling-data';
import { ToolingQuoteModal } from './ToolingQuoteModal';
import { ToolingDetailsModal } from './ToolingDetailsModal';

export default function ToolingPage() {
  // SEO Meta Tags
  const seoTitle = "Gas Turbine Tooling - Borescope, Maintenance Kits, Calibration Equipment | Energy World";
  const seoDescription = "Professional gas turbine tooling including borescope inspection equipment, maintenance kits, calibration tools, and specialty equipment for fuel nozzles, turbine blades, shrouds, and combustion section parts.";
  const seoKeywords = "gas turbine tooling, borescope inspection, maintenance kits, calibration equipment, fuel nozzles, turbine blades, shrouds, flame sensors, centrifugal atomising compressors, overhauling";
  const [toolingResults, setToolingResults] = useState<ToolingItem[]>([]);
  const [displayedResults, setDisplayedResults] = useState<ToolingItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedTooling, setSelectedTooling] = useState<ToolingItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const categories = getToolingCategories();

  // Load all tooling by default when component mounts
  useEffect(() => {
    const allTooling = searchTooling({});
    setToolingResults(allTooling);
    setDisplayedResults(allTooling.slice(0, itemsPerPage));
    setShowResults(true);
  }, [itemsPerPage]);

  const handleQuoteRequest = (toolingItem: ToolingItem) => {
    setSelectedTooling(toolingItem);
    setIsQuoteModalOpen(true);
  };

  const handleViewDetails = (toolingItem: ToolingItem) => {
    setSelectedTooling(toolingItem);
    setIsDetailsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedTooling(null);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedTooling(null);
  };

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * itemsPerPage;
    const newDisplayedResults = toolingResults.slice(startIndex, endIndex);
    
    setDisplayedResults(newDisplayedResults);
    setCurrentPage(nextPage);
  };

  const hasMoreItems = displayedResults.length < toolingResults.length;
  return (
    <>
      <head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </head>
      <div className="parts-tooling-tooling" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>
          Gas Turbine Tooling - Borescope, Maintenance Kits & Calibration Equipment
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
          Professional gas turbine tooling for fuel nozzles, turbine blades, shrouds, flame sensors, centrifugal atomising compressors, and complete overhauling services. Borescope inspection, maintenance kits, and calibration equipment.
        </p>
      </div>

      {/* Tooling Results */}
      {showResults && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>
            Available Tooling Equipment ({toolingResults.length} items)
          </h2>
          <p style={{ color: '#4a5568', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Showing {displayedResults.length} of {toolingResults.length} items
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {displayedResults.map((item) => (
              <div key={item.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative' }}>
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={400} 
                    height={250} 
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    background: item.availability === 'In Stock' ? '#38a169' : 
                               item.availability === 'Available' ? '#3182ce' :
                               item.availability === 'Limited Stock' ? '#d69e2e' : '#e53e3e',
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {item.availability}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ color: '#4a5568', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                    Category: {item.category.replace('-', ' ').toUpperCase()}
                  </p>
                  <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                  
                  {/* Pricing */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {item.purchasePrice && (
                        <div>
                          <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>Purchase: </span>
                          <span style={{ color: '#e53e3e', fontWeight: '600' }}>
                            ${item.purchasePrice.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {item.rentalPrice && (
                        <div>
                          <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>Rental: </span>
                          <span style={{ color: '#3182ce', fontWeight: '600' }}>
                            ${item.rentalPrice}/day
                          </span>
                        </div>
                      )}
                    </div>
                    <div style={{ color: '#4a5568', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                      Lead Time: {item.leadTime}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => handleQuoteRequest(item)}
                      style={{ 
                        background: '#3182ce', 
                        color: 'white', 
                        padding: '0.5rem 1rem', 
                        border: 'none', 
                        borderRadius: '4px', 
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        flex: '1'
                      }}
                    >
                      Request Quote
                    </button>
                    <button 
                      onClick={() => handleViewDetails(item)}
                      style={{ 
                        background: 'white', 
                        color: '#3182ce', 
                        padding: '0.5rem 1rem', 
                        border: '1px solid #3182ce', 
                        borderRadius: '4px', 
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        flex: '1'
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMoreItems && displayedResults.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={loadMore}
                style={{
                  background: '#3182ce',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Load More Equipment ({toolingResults.length - displayedResults.length} remaining)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tooling Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* Borescope Inspection Tools */}
        <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Image 
              src="/images/a10.jpg" 
              alt="Borescope Inspection Tools" 
              width={300} 
              height={200} 
              style={{ borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Borescope Inspection Tools</h2>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Advanced visual inspection equipment for internal turbine component examination without disassembly.
          </p>
          <ul style={{ color: '#4a5568', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Flexible fiber optic borescopes</li>
            <li>Rigid borescopes with LED lighting</li>
            <li>Digital recording capabilities</li>
            <li>Measurement and analysis software</li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#38a169', fontWeight: '600' }}>Available for Rent/Purchase</span>
            <button 
              onClick={() => {
                const sampleTooling = {
                  id: 'featured-borescope',
                  name: 'Borescope Inspection Tools',
                  category: 'borescope',
                  description: 'Advanced visual inspection equipment for internal turbine component examination without disassembly.',
                  specifications: [
                    'Flexible fiber optic borescopes',
                    'Rigid borescopes with LED lighting',
                    'Digital recording capabilities',
                    'Measurement and analysis software'
                  ],
                  price: 15000,
                  availability: 'Available' as const,
                  image: '/images/a10.jpg',
                  leadTime: '2-3 weeks',
                  warranty: '12 months',
                  rentalAvailable: true,
                  purchasePrice: 15000,
                  rentalPrice: 500
                };
                handleViewDetails(sampleTooling);
              }}
              style={{ 
                background: '#3182ce', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                border: 'none', 
                borderRadius: '4px', 
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Maintenance Tooling Kits */}
        <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Image 
              src="/images/a11.jpg" 
              alt="Maintenance Tooling Kits" 
              width={300} 
              height={200} 
              style={{ borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Maintenance Tooling Kits</h2>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Complete tool sets designed for specific gas turbine models and maintenance procedures.
          </p>
          <ul style={{ color: '#4a5568', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>LM2500 maintenance kits</li>
            <li>LM6000 overhaul tools</li>
            <li>6B/7B service tools</li>
            <li>Specialty hand tools</li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#d69e2e', fontWeight: '600' }}>Model Specific</span>
            <button 
              onClick={() => {
                const sampleTooling = {
                  id: 'featured-maintenance-kit',
                  name: 'Maintenance Tooling Kits',
                  category: 'maintenance-kit',
                  description: 'Complete tool sets designed for specific gas turbine models and maintenance procedures.',
                  specifications: [
                    'LM2500 maintenance kits',
                    'LM6000 overhaul tools',
                    '6B/7B service tools',
                    'Specialty hand tools'
                  ],
                  price: 45000,
                  availability: 'Limited Stock' as const,
                  image: '/images/a11.jpg',
                  leadTime: '4-6 weeks',
                  warranty: '24 months',
                  rentalAvailable: true,
                  purchasePrice: 45000,
                  rentalPrice: 1500
                };
                handleViewDetails(sampleTooling);
              }}
              style={{ 
                background: '#3182ce', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                border: 'none', 
                borderRadius: '4px', 
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              View Kits
            </button>
          </div>
        </div>
      </div>

      {/* Additional Tooling Equipment */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>Additional Tooling Equipment</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {/* Calibration Equipment */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <Image 
              src="/images/a12.jpg" 
              alt="Calibration Equipment" 
              width={120} 
              height={120} 
              style={{ borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Calibration Equipment</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Precision calibration tools for maintaining measurement accuracy in critical applications.
            </p>
          </div>

          {/* Specialty Hand Tools */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <Image 
              src="/images/a15.jpg" 
              alt="Specialty Hand Tools" 
              width={120} 
              height={120} 
              style={{ borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Specialty Hand Tools</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Custom-designed hand tools for specific gas turbine maintenance procedures.
            </p>
          </div>

          {/* Lifting and Rigging */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <Image 
              src="/images/a16.jpg" 
              alt="Lifting and Rigging Tools" 
              width={120} 
              height={120} 
              style={{ borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Lifting & Rigging</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Safe and efficient lifting equipment for heavy turbine components.
            </p>
          </div>

          {/* Measurement Tools */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <Image 
              src="/images/a19.jpg" 
              alt="Measurement Tools" 
              width={120} 
              height={120} 
              style={{ borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Measurement Tools</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Precision measurement instruments for component inspection and quality control.
            </p>
          </div>
        </div>
      </div>

      {/* Tooling Services */}
      <div style={{ background: '#edf2f7', padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>Tooling Services</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/b1.jpg" 
              alt="Tool Rental" 
              width={80} 
              height={80} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Tool Rental</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Flexible rental options for short-term maintenance projects
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/b2.jpg" 
              alt="Training" 
              width={80} 
              height={80} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Training & Support</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Comprehensive training on proper tool usage and maintenance
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/b3.jpg" 
              alt="Custom Tools" 
              width={80} 
              height={80} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Custom Tooling</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Design and manufacture of specialized tools for unique applications
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
        <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
          Contact our tooling specialists to discuss your specific requirements
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ 
            display: 'inline-block', 
            background: 'white', 
            color: '#667eea', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            Contact Us
          </Link>
          <Link href="/parts-tooling/offers" style={{ 
            display: 'inline-block', 
            background: 'transparent', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid white'
          }}>
            View Special Offers
          </Link>
        </div>
      </div>

      {/* Modals */}
      <ToolingQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
        toolingItem={selectedTooling} 
      />
      <ToolingDetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={closeDetailsModal} 
        toolingItem={selectedTooling} 
      />
      </div>
    </>
  );
} 