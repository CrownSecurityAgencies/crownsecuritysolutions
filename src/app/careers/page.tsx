// app/careers/page.tsx - Enhanced Careers Page with Metadata
import CareersSection from '@/components/Sections/CareersSection/CareersSection';
import EndCta from '@/components/Sections/EndCta/EndCta';
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { careerspageHero } from '@/data/heroSections';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Security Guard Jobs & Careers",
  description: "Explore security guard, lady guard, security supervisor and field officer career opportunities with Crown Security Agencies. View current openings and apply online.",
  keywords: [
    "security guard jobs",
    "security guard job in Thane",
    "security guard jobs in Mumbai",
    "security jobs in Navi Mumbai",
    "security jobs in Bhiwandi",
    "security jobs in Pune",
    "security jobs in Chennai",
    "lady security guard jobs",
    "security supervisor jobs",
    "field officer security jobs",
    "security guard vacancy",
    "security job vacancy",
    "security staff recruitment",
    "security company jobs",
    "security careers",
    "join Crown Security Agencies",
  ],
  alternates: {
    canonical: "/careers/",
  },
  openGraph: {
    title: "Security Guard Jobs & Careers | Crown Security Agencies",
    description: "Explore security guard, lady guard, security supervisor and field officer career opportunities with Crown Security Agencies. View current openings and apply online.",
    url: "/careers/",
    images: [
      {
        url: "/images/home/home-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Careers at Crown Security Agencies - Join Our Team",
      },
    ],
  },
  twitter: {
    title: "Security Guard Jobs & Careers | Crown Security Agencies",
    description: "Explore security guard, lady guard, security supervisor and field officer career opportunities with Crown Security Agencies. View current openings and apply online.",
    images: ["/images/home/home-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <>
      <HeroSection {...careerspageHero} />
      <div className="bodySectionLayout">
        <CareersSection />
        <EndCta />
      </div>

    </>
  );
}
