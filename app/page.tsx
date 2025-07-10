import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div>
      <section style={{ padding: '3rem 1rem', background: '#e6f0fa', textAlign: 'center' }}>
        <h1>MFS is specialized in Gas Turbine Services, solutions, parts and tooling</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
          With decades of experience, MFS is your reliable partner.<br />Your power is our care!
        </p>
      </section>
      <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h2>We take care of power!</h2>
        <p>
          MFS, founded in the Netherlands in 2001, is specialized in gas turbine maintenance, services, parts, site management, consultancy and training.
        </p>
        <p>
          We have 20+ years’ experience as a worldwide, independently operating organization in the gas turbine market. Including oil & gas installations, power generation plants and commercial marine propulsion.
        </p>
      </section>
      <section style={{ padding: '2rem 1rem', background: '#f5f5f5' }}>
        <h2>Featured Projects / Clients</h2>
        <div className="featured">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
        </div>
      </section>
      <section style={{ padding: '2rem 1rem' }}>
        <h2>Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Maintenance</li>
          <li>Modernization</li>
          <li>Relocation</li>
          <li>Spare Parts</li>
          <li>Tooling</li>
        </ul>
      </section>
      <section style={{ padding: '2rem 1rem', background: '#f5f5f5' }}>
        <h2>Latest News</h2>
        <div className="news-list">
          <div>News 1</div>
          <div>News 2</div>
        </div>
      </section>
    </div>
  );
}
