// app/about/page.tsx - Enhanced About Page with Metadata
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import { aboutpageHero } from '@/data/heroSections';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import TrackRecordSection from '@/components/Sections/TrackRecordSection/TrackRecordSection';
import { aboutmissionCTA, homevisionCTA } from '@/data/ctaSection';
import CTASection from '@/components/Sections/CTASection/CTASection';
import LegacySection from '@/components/Sections/LegacySection/LegacySection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';
import CoreValues from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import CoreTeamSection from '@/components/Sections/CoreTeamSection/CoreTeamSection';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import { ABOUT_DATA } from '@/data/about';
import EndCta from '@/components/Sections/EndCta/EndCta';
import styles from './page.module.scss';


// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "About Crown Security Agencies | Trusted Security Experts",
  description: "Learn about Crown Security Agencies, our experience, values, and commitment to delivering professional and dependable security services.",
  keywords: ["about us", "security company", "security experts", "security services", "professional security", "security solutions"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Crown Security Agencies | Trusted Security Experts",
    description: "Learn about Crown Security Agencies, our experience, values, and commitment to delivering professional and dependable security services.",
    url: "/about",
    images: [
      {
        url: "/images/about/about-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "About Crown Security Agencies - Trusted Security Experts",
      },
    ],
  },
  twitter: {
    title: "About Crown Security Agencies | Trusted Security Experts",
    description: "Learn about Crown Security Agencies, our experience, values, and commitment to delivering professional and dependable security services.",
    images: ["/images/about/about-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutpageHero} />
      <div className={styles.pageLayout}>
        <InfoSplitSection showImage={false} content={ABOUT_DATA.aboutContent} layout="column" videoSrc="/videos/about_video.mp4" />
        <StatsValueSection />

      <CTASection {...aboutmissionCTA} />
        <CoreTeamSection />
  
      <CTASection {...homevisionCTA} />
      <TrackRecordSection />
        <BrandsSlider />
        <CoreValues />
      
      <StackedScroll />
        <Testimonials />
        <EndCta/>
      </div>
    </>
  );
}
