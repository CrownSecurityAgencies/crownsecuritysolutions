// app/careers/page.tsx - Enhanced Careers Page with Metadata
import CareersSection from '@/components/Sections/CareersSection/CareersSection';
import EndCta from '@/components/Sections/EndCta/EndCta';
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { careerspageHero } from '@/data/heroSections';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Careers at Crown Security Agencies | Join Our Team",
  description: "Build your career with Crown Security Agencies. Explore opportunities for security professionals and grow with a trusted security company.",
  keywords: ["careers", "security jobs", "security careers", "join our team", "security company jobs", "professional security careers"],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Crown Security Agencies | Join Our Team",
    description: "Build your career with Crown Security Agencies. Explore opportunities for security professionals and grow with a trusted security company.",
    url: "/careers",
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
    title: "Careers at Crown Security Agencies | Join Our Team",
    description: "Build your career with Crown Security Agencies. Explore opportunities for security professionals and grow with a trusted security company.",
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
