import React from 'react';
import styles from '@/styles/legal-page.module.scss';

// Enable SSG with ISR (revalidate every 24 hours)
export const revalidate = 86400;

export const metadata = {
  title: "Terms and Conditions | Crown Security Agencies",
  description: "Read the terms and conditions governing the use of Crown Security Agencies' website, services, and legal policies.",
  keywords: ["terms and conditions", "legal policies", "security services terms", "website terms", "service agreements"],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Crown Security Agencies",
    description: "Read the terms and conditions governing the use of Crown Security Agencies' website, services, and legal policies.",
    url: "/terms-and-conditions",
    images: [
      {
        url: "/images/home/home-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - Crown Security Agencies",
      },
    ],
  },
  twitter: {
    title: "Terms and Conditions | Crown Security Agencies",
    description: "Read the terms and conditions governing the use of Crown Security Agencies' website, services, and legal policies.",
    images: ["/images/home/home-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <section className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.updated}>Last updated: January 28, 2026</p>
          <p className={styles.text}>
            These Terms & Conditions govern your access to and use of Crown Security
            Agencies services, website, and communications. By engaging our services
            or using this website, you agree to these terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Services</h2>
          <p className={styles.text}>
            Our services include security staffing, escort services, and related
            security operations as described in proposals, statements of work, or
            contracts. Specific deliverables, timelines, and pricing are defined in
            written agreements.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Client Responsibilities</h2>
          <ul className={styles.list}>
            <li>Provide accurate site details and access requirements.</li>
            <li>Maintain safe working conditions for deployed personnel.</li>
            <li>Assign a point of contact for operational coordination.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Payments & Invoicing</h2>
          <p className={styles.text}>
            Invoicing terms, payment schedules, and late-fee policies are outlined
            in the signed agreement. Any disputes must be raised in writing within
            the time period specified in the agreement.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Cancellations</h2>
          <p className={styles.text}>
            Cancellations or schedule changes must follow the notice period in the
            agreement. Short-notice cancellations may incur fees for staffing and
            operational costs already incurred.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Intellectual Property</h2>
          <p className={styles.text}>
            All content on this website, including trademarks, logos, and written
            materials, remains the property of Crown Security Agencies unless
            otherwise stated.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Limitation of Liability</h2>
          <p className={styles.text}>
            To the extent permitted by law, Crown Security Agencies is not liable
            for indirect, incidental, or consequential damages. Our total liability
            is limited to the fees paid for the applicable services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Governing Law</h2>
          <p className={styles.text}>
            These terms are governed by the laws of India, and any disputes are
            subject to the jurisdiction of courts in Maharashtra.
          </p>
        </div>
      </div>
    </section>
  );
}
