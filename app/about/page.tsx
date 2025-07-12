export default function AboutPage() {
  return (
    <div className="about-mfs-page" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 className="about-mfs-title">About MFS</h1>
      <div className="about-mfs-intro" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ flex: 2, minWidth: 260 }}>
          <p>
            MFS, founded in the Netherlands in 2001, is specialized in gas turbine maintenance, services, parts, site management, consultancy and training.
          </p>
          <p>
            We have 20+ years’ experience as a worldwide, independently operating organization in the gas turbine market. Including oil & gas installations, power generation plants and commercial marine propulsion. To ensure immediate response to your needs, our experienced and skilled engineers, specialized in Aeroderivative and Heavy Duty gas turbines, are 24/7 available.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" alt="MFS Office" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
      </div>
      <div className="about-mfs-section" style={{ marginBottom: '2rem' }}>
        <h2>Long Term Service Agreements</h2>
        <p>
          With a large team of experts, we offer Long Term Service Agreements providing you the opportunity for regular inspections, maintenance and repairs on gas turbines.
        </p>
        <a href="#" className="about-mfs-movie-link">Watch our corporate movie here</a>
      </div>
      <div className="about-mfs-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80" alt="Cost Reduction" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
        <div style={{ flex: 2, minWidth: 260 }}>
          <h2>Cost Reduction</h2>
          <p>
            Our competitive labour rates, quality, efficient working methods, fast troubleshooting and parts sourcing ability, MFS offers you a significant reduction of costs in comparison to OEM rates.
          </p>
        </div>
      </div>
      <div className="about-mfs-section" style={{ marginBottom: '2rem' }}>
        <h2>Capabilities</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 2, minWidth: 260 }}>
            <p>
              From our head office and workshop in the Netherlands and our subsidiaries in Pakistan and Mexico, MFS offers you field and powerplant service:
            </p>
            <ul>
              <li>Field and Workshop services</li>
              <li>Parts & Tooling</li>
              <li>Engine lease pool</li>
              <li>Service Agreements (LTSA, MYA, FWA)</li>
              <li>Operation & Maintenance</li>
              <li>EPC Contractor</li>
              <li>Training</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80" alt="Capabilities" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
        </div>
      </div>
      <div className="about-mfs-section" style={{ marginBottom: '2rem' }}>
        <h2>Business Philosophy</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80" alt="Business Philosophy" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
          <div style={{ flex: 2, minWidth: 260 }}>
            <p>
              With our broad knowledge we add value to the worldwide gas turbine market. We work collaboratively with each other and our customers to create smart solutions. Our team of professionals deliver swiftly excellent results with great enthusiasm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 