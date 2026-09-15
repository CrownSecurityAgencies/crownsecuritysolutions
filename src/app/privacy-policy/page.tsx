import React from 'react';
import styles from '@/styles/legal-page.module.scss';

// Enable SSG with ISR (revalidate every 24 hours)
export const revalidate = 86400;

export const metadata = {
  title: "Privacy Policy | Crown Security Agencies",
  description: "Review Crown Security Agencies' privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "privacy terms", "data security", "information protection"],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Crown Security Agencies",
    description: "Review Crown Security Agencies' privacy policy to understand how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    images: [
      {
        url: "/images/home/home-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Crown Security Agencies",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy | Crown Security Agencies",
    description: "Review Crown Security Agencies' privacy policy to understand how we collect, use, and protect your personal information.",
    images: ["/images/home/home-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: January 28, 2026</p>
          <p className={styles.text}>
            This Privacy Policy explains how Crown Security Agencies collects,
            uses, and safeguards your information when you use our website or
            contact us about our services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Information We Collect</h2>
          <ul className={styles.list}>
            <li>Contact details such as name, email, phone number, and company.</li>
            <li>Inquiry details and service requirements you submit via forms.</li>
            <li>Website usage data collected through cookies and analytics.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>How We Use Information</h2>
          <ul className={styles.list}>
            <li>Respond to inquiries and provide service proposals.</li>
            <li>Deliver and improve our services and support.</li>
            <li>Maintain website functionality and security.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Sharing of Information</h2>
          <p className={styles.text}>
            We do not sell personal information. We may share information with
            trusted service providers who support operations, or as required by
            law.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Data Security</h2>
          <p className={styles.text}>
            We use reasonable safeguards to protect data. However, no online
            transmission is fully secure and we cannot guarantee absolute
            protection.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Retention</h2>
          <p className={styles.text}>
            We retain information for as long as necessary to fulfill the purposes
            described in this policy or to comply with legal obligations.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Your Rights</h2>
          <p className={styles.text}>
            You may request access, correction, or deletion of your personal
            information by contacting us at info@crownsecuritysolutions.com.
          </p>
        </div>
      </div>
    </section>
  );
}
