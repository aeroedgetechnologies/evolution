import Image from 'next/image';
import Link from 'next/link';

export default function PartFinderPage() {
  return (
    <div className="parts-tooling-part-finder" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>
          Energy World Part Finder
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
          Find the exact parts you need for your gas turbine maintenance and repair operations
        </p>
      </div>

      {/* Search Interface */}
      <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', marginBottom: '3rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>Search for Parts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Manufacturer
            </label>
            <select style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              fontSize: '1rem'
            }}>
              <option value="">Select Manufacturer</option>
              <option value="ge">General Electric (GE)</option>
              <option value="siemens">Siemens</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="ansaldo">Ansaldo</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Model
            </label>
            <select style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              fontSize: '1rem'
            }}>
              <option value="">Select Model</option>
              <option value="lm2500">LM2500</option>
              <option value="lm6000">LM6000</option>
              <option value="6b">6B</option>
              <option value="7b">7B</option>
              <option value="9e">9E</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Part Category
            </label>
            <select style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              fontSize: '1rem'
            }}>
              <option value="">Select Category</option>
              <option value="hot-section">Hot Section</option>
              <option value="compressor">Compressor</option>
              <option value="combustion">Combustion</option>
              <option value="turbine">Turbine</option>
              <option value="auxiliary">Auxiliary Systems</option>
            </select>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button style={{ 
            background: '#3182ce', 
            color: 'white', 
            padding: '0.75rem 2rem', 
            border: 'none', 
            borderRadius: '6px', 
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Search Parts
          </button>
        </div>
      </div>

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
                <button style={{ 
                  background: '#3182ce', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}>
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
                <button style={{ 
                  background: '#3182ce', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}>
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
                <button style={{ 
                  background: '#3182ce', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}>
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
    </div>
  );
} 