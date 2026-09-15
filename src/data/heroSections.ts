// data/heroSections.ts
import { HeroSectionProps } from "@/types/hero";

export const homepageHero: HeroSectionProps = {
  media: {
    type: "image",
    src: "/images/home/home-hero-bg.webp",
    alt: "Security guard at concert",
  },
  content: {
    title: "Your Security. Our Priority.",
    description:
      "For almost 30 years now, Crown Security Agencies (CSA) has been India’s trusted security partner, combining disciplined manpower, ethical governance, and technology-driven systems to safeguard people, property, and peace of mind across 7 states.",
    buttons: [
      {
        text: "LEARN HOW",
        href: "/about",
        variant: "primary",
        iconBgColor: "#F6292F",
      },
    ],
  },
  overlay: {
    enabled: true,
    color: "#252929",
    opacity: 0.6,
  },
  contentPosition: "left",
  minHeight: "840px",
};

export const aboutpageHero: HeroSectionProps = {
  media: {
    type: "image",
    src: "/images/about/about-hero-bg.webp",
    alt: "Security guard at concert",
  },
  content: {
    title:
      "Trusted Security Services Company in India for Commercial, Residential & Industrial Protection",
    description:
      "Crown Security is a trusted security services company in India, delivering professional protection solutions for commercial, residential, and industrial clients. With a strong presence across key Indian cities, we provide reliable, compliant, and high-quality security services you can depend on.",
  },
  overlay: {
    enabled: true,
    color: "#252929",
    opacity: 0.6,
  },
  contentPosition: "left",
  minHeight: "840px",
};

export const ourprocesspageHero: HeroSectionProps = {
  media: {
    type: "image",
    src: "/images/our-process-hero-bg.webp",
    alt: "Security guard at concert",
  },
  content: {
    title:
      "Our Proven Security Process Built on Compliance, Risk Assessment & Industry Best Practices in India",
    description:
      "Our security process follows industry best practices, local compliance standards, and region-specific risk assessment. From site evaluation to deployment and monitoring, we deliver structured, efficient, and scalable security solutions across India.",
  },
  overlay: {
    enabled: true,
    color: "#252929",
    opacity: 0.6,
  },
  contentPosition: "left",
  minHeight: "840px",
};

export const ourworkforcepageHero: HeroSectionProps = {
  media: {
    type: "image",
    src: "/images/our-workforce-hero-bg.webp",
    alt: "Security guard at concert",
  },
  content: {
    title:
      "Professionally Trained, PSARA-Compliant Security Guards Across India",
    description:
      "We deploy professionally trained, background-verified, and PSARA-compliant security guards across India. Our workforce is certified, disciplined, and committed to delivering reliable protection services nationwide.",
  },
  overlay: {
    enabled: true,
    color: "#252929",
    opacity: 0.6,
  },
  contentPosition: "left",
  minHeight: "840px",
};

export const servicespageHero: HeroSectionProps = {
  media: {
    type: "image",
    src: "/images/our-services-hero-bg.webp",
    alt: "Security guard at concert",
  },
  content: {
    title:
      "Comprehensive Security Services in India for Corporates, Residences & Industrial Facilities",
    description:
      "Crown Security provides comprehensive security services in India, including manned guarding, corporate security, residential security, industrial security, and asset protection. Our integrated security solutions ensure safety, compliance, and peace of mind.",
  },
  overlay: {
    enabled: true,
    color: "#252929",
    opacity: 0.6,
  },
  contentPosition: "left",
  minHeight: "840px",
};

export const careerspageHero: HeroSectionProps = {
  media: {
    type: "image",
    src: "/images/careers-hero-bg.webp",
    alt: "Security guard at concert",
  },
  content: {
    title:
      "Security Guard & Management Careers with a Growing Security Services Company in India",
    description:
      "Build a secure future with one of India’s growing security service providers. Crown Security offers long-term career opportunities, professional training, and structured growth in the Indian private security industry.",
  },
  overlay: {
    enabled: true,
    color: "#252929",
    opacity: 0.6,
  },
  contentPosition: "left",
  minHeight: "840px",
};
