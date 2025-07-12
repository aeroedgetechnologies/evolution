"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Track open submenus: key is menu path, value is open/closed
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: string | null }>({});
  const [isMobile, setIsMobile] = useState(false);
  // Track hovered dropdowns for each level (desktop)
  const [hoveredDropdowns, setHoveredDropdowns] = useState<{ [level: string]: string | null }>({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper for toggling submenus (accordion logic, only one open per level)
  const toggleSubmenu = (level: string, key: string) => {
    setOpenSubmenus((prev) => {
      // If already open, close it
      if (prev[level] === key) {
        return { ...prev, [level]: null };
      }
      // Otherwise, close others at this level and open this one
      return { ...prev, [level]: key };
    });
  };

  // Helper to check if a submenu is open (mobile)
  const isOpen = (level: string, key: string) => isMobile && openSubmenus[level] === key;

  // Helper to check if a dropdown should have 'open' class on desktop (hovered)
  const isDesktopOpen = (level: string, key: string) => !isMobile && hoveredDropdowns[level] === key;

  // Handlers for desktop hover
  const handleMouseEnter = (level: string, key: string) => {
    if (!isMobile) setHoveredDropdowns((prev) => ({ ...prev, [level]: key }));
  };
  const handleMouseLeave = (level: string) => {
    if (!isMobile) setHoveredDropdowns((prev) => ({ ...prev, [level]: null }));
  };

  return (
    <nav className="energyworld-nav">
      {/* Hamburger only for mobile */}
      <div className="energyworld-nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: isMobile ? 'flex' : 'none' }}>
        <span style={{fontSize:'2rem',color:'#fff',marginRight:8}}>&#9776;</span>
      </div>
      <ul className={`energyworld-nav__list${isMobile && menuOpen ? ' open' : ''}`}>
        <li className="active"><Link href="/">HOME</Link></li>
        <li className="has-dropdown"
          onMouseEnter={() => handleMouseEnter('main', 'about')}
          onMouseLeave={() => handleMouseLeave('main')}
        >
          <span {...(isMobile ? { onClick: () => toggleSubmenu('main', 'about') } : {})}>ABOUT <span className="arrow">▼</span></span>
          <ul className={`dropdown${isMobile && isOpen('main', 'about') ? ' open' : ''}${isDesktopOpen('main', 'about') ? ' open' : ''}`}>
            <li><Link href="/about">About Energy World</Link></li>
            <li><Link href="/about/mission">Our Mission</Link></li>
            <li><Link href="/about/usp">Unique selling points</Link></li>
            <li><Link href="/about/certification">Certification</Link></li>
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/career">Career</Link></li>
          </ul>
        </li>
        <li className="has-dropdown"
          onMouseEnter={() => handleMouseEnter('main', 'services')}
          onMouseLeave={() => handleMouseLeave('main')}
        >
          <span {...(isMobile ? { onClick: () => toggleSubmenu('main', 'services') } : {})}>SERVICES <span className="arrow">▼</span></span>
          <ul className={`dropdown wide${isMobile && isOpen('main', 'services') ? ' open' : ''}${isDesktopOpen('main', 'services') ? ' open' : ''}`}>
            <li><Link href="/services/gas-turbine">Gas Turbine Services</Link></li>
            <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'aero')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'aero') } : {})}>Aeroderivative Services <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'aero') ? ' open' : ''}${isDesktopOpen('services', 'aero') ? ' open' : ''}`}>
                <li><Link href="/services/aeroderivative/maintenance">Maintenance</Link></li>
                <li><Link href="/services/aeroderivative/borescope">Borescope inspection</Link></li>
                <li><Link href="/services/aeroderivative/hot-section">Hot section</Link></li>
                <li><Link href="/services/aeroderivative/overhaul">Major overhaul</Link></li>
              </ul>
            </li>
            <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'heavy')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'heavy') } : {})}>Heavy Duty Services <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'heavy') ? ' open' : ''}${isDesktopOpen('services', 'heavy') ? ' open' : ''}`}>
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
            <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'references')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'references') } : {})}>References <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'references') ? ' open' : ''}${isDesktopOpen('services', 'references') ? ' open' : ''}`}>
                <li><Link href="/references/projects">Projects</Link></li>
                <li><Link href="/references/usp">Unique selling points</Link></li>
              </ul>
            </li>
            <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'news')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'news') } : {})}>News & Downloads <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'news') ? ' open' : ''}${isDesktopOpen('services', 'news') ? ' open' : ''}`}>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/news/brochures">Brochures</Link></li>
                <li><Link href="/news/publications">Publications</Link></li>
                <li><Link href="/news/press">Press</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-dropdown"
          onMouseEnter={() => handleMouseEnter('main', 'parts')}
          onMouseLeave={() => handleMouseLeave('main')}
        >
          <span {...(isMobile ? { onClick: () => toggleSubmenu('main', 'parts') } : {})}>PARTS & TOOLING <span className="arrow">▼</span></span>
          <ul className={`dropdown${isMobile && isOpen('main', 'parts') ? ' open' : ''}${isDesktopOpen('main', 'parts') ? ' open' : ''}`}>
            <li><Link href="/parts-tooling">Parts & Tooling</Link></li>
            <li><Link href="/parts-tooling/part-finder">Part Finder</Link></li>
            <li><Link href="/parts-tooling/tooling">Tooling</Link></li>
            <li><Link href="/parts-tooling/offers">Special Offers</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
} 