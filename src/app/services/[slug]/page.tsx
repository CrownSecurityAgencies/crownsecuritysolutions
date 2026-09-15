import { notFound } from 'next/navigation';
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection';
import CoreValuesSection from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';
import styles from './page.module.scss';
import EndCta from '@/components/Sections/EndCta/EndCta';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

// Service metadata mapping for all 17 services
const serviceMetadata = {
  'corporate-park-security': {
    title: "Corporate Park Security Services | Crown Security Agencies",
    description: "Crown's Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment. Our trained personnel manage access points, visitor verification, vehicle checks, and CCTV surveillance with precision and discretion.",
    canonical: "/services/corporate-park-security",
    keywords: ["corporate park security", "office security", "business park security", "corporate security services", "professional security"],
  },
  'escort-services': {
    title: "Professional Escort Security Services | Crown Security Agencies",
    description: "Crown provides professional escort services for secure transportation of valuables, personnel, and high-risk cargo. Our trained escorts ensure safe transit with real-time monitoring and emergency response capabilities.",
    canonical: "/services/escort-services",
    keywords: ["escort security", "security escort", "valuable transportation", "high-risk cargo", "professional security services"],
  },
  'hospitality-services': {
    title: "Hospitality Security Services for Hotels & Resorts",
    description: "Expert hospitality security services designed for hotels, resorts, and venues to ensure guest safety, staff protection, and smooth operations.",
    canonical: "/services/hospitality-services",
    keywords: ["hospitality security", "hotel security", "resort security", "venue security", "guest safety"],
  },
  'industrial-security': {
    title: "Industrial Security Services | Plant & Factory Protection",
    description: "Comprehensive industrial security services for factories, plants, and warehouses with trained guards, surveillance, and compliance monitoring.",
    canonical: "/services/industrial-security",
    keywords: ["industrial security", "factory security", "plant security", "warehouse security", "industrial protection"],
  },
  'logistics-security': {
    title: "Logistics Security Services | Cargo & Supply Chain Safety",
    description: "Advanced logistics security services ensure cargo safety, transit protection, theft prevention, and end-to-end supply chain security.",
    canonical: "/services/logistics-security",
    keywords: ["logistics security", "cargo security", "supply chain security", "transportation security", "cargo protection"],
  },
  'mall-security': {
    title: "Mall & Retail Security Services | Crown Security Agencies",
    description: "Professional mall security services ensure crowd control, theft prevention, surveillance, and a safe shopping environment for customers.",
    canonical: "/services/mall-security",
    keywords: ["mall security", "retail security", "shopping mall security", "crowd control", "theft prevention"],
  },
  'high-end-residential-security': {
    title: "High-End Residential Security Services | Premium Protection",
    description: "Elite residential security services for luxury homes and gated communities, offering discreet protection, surveillance, and access control.",
    canonical: "/services/high-end-residential-security",
    keywords: ["residential security", "luxury home security", "gated community security", "high-end security", "discreet protection"],
  },
  'school-security': {
    title: "School Security Services | Student & Campus Safety",
    description: "Trusted school security services ensuring student safety, controlled access, surveillance, and emergency preparedness for campuses.",
    canonical: "/services/school-security",
    keywords: ["school security", "campus security", "student safety", "school protection", "educational security"],
  },
  'event-security': {
    title: "Event Security Services | Crowd & Venue Management",
    description: "Professional event security services for corporate events, concerts, and gatherings with trained personnel and crowd control expertise.",
    canonical: "/services/event-security",
    keywords: ["event security", "crowd management", "venue security", "concert security", "corporate event security"],
  },
  'security-convoy-services': {
    title: "Security Convoy Services | Secure Asset Movement",
    description: "Reliable security convoy services for high-value assets, cargo, and personnel, ensuring secure and monitored transportation.",
    canonical: "/services/security-convoy-services",
    keywords: ["security convoy", "armored transport", "high-value transport", "secure transportation", "convoy protection"],
  },
  'vip-protection-personal-escort-security': {
    title: "VIP Protection & Personal Escort Security Services",
    description: "Discreet and professional VIP protection services offering personal escort security for executives, celebrities, and high-profile individuals.",
    canonical: "/services/vip-protection-personal-escort-security",
    keywords: ["VIP protection", "personal security", "executive protection", "celebrity security", "personal escort"],
  },
  'cctv-monitoring-alarm-response-services': {
    title: "CCTV Monitoring & Alarm Response Services",
    description: "24/7 CCTV monitoring and rapid alarm response services to detect threats, prevent incidents, and ensure round-the-clock security.",
    canonical: "/services/cctv-monitoring-alarm-response-services",
    keywords: ["CCTV monitoring", "alarm response", "surveillance services", "24/7 monitoring", "security monitoring"],
  },
  'access-control-management': {
    title: "Access Control Management Services | Secure Entry Systems",
    description: "Advanced access control management services ensure authorized entry, visitor tracking, and enhanced premises security.",
    canonical: "/services/access-control-management",
    keywords: ["access control", "secure entry", "visitor management", "access management", "security systems"],
  },
  'fire-safety-emergency-drill-support': {
    title: "Fire Safety & Emergency Drill Support Services",
    description: "Fire safety and emergency drill support services ensure preparedness, compliance, and effective emergency response planning.",
    canonical: "/services/fire-safety-emergency-drill-support",
    keywords: ["fire safety", "emergency drill", "safety training", "emergency preparedness", "fire prevention"],
  },
  'gate-pass-and-vehicle-movement-verification-logistics-industrial': {
    title: "Gate-Pass & Vehicle Movement Verification Services",
    description: "Efficient gate-pass and vehicle movement verification services for logistics and industrial facilities, ensuring controlled access and security.",
    canonical: "/services/gate-pass-and-vehicle-movement-verification-logistics-industrial",
    keywords: ["gate-pass", "vehicle verification", "access control", "logistics security", "industrial security"],
  },
  'cargo-integrity-audits-logistics-security': {
    title: "Cargo Integrity Audit Services | Logistics Security",
    description: "Cargo integrity audit services ensure shipment accuracy, theft prevention, and compliance across logistics and supply chain operations.",
    canonical: "/services/cargo-integrity-audits-logistics-security",
    keywords: ["cargo integrity", "shipment audit", "logistics audit", "cargo security", "supply chain security"],
  },
  'perimeter-patrolling-ppe-compliance-industrial-security': {
    title: "Perimeter Patrolling & PPE Compliance Services",
    description: "Perimeter patrolling and PPE compliance services for industrial sites, ensuring safety, security, and adherence to regulatory standards.",
    canonical: "/services/perimeter-patrolling-ppe-compliance-industrial-security",
    keywords: ["perimeter security", "PPE compliance", "industrial patrolling", "safety compliance", "perimeter protection"],
  },
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get metadata for this specific service
  const metadata = serviceMetadata[slug as keyof typeof serviceMetadata] || {
    title: `${service.title} | Crown Security Agencies`,
    description: service.description,
    canonical: `/services/${slug}`,
    keywords: ["security services", "professional security", "security solutions"],
  };

  return (
    <>
      <HeroSection {...service.heroData} />
      <div className="bodySectionLayout">
        <InfoSplitSection content={service.infoSplitData} showImage={false} />
        <CoreValuesSection
          values={service.coreValuesData}
          title={service.coreValuesTitle || "Our Expertise"}
          subtitle={service.coreValuesSubtitle}
        />
        <BrandsSlider />
        <div className={styles.pageLayout}>
          <ServiceSection service={service.serviceSectionData[0]} showScopeTitle={false} frameIndex={0} />
          <ServiceSection service={service.serviceSectionData[1]} variant="right" showScopeTitle={false} frameIndex={1} />
          <ServiceSection service={service.serviceSectionData[2]} showScopeTitle={false} frameIndex={2} />
          <ServiceSection service={service.serviceSectionData[3]} variant="right" showScopeTitle={false} frameIndex={3} />
          <ServiceSection service={service.serviceSectionData[4]} showScopeTitle={false} frameIndex={4} />
        </div>
        <StatsValueSection />
        <Testimonials />
        <InfiniteCarousel
          speed={200}
          direction="left"
          gap={32}
        />
        <EndCta />
      </div>

    </>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Crown Security Agencies",
      description: "The requested service page was not found.",
    };
  }

  const metadata = serviceMetadata[slug as keyof typeof serviceMetadata] || {
    title: `${service.title} | Crown Security Agencies`,
    description: service.description,
    canonical: `/services/${slug}`,
    keywords: ["security services", "professional security", "security solutions"],
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonical,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
      images: [service.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
