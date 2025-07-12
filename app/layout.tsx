import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import Navbar from './Navbar';

export const metadata: Metadata = {
  title: "Energy World",
  description: "Energy World - Energy Solutions, Services, Parts, and Tooling",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://picsum.photos/id/1040/64/64" type="image/png" />
      </head>
      <body>
        {/* Header */}
        <header className="energyworld-header">
          <div className="energyworld-header__left">
            <Link href="/">
              <img src="https://picsum.photos/50/50" alt="Energy World logo" className="energyworld-logo" />
            </Link>
            <span className="energyworld-tagline">Empowering a Sustainable Future</span>
          </div>
          <div className="energyworld-header__center">
            <div className="energyworld-header__contact">
              <span style={{fontWeight:600}}><span style={{fontSize:'1.2em',marginRight:4}}>📱</span>Phone</span>
              <span style={{color:'#20539b',fontWeight:500,marginLeft:8}}>+971 589120710</span>
            </div>
            <div className="energyworld-header__contact">
              <span style={{fontWeight:600}}><span style={{fontSize:'1.2em',marginRight:4}}>✉️</span>Email</span>
              <span style={{color:'#20539b',fontWeight:500,marginLeft:8}}>energyworld.uae@gmail.com</span>
            </div>
          </div>
          <div className="energyworld-header__right">
            <form className="energyworld-search-form">
              <input type="text" placeholder="Search..." className="energyworld-search-input" />
              <button type="submit" className="energyworld-search-btn">Search</button>
            </form>
            <button className="energyworld-quote-btn">Request a Quote</button>
            <span className="energyworld-cart">🛒</span>
            <a href="#" className="energyworld-social energyworld-linkedin" aria-label="LinkedIn">f<span style={{fontSize:'0.9em'}}>in</span></a>
            <span className="energyworld-supplier-check">Supplier check</span>
          </div>
        </header>
        {/* Navigation */}
        <Navbar />
        {/* Remove boxed parent, render children directly */}
        {children}
        {/* Footer */}
        <footer className="energyworld-footer">
          <div className="energyworld-footer__top">
            <div className="energyworld-footer__col">
              <img src="https://picsum.photos/50/50" alt="Energy World logo" className="energyworld-footer-logo" />
              <div>Empowering a Sustainable Future</div>
            </div>
            <div className="energyworld-footer__col">
              <div><b>Contact</b></div>
              <div>energyworld.uae@gmail.com</div>
              <div>+971 589120710</div>
            </div>
            <div className="energyworld-footer__col">
              <div><b>Address</b></div>
              <div>Netherlands HQ</div>
              <div>India Office</div>
              <div>Mexico Office</div>
            </div>
            <div className="energyworld-footer__col">
              <div><b>Quick Links</b></div>
              <div style={{ marginBottom: '0.5em' }}>
                <Link href="/about" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500 }}>About</Link>
              </div>
              <div style={{ marginBottom: '0.5em' }}>
                <Link href="/services" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500 }}>Services</Link>
              </div>
              <div>
                <Link href="/contact" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500 }}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="energyworld-footer__bottom">
            <div>© 2025 Energy World. All rights reserved.</div>
            <div style={{
              fontSize: '1.08em',
              color: '#fff',
              marginTop: 4,
              fontWeight: 600,
              letterSpacing: '0.01em'
            }}>
              Developed by{' '}
              <a
                href="https://govindayadavfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#5fa8d3',
                  fontWeight: 600,
                  fontSize: '1.08em',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  border: 'none',
                  background: 'none',
                  padding: 0,
                }}
              >
                Govinda Yadav
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
