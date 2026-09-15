// components/Header/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/data/navigation';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Crown Security Agencies"
            width={171}
            height={40}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <div
                  className={`${styles.navItemWrapper} ${item.children ? styles.hasDropdown : ''}`}
                  onMouseEnter={() => item.children && setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <div className={styles.navLinkWrapper}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${pathname === item.href || pathname.startsWith(item.href + '/') || (item.href !== '/' && pathname === item.href + '/') ? styles.active : ''} ${item.children ? styles.hasDropdown : ''}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setDropdownOpen(null);
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className={styles.dropdownToggle}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setDropdownOpen(dropdownOpen === item.label ? null : item.label);
                        }}
                        aria-label={`Toggle ${item.label} dropdown`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`${styles.dropdownIcon} ${dropdownOpen === item.label ? styles.dropdownIconOpen : ''}`}
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul className={`${styles.dropdownMenu} ${dropdownOpen === item.label ? styles.dropdownOpen : ''}`}>
                      <li className={styles.dropdownItem}>
                        <Link
                          href={item.href}
                          className={`${styles.dropdownLink} ${pathname === item.href || pathname.startsWith(item.href + '/') || (item.href !== '/' && pathname === item.href + '/') ? styles.active : ''}`}
                          onClick={closeMenu}
                        >
                          View All {item.label}
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.label} className={styles.dropdownItem}>
                          <Link
                            href={child.href}
                            className={`${styles.dropdownLink} ${pathname === child.href ? styles.active : ''}`}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.ctaWrapper}>
            <Link href="/contact-us" className={styles.contactButton}>
              <Button
                text="Contact us"
                variant="primary"
                icon={<ArrowIcon color="#F6292F" />}
              />
            </Link>
          </div>
        </nav>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
