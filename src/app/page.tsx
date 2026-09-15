// app/page.tsx - Enhanced Home Page with Metadata
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import SpecializedServicesSection from '@/components/Sections/SpecializedServicesSection/SpecializedServicesSection';
import { homepageHero } from '@/data/heroSections';
import CTASection from '@/components/Sections/CTASection/CTASection';
import { homemissionCTA, homevisionCTA } from '@/data/ctaSection';
import LegacySection from '@/components/Sections/LegacySection/LegacySection';
import CoreValues from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import { ABOUT_DATA } from '@/data/about';
import { JsonLd } from '@/components/JsonLd/JsonLd';
import EndCta from '@/components/Sections/EndCta/EndCta';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Crown Security Agencies | Professional Security Services in India",
  description: "Crown Security Agencies provides reliable corporate, industrial, residential, and event security services with trained professionals and 24/7 support.",
  keywords: ["security services", "corporate security", "industrial security", "residential security", "event security", "security solutions India", "professional security services"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crown Security Agencies | Professional Security Services in India",
    description: "Crown Security Agencies provides reliable corporate, industrial, residential, and event security services with trained professionals and 24/7 support.",
    url: "/",
    images: [
      {
        url: "/images/home/home-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Crown Security Agencies - Professional Security Services",
      },
    ],
  },
  twitter: {
    title: "Crown Security Agencies | Professional Security Services in India",
    description: "Crown Security Agencies provides reliable corporate, industrial, residential, and event security services with trained professionals and 24/7 support.",
    images: ["/images/home/home-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection {...homepageHero} />
      <div className="bodySectionLayout">
        <InfoSplitSection showImage={false} content={ABOUT_DATA.homeAboutContent} />
        <StatsValueSection />
        <CTASection {...homemissionCTA} />
        <SpecializedServicesSection />
        <CTASection {...homevisionCTA} />
      </div>
      <LegacySection />
      <div className="bodySectionLayout">
        <CoreValues />
        <BrandsSlider />
        <StackedScroll />
        <Testimonials />
        <EndCta />
      </div>
      <JsonLd />
    </>
  );
}
