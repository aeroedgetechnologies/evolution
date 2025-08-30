import Image from 'next/image';
import Link from 'next/link';

export default function ToolingPage() {
  return (
    <div className="parts-tooling-tooling" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>
          Specialized Tooling Solutions
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
          Professional-grade tools and equipment designed specifically for gas turbine maintenance, inspection, and repair operations
        </p>
      </div>

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
            <button style={{ 
              background: '#3182ce', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              border: 'none', 
              borderRadius: '4px', 
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
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
            <button style={{ 
              background: '#3182ce', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              border: 'none', 
              borderRadius: '4px', 
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
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
    </div>
  );
} 