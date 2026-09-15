// ============================================================================
// TYPE DEFINITIONS FOR WORKFORCE DATA
// ============================================================================

import { SectionContent } from '@/types/section';

export interface QualificationStandardsData {
  title: string;
  qualifications: string[];
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export interface WorkforceStructureColumn {
  title: string;
  description: string;
}

export interface WorkforceStructureData {
  columns: WorkforceStructureColumn[];
}

// ============================================================================
// WORKFORCE PAGE DATA
// ============================================================================

export const WORKFORCE_DATA: SectionContent = {
  label: "Our Workforce",
  title: "Building India's Security Workforce",
  subtitle: "Empowering careers in professional security and facility management.",
  imageSrc: "#",
  imageAlt: "#",
  paragraphs: [
    "At the Crown Security Agencies, our people are the cornerstone of our success. Every individual, from frontline guards to field officers, carries forward our legacy of reliability, discipline, and trust built over nearly three decades.\n\nWith a strong team of 2,000+ ex-military, army personnel, trained security professionals, Crown ensures seamless, consistent service across industries and regions.\n\nEach member is carefully selected and continuously trained to reflect the company’s high standards of conduct and professionalism."
  ]
};

export const QUALIFICATION_STANDARDS_DATA: QualificationStandardsData = {
  title: "Qualification Standards",
  qualifications: [
    "Guards: Minimum 10th grade pass.",
    "Supervisors: 12th grade or equivalent.",
    "CCTV Operators: Technical aptitude with digital literacy.",
    "Managers/Field Officers: Graduates with proven leadership and communication skills."
  ],
  description: "Our recruitment philosophy focuses not just on qualification, but also on discipline, reliability, and a service-oriented mindset.",
  buttonText: "Apply Now",
  imageSrc: "https://placehold.co/400x400.webp",
  imageAlt: "Security team monitoring control screens"
};

export const WORKFORCE_STRUCTURE_DATA: WorkforceStructureData = {
  columns: [
    {
      title: "Employment Structure",
      description:
        "Our workforce comprises about 70% permanent and 30% contractual employees, balancing operational stability with deployment flexibility.\n\nThis structure enables us to deliver the same level of commitment across both long-term and project-based assignments."},
    {
      title: "Key Roles & Positions",
      description:
      "We recruit for a range of roles, that is, Security Guards, Supervisors, CCTV Operators, Field Officers, Control Room Operators, Trainers, Administrative Executives, and Client Coordinators, ensuring that every operation runs efficiently.\n\nEach position is supported by a clear command hierarchy, ensuring communication flow and accountability at every level."
    }
  ]
};
