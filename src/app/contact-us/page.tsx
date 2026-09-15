import ContactUs from '@/components/Sections/ContactUs/ContactUs';
import styles from './page.module.scss';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Contact Crown Security Agencies | Get in Touch Today",
  description: "Contact Crown Security Agencies for professional security services, consultations, and customized security solutions.",
  keywords: ["contact us", "security consultation", "security services", "contact security company", "professional security", "security solutions"],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Crown Security Agencies | Get in Touch Today",
    description: "Contact Crown Security Agencies for professional security services, consultations, and customized security solutions.",
    url: "/contact-us",
    images: [
      {
        url: "/images/home/home-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Contact Crown Security Agencies - Get in Touch Today",
      },
    ],
  },
  twitter: {
    title: "Contact Crown Security Agencies | Get in Touch Today",
    description: "Contact Crown Security Agencies for professional security services, consultations, and customized security solutions.",
    images: ["/images/home/home-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsPage() {
  return (
    <>
      <div className={styles.pageLayout}>
        <ContactUs />
      </div>
    </>
  );
}
