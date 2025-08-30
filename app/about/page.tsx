export default function AboutPage() {
  return (
    <div className="about-energyworld-page" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 className="about-energyworld-title">About The Energy World</h1>
      <div className="about-energyworld-intro" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ flex: 2, minWidth: 260 }}>
          <p>
            The Energy World, founded in the UAE in 2014, is specialized in energy system maintenance, services, parts, site management, consultancy and training.
          </p>
          <p>
            We have years of experience as a worldwide, independently operating organization in the energy market. Including oil & gas installations, power generation plants and commercial marine propulsion. To ensure immediate response to your needs, our experienced and skilled engineers, specialized in Aeroderivative and Heavy Duty energy systems, are 24/7 available.
          </p>
        </div>
        <img src="/images/a9.jpg" alt="The Energy World Office" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
      </div>
      <div className="about-energyworld-section" style={{ marginBottom: '2rem' }}>
        <h2>Long Term Service Agreements</h2>
        <p>
          With a large team of experts, we offer Long Term Service Agreements providing you the opportunity for regular inspections, maintenance and repairs on energy systems.
        </p>
        <a href="#" className="about-energyworld-movie-link">Watch our corporate movie here</a>
      </div>
      <div className="about-energyworld-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <img src="/images/a7.jpg" alt="Cost Reduction" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
        <div style={{ flex: 2, minWidth: 260 }}>
          <h2>Cost Reduction</h2>
          <p>
            Our competitive labour rates, quality, efficient working methods, fast troubleshooting and parts sourcing ability, The Energy World offers you a significant reduction of costs in comparison to OEM rates.
          </p>
        </div>
      </div>
      <div className="about-energyworld-section" style={{ marginBottom: '2rem' }}>
        <h2>Capabilities</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 2, minWidth: 260 }}>
            <p>
              From our head office and workshop in the UAE and our subsidiaries in India and Finland, The Energy World offers you field and powerplant service:
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
          <img src="/images/a6.jpg" alt="Capabilities" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
        </div>
      </div>
      <div className="about-energyworld-section" style={{ marginBottom: '2rem' }}>
        <h2>Business Philosophy</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <img src="/images/a5.jpg" alt="Business Philosophy" style={{ flex: 1, minWidth: 220, borderRadius: 8, maxHeight: 220, objectFit: 'cover' }} />
          <div style={{ flex: 2, minWidth: 260 }}>
            <p>
              With our broad knowledge we add value to the worldwide energy market. We work collaboratively with each other and our customers to create smart solutions. Our team of professionals deliver swiftly excellent results with great enthusiasm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 