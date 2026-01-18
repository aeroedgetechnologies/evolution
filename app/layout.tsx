import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import Navbar from './Navbar';
import MobileMenuWrapper from './MobileMenuWrapper';

export const metadata: Metadata = {
  title: "Energy World - Energy Solutions, Services, Parts & Tooling | UAE",
  description: "Energy World is specialized in Energy Solutions, Services, Parts and Tooling. Leading provider of gas turbine maintenance, power generation, industrial applications, and sustainable energy solutions in UAE, India, and Finland. Empowering a Sustainable Future.",
  keywords: [
    "Energy World",
    "Energy Solutions",
    "Gas Turbine Maintenance",
    "Power Generation",
    "Industrial Energy",
    "Parts and Tooling",
    "UAE Energy Company",
    "Sustainable Energy",
    "GE LM6000",
    "GE LM2500",
    "6BGE Turbines",
    "Energy Services",
    "Industrial Applications",
    "Energy Efficiency",
    "Maintenance Contracts",
    "Technical Support",
    "Spare Parts Supply",
    "Energy World UAE",
    "Energy World India",
    "Solar Turbines Parts",
    "Solar Mars 100",
    "Solar Mars 90",
    "Solar Titan 130",
    "Solar Taurus 60",
    "Solar Taurus 70",
    "Solar Saturn 20",
    "GE Locomotive",
    "Kubota Valves",
    "Dresser Rand",
    "Howden Compressors",
    "Energy World Finland"
  ],
  authors: [{ name: "Energy World Ltd" }],
  creator: "Energy World Ltd",
  publisher: "Energy World Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://energyworld.ltd'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Energy World - Energy Solutions, Services, Parts & Tooling",
    description: "Leading provider of energy solutions, gas turbine maintenance, and industrial applications. Empowering a Sustainable Future with decades of experience.",
    url: 'https://energyworld.ltd',
    siteName: 'Energy World',
    images: [
      {
        url: '/images/Energy World.jpg',
        width: 1200,
        height: 630,
        alt: 'Energy World - Energy Solutions and Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Energy World - Energy Solutions, Services, Parts & Tooling",
    description: "Leading provider of energy solutions, gas turbine maintenance, and industrial applications. Empowering a Sustainable Future.",
    images: ['/images/Energy World.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google verification code
    yandex: 'your-yandex-verification-code', // Replace with actual Yandex verification code if needed
  },
  category: 'business',
  classification: 'Energy Solutions and Services',
  other: {
    'geo.region': 'AE',
    'geo.placename': 'Ajman, United Arab Emirates',
    'geo.position': '25.4053;55.5136',
    'ICBM': '25.4053, 55.5136',
    'DC.title': 'Energy World - Energy Solutions, Services, Parts & Tooling',
    'DC.creator': 'Energy World Ltd',
    'DC.subject': 'Energy Solutions, Gas Turbine Maintenance, Power Generation',
    'DC.description': 'Leading provider of energy solutions, gas turbine maintenance, and industrial applications',
    'DC.publisher': 'Energy World Ltd',
    'DC.contributor': 'Energy World Ltd',
    'DC.date': '2025-01-27',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://energyworld.ltd',
    'DC.language': 'en',
    'DC.coverage': 'UAE, India, Finland',
    'DC.rights': 'Copyright 2025 Energy World Ltd',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Energy World.jpg" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#20539b" />
        <meta name="msapplication-TileColor" content="#20539b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Energy World" />
        <link rel="apple-touch-icon" href="/images/Energy World.jpg" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Energy World Ltd",
              "url": "https://energyworld.ltd",
              "logo": "https://energyworld.ltd/images/Energy World.jpg",
              "description": "Energy World is specialized in Energy Solutions, Services, Parts and Tooling. Empowering a Sustainable Future.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office C1 1F SF 1087, Ajman, C1 Building No. 4442612247",
                "addressLocality": "Ajman",
                "addressRegion": "Ajman",
                "addressCountry": "AE",
                "postalCode": "00000"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 589120710",
                "contactType": "customer service",
                "email": ["info@energyworld.ltd", "office.uae@energyworld.ltd"],
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://wa.me/971589120710"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Energy Solutions and Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gas Turbine Maintenance",
                      "description": "Professional maintenance services for GE LM6000, LM2500, and 6BGE turbines"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Parts and Tooling Supply",
                      "description": "Comprehensive supply of spare parts and specialized tooling for energy equipment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Energy Solutions",
                      "description": "Complete energy solutions for industrial and commercial applications"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        {/* Header */}
        <header className="energyworld-header">
          <div className="energyworld-header__left">
            <Link href="/">
              <img src="/images/Energy_World-removebg-preview.png" alt="Energy World logo" className="energyworld-logo" />
            </Link>
            <span className="energyworld-tagline">Empowering a Sustainable Future</span>
          </div>
          <div className="energyworld-header__right">
            <div className="energyworld-header__contact">
              <span style={{fontWeight:600}}><span style={{fontSize:'1.2em',marginRight:4}}></span>Phone <span>|</span></span>
              <span style={{color:'#20539b',fontWeight:500,marginLeft:8}}>+971 589120710</span>
            </div>
            <div className="energyworld-header__contact">
              <span style={{fontWeight:600}}><span style={{fontSize:'1.2em',marginRight:4}}></span>Email <span>|</span></span>
              <span style={{color:'#20539b',fontWeight:500,marginLeft:8}}>info@energyworld.ltd</span>
            </div>
            {/* <form className="energyworld-search-form">
              <input type="text" placeholder="Search..." className="energyworld-search-input" />
              <button type="submit" className="energyworld-search-btn">Search</button>
            </form> */}
            <Link href="/contact">
              <button className="energyworld-quote-btn">Request a Quote</button>
            </Link>
            {/* <span className="energyworld-cart">🛒</span> */}
            {/* <a href="#" className="energyworld-social energyworld-linkedin" aria-label="LinkedIn">f<span style={{fontSize:'0.9em'}}>in</span></a> */}
            {/* <span className="energyworld-supplier-check">Supplier check</span> */}
          </div>
        </header>
        {/* Mobile Menu (shows only on mobile) */}
        <div className="mobile-menu-wrapper">
          <MobileMenuWrapper />
        </div>
        {/* Desktop Navbar (hidden on mobile) */}
        <div className="desktop-navbar-wrapper">
          <Navbar />
        </div>
        {/* Remove boxed parent, render children directly */}
        {children}
        {/* Footer */}
        <footer className="energyworld-footer">
          <div className="energyworld-footer__top">
            <div className="energyworld-footer__col">
              <img src="/images/Energy World.jpg" alt="Energy World logo" className="energyworld-footer-logo" />
              <div>Empowering a Sustainable Future</div>
            </div>
            <div className="energyworld-footer__col">
              <div><b>Contact</b></div>
              <div style={{ textAlign: 'left' }}><b>Purchase</b> : info@energyworld.ltd</div>
              <div>+971 589120710</div>
              <div style={{ textAlign: 'left' }}><b>Sales</b> : office.uae@energyworld.ltd</div>
            </div>
            <div className="energyworld-footer__col">
              <div><b>Address</b></div>
              <div>UAE HQ</div>
              <div>India Office</div>
              <div>Finland Office</div>
            </div>
            <div className="energyworld-footer__col">
              <div><b>Office Address</b></div>
              <div>Office C1 1F SF 1087</div>
              <div>Ajman, C1 Building No. 4442612247</div>
              <div>United Arab Emirates</div>
            </div>
          </div>
          {/* <div className="energyworld-footer__bottom">
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
          </div> */}
        </footer>

        {/* Additional Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Energy World Ltd",
              "image": "https://energyworld.ltd/images/Energy World.jpg",
              "description": "Energy World is specialized in Energy Solutions, Services, Parts and Tooling. Leading provider of gas turbine maintenance, power generation, and industrial applications.",
              "url": "https://energyworld.ltd",
              "telephone": "+971 589120710",
              "email": "info@energyworld.ltd",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office C1 1F SF 1087, Ajman, C1 Building No. 4442612247",
                "addressLocality": "Ajman",
                "addressRegion": "Ajman",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.4053,
                "longitude": 55.5136
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "currenciesAccepted": "AED, USD, EUR",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": ["UAE", "India", "Finland", "Middle East", "Europe", "Asia"],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 25.4053,
                  "longitude": 55.5136
                },
                "geoRadius": "5000"
              }
            })
          }}
        />

        {/* WhatsApp Floating Button */}
        <div
          className="whatsapp-button"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            animation: 'pulse 2s infinite',
          }}
        >
          <a
            href="https://wa.me/971589120710"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70px',
              height: '70px',
              backgroundColor: '#25D366',
              borderRadius: '50%',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="white"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
