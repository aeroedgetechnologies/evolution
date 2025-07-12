import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MFS Replica",
  description: "MFSupport style replica website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Header */}
        <header className="mfs-header">
          <div className="mfs-header__left">
            <Link href="/">
              <img src="/file.svg" alt="mfs logo" className="mfs-logo" />
            </Link>
            <span className="mfs-tagline">taking care of power</span>
          </div>
          <div className="mfs-header__center">
            <div className="mfs-header__contact">
              <span className="mfs-header__icon">📱</span>
              <span>Phone<br /><b>+31 (0) 26 479 999 9</b></span>
            </div>
            <div className="mfs-header__contact">
              <span className="mfs-header__icon">✉️</span>
              <span>Email<br /><b>info@mfsupport.com</b></span>
            </div>
          </div>
          <div className="mfs-header__right">
            <form className="mfs-search-form">
              <input type="text" placeholder="Search..." className="mfs-search-input" />
              <button type="submit" className="mfs-search-btn">Search</button>
            </form>
            <button className="mfs-quote-btn">Request a Quote</button>
            <span className="mfs-cart">🛒</span>
            <a href="#" className="mfs-social mfs-linkedin" aria-label="LinkedIn">in</a>
            <span className="mfs-supplier-check">Supplier check</span>
          </div>
        </header>
        {/* Navigation */}
        <nav className="mfs-nav">
          <ul className="mfs-nav__list">
            <li><Link href="/">HOME</Link></li>
            <li className="has-dropdown">
              <span>ABOUT ▾</span>
              <ul className="dropdown">
                <li><Link href="/about">About MFS</Link></li>
                <li><Link href="/about/mission">Our Mission</Link></li>
                <li><Link href="/about/usp">Unique selling points</Link></li>
                <li><Link href="/about/certification">Certification</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <span>SERVICES ▾</span>
              <ul className="dropdown wide">
                <li><Link href="/services/gas-turbine">Gas Turbine Services</Link></li>
                <li className="has-dropdown">
                  <span>Aeroderivative Services ▸</span>
                  <ul className="dropdown right">
                    <li><Link href="/services/aeroderivative/maintenance">Maintenance</Link></li>
                    <li><Link href="/services/aeroderivative/borescope">Borescope inspection</Link></li>
                    <li><Link href="/services/aeroderivative/hot-section">Hot section</Link></li>
                    <li><Link href="/services/aeroderivative/overhaul">Major overhaul</Link></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <span>Heavy Duty Services ▸</span>
                  <ul className="dropdown right">
                    <li><Link href="/services/heavy-duty/maintenance">Maintenance</Link></li>
                    <li><Link href="/services/heavy-duty/borescope">Borescope inspection</Link></li>
                    <li><Link href="/services/heavy-duty/hot-section">Hot section</Link></li>
                    <li><Link href="/services/heavy-duty/overhaul">Major overhaul</Link></li>
                  </ul>
                </li>
                <li><Link href="/services/engine-lease">Engine Lease Pool</Link></li>
                <li><Link href="/services/agreements">Service Agreements</Link></li>
                <li><Link href="/services/operation">Operation & Maintenance</Link></li>
                <li><Link href="/services/epc">EPC Contractor</Link></li>
                <li><Link href="/services/training">Training</Link></li>
                <li><Link href="/services/terms">Terms & Conditions</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <span>PARTS & TOOLING ▾</span>
              <ul className="dropdown">
                <li><Link href="/parts-tooling">Parts & Tooling</Link></li>
                <li><Link href="/parts-tooling/part-finder">MFS Part Finder</Link></li>
                <li><Link href="/parts-tooling/tooling">Tooling</Link></li>
                <li><Link href="/parts-tooling/offers">Special Offers</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <span>NEWS & DOWNLOADS ▾</span>
              <ul className="dropdown">
                <li><Link href="/news">News</Link></li>
                <li><Link href="/news/brochures">Brochures</Link></li>
                <li><Link href="/news/publications">Publications</Link></li>
                <li><Link href="/news/press">Press</Link></li>
              </ul>
            </li>
            <li><Link href="/partners">PARTNERS</Link></li>
            <li className="has-dropdown">
              <span>REFERENCES ▾</span>
              <ul className="dropdown">
                <li><Link href="/references/projects">Projects</Link></li>
                <li><Link href="/references/usp">Unique selling points</Link></li>
              </ul>
            </li>
            <li><Link href="/career">CAREER</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        {/* Footer */}
        <footer className="mfs-footer">
          <div className="mfs-footer__top">
            <div className="mfs-footer__col">
              <img src="/file.svg" alt="mfs logo" className="mfs-footer-logo" />
              <div>taking care of power</div>
            </div>
            <div className="mfs-footer__col">
              <div><b>Contact</b></div>
              <div>info@mfsupport.com</div>
              <div>+31 (0) 26 479 999 9</div>
            </div>
            <div className="mfs-footer__col">
              <div><b>Address</b></div>
              <div>Netherlands HQ</div>
              <div>Pakistan Office</div>
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
            <div>© 2025 MFS Replica. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
