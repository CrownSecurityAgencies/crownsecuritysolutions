// app/our-workforce/page.tsx - Enhanced Workforce Page with Metadata
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import QualificationStandardsSection from '@/components/Sections/QualificationStandardsSection/QualificationStandardsSection';
import WorkforceStructureSection from '@/components/Sections/WorkforceStructureSection/WorkforceStructureSection';
import { ourworkforcepageHero } from '@/data/heroSections';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import {
  WORKFORCE_DATA,
  QUALIFICATION_STANDARDS_DATA,
  WORKFORCE_STRUCTURE_DATA
} from '@/data/workforce';
import styles from './page.module.scss';
import EndCta from '@/components/Sections/EndCta/EndCta';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Our Workforce",
  description: "Meet our trained and certified security workforce dedicated to maintaining safety, professionalism, and operational excellence.",
  keywords: ["security workforce", "trained security personnel", "certified security guards", "security team", "professional security"],
  alternates: {
    canonical: "/our-workforce",
  },
  openGraph: {
    title: "Our Workforce | Crown Security Agencies",
    description: "Meet our trained and certified security workforce dedicated to maintaining safety, professionalism, and operational excellence.",
    url: "/our-workforce",
    images: [
      {
        url: "/images/our-workforce-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Our Workforce - Trained & Certified Security Personnel",
      },
    ],
  },
  twitter: {
    title: "Our Workforce | Crown Security Agencies",
    description: "Meet our trained and certified security workforce dedicated to maintaining safety, professionalism, and operational excellence.",
    images: ["/images/our-workforce-hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkforcePage() {
  return (
    <>
      <HeroSection {...ourworkforcepageHero} />
      <div className={styles.pageLayout}>
        <InfoSplitSection content={WORKFORCE_DATA} showImage={false} />
        <QualificationStandardsSection
          title={QUALIFICATION_STANDARDS_DATA.title}
          qualifications={QUALIFICATION_STANDARDS_DATA.qualifications}
          description={QUALIFICATION_STANDARDS_DATA.description}
          buttonText={QUALIFICATION_STANDARDS_DATA.buttonText}
          imageSrc={QUALIFICATION_STANDARDS_DATA.imageSrc}
          imageAlt={QUALIFICATION_STANDARDS_DATA.imageAlt}
        />
        <WorkforceStructureSection columns={WORKFORCE_STRUCTURE_DATA.columns} />
        <StatsValueSection />
        <EndCta/>
      </div>
    </>
  );
}
