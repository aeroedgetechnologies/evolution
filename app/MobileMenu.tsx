"use client";

import React, { useState } from 'react';
import styles from '../styles/MobileMenu.module.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
};

type NavStack = { title: string; items: MenuItem[] };

const menuData: MenuItem[] = [
  { label: 'HOME', link: '/' },
  {
    label: 'ABOUT',
    children: [
      { label: 'About Energy World', link: '/about' },
      { label: 'Our Mission', link: '/about/mission' },
      { label: 'Our selling points', link: '/about/usp' },
      // { label: 'Certification', link: '/about/certification' },
      { label: 'Partners', link: '/partners' },
      { label: 'Career', link: '/career' },
    ],
  },
  {
    label: 'SERVICES',
    children: [
      { label: 'Gas Turbine Services', link: '/services/gas-turbine' },
      {
        label: 'Aeroderivative Services',
        children: [
          { label: 'Maintenance', link: '/services/aeroderivative/maintenance' },
          { label: 'Borescope inspection', link: '/services/aeroderivative/borescope' },
          { label: 'Hot section', link: '/services/aeroderivative/hot-section' },
          { label: 'Major overhaul', link: '/services/aeroderivative/overhaul' },
        ],
      },
      {
        label: 'Heavy Duty Services',
        children: [
          { label: 'Maintenance', link: '/services/heavy-duty/maintenance' },
          { label: 'Borescope inspection', link: '/services/heavy-duty/borescope' },
          { label: 'Hot section', link: '/services/heavy-duty/hot-section' },
          { label: 'Major overhaul', link: '/services/heavy-duty/overhaul' },
        ],
      },
      { label: 'Engine Lease Pool', link: '/services/engine-lease' },
      { label: 'Service Agreements', link: '/services/agreements' },
      { label: 'Operation & Maintenance', link: '/services/operation' },
      { label: 'EPC Contractor', link: '/services/epc' },
      { label: 'Training', link: '/services/training' },
      { label: 'Terms & Conditions', link: '/services/terms' },
      {
        label: 'References',
        children: [
          { label: 'Projects', link: '/references/projects' },
          { label: 'Our selling points', link: '/references/usp' },
        ],
      },
      {
        label: 'News & Downloads',
        children: [
          { label: 'News', link: '/news' },
          { label: 'Brochures', link: '/news/brochures' },
          { label: 'Publications', link: '/news/publications' },
          { label: 'Press', link: '/news/press' },
        ],
      },
    ],
  },
  {
    label: 'PARTS & TOOLING',
    children: [
      { label: 'Parts & Tooling', link: '/parts-tooling' },
      { label: 'Part Finder', link: '/parts-tooling/part-finder' },
      { label: 'Tooling', link: '/parts-tooling/tooling' },
      { label: 'Special Offers', link: '/parts-tooling/offers' },
    ],
  },
  { label: 'CONTACT', link: '/contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [stack, setStack] = useState<NavStack[]>([{ title: 'Menu', items: menuData }]);

  const current = stack[stack.length - 1];

  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      setStack([...stack, { title: item.label, items: item.children }]);
    } else if (item.link) {
      window.location.href = item.link;
      setOpen(false);
    }
  };

  const handleBack = () => setStack(stack.slice(0, -1));

  return (
    <>
      <button className={styles.menuIcon} onClick={() => setOpen(true)}>
        &#9776;
      </button>
      {open && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuDrawer}>
            <div className={styles.menuHeader}>
              {stack.length > 1 && (
                <button onClick={handleBack} className={styles.menuIcon}>&larr;</button>
              )}
              <span style={{ flex: 1 }}>{current.title}</span>
              <button onClick={() => { setOpen(false); setStack([{ title: 'Menu', items: menuData }]); }} className={styles.menuIcon}>&times;</button>
            </div>
            <div className={styles.menuList}>
              {current.items.map((item) => (
                <button
                  key={item.label}
                  className={styles.menuItem}
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                  {item.children && <span>+</span>}
                </button>
              ))}
            </div>
            <div className={styles.menuFooter}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 