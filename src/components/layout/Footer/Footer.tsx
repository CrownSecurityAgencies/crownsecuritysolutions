import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "@/data/navigation";
import { services } from "@/data/services";
import styles from "./Footer.module.scss";
import MapSection from "@/components/Sections/MapSection/MapSection";

const Footer: React.FC = () => {
  const quickLinks = [
    ...navigationItems,
    { label: "Contact Us", href: "/contact-us" },
  ];

  // Add all service links from the services data
  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  }));

  const legalLinks = [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/crownsecurity-agencies/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/crownsecurityagencies",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1ER1LcPvMA/?mibextid=wwXIfr",
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className="full-width-container">
            <div className={styles.grid}>
              <div className={styles.brand}>
                <Image
                  src="/logo_black.png"
                  alt="Crown Security Managers"
                  width={171}
                  height={40}
                />
                <p className={styles.brandText}>
                  Trusted security services designed to protect people,
                  property, and reputation across India.
                </p>
                <div className={styles.socialRow}>
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      className={styles.socialLink}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      <span className={styles.socialIcon} aria-hidden="true">
                        {item.label === "LinkedIn" && (
                          <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5ZM0.5 23.5H4.5V7.5H0.5V23.5ZM8.5 7.5H12.33V9.67H12.39C12.96 8.59 14.37 7.44 16.43 7.44C20.5 7.44 21.5 10.01 21.5 13.36V23.5H17.5V14.37C17.5 12.18 17.46 9.37 14.47 9.37C11.43 9.37 10.96 11.72 10.96 14.21V23.5H6.96V7.5H8.5Z" />
                          </svg>
                        )}
                        {item.label === "Instagram" && (
                          <svg viewBox="0 0 24 24" focusable="false">
                            <rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.25" />
                          </svg>
                        )}
                        {item.label === "Facebook" && (
                          <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073z" />
                          </svg>
                        )}
                        {item.label === "X (Twitter)" && (
                          <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M18.9 2H22l-6.77 7.74L23 22h-6.2l-4.86-6.35L6.2 22H3l7.23-8.26L1 2h6.35l4.4 5.82L18.9 2Zm-1.1 18h1.72L7.26 4H5.43l12.37 16Z" />
                          </svg>
                        )}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.column}>
                <h4 className={styles.heading}>Quick Links</h4>
                <ul className={styles.linkList}>
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className={styles.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.column}>
                <h4 className={styles.heading}>Services</h4>
                <ul className={styles.linkList}>
                  {serviceLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className={styles.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.column}>
                <h4 className={styles.heading}>Contact</h4>
                <p className={styles.text}>
                  <a className={styles.link} href="https://www.google.com/maps?cid=1064529831847870676" target="_blank" rel="noopener noreferrer">
                    Head Office: Office 11, P3 Level, Azziano, Rustomjee Urbania,
                    Majiwada, Thane (W), Maharashtra 400601
                  </a>
                </p>
                <p className={styles.text}>
                  <a className={styles.link} href="https://www.google.com/maps?cid=17766265707126768076" target="_blank" rel="noopener noreferrer">
                    Corporate Office: Elite&apos;s Hajra Mansion, 02, off Doctor
                    Ansari Road, 2nd, Rabodi, Thane West, Thane, Maharashtra 400601
                  </a>
                </p>
                <p className={styles.text}>info@crownsecuritysolutions.com</p>
                <p className={styles.text}>+91 8108107824</p>

                <h4 className={styles.heading} style={{ marginTop: "1.5rem" }}>
                  Legal
                </h4>
                <ul className={styles.linkList}>
                  {legalLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className={styles.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <MapSection />
            </div>
          </div>
        </div>

        <div className={styles.stripe} aria-hidden="true" />

        <div className={styles.bottom}>
          <div className="full-width-container">
            <p className={styles.bottomText}>
              Copyright {new Date().getFullYear()} Crown Security Solutions. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
