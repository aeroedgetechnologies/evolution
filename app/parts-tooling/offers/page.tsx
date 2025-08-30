import Image from 'next/image';
import Link from 'next/link';

export default function OffersPage() {
  return (
    <div className="parts-tooling-offers" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>
          Special Offers & Deals
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
          Limited-time offers on premium parts and tooling solutions for gas turbine maintenance
        </p>
      </div>

      {/* Featured Offers */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>Featured Offers</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {/* Hot Section Package Deal */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: '#e53e3e', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              zIndex: '1'
            }}>
              SAVE 25%
            </div>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/a5.jpg" 
                alt="Hot Section Package Deal" 
                width={400} 
                height={250} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Hot Section Package Deal</h3>
              <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Complete hot section component package including nozzles, blades, and shrouds for LM2500 turbines.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ textDecoration: 'line-through', color: '#a0aec0' }}>$45,000</span>
                <span style={{ color: '#e53e3e', fontWeight: '600', fontSize: '1.2rem' }}>$33,750</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#38a169', fontWeight: '600', fontSize: '0.9rem' }}>Limited Time Offer</span>
                <button style={{ 
                  background: '#e53e3e', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontSize: '0.9rem',
                  // cursor: 'pointer'
                      cursor: 'not-allowed', // indicates it's not clickable
                }}>
                  Get RFQs
                </button>
              </div>
            </div>
          </div>

          {/* Tooling Bundle */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: '#38a169', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              zIndex: '1',
              cursor: 'not-allowed',
            }}>
              Get RFQs
            </div>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/a6.jpg" 
                alt="Complete Tooling Bundle" 
                width={400} 
                height={250} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Complete Tooling Bundle</h3>
              <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Full maintenance tooling kit with borescope inspection equipment and specialty hand tools.
              </p>
              {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ textDecoration: 'line-through', color: '#a0aec0' }}>$18,500</span>
                <span style={{ color: '#38a169', fontWeight: '600', fontSize: '1.2rem' }}>$14,800</span>
              </div> */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#38a169', fontWeight: '600', fontSize: '0.9rem' }}>Free Shipping</span>
                <button style={{ 
                  background: '#38a169', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontSize: '0.9rem',
                  // cursor: 'pointer'
              cursor: 'not-allowed',
                }}>
                  Get RFQs
                </button>
              </div>
            </div>
          </div>

          {/* Rental Special */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: '#d69e2e', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              zIndex: '1'
            }}>
              RENTAL SPECIAL
            </div>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/a21.jpg" 
                alt="Equipment Rental Special" 
                width={400} 
                height={250} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Equipment Rental Special</h3>
              <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Special pricing on weekly and monthly equipment rentals for major maintenance projects.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ textDecoration: 'line-through', color: '#a0aec0' }}>From $2,500/week</span>
                <span style={{ color: '#d69e2e', fontWeight: '600', fontSize: '1.2rem' }}>From $1,875/week</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#d69e2e', fontWeight: '600', fontSize: '0.9rem' }}>Flexible Terms</span>
                <button style={{ 
                  background: '#d69e2e', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontSize: '0.9rem',
                  // cursor: 'pointer',
              cursor: 'not-allowed',
                }}>
                  Get RFQs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Promotions */}
      <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>Seasonal Promotions</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/b5.jpg" 
              alt="Spring Maintenance Sale" 
              width={120} 
              height={120} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Spring Maintenance Sale</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Up to 30% off on all maintenance tooling and inspection equipment
            </p>
            <span style={{ color: '#e53e3e', fontWeight: '600' }}>Valid until May 31st</span>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/b6.jpg" 
              alt="Bulk Parts Discount" 
              width={120} 
              height={120} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Bulk Parts Discount</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Volume discounts available for orders over $50,000
            </p>
            <span style={{ color: '#38a169', fontWeight: '600' }}>Contact for Quote</span>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Image 
              src="/images/b7.jpg" 
              alt="New Customer Special" 
              width={120} 
              height={120} 
              style={{ borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>New Customer Special</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: '1rem' }}>
              15% off your first order over $10,000
            </p>
            <span style={{ color: '#d69e2e', fontWeight: '600' }}>First-time buyers only</span>
          </div>
        </div>
      </div>

      {/* How to Claim Offers */}
      <div style={{ background: '#edf2f7', padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '1.5rem', textAlign: 'center' }}>How to Claim These Offers</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#3182ce', 
              color: 'white', 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Select Your Offer</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Choose from our available special offers and deals
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#3182ce', 
              color: 'white', 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Contact Our Team</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Reach out to our sales team to discuss your requirements
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#3182ce', 
              color: 'white', 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Get Your Discount</h3>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Enjoy your special pricing and expedited delivery
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Don't Miss Out!</h2>
        <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
          These offers are available for a limited time only. Contact us today to secure your special pricing.
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
            Contact Sales
          </Link>
          <Link href="/parts-tooling/part-finder" style={{ 
            display: 'inline-block', 
            background: 'transparent', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid white'
          }}>
            Browse Parts
          </Link>
        </div>
      </div>
    </div>
  );
} 