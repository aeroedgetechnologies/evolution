"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link';

const sliderImages = [
  { src: "/images/LM6000.jpg", alt: "LM6000", services: ["Gas Turbine Maintenance", "Parts & Tooling Supply", "Service Agreements", "Training & Consultancy", "Global 24/7 Support", "EPC Contracting"] },
  { src: "/images/GE_LM2500.jpg", alt: "GE LM2500", services: ["Aeroderivative Solutions", "Marine Propulsion", "Power Generation", "Oil & Gas Installations", "Field Services", "Workshop Services"] },
  { src: "/images/6BGE.png", alt: "6BGE", services: ["Heavy Duty Turbines", "Industrial Applications", "Energy Efficiency", "Maintenance Contracts", "Technical Support", "Spare Parts"] },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero/Banner Slideshow */}
      <main>
        <section
          aria-label="Hero Banner with Energy Solutions"
          role="banner"
        style={{
          width: '100vw',
          minHeight: 'auto',
          maxWidth: '100vw',
          margin: 0,
          padding: 0,
          position: 'relative',
          left: '50%',
          right: 0,
          background: '#20539b',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          overflow: 'hidden',
          transform: 'translateX(-50%)',
        }}
      >
        {/* Left column - Main text content */}
        <div
          style={{
            flex: 1,
            minWidth: 280,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            color: '#fff',
            zIndex: 2,
            position: 'relative',
            padding: '3.5rem 2.5rem 2.5rem 3.5rem',
            maxWidth: 500,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
              fontWeight: 800,
              marginBottom: '1.2rem',
              lineHeight: 1.15,
              color: '#fff',
              textShadow: '0 2px 8px #0007',
            }}
          >
            Energy World is specialized in Energy Solutions, Services, Parts and Tooling
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.18rem)',
              margin: '1.2rem 0',
              fontWeight: 400,
              color: '#fff',
              textShadow: '0 2px 8px #0007',
            }}
          >
            With <b>decades of experience</b>, Energy World is your <b>reliable partner</b> for a sustainable future.
          </p>
          <div
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              marginTop: '2.5rem',
              fontWeight: 500,
              color: '#fff',
              textShadow: '0 2px 8px #0007',
            }}
          >
            Empowering a Sustainable Future!
          </div>
        </div>

                {/* Center column - Image slideshow */}
        <div
          style={{
            flex: 2,
            minWidth: 400,
            position: 'relative',
            height: 'auto',
            minHeight: '400px',
            overflow: 'hidden',
            maxWidth: 900,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
          }}
        >
          {sliderImages.map((img, idx) => (
            <div
              key={img.src}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: idx === current ? 1 : 0,
                transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
                zIndex: idx === current ? 2 : 1,
              }}
              aria-hidden={idx !== current}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1600}
                height={900}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  objectPosition: 'center center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-2xl font-semibold">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right column - List content */}
        <div
          style={{
            flex: 1,
            minWidth: 280,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            color: '#fff',
            zIndex: 2,
            position: 'relative',
            padding: '3.5rem 3.5rem 2.5rem 2.5rem',
            maxWidth: 350,
            marginLeft: 'auto',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#fff',
              textShadow: '0 2px 8px #0007',
            }}
          >
            Our Core Services
          </h3>
          <ul
            style={{
              listStyle: 'none',
              color: '#fff',
              margin: 0,
              padding: 0,
              fontSize: 'clamp(0.9rem, 2.5vw, 1.08rem)',
            }}
          >
            {sliderImages[current].services.map((service, index) => (
              <li 
                key={index}
                style={{ 
                  textShadow: '0 2px 8px #0007', 
                  background: 'none', 
                  border: 'none', 
                  padding: '0.5rem 0', 
                  color: '#fff',
                }}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          section[role="banner"] {
            flex-direction: column;
            min-height: auto;
            height: auto;
          }
          
          section[role="banner"] > div:nth-child(2) {
            height: 45vh;
            min-height: 320px;
            max-height: 450px;
            order: -1;
            margin-bottom: 0;
          }
          
          section[role="banner"] > div:first-child,
          section[role="banner"] > div:last-child {
            padding: 2rem 1.5rem;
            max-width: none;
            min-width: auto;
            flex: none;
          }
        }
        
        @media (max-width: 480px) {
          section[role="banner"] > div:nth-child(2) {
            height: 40vh;
            min-height: 280px;
            max-height: 400px;
          }
          
          section[role="banner"] > div:first-child,
          section[role="banner"] > div:last-child {
            padding: 1.5rem 1rem;
          }
        }
        
        @media (min-width: 1200px) {
          section[role="banner"] > div:nth-child(2) {
            height: 55vh;
            min-height: 450px;
            max-height: 550px;
          }
        }
        
        @media (min-width: 1600px) {
          section[role="banner"] > div:nth-child(2) {
            height: 50vh;
            min-height: 500px;
            max-height: 600px;
          }
        }
      `}</style>

      {/* Two-column layout below hero */}
      <section 
        aria-label="About Energy World"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', maxWidth: 1300, margin: '2.5rem auto', alignItems: 'flex-start', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '2.5rem 2rem' }}
      >
        {/* Left column */}
        <article style={{ flex: 2, minWidth: 320 }}>
          <h2 style={{ color: '#20539b', fontWeight: 800, marginBottom: '1.2rem' }}>We take care of power!</h2>
          <p>Energy World, founded in the UAE in 2014 is specialized in gas turbine maintenance, services, parts, site management, consultancy and training.</p>
          <p>We have years of experience as a worldwide, independently operating organization in the gas turbine market. Including oil & gas installations, power generation plants and commercial marine propulsion. To ensure immediate response to your needs, our experienced and skilled engineers, specialized in Aeroderivative and Heavy Duty gas turbines, are 24/7 available.
            {/* <a href="#" style={{ color: '#20539b', textDecoration: 'underline' }}>here</a>. */}
            </p>
          <p>It is our mission to improve your profitability, reduce the downtime of your gas turbine and decrease your total cost of ownership. From our head office and workshop in the UAE and our subsidiaries in Finland, India and USA, Energy World offers you:</p>
          <ul style={{ listStyle: 'square', color: '#20539b', marginLeft: 20, fontSize: '1.08rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem 2.5rem', padding: 0 }}>
            {/* <li style={{ minWidth: 220 }}><Link href="/services/maintenance">Field and Workshop services</Link></li> */}
            <li style={{ minWidth: 220 }}><Link href="/parts-tooling">Parts & Tooling</Link></li>
            {/* <li style={{ minWidth: 220 }}><Link href="/services/engine-lease">Engine lease pool</Link></li> */}
            <li style={{ minWidth: 220 }}><Link href="/services/agreements">Service Agreements (LTSA, MYA, FWA)</Link></li>
            <li style={{ minWidth: 220 }}><Link href="/services/operation">Operation & Maintenance</Link></li>
            {/* <li style={{ minWidth: 220 }}><Link href="/services/epc">EPC Contractor</Link></li> */}
            <li style={{ minWidth: 220 }}><Link href="/services/training">Installation</Link></li>
          </ul>
        </article>
        {/* Right column */}
        <aside style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* News box */}
          <Link href="/news" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: '#20539b', borderRadius: 8, color: '#fff', marginBottom: '1.2rem', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ padding: '0.8rem 1.2rem', fontWeight: 700, fontSize: '1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Upcoming events</span>
                <span style={{ color: '#fff', fontWeight: 400, fontSize: '1.2em', marginLeft: 8 }}>&#8250;</span>
              </div>
              <img src="/images/events.jpg" alt="Refurbishment LM5000 shipping containers" style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '1rem', color: '#20539b', background: '#fff' }}>
                <div style={{ color: '#20539b', fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none' }}>Refurbishment LM5000 shipping containers</div>
              </div>
            </div>
          </Link>
          {/* In the spotlight box */}
          <div style={{ background: '#20539b', borderRadius: 8, color: '#fff', overflow: 'hidden' }}>
            <div style={{ padding: '0.8rem 1.2rem', fontWeight: 700, fontSize: '1.15rem' }}>In the spotlight</div>
            <img src="/images/spotlight.jpg" alt="In the spotlight" style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
          </div>
        </aside>
      </section>
      </main>
    </div>
  );
}
