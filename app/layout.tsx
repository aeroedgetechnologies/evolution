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
        <header className="mfs-header">
          <div className="mfs-header__left">
            <Link href="/">
              <img src="https://picsum.photos/50/50" alt="Energy World logo" className="mfs-logo" />
            </Link>
            <span className="mfs-tagline">Empowering a Sustainable Future</span>
          </div>
          <div className="mfs-header__center">
            <div className="mfs-header__contact">
              <span style={{fontWeight:600}}><span style={{fontSize:'1.2em',marginRight:4}}>📱</span>Phone</span>
              <span style={{color:'#20539b',fontWeight:500,marginLeft:8}}>+971 589120710</span>
            </div>
            <div className="mfs-header__contact">
              <span style={{fontWeight:600}}><span style={{fontSize:'1.2em',marginRight:4}}>✉️</span>Email</span>
              <span style={{color:'#20539b',fontWeight:500,marginLeft:8}}>energyworld.uae@gmail.com</span>
            </div>
          </div>
          <div className="mfs-header__right">
            <form className="mfs-search-form">
              <input type="text" placeholder="Search..." className="mfs-search-input" />
              <button type="submit" className="mfs-search-btn">Search</button>
            </form>
            <button className="mfs-quote-btn">Request a Quote</button>
            <span className="mfs-cart">🛒</span>
            <a href="#" className="mfs-social mfs-linkedin" aria-label="LinkedIn">f<span style={{fontSize:'0.9em'}}>in</span></a>
            <span className="mfs-supplier-check">Supplier check</span>
          </div>
        </header>
        {/* Navigation */}
        <Navbar />
        {/* Remove boxed parent, render children directly */}
        {children}
        {/* Footer */}
        <footer className="mfs-footer">
          <div className="mfs-footer__top">
            <div className="mfs-footer__col">
              <img src="https://picsum.photos/50/50" alt="Energy World logo" className="mfs-footer-logo" />
              <div>Empowering a Sustainable Future</div>
            </div>
            <div className="mfs-footer__col">
              <div><b>Contact</b></div>
              <div>energyworld.uae@gmail.com</div>
              <div>+971 589120710</div>
            </div>
            <div className="mfs-footer__col">
              <div><b>Address</b></div>
              <div>Netherlands HQ</div>
              <div>India Office</div>
              <div>Mexico Office</div>
            </div>
            <div className="mfs-footer__col">
              <div><b>Quick Links</b></div>
              <div><Link href="/about">About</Link></div>
              <div><Link href="/services">Services</Link></div>
              <div><Link href="/contact">Contact</Link></div>
            </div>
          </div>
          <div className="mfs-footer__bottom">
            <div>© 2025 Energy World. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
