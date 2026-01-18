import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { searchParts, getManufacturers, getModels, getCategories, Part } from './parts-data';
import { QuoteModal } from './QuoteModal';
import { DetailsModal } from './DetailsModal';

export const metadata = {
  title: "Gas Turbine Parts - Fuel Nozzles, Turbine Blades, Shrouds, Flame Sensors | Energy World",
  description: "Find gas turbine parts including fuel nozzles, fuel nozzle blades, shrouds, flame sensors, centrifugal atomising compressors, turbine blades, turbine wheels, turbine rotor, combustion section parts, and overhauling services.",
  keywords: "fuel nozzles, fuel nozzle blades, shrouds, flame sensors, centrifugal atomising compressors, turbine blades, turbine wheels, turbine rotor, combustion section parts, overhauling, gas turbine parts, LM2500, LM6000, SGT-600, SGT-800, Frame 5B, Frame 9E",
};

export default function PartFinderPage() {
  const [searchFilters, setSearchFilters] = useState({
    manufacturer: '',
    model: '',
    category: ''
  });
  const [searchResults, setSearchResults] = useState<Part[]>([]);
  const [displayedResults, setDisplayedResults] = useState<Part[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const manufacturers = getManufacturers();
  const models = getModels();
  const categories = getCategories();

  const handleSearch = () => {
    setIsSearching(true);
    setShowResults(true);
    setCurrentPage(1);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const results = searchParts(searchFilters);
      setSearchResults(results);
      setDisplayedResults(results.slice(0, itemsPerPage));
      setIsSearching(false);
    }, 300);
  };

  // Load all parts by default when component mounts
  useEffect(() => {
    const allParts = searchParts({});
    setSearchResults(allParts);
    setDisplayedResults(allParts.slice(0, itemsPerPage));
    setShowResults(true);
  }, [itemsPerPage]);

  const handleFilterChange = (filterType: string, value: string) => {
    setSearchFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetSearch = () => {
    setSearchFilters({
      manufacturer: '',
      model: '',
      category: ''
    });
    const allParts = searchParts({});
    setSearchResults(allParts);
    setDisplayedResults(allParts.slice(0, itemsPerPage));
    setCurrentPage(1);
    setShowResults(true);
  };

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * itemsPerPage;
    const newDisplayedResults = searchResults.slice(startIndex, endIndex);
    
    setDisplayedResults(newDisplayedResults);
    setCurrentPage(nextPage);
  };

  const hasMoreItems = displayedResults.length < searchResults.length;

  const handleQuoteRequest = (part: Part) => {
    setSelectedPart(part);
    setIsQuoteModalOpen(true);
  };

  const handleViewDetails = (part: Part) => {
    setSelectedPart(part);
    setIsDetailsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedPart(null);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedPart(null);
  };
  return (
    <>
      <div className="parts-tooling-part-finder" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>
          Gas Turbine Parts - Fuel Nozzles, Turbine Blades, Shrouds & More
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
          Find fuel nozzles, fuel nozzle blades, shrouds, flame sensors, centrifugal atomising compressors, turbine blades, turbine wheels, turbine rotor, combustion section parts, and complete overhauling services for all major gas turbine models.
        </p>
      </div>

      {/* Search Interface */}
      <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', marginBottom: '3rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>Filter Parts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Manufacturer
            </label>
            <select 
              value={searchFilters.manufacturer}
              onChange={(e) => handleFilterChange('manufacturer', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #e2e8f0', 
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            >
              <option value="">Select Manufacturer</option>
              {manufacturers.map(manufacturer => (
                <option key={manufacturer} value={manufacturer}>
                  {manufacturer === 'ge' ? 'General Electric (GE)' :
                   manufacturer === 'siemens' ? 'Siemens' :
                   manufacturer === 'mitsubishi' ? 'Mitsubishi' :
                   manufacturer === 'ansaldo' ? 'Ansaldo' :
                   manufacturer === 'other' ? 'Other' : manufacturer}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Model
            </label>
            <select 
              value={searchFilters.model}
              onChange={(e) => handleFilterChange('model', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #e2e8f0', 
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            >
              <option value="">Select Model</option>
              {models.map(model => (
                <option key={model} value={model}>
                  {model === 'lm2500' ? 'LM2500' :
                   model === 'lm500' ? 'LM500' :
                   model === 'lm6000' ? 'LM6000' :
                   model === 'frame-5b' ? 'Frame 5B' :
                   model === 'frame-6b' ? 'Frame 6B' :
                   model === 'frame-5b-pa' ? 'Frame 5B PA' :
                   model === 'frame-9e' ? 'Frame 9E' :
                   model === 'sgt-50' ? 'SGT-50' :
                   model === 'sgt-100' ? 'SGT-100' :
                   model === 'sgt-400' ? 'SGT-400' :
                   model === 'sgt-600' ? 'SGT-600' :
                   model === 'sgt-800' ? 'SGT-800' :
                   model === 'm501j' ? 'M501J' :
                   model === 'm701j' ? 'M701J' :
                   model === 'h-25' ? 'H-25' :
                   model === 'h-100' ? 'H-100' :
                   model === 'ft8' ? 'FT8' :
                   model === 'ft4000' ? 'FT4000' :
                   model === 'saturn' ? 'Saturn' :
                   model === 'centaur' ? 'Centaur' :
                   model === 'mercury' ? 'Mercury' :
                   model === 'taurus' ? 'Taurus' :
                   model === 'mars' ? 'Mars' :
                   model === 'titan' ? 'Titan' :
                   model === 'other' ? 'Other Models' : 
                   model.charAt(0).toUpperCase() + model.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Part Category
            </label>
            <select 
              value={searchFilters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #e2e8f0', 
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'hot-section' ? 'Hot Section' :
                   category === 'compressor' ? 'Compressor' :
                   category === 'combustion' ? 'Combustion' :
                   category === 'turbine' ? 'Turbine' :
                   category === 'auxiliary' ? 'Auxiliary Systems' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            style={{ 
              background: isSearching ? '#a0aec0' : '#3182ce',
              color: 'white', 
              padding: '0.75rem 2rem', 
              border: 'none', 
              borderRadius: '6px', 
              fontSize: '1rem',
              fontWeight: '500',
              cursor: isSearching ? 'not-allowed' : 'pointer',
              opacity: isSearching ? 0.7 : 1
            }}
          >
            {isSearching ? 'Filtering...' : 'Apply Filters'}
          </button>
          <button 
            onClick={resetSearch}
            style={{ 
              background: 'white',
              color: '#3182ce', 
              padding: '0.75rem 2rem', 
              border: '2px solid #3182ce', 
              borderRadius: '6px', 
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Parts Results */}
      {showResults && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>
            {searchFilters.manufacturer || searchFilters.model || searchFilters.category 
              ? `Filtered Results (${searchResults.length} parts found)`
              : `All Parts (${searchResults.length} parts available)`
            }
          </h2>
          <p style={{ color: '#4a5568', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Showing {displayedResults.length} of {searchResults.length} parts
          </p>
          
          {isSearching ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '1.2rem', color: '#4a5568' }}>Filtering parts...</div>
            </div>
          ) : displayedResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#f7fafc', borderRadius: '12px' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>No parts match your filters</h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                Try adjusting your filter criteria or contact our technical team for assistance.
              </p>
              <Link href="/contact" style={{ 
                display: 'inline-block', 
                background: '#3182ce', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '6px', 
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Contact Support
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {displayedResults.map((part) => (
                <div key={part.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ position: 'relative' }}>
                    <Image 
                      src={part.image} 
                      alt={part.name} 
                      width={400} 
                      height={250} 
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '1rem', 
                      right: '1rem', 
                      background: part.availability === 'In Stock' ? '#38a169' : 
                                 part.availability === 'Available' ? '#3182ce' :
                                 part.availability === 'Limited Stock' ? '#d69e2e' : '#e53e3e',
                      color: 'white', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '20px', 
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {part.availability}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{part.name}</h3>
                    <p style={{ color: '#4a5568', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                      Part Number: {part.partNumber}
                    </p>
                    <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                      {part.description}
                    </p>
                    
                    {/* Specifications */}
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ color: '#2d3748', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Key Specifications:</h4>
                      <ul style={{ color: '#4a5568', fontSize: '0.8rem', paddingLeft: '1rem', marginBottom: '0' }}>
                        {part.specifications.slice(0, 3).map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div>
                        <div style={{ color: '#e53e3e', fontWeight: '600', fontSize: '1.1rem' }}>
                          ${part.price.toLocaleString()}
                        </div>
                        <div style={{ color: '#4a5568', fontSize: '0.8rem' }}>
                          Lead Time: {part.leadTime}
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button 
                        onClick={() => handleQuoteRequest(part)}
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
                        onClick={() => handleViewDetails(part)}
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
          )}
          
          {/* Load More Button */}
          {hasMoreItems && !isSearching && displayedResults.length > 0 && (
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
                Load More Parts ({searchResults.length - displayedResults.length} remaining)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Featured Parts */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>Featured Parts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Hot Section Components */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/a7.jpg" 
                alt="Hot Section Components" 
                width={400} 
                height={250} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem', 
                background: '#e53e3e', 
                color: 'white', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Hot Section
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Hot Section Components</h3>
              <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                High-temperature resistant components for turbine hot sections including nozzles, blades, and shrouds.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#e53e3e', fontWeight: '600' }}>In Stock</span>
                <button 
                  onClick={() => {
                    // Create a sample hot section part for details
                    const samplePart = {
                      id: 'featured-hot-section',
                      name: 'Hot Section Components',
                      partNumber: 'HS-COMPLETE-SET',
                      manufacturer: 'ge',
                      model: 'lm2500',
                      category: 'hot-section',
                      description: 'Complete hot section component set including nozzles, blades, and shrouds for high-temperature applications.',
                      specifications: [
                        'Material: Nickel-based superalloy',
                        'Operating Temperature: Up to 1300°C',
                        'Coating: Thermal barrier coating',
                        'Components: 12 pieces',
                        'Certification: OEM approved'
                      ],
                      price: 45000,
                      availability: 'In Stock' as const,
                      image: '/images/a7.jpg',
                      leadTime: '3-4 weeks',
                      warranty: '18 months'
                    };
                    handleViewDetails(samplePart);
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
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Compressor Parts */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/a8.jpg" 
                alt="Compressor Parts" 
                width={400} 
                height={250} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem', 
                background: '#38a169', 
                color: 'white', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Compressor
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Compressor Parts</h3>
              <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Precision-engineered compressor components including blades, vanes, and rotor assemblies.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#38a169', fontWeight: '600' }}>Available</span>
                <button 
                  onClick={() => {
                    // Create a sample compressor part for details
                    const samplePart = {
                      id: 'featured-compressor',
                      name: 'Compressor Parts',
                      partNumber: 'COMP-BLADE-SET',
                      manufacturer: 'ge',
                      model: 'lm2500',
                      category: 'compressor',
                      description: 'Complete set of precision-engineered compressor components including blades, vanes, and rotor assemblies.',
                      specifications: [
                        'Material: Titanium alloy',
                        'Blade Count: 24 blades',
                        'Surface Finish: Polished',
                        'Weight: 8.5 kg',
                        'Certification: OEM approved'
                      ],
                      price: 8500,
                      availability: 'Available' as const,
                      image: '/images/a8.jpg',
                      leadTime: '3-4 weeks',
                      warranty: '12 months'
                    };
                    handleViewDetails(samplePart);
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
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Combustion System */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/a9.jpg" 
                alt="Combustion System Parts" 
                width={400} 
                height={250} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem', 
                background: '#d69e2e', 
                color: 'white', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Combustion
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Combustion System Parts</h3>
              <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Complete combustion system components including fuel nozzles, liners, and transition pieces.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#d69e2e', fontWeight: '600' }}>Limited Stock</span>
                <button 
                  onClick={() => {
                    // Create a sample combustion part for details
                    const samplePart = {
                      id: 'featured-combustion',
                      name: 'Combustion System Parts',
                      partNumber: 'COMB-SYSTEM-SET',
                      manufacturer: 'ge',
                      model: 'lm2500',
                      category: 'combustion',
                      description: 'Complete combustion system components including fuel nozzles, liners, and transition pieces for optimal performance.',
                      specifications: [
                        'Material: Stainless steel',
                        'Fuel Type: Natural gas/Diesel',
                        'Flow Rate: 500-2000 kg/h',
                        'Pressure Rating: 50 bar',
                        'Certification: ASME approved'
                      ],
                      price: 12000,
                      availability: 'Limited Stock' as const,
                      image: '/images/a9.jpg',
                      leadTime: '4-6 weeks',
                      warranty: '18 months'
                    };
                    handleViewDetails(samplePart);
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
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ background: '#edf2f7', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ color: '#2d3748', marginBottom: '1.5rem' }}>Need Help Finding Parts?</h3>
        <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
          Our technical experts are here to help you find the right parts for your specific needs
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ 
            display: 'inline-block', 
            background: '#3182ce', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Contact Support
          </Link>
          <Link href="/parts-tooling/offers" style={{ 
            display: 'inline-block', 
            background: 'white', 
            color: '#3182ce', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '500',
            border: '2px solid #3182ce'
          }}>
            View Special Offers
          </Link>
        </div>
      </div>

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
        part={selectedPart} 
      />
      <DetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={closeDetailsModal} 
        part={selectedPart} 
      />
      </div>
    </>
  );
} 