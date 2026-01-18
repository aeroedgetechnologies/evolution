import Image from 'next/image';
import Link from 'next/link';

export default function PartsToolingPage() {
  return (
    <div className="parts-tooling-main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>
          Parts & Tooling Solutions
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
          Comprehensive gas turbine parts and specialized tooling for maintenance, repair, and overhaul operations
        </p>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* Parts Section */}
        <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Image 
              src="/images/GE_LM2500.jpg" 
              alt="Gas Turbine Parts" 
              width={300} 
              height={200} 
              style={{ borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Gas Turbine Parts</h2>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            High-quality replacement parts for GE, Siemens, and other major gas turbine manufacturers. 
            From hot section components to auxiliary systems.
          </p>
          <ul style={{ color: '#4a5568', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Hot section components</li>
            <li>Compressor parts</li>
            <li>Combustion system parts</li>
            <li>Accessory drive components</li>
          </ul>
          <Link href="/parts-tooling/part-finder" style={{ 
            display: 'inline-block', 
            background: '#3182ce', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Find Parts
          </Link>
        </div>

        {/* Tooling Section */}
        <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Image 
              src="/images/LM6000.jpg" 
              alt="Specialized Tooling" 
              width={300} 
              height={200} 
              style={{ borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Specialized Tooling</h2>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Professional-grade tools and equipment designed specifically for gas turbine maintenance, 
            inspection, and repair operations.
          </p>
          <ul style={{ color: '#4a5568', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Borescope inspection tools</li>
            <li>Maintenance tooling kits</li>
            <li>Calibration equipment</li>
            <li>Specialty hand tools</li>
          </ul>
          <Link href="/parts-tooling/tooling" style={{ 
            display: 'inline-block', 
            background: '#3182ce', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            View Tooling
          </Link>
        </div>
      </div>

      {/* Additional Services */}
      <div style={{ background: '#edf2f7', padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>Additional Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/6BGE.png" 
              alt="Technical Support" 
              width={80} 
              height={80} 
              style={{ borderRadius: '50%', marginBottom: '1rem' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Technical Support</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Expert guidance on parts selection and tooling usage</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/spotlight.jpg" 
              alt="Quality Assurance" 
              width={80} 
              height={80} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Quality Assurance</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>All parts and tools meet OEM specifications</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/handshakes.jpg" 
              alt="Customer Service" 
              width={80} 
              height={80} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Customer Service</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Dedicated support team for all your needs</p>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Special Offers Available</h2>
        <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
          Check out our latest deals on parts and tooling packages
        </p>
        <Link href="/parts-tooling/offers" style={{ 
          display: 'inline-block', 
          background: 'white', 
          color: '#667eea', 
          padding: '0.75rem 1.5rem', 
          borderRadius: '6px', 
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          View Offers
        </Link>
      </div>
    </div>
  );
} 