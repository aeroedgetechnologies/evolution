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
    if (!isMobile) {
      setHoveredDropdowns((prev) => {
        // Remove the hovered state for this level and all child levels
        const newState = { ...prev };
        newState[level] = null;
        // Optionally clear all sub-levels
        if (level === 'main') {
          newState['services'] = null;
        }
        if (level === 'services') {
          newState['aero'] = null;
          newState['heavy'] = null;
          newState['references'] = null;
          newState['news'] = null;
        }
        return newState;
      });
    }
  };

  // Add this helper inside the Navbar component
  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
      setOpenSubmenus({});
    }
  };

  return (
    <nav className="energyworld-nav">
      {/* Hamburger only for mobile */}
      <div className="energyworld-nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: isMobile ? 'flex' : 'none' }}>
        <span style={{fontSize:'2rem',color:'#fff',marginRight:8}}>&#9776;</span>
      </div>
      <ul className={`energyworld-nav__list${isMobile && menuOpen ? ' open' : ''}`}>
        <li className="active"><Link href="/" onClick={handleLinkClick}>HOME</Link></li>
        <li className="has-dropdown"
          onMouseEnter={() => handleMouseEnter('main', 'about')}
          onMouseLeave={() => handleMouseLeave('main')}
        >
          <span {...(isMobile ? { onClick: () => toggleSubmenu('main', 'about') } : {})}>ABOUT <span className="arrow">▼</span></span>
          <ul className={`dropdown${isMobile && isOpen('main', 'about') ? ' open' : ''}${isDesktopOpen('main', 'about') ? ' open' : ''}`}>
            <li><Link href="/about" onClick={handleLinkClick}>About Energy World</Link></li>
            <li><Link href="/about/mission" onClick={handleLinkClick}>Our Mission</Link></li>
            <li><Link href="/about/usp" onClick={handleLinkClick}>Unique selling points</Link></li>
            {/* <li><Link href="/about/certification" onClick={handleLinkClick}>Certification</Link></li> */}
            <li><Link href="/partners" onClick={handleLinkClick}>Partners</Link></li>
            {/* <li><Link href="/career" onClick={handleLinkClick}>Career</Link></li> */}
          </ul>
        </li>
                <li className="has-dropdown"
          onMouseEnter={() => handleMouseEnter('main', 'parts')}
          onMouseLeave={() => handleMouseLeave('main')}
        >
          <span {...(isMobile ? { onClick: () => toggleSubmenu('main', 'parts') } : {})}>PARTS & TOOLING <span className="arrow">▼</span></span>
          <ul className={`dropdown${isMobile && isOpen('main', 'parts') ? ' open' : ''}${isDesktopOpen('main', 'parts') ? ' open' : ''}`}>
            <li><Link href="/parts-tooling" onClick={handleLinkClick}>Parts & Tooling</Link></li>
            <li><Link href="/parts-tooling/part-finder" onClick={handleLinkClick}>Part Finder</Link></li>
            <li><Link href="/parts-tooling/tooling" onClick={handleLinkClick}>Tooling</Link></li>
            <li><Link href="/parts-tooling/offers" onClick={handleLinkClick}>Special Offers</Link></li>
          </ul>
        </li>
        <li className="has-dropdown"
          onMouseEnter={() => handleMouseEnter('main', 'services')}
          onMouseLeave={() => handleMouseLeave('main')}
        >
          <span {...(isMobile ? { onClick: () => toggleSubmenu('main', 'services') } : {})}>SERVICES <span className="arrow">▼</span></span>
          <ul className={`dropdown wide${isMobile && isOpen('main', 'services') ? ' open' : ''}${isDesktopOpen('main', 'services') ? ' open' : ''}`}>
            <li><Link href="/services/gas-turbine" onClick={handleLinkClick}>Gas Turbine Services</Link></li>
            {/* <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'aero')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'aero') } : {})}>Aeroderivative Services <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'aero') ? ' open' : ''}${isDesktopOpen('services', 'aero') ? ' open' : ''}`}>
                <li><Link href="/services/aeroderivative/maintenance" onClick={handleLinkClick}>Maintenance</Link></li>
                <li><Link href="/services/aeroderivative/borescope" onClick={handleLinkClick}>Borescope inspection</Link></li>
                <li><Link href="/services/aeroderivative/hot-section" onClick={handleLinkClick}>Hot section</Link></li>
                <li><Link href="/services/aeroderivative/overhaul" onClick={handleLinkClick}>Major overhaul</Link></li>
              </ul>
            </li>
            <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'heavy')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'heavy') } : {})}>Heavy Duty Services <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'heavy') ? ' open' : ''}${isDesktopOpen('services', 'heavy') ? ' open' : ''}`}>
                <li><Link href="/services/heavy-duty/maintenance" onClick={handleLinkClick}>Maintenance</Link></li>
                <li><Link href="/services/heavy-duty/borescope" onClick={handleLinkClick}>Borescope inspection</Link></li>
                <li><Link href="/services/heavy-duty/hot-section" onClick={handleLinkClick}>Hot section</Link></li>
                <li><Link href="/services/heavy-duty/overhaul" onClick={handleLinkClick}>Major overhaul</Link></li>
              </ul>
            </li> */}
            {/* <li><Link href="/services/engine-lease" onClick={handleLinkClick}>Engine Lease Pool</Link></li>
            <li><Link href="/services/agreements" onClick={handleLinkClick}>Service Agreements</Link></li> */}
            <li><Link href="/services/operation" onClick={handleLinkClick}>Operation & Maintenance</Link></li>
            {/* <li><Link href="/services/epc" onClick={handleLinkClick}>EPC Contractor</Link></li> */}
            <li><Link href="/services/training" onClick={handleLinkClick}>Training</Link></li>
            {/* <li><Link href="/services/terms" onClick={handleLinkClick}>Terms & Conditions</Link></li> */}
            {/* <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'references')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'references') } : {})}>References <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'references') ? ' open' : ''}${isDesktopOpen('services', 'references') ? ' open' : ''}`}>
                <li><Link href="/references/projects" onClick={handleLinkClick}>Projects</Link></li>
                <li><Link href="/references/usp" onClick={handleLinkClick}>Unique selling points</Link></li>
              </ul>
            </li> */}
            {/* <li className="has-dropdown"
              onMouseEnter={() => handleMouseEnter('services', 'news')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <span {...(isMobile ? { onClick: () => toggleSubmenu('services', 'news') } : {})}>News & Downloads <span className="arrow">▼</span></span>
              <ul className={`dropdown right${isMobile && isOpen('services', 'news') ? ' open' : ''}${isDesktopOpen('services', 'news') ? ' open' : ''}`}>
                <li><Link href="/news" onClick={handleLinkClick}>News</Link></li>
                <li><Link href="/news/brochures" onClick={handleLinkClick}>Brochures</Link></li>
                <li><Link href="/news/publications" onClick={handleLinkClick}>Publications</Link></li>
                <li><Link href="/news/press" onClick={handleLinkClick}>Press</Link></li>
              </ul>
            </li> */}
          </ul>
        </li>
        <li><Link href="/contact" onClick={handleLinkClick}>CONTACT</Link></li>
      </ul>
    </nav>
  );
} 