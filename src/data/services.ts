import { HeroSectionProps } from "@/types/hero";
import { SectionContent } from "@/types/section";
import { CoreValue } from "@/data/coreValues";
import { ServiceData as ServiceSectionData } from "@/data/serviceSectionData";

export interface ServiceData {
  slug: string;
  label: string;
  title: string;
  description: string;
  targetSegment: string;
  scopeOfWork: string[];
  image: string;
  heroData: HeroSectionProps;
  infoSplitData: SectionContent;
  coreValuesData: CoreValue[];
  coreValuesTitle?: string;
  coreValuesSubtitle?: string;
  serviceSectionData: ServiceSectionData[];
  conclusion?: string;
}

export const services: ServiceData[] = [
  // Corporate Park Security Services
  {
    slug: "corporate-park-security",
    label: "SERVICE 01",
    title: "Corporate Park Security Services",
    description:
      "Crown's Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment. Our trained personnel manage access points, visitor verification, vehicle checks, and CCTV surveillance with precision and discretion.",
    targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
    scopeOfWork: [
      "Visitor verification and employee ID checks.",
      "Access control and vehicle management.",
      "CCTV monitoring and alarm response coordination.",
      "Fire and emergency drill assistance.",
      "Incident reporting, documentation, and escalation to supervisors.",
    ],
    image: "/images/services/Corporate Park Security Services/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-01.jpg",
        alt: "Corporate Park Security Services",
      },
      content: {
        title: "Corporate Park Security Services",
        description:
          "Security in a corporate environment is never routine. It requires a strategic balance of vigilance, hospitality, process discipline, and technology. Crown Security Agency provides tailored Corporate Park Security Services designed to protect people, property, and day-to-day operations with complete professionalism and reliability.\nWith nearly three decades of experience, CSA delivers a structured, compliance driven security framework that supports business continuity and creates a safe and welcoming atmosphere for employees, clients, and visitors.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Corporate Park Security Matters?",
      subtitle: "",
      imageSrc: "",
      imageAlt: "",
      paragraphs: [
        "Corporate parks have continuous foot traffic, multiple access points, sensitive assets, and large operational areas. These factors demand more than basic guarding. They require trained professionals who understand protocol management, emergency readiness, visitor handling, and real-time monitoring.\n\nCSA ensures that every corporate park receives a proactive, technology supported protection system that keeps risks low and confidence high.",
      ],
    },
    coreValuesTitle: "Our Expertise in Corporate Park Security",
    coreValuesSubtitle:
      "We offer an end to end security solution designed specifically for the dynamic nature of business and corporate park environments.",
    coreValuesData: [
      {
        id: "round_the_clock_protection",
        title: "24×7 On-Site Protection",
        description:
          "Continuous guard deployment with shift-based rotations, on-ground supervisors, and rapid response teams ensuring uninterrupted vigilance at all times.",
        iconColor: "#EF4444",
      },
      {
        id: "visitor_management",
        title: "Visitor Management & Assistance",
        description:
          "Trained security personnel manage reception areas, verify identities, enforce entry protocols, and assist visitors with professionalism and courtesy.",
        iconColor: "#EF4444",
      },
      {
        id: "access_control",
        title: "Access Control & Vehicle Management",
        description:
          "Strict control at all entry and exit points including ID validation, vehicle inspections, RFID access systems, and detailed visitor logging.",
        iconColor: "#EF4444",
      },
      {
        id: "crisis_handling",
        title: "Crisis & Labor Unrest Handling",
        description:
          "Experienced professionals trained to manage emergencies, disruptions, and sensitive situations with calm judgment, discipline, and tactical awareness.",
        iconColor: "#EF4444",
      },
      {
        id: "surveillance_monitoring",
        title: "Surveillance & Digital Monitoring",
        description:
          "Integrated CCTV surveillance, patrol verification systems, and GPS-based attendance tracking to enhance visibility, control, and accountability.",
        iconColor: "#EF4444",
      },
      {
        id: "order_discipline",
        title: "Order & Discipline Maintenance",
        description:
          "Ensuring all office and facility zones remain secure, organized, and compliant with established client policies and procedures.",
        iconColor: "#EF4444",
      },
      {
        id: "reporting_audit",
        title: "Daily Reporting & Audit Support",
        description:
          "Every shift is documented through incident logs, attendance records, and daily activity reports supported by robust digital audit tools.",
        iconColor: "#EF4444",
      },
    ],
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Organizations prefer CSA because of our commitment to transparency, discipline, and operational excellence.",
        scopeOfWork: [
          "PSARA certified corporate park security personnel",
          "Customized deployment plans based on every site's layout and risk level",
          "Cloud based reporting and real time supervision",
          "Dedicated operations managers and field officers",
          "Central control room support for continuous monitoring",
          "Strong compliance and competitive pricing models",
        ],
        image: "/images/services/Corporate Park Security Services/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Corporate Park Security Needs",
        description:
          "Corporate parks experience a mix of high footfall, vendor movement, vehicle circulation, and operational activity. These touchpoints create vulnerabilities if not managed with clear SOPs and trained personnel.\n\nCSA identifies these risks early through site surveys and creates protection plans that streamline access, improve visibility, and maintain order throughout the premises.",
        scopeOfWork: [],
        image: "/images/services/Corporate Park Security Services/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Corporate Parks",
        description:
          "Every corporate park is unique in design and operational flow. CSA builds a custom solution for each site which may include:",
        scopeOfWork: [
          "Perimeter and internal access control planning",
          "Multi tier CCTV integration with centralized monitoring",
          "Emergency and evacuation preparedness planning",
          "Coordination with housekeeping, facility teams, and local authorities",
          "Parking lot management and movement control",
          "Vendor verification and material gate pass checks",
        ],
        image: "/images/services/Corporate Park Security Services/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "CSA guards form the backbone of our service quality. Each team member goes through:",
        scopeOfWork: [
          "Police and background verification",
          "Medical fitness certification",
          "Training in etiquette, professional behavior, and corporate conduct",
          "Fire fighting, first aid, and emergency readiness sessions",
          "Visitor management and customer interaction training",
        ],
        conclusion:
          "These measures ensure that every guard represents your brand with confidence and discipline.",
        image: "/images/services/Corporate Park Security Services/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Corporates in India",
        description:
          "CSA has provided security services to some of the country's most respected brands in corporate and commercial real estate. Our operational consistency, strict compliance, and technology backed supervision make us a preferred partner for long term deployments.",
        scopeOfWork: [
          "Long-term security partnerships with Fortune 500 companies and leading Indian conglomerates",
          "Multi-city deployments across major metropolitan areas including Mumbai, Delhi, Bangalore, and Hyderabad",
          "Zero-incident track record in high-security corporate environments",
          "Dedicated account management teams for personalized service delivery",
        ],
        image: "/images/services/Corporate Park Security Services/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Escort Services
  {
    slug: "escort-services",
    label: "SERVICE 02",
    title: "Escort Services",
    description:
      "Crown provides professional escort services for secure transportation of valuables, personnel, and high-risk cargo. Our trained escorts ensure safe transit with real-time monitoring and emergency response capabilities.",
    targetSegment: "Banks, Financial Institutions, and High-Value Transport.",
    scopeOfWork: [
      "Personal security escort for VIPs.",
      "Cash and valuables transportation.",
      "High-risk cargo protection.",
      "Real-time GPS monitoring.",
      "Emergency response coordination.",
    ],
    image: "/images/services/Security Convoy Services/Convoy_2.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-05.jpg",
        alt: "Security Convoy Services",
      },
      content: {
        title: "Escort Services",
        description:
          "Safe movement of people and high value assets requires meticulous planning, trained personnel, and total accountability. Crown Security Agency provides professional Escort Services designed to protect individuals, sensitive documents, valuables, and consignments throughout their journey with complete reliability and discipline.\n\nWith nearly three decades of operational experience across India, CSA delivers an escort framework supported by trained officers, centralized monitoring, and route based risk assessments that ensure protection at every step.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Escort Services Are Critical?",
      subtitle: "",
      imageSrc: "",
      imageAlt: "",
      paragraphs: [
        "Any movement outside controlled premises introduces uncertainties. Traffic conditions, unfamiliar routes, public environments, and unpredictable situations can expose personnel or assets to avoidable risks.\n\nCSA eliminates these vulnerabilities through structured movement planning, certified escort officers, and real time communication with our control room. This approach ensures safety, accountability, and peace of mind throughout the transit.",
      ],
    },
    coreValuesData: [
      {
        id: "route_planning",
        title: "Route Planning & Risk Assessment",
        description:
          "Before every movement, detailed assessments of routes, checkpoints, and risk zones are conducted to determine the safest and most efficient path.",
        iconColor: "#EF4444",
      },
      {
        id: "escort_services",
        title: "Trained Armed or Unarmed Escorts",
        description:
          "Depending on operational requirements, trained armed or unarmed escort professionals are deployed with high discipline, situational awareness, and client-centric conduct.",
        iconColor: "#EF4444",
      },
      {
        id: "real_time_tracking",
        title: "Real-Time Tracking & Communication",
        description:
          "All movements are monitored through GPS-based tracking with continuous communication and coordination with the central control room for immediate support.",
        iconColor: "#EF4444",
      },
      {
        id: "chain_of_custody",
        title: "Chain of Custody & Documentation",
        description:
          "Comprehensive records of handovers, timestamps, seal verifications, and delivery confirmations are maintained to ensure full transparency and accountability.",
        iconColor: "#EF4444",
      },
      {
        id: "authority_coordination",
        title: "Coordination with Local Authorities",
        description:
          "For high-risk routes or sensitive transfers, coordination with local law enforcement agencies is carried out to enhance safety and mitigate potential threats.",
        iconColor: "#EF4444",
      },
      {
        id: "scheduled_movements",
        title: "Support for Scheduled Movements",
        description:
          "Whether for one-time transfers or recurring escort requirements, structured planning, timely deployment, and consistent reporting are ensured.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Escort Services",
    coreValuesSubtitle:
      "Every escort assignment is handled with confidentiality, precision, and strict adherence to protocol. CSA provides specialized support for the secure movement of cash, confidential documents, sensitive cargo, or high profile personnel.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Businesses choose CSA for escort services because they value discipline, confidentiality, and dependable execution. Our reputation is built on:",
        scopeOfWork: [
          "Skilled escort officers trained in risk awareness",
          "Transparent documentation and verification procedures",
          "GPS monitored movements and real time updates",
          "PAN India support with quick mobilization",
          "Strong compliance, ethical standards, and accurate reporting",
          "Leadership involvement in planning and supervision",
        ],
        image: "/images/services/Security Convoy Services/Convoy_2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Escort Security Requirements",
        description:
          "Escort assignments often involve sensitive items or people who cannot be exposed to operational delays or security threats. CSA begins with a clear understanding of transit objectives, route conditions, handover points, and expected risks. The result is a customized escort plan that ensures both speed and safety.",
        scopeOfWork: [],
        image: "/images/services/Security Convoy Services/Convoy_5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Escort Solutions for Every Requirement",
        description:
          "CSA provides flexible escort solutions that suit various commercial, industrial, and individual needs, including:",
        scopeOfWork: [
          "Escorts for high value consignments",
          "Secure movement of confidential documents and records",
          "Personnel movement security for executives and staff",
          "Transit protection for sensitive cargo or wealth",
          "Multi vehicle support for large transfers",
          "Verified documentation of departure and arrival",
        ],
        conclusion:
          "Each plan is created based on the level of risk, the value of the consignment, and the distance of travel.",
        image: "/images/services/Security Convoy Services/Convoy_6.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Escort officers undergo stringent verification and training before deployment. CSA ensures that each officer is prepared through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in close protection methods and movement protocols",
          "Communication and coordination drills",
          "Emergency response and first aid training",
        ],
        conclusion:
          "This combination of skill, discipline, and awareness ensures safe and controlled movement at all times.",
        image: "/images/services/Security Convoy Services/Convoy_7.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Corporates Across India",
        description:
          "CSA has supported several banks, logistics firms, corporate groups, and high profile individuals with safe and reliable escort services. Our operational discipline and technology integration allow us to deliver consistent quality across multiple states.",
        scopeOfWork: [],
        image: "/images/services/Security Convoy Services/Convoy_2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Hospitality Services
  {
    slug: "hospitality-services",
    label: "SERVICE 03",
    title: "Hospitality Services",
    description:
      "Crown delivers comprehensive security solutions for hotels, resorts, and hospitality establishments. Our services ensure guest safety, protect property assets, and maintain a welcoming environment for all visitors.",
    targetSegment: "Hotels, Resorts, and Hospitality Establishments.",
    scopeOfWork: [
      "Guest safety and security.",
      "Property and asset protection.",
      "Access control and key management.",
      "Emergency response and evacuation procedures.",
      "24/7 front desk and concierge support.",
    ],
    image: "/images/services/Hospitality Services/hospital_hero_image.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-07.jpg",
        alt: "Hospitality Services",
      },
      content: {
        title: "Hospitality Security Services",
        description:
          "Hotels, resorts, clubs, and event venues require security that is both vigilant and welcoming. Crown Security Agency provides Hospitality Security Services designed to maintain guest comfort while protecting people, property, and sensitive operational areas through trained, courteous, and professional security personnel.\n\nWith nearly three decades of experience in hospitality environments, CSA ensures that every guest feels safe, every zone remains controlled, and every operation runs smoothly without interrupting the customer experience.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Hospitality Security Matters?",
      subtitle: "",
      imageSrc: "/images/services/Hospitality Services/hospital_service.webp",
      imageAlt: "Hospitality Services",
      paragraphs: [
        "Hospitality spaces host guests, staff, vendors, event organizers, and large crowds throughout the day. These environments demand security teams who are alert, well groomed, and capable of handling unexpected situations with professionalism and discretion.\n\nCSA delivers a security framework that protects your property while reinforcing the premium service standards your brand represents.",
      ],
    },
    coreValuesData: [
      {
        id: "guest_access_control",
        title: "Access Control & Guest Screening",
        description:
          "Security personnel manage entry points, verify visitors when required, and ensure secure access to guest zones, service areas, and VIP sections.",
        iconColor: "#EF4444",
      },
      {
        id: "public_area_monitoring",
        title: "Lobby & Public Area Monitoring",
        description:
          "Trained teams continuously monitor lobbies, corridors, lounges, elevators, and common areas to maintain guest safety and orderly movement.",
        iconColor: "#EF4444",
      },
      {
        id: "event_banquet_security",
        title: "Event & Banquet Support",
        description:
          "Additional trained manpower is deployed to manage crowd flow, guest guidance, and controlled access during weddings, conferences, and large gatherings.",
        iconColor: "#EF4444",
      },
      {
        id: "hotel_staff_coordination",
        title: "Coordination with Hotel Staff",
        description:
          "Security teams work in close coordination with front office, housekeeping, and hotel management to ensure seamless service and responsive support during peak operations.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_response",
        title: "Emergency Response & Evacuation Assistance",
        description:
          "Personnel are trained in fire safety protocols, first aid, and emergency coordination to assist guests calmly and efficiently during critical situations.",
        iconColor: "#EF4444",
      },
      {
        id: "vip_handling",
        title: "VIP Handling & Discreet Assistance",
        description:
          "Specially trained officers provide discreet escort services, support confidential movements, and maintain a composed, professional presence for VIP guests.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Hospitality Security",
    coreValuesSubtitle:
      "Our personnel are trained to blend seamlessly into hotel and venue environments, providing safety with a warm and respectful approach.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Hospitality brands work with CSA because of our focus on professionalism, courtesy, and reliable protection.",
        scopeOfWork: [
          "Guards trained in hospitality conduct and guest interaction",
          "Strong understanding of hotel operations and service standards",
          "Groomed, well disciplined, and presentation ready personnel",
          "Real time reporting and supervision by field officers",
          "Coordination with CCTV and hotel control rooms",
          "Compliance driven operations across all deployments",
        ],
        conclusion:
          "CSA ensures safety without compromising the guest experience.",
        image: "/images/services/Hospitality Services/hospital_service.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Hospitality Security Needs",
        description:
          "Hospitality properties require a balance between vigilance and warmth. Guests should feel welcomed, not watched. At the same time, access control, patrols, and emergency readiness must operate flawlessly in the background.\n\nCSA begins with a site assessment to understand guest flow, staff movement, event schedules, and sensitive zones before designing a tailored deployment plan.",
        scopeOfWork: [],
        image: "/images/services/Hospitality Services/h2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Hospitality Security Solutions",
        description:
          "CSA provides customised solutions suitable for hotels, resorts, clubs, convention centres, and premium event venues.",
        scopeOfWork: [
          "Guest screening and access management",
          "Lobby and front desk support",
          "Patrolling of floors, parking areas, and poolside zones",
          "Coordination during events, conferences, and banquets",
          "Emergency evacuation assistance",
          "VIP escorting and confidential support",
          "Lost and found handling and guest assistance",
          "Documentation and daily reporting",
        ],
        conclusion:
          "These solutions help maintain a secure, organised, and guest friendly environment.",
        image: "/images/services/Hospitality Services/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Hospitality security requires guards who are confident, courteous, and trained in professional conduct. CSA ensures readiness through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in etiquette, grooming, and guest interaction",
          "Crowd control and conflict handling instruction",
          "First aid and fire safety preparation",
          "Continuous refresher training to maintain service quality",
        ],
        conclusion:
          "Our teams represent your brand with discipline, poise, and complete professionalism.",
        image: "/images/services/Hospitality Services/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Hotels, Resorts, and Event Venues Across India",
        description:
          "CSA has provided security services to hospitality brands and event properties where guest experience and safety are equally important. Our consistent quality and trained manpower make us a preferred partner in the hospitality sector.",
        scopeOfWork: [],
        image: "/images/services/Hospitality Services/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Industrial Security Services
  {
    slug: "industrial-security",
    label: "SERVICE 04",
    title: "Industrial Security",
    description:
      "Crown specializes in industrial security for manufacturing facilities, warehouses, and industrial complexes. Our solutions protect valuable assets, equipment, and personnel with advanced security systems and trained professionals.",
    targetSegment:
      "Manufacturing Facilities, Warehouses, and Industrial Complexes.",
    scopeOfWork: [
      "Asset protection and inventory control.",
      "Equipment and machinery security.",
      "Fire prevention and safety monitoring.",
      "24/7 facility monitoring and access control.",
      "Emergency response and incident management.",
    ],
    image: "/images/services/Industrial Security/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-02.jpg",
        alt: "Industrial Security",
      },
      content: {
        title: "Industrial Security Services",
        description:
          "Industrial environments require a security system that is structured, vigilant, and deeply aware of safety protocols. Crown Security Agency provides specialized Industrial Security Services that protect factories, plants, warehouses, and high risk operational zones with a disciplined, compliance driven approach.\n\nWith nearly three decades of experience across India’s industrial sector, CSA combines trained manpower, technology based monitoring, and strict supervision to maintain safety, prevent losses, and support uninterrupted operations for every client site.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Industrial Security Is Essential?",
      subtitle: "",
      imageSrc: "/images/services/Industrial Security/1.webp",
      imageAlt: "Industrial Security",
      paragraphs: [
        "Manufacturing units and industrial sites involve continuous movement of goods, heavy machinery, hazardous zones, critical equipment, and large workforces. Without dedicated security protocols, these environments face risks such as unauthorized access, material theft, safety lapses, and operational disruptions.\n\nCSA addresses these challenges through structured SOPs, trained industrial guards, and real time visibility systems that strengthen both security and safety compliance.",
      ],
    },
    coreValuesData: [
      {
        id: "perimeter_gate_control",
        title: "Perimeter Protection & Gate Control",
        description:
          "Strict monitoring of all entry and exit points with ID verification, visitor validation, vehicle inspections, and thorough documentation review.",
        iconColor: "#EF4444",
      },
      {
        id: "ppe_compliance",
        title: "PPE & Safety Compliance",
        description:
          "Security personnel ensure adherence to mandatory PPE usage and workplace safety protocols, reducing risks of accidents and regulatory non-compliance.",
        iconColor: "#EF4444",
      },
      {
        id: "vehicle_goods_verification",
        title: "Vehicle & Goods Verification",
        description:
          "Detailed inspection of trucks, consignments, permits, and gate passes to prevent unauthorized movement or removal of materials.",
        iconColor: "#EF4444",
      },
      {
        id: "fire_emergency_support",
        title: "Fire Safety & Emergency Coordination",
        description:
          "Trained guards assist in fire response procedures, alarm activation, evacuation guidance, and coordination with on-site safety teams.",
        iconColor: "#EF4444",
      },
      {
        id: "patrol_restricted_zones",
        title: "Routine Patrols & Restricted Zone Monitoring",
        description:
          "Regular patrols across critical assets, machinery areas, perimeters, and night routes to detect and prevent breaches or irregular activity.",
        iconColor: "#EF4444",
      },
      {
        id: "digital_monitoring_reports",
        title: "Digital Monitoring & Reporting",
        description:
          "CCTV surveillance support, GPS-based patrol tracking, and comprehensive daily shift reports integrated with CSA’s central control systems.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Industrial Security",
    coreValuesSubtitle:
      "Every industrial facility has unique operational patterns and risk points. CSA designs a tailored security plan supported by trained personnel and technology enabled supervision.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Industries rely on CSA because of our consistent operational discipline and commitment to safety standards.",
        scopeOfWork: [
          "PSARA certified industrial guards",
          "Strong understanding of manufacturing protocols",
          "Customized SOPs for every plant layout",
          "Dedicated supervisors and field officers for each region",
          "Real time reporting through digital systems",
          "Compliance with PF, ESIC, insurance, and state labour laws",
        ],
        conclusion:
          "These factors make CSA a dependable security partner for long term industrial deployments.",
        image: "/images/services/Industrial Security/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Industrial Security Needs",
        description:
          "Factories and industrial facilities operate day and night, often with multiple contractors, heavy vehicle traffic, valuable equipment, and safety sensitive areas. CSA conducts detailed site surveys to map these touchpoints and identify risks that require proactive management.\n\nThis allows us to create a security plan that reduces losses, improves compliance, and supports uninterrupted production.",
        scopeOfWork: [],
        image: "/images/services/Industrial Security/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Industrial Sites",
        description:
          "CSA delivers a structured protection system that is adapted to the needs of each industrial facility.",
        scopeOfWork: [
          "Entry and exit gate pass management",
          "Vehicle inspection and goods verification",
          "Safety compliance and PPE monitoring",
          "Fire and emergency support",
          "Perimeter patrolling and night round documentation",
          "Coordination with plant heads and safety officers",
          "Monitoring high value equipment zones",
        ],
        conclusion:
          "Every solution is designed to protect people, processes, and assets with maximum efficiency.",
        image: "/images/services/Industrial Security/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Industrial security requires professionals who understand safety norms and factory discipline. CSA ensures that every guard is trained through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness evaluations",
          "Training in hazard awareness and emergency response",
          "Fire fighting and first aid sessions",
          "Instruction on material verification and documentation",
          "Continuous refresher programs aligned with site requirements",
        ],
        conclusion:
          "This preparation allows our teams to support both security and safety in complex industrial environments.",
        image: "/images/services/Industrial Security/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Industrial Brands Across India",
        description:
          "CSA protects manufacturing units, plants, warehouses, and industrial estates for some of India’s most respected brands. Our long term presence in this sector demonstrates our ability to manage high risk zones with consistency and professionalism.",
        scopeOfWork: [],
        image: "/images/home/services/industrial_security.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Logistics Security Services
  {
    slug: "logistics-security",
    label: "SERVICE 05",
    title: "Logistics Security",
    description:
      "Crown provides specialized security solutions for logistics and supply chain operations. Our services protect cargo, warehouses, and transportation hubs with advanced monitoring and risk mitigation strategies.",
    targetSegment: "Logistics Companies, Warehouses, and Distribution Centers.",
    scopeOfWork: [
      "Cargo protection and monitoring.",
      "Warehouse security and access control.",
      "Supply chain risk assessment.",
      "Theft prevention and loss mitigation.",
      "Real-time cargo tracking and surveillance.",
    ],
    image: "/images/services/Logistics Security/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-03.jpg",
        alt: "Logistics Security",
      },
      content: {
        title: "Logistics Security Services",
        description:
          "The logistics sector depends on accuracy, visibility, and uninterrupted movement. Crown Security Agency provides specialized Logistics Security Services that protect warehouses, transport hubs, loading docks, and high value consignments through a disciplined, technology enabled security framework.\n\nWith nearly three decades of experience across India’s supply chain networks, CSA secures every stage of movement from storage to dispatch. Our trained personnel, GPS supported tracking systems, and strict verification protocols help reduce losses and maintain operational integrity at all times.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Logistics Security Is Critical?",
      subtitle:
        "Target Segment: Logistics Companies, Warehouses, and Distribution Centers.",
      imageSrc: "/images/services/Logistics Security/1.webp",
      imageAlt: "Logistics Security",
      paragraphs: [
        "Warehouses and logistics hubs face continuous movement of goods, high traffic of vehicles, multiple vendors, and time sensitive operations. These environments are vulnerable to theft, pilferage, diversion, unauthorized access, and shipment discrepancies.\n\nCSA strengthens logistics operations through structured SOPs, trained security personnel, and real time reporting systems that ensure every movement is verified and accountable.",
      ],
    },
    coreValuesData: [
      {
        id: "warehouse_guarding",
        title: "Warehouse & Dockside Guarding",
        description:
          "Security guards monitor warehouse floors, loading bays, docks, and storage zones to prevent unauthorized access and support safe material handling.",
        iconColor: "#EF4444",
      },
      {
        id: "driver_vehicle_verification",
        title: "Driver & Vehicle Verification",
        description:
          "All inbound and outbound vehicles undergo document validation, seal inspection, and identity confirmation to ensure operational accuracy and control.",
        iconColor: "#EF4444",
      },
      {
        id: "shipment_integrity",
        title: "Shipment Integrity & Seal Verification",
        description:
          "Personnel record seal numbers, cross-check manifests, and verify consignment details during loading and unloading operations.",
        iconColor: "#EF4444",
      },
      {
        id: "gps_convoy_escort",
        title: "GPS Tracked Convoy Escorting",
        description:
          "For high-value or sensitive cargo movements, trained escort teams are deployed with GPS tracking and continuous communication support.",
        iconColor: "#EF4444",
      },
      {
        id: "inventory_loss_prevention",
        title: "Inventory Loss Prevention",
        description:
          "Ongoing monitoring, routine patrols, and structured documentation help detect discrepancies early and significantly reduce inventory shrinkage.",
        iconColor: "#EF4444",
      },
      {
        id: "real_time_reporting",
        title: "Real-Time Reporting & Monitoring",
        description:
          "CCTV integration, digital attendance systems, and centralized reporting provide complete visibility across warehouse operations.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Logistics Security",
    coreValuesSubtitle:
      "CSA provides end to end security for supply chain operations, safeguarding goods, people, and processes with precision and transparency.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Logistics operators rely on CSA because of our disciplined processes and consistent accuracy across high volume environments.",
        scopeOfWork: [
          "Trained guards with logistics specific expertise",
          "Strict documentation and seal verification procedures",
          "GPS tracking and control room coordination for moving cargo",
          "Strong compliance with statutory and industry norms",
          "Customized SOPs for warehouse layouts and operational flows",
          "Supervisors and field officers to support daily operations",
        ],
        conclusion:
          "CSA’s combination of manpower and technology provides a balanced security system that supports efficiency and reduces risk.",
        image: "/images/services/Logistics Security/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Logistics Security Needs",
        description:
          "Logistics operations involve rapid movement, large inventories, varied stakeholders, and time bound dispatch schedules. A lapse in any stage can result in financial loss or operational delays.\n\nCSA conducts detailed assessments to identify weak points such as blind spots, high traffic zones, storage patterns, and documentation gaps. This allows us to build a security plan that supports accuracy and smooth operations.",
        scopeOfWork: [],
        image: "/images/services/Logistics Security/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Logistics Sites",
        description:
          "Every logistics facility has different storage methods, dispatch patterns, and risk categories. CSA creates customized solutions that may include:",
        scopeOfWork: [
          "Warehouse guarding and floor monitoring",
          "Vehicle movement checks and exit clearance",
          "Driver verification and gate documentation",
          "Seal and manifest matching at dispatch",
          "Patrols across perimeter and loading areas",
          "Inventory support and discrepancy reporting",
          "GPS escorted movement for high value shipments",
        ],
        conclusion:
          "These solutions help maintain transparency and accountability across the supply chain.",
        image: "/images/home/services/logistic_security.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "CSA prepares its logistics security teams through specialized training that includes:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training on seal checking, manifest validation, and gate control",
          "First aid, emergency readiness, and incident handling",
          "Coordination practices for warehouse teams and dispatch officers",
        ],
        conclusion:
          "Our teams work with discipline and precision to support your logistics cycle.",
        image: "/images/services/Logistics Security/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Logistics Providers Across India",
        description:
          "Crown Security Agency secures logistics hubs, distribution centers, and transport networks for some of India’s most recognized corporations. Our long standing presence in the sector demonstrates our capability to handle high volume operations with accuracy and integrity.",
        scopeOfWork: [],
        image: "/images/services/Logistics Security/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Mall Security Services
  {
    slug: "mall-security",
    label: "SERVICE 06",
    title: "Mall Security",
    description:
      "Crown offers comprehensive security solutions for shopping malls and retail complexes. Our services ensure customer safety, protect retail assets, and maintain a secure shopping environment for all visitors.",
    targetSegment: "Shopping Malls, Retail Complexes, and Commercial Centers.",
    scopeOfWork: [
      "Customer safety and crowd management.",
      "Asset protection and loss prevention.",
      "Access control and parking security.",
      "Emergency response and evacuation procedures.",
      "24/7 surveillance and monitoring.",
    ],
    image: "/images/services/Mall Security/m4.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-10.jpg",
        alt: "Mall Security",
      },
      content: {
        title: "Mall Security Services",
        description:
          "Shopping malls require a security system that protects large public spaces while ensuring a friendly and welcoming environment. Crown Security Agency provides specialized Mall Security Services that maintain visitor safety, support smooth retail operations, and deliver continuous vigilance across all areas of the property.\n\nWith nearly three decades of experience in high footfall environments, CSA combines trained manpower, digital monitoring, and disciplined supervision to ensure every mall operates safely, efficiently, and without disruption.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Mall Security Is Important",
      subtitle: "",
      imageSrc: "/images/services/Mall Security/m1.webp",
      imageAlt: "Mall Security",
      paragraphs: [
        "Malls handle thousands of visitors each day along with vendors, staff, events, and parking movements. This creates multiple risk points such as crowd surges, theft attempts, emergency situations, misplaced items, and unauthorized access.\n\nCSA understands the dynamic nature of mall environments and provides a protection framework that balances safety with hospitality, ensuring every visitor feels secure without experiencing intrusive oversight.",
      ],
    },
    coreValuesData: [
      {
        id: "access_bag_screening",
        title: "Access Control & Bag Screening",
        description:
          "Security guards manage entry points with efficient bag screening and access procedures that ensure visitor safety while maintaining smooth crowd flow.",
        iconColor: "#EF4444",
      },
      {
        id: "mall_parking_patrols",
        title: "Mall Floor & Parking Patrols",
        description:
          "Continuous patrolling across retail floors, corridors, escalators, basements, and parking areas to prevent incidents and detect irregularities early.",
        iconColor: "#EF4444",
      },
      {
        id: "cctv_crowd_monitoring",
        title: "CCTV & Crowd Monitoring",
        description:
          "Active support for surveillance rooms with live feed monitoring and rapid communication with on-ground teams for timely response.",
        iconColor: "#EF4444",
      },
      {
        id: "lost_found",
        title: "Lost & Found Assistance",
        description:
          "Professional handling of lost property, visitor assistance, and coordination with mall administration to maintain a positive customer experience.",
        iconColor: "#EF4444",
      },
      {
        id: "event_peak_support",
        title: "Event & Weekend Rush Support",
        description:
          "Dedicated security teams manage crowd movement during events, holidays, and peak hours to ensure safety and orderly visitor traffic.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_first_aid",
        title: "Emergency Response & First Aid Support",
        description:
          "Trained guards assist with medical emergencies, fire incidents, evacuation procedures, and coordination with local authorities when required.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Mall Security",
    coreValuesSubtitle:
      "Our security teams are trained to manage public spaces with attentiveness, courtesy, and strong situational awareness.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Mall operators choose CSA because of our ability to maintain safety without compromising the guest experience.",
        scopeOfWork: [
          "Guards trained in hospitality conduct and customer service",
          "Strong understanding of public area management",
          "Digital reporting and CCTV supported supervision",
          "Quick coordination with mall management and external agencies",
          "PSARA certified security personnel with ongoing training",
          "High discipline, consistency, and accountability across shifts",
        ],
        conclusion:
          "CSA offers a reassuring presence that supports both security and retail operations.",
        image: "/images/services/Mall Security/m4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Mall Security Needs",
        description:
          "Malls function as complex public environments with multiple entry points, service zones, emergency exits, and high activity areas. CSA conducts detailed site surveys to understand foot traffic patterns, high risk pockets, CCTV coverage, and event requirements.\n\nThis allows us to develop a security strategy that reinforces visitor comfort and operational efficiency.",
        scopeOfWork: [],
        image: "/images/services/Mall Security/m2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Shopping Malls",
        description:
          "Each mall has its own layout, crowd patterns, and seasonal variations. CSA provides customised solutions that may include:",
        scopeOfWork: [
          "Entry point control and screening",
          "Floor, atrium, and parking patrols",
          "CCTV room assistance and live monitoring",
          "Event security planning and deployment",
          "Lost and found coordination",
          "Emergency drill participation",
          "Customer assistance and queue management",
        ],
        conclusion:
          "These solutions help maintain a safe, organized, and visitor friendly environment throughout the day.",
        image: "/images/services/Mall Security/m3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "CSA prepares its mall security teams through focused training that covers:",
        scopeOfWork: [
          "Customer etiquette and hospitality behavior",
          "Crowd management and conflict resolution",
          "Fire safety and evacuation procedures",
          "First aid and emergency support",
          "Patrolling methods and surveillance coordination",
          "Visitor assistance and communication skills",
        ],
        conclusion:
          "Our personnel uphold the brand values of discipline, courtesy, and alertness in every interaction.",
        image: "/images/services/Mall Security/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Commercial and Retail Leaders Across India",
        description:
          "CSA secures malls, retail complexes, and entertainment centers for well known brands that prioritize visitor experience and safety. Our long standing presence in the sector reflects our reliability and commitment to operational excellence.",
        scopeOfWork: [],
        image: "/images/services/Mall Security/m1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // High End Residential Security Services
  {
    slug: "high-end-residential-security",
    label: "SERVICE 07",
    title: "High-End Residential Security",
    description:
      "Crown provides premium security solutions for luxury residences, gated communities, and high-end properties. Our discreet and professional services ensure privacy, protection, and peace of mind for discerning clients.",
    targetSegment:
      "Luxury Residences, Gated Communities, and High-End Properties.",
    scopeOfWork: [
      "24/7 residence monitoring and patrols.",
      "Discreet security presence.",
      "Advanced access control systems.",
      "Emergency response and coordination.",
      "Privacy protection and confidentiality.",
    ],
    image: "/images/services/High-End Residential Security/r1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-08.jpg",
        alt: "High-End Residential Security",
      },
      content: {
        title: "High End Residential Security Services",
        description:
          "Premium residences demand a security system that delivers both protection and privacy. Crown Security Agency provides High End Residential Security Services designed to safeguard gated communities, luxury apartments, villas, and private residences through discreet vigilance and courteous conduct.\n\nFor nearly three decades, CSA has protected high value residential spaces across India with trained guards, advanced monitoring support, and disciplined supervision. Our approach creates a safe, peaceful environment where residents feel secure and respected at all times.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Residential Security Matters?",
      subtitle: "",
      imageSrc: "/images/services/High-End Residential Security/r1.webp",
      imageAlt: "High-End Residential Security",
      paragraphs: [
        "High end residential communities experience a wide range of movements including residents, visitors, housekeeping staff, delivery agents, service technicians, and vehicles. Without structured access control and trained security personnel, these points can become vulnerable to intrusion, theft, or safety lapses.\n\nCSA provides a security framework that maintains complete control over entry, movement, and emergency readiness while preserving the comfort and privacy of residents.",
      ],
    },
    coreValuesData: [
      {
        id: "visitor_delivery_verification",
        title: "Visitor & Delivery Verification",
        description:
          "Security guards verify visitor entries, validate delivery personnel credentials, and maintain detailed visitor logs to allow access only to authorized individuals.",
        iconColor: "#EF4444",
      },
      {
        id: "rfid_biometric_access",
        title: "RFID & Biometric Access Control",
        description:
          "Support for RFID and biometric access systems, resident ID management, and coordination with facility teams for smooth and secure entry operations.",
        iconColor: "#EF4444",
      },
      {
        id: "night_patrols",
        title: "Night Patrols & Perimeter Checks",
        description:
          "Routine patrolling across perimeters, basements, parking areas, and common zones to maintain security during night and low-visibility hours.",
        iconColor: "#EF4444",
      },
      {
        id: "cctv_residential_monitoring",
        title: "CCTV Support & Monitoring",
        description:
          "Assistance in surveillance room operations including camera monitoring, incident tracking, and rapid coordination with on-ground security teams.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_resident_support",
        title: "Emergency Response & Resident Assistance",
        description:
          "Trained personnel respond to emergencies, support evacuations, assist residents, and coordinate with local authorities when required.",
        iconColor: "#EF4444",
      },
      {
        id: "community_etiquette",
        title: "Community Support & Service Etiquette",
        description:
          "Guards are trained in respectful communication, confidentiality, and courteous interaction with residents, families, guests, and staff.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in High End Residential Security",
    coreValuesSubtitle:
      "Residential security requires a blend of alertness, polite interaction, and precise documentation. CSA trains its teams to handle these environments with vigilance and discretion.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Residential communities prefer CSA because our security teams uphold safety while maintaining a warm and respectful presence.",
        scopeOfWork: [
          "Guards trained in etiquette, family interaction, and privacy protocols",
          "Strong understanding of community operations",
          "Digital reporting and CCTV supported supervision",
          "Background verified personnel for resident peace of mind",
          "Dedicated supervisors and quick escalation support",
          "Compliance with PSARA, PF, ESIC, and safety standards",
        ],
        conclusion:
          "CSA brings reliability, trust, and structure to every residential deployment.",
        image: "/images/services/High-End Residential Security/r1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Residential Security Needs",
        description:
          "High end residential environments operate like small communities with unique lifestyle patterns, visitor flow, staff schedules, and vendor movements. CSA conducts a detailed assessment to identify risk points, blind spots, and operational requirements.\n\nThis enables us to create a security plan that ensures safety without disrupting the comfort or routine of residents.",
        scopeOfWork: [],
        image: "/images/services/High-End Residential Security/r2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Residential Communities",
        description:
          "CSA provides customised solutions that suit villas, apartment towers, gated communities, and premium townships.",
        scopeOfWork: [
          "Visitor and delivery management",
          "Resident vehicle and parking control",
          "RFID or biometric access system integration",
          "Night patrols and community area checks",
          "Lift and lobby monitoring",
          "Perimeter patrolling and documentation",
          "Emergency response and coordination",
          "Assistance for senior citizens and families when required",
        ],
        conclusion:
          "These solutions maintain a secure and harmonious residential environment.",
        image: "/images/services/High-End Residential Security/r3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Residential security requires guards who are alert, polite, and responsible. CSA ensures this through:",
        scopeOfWork: [
          "Police verification and background screening",
          "Medical fitness assessments",
          "Training in etiquette, communication, and conflict resolution",
          "First aid and fire safety preparation",
          "Child friendly and family friendly behavior guidelines",
          "Continuous refresher training based on site needs",
        ],
        conclusion:
          "Our personnel represent the values of respect, discipline, and dependability in every interaction.",
        image: "/images/services/High-End Residential Security/r4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Premium Residential Communities Across India",
        description:
          "CSA protects several upscale communities and luxury developments. Our reputation for consistency, courtesy, and operational vigilance has made us a preferred security partner for high end properties.",
        scopeOfWork: [],
        image: "/images/services/High-End Residential Security/r5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // School Security Services
  {
    slug: "school-security",
    label: "SERVICE 08",
    title: "School Security",
    description:
      "Crown offers comprehensive security solutions for schools, colleges, and educational institutions. Our services protect students, faculty, and campus facilities while promoting a safe learning environment.",
    targetSegment: "Schools, Colleges, and Educational Institutions.",
    scopeOfWork: [
      "Student and faculty safety management.",
      "Campus access control and monitoring.",
      "Emergency response and evacuation procedures.",
      "Anti-bullying and conflict resolution.",
      "Security education and awareness programs.",
    ],
    image: "/images/home/services/school_security_1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-04.jpg",
        alt: "School Security",
      },
      content: {
        title: "School Security Services",
        description:
          "Educational institutions require a security system that protects students, staff, and visitors while maintaining a calm and nurturing environment. Crown Security Agency provides specialized School Security Services designed to support safe learning spaces with trained, child sensitive personnel and disciplined supervision.\n\nFor nearly three decades, CSA has partnered with schools, colleges, and academic campuses across India. Our approach combines structured access control, responsible guarding, and emergency readiness to ensure that safety never stands in the way of education.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why School Security Is Essential",
      subtitle: "",
      imageSrc: "/images/services/School Security/s4.webp",
      imageAlt: "School Security",
      paragraphs: [
        "Schools are high responsibility environments with constant movement of students, parents, faculty members, vendors, and transport vehicles. Without trained guards and controlled entry systems, risks such as unauthorized access, student safety lapses, and emergency handling issues can arise.\n\nCSA ensures that every campus has a security framework that supports safety without creating fear or discomfort for children.",
      ],
    },
    coreValuesData: [
      {
        id: "campus_entry_control",
        title: "Controlled Entry & Visitor Screening",
        description:
          "Security guards monitor all entry gates, verify identification, maintain visitor logs, and ensure that only authorized individuals gain access to the campus.",
        iconColor: "#EF4444",
      },
      {
        id: "student_safety_patrols",
        title: "Student Safety Patrols",
        description:
          "Personnel conduct supervised patrols across corridors, playgrounds, parking areas, and common spaces to maintain a safe and secure learning environment.",
        iconColor: "#EF4444",
      },
      {
        id: "school_bus_guarding",
        title: "School Hour & Bus Time Guarding",
        description:
          "Dedicated guards manage arrival and dispersal hours, ensuring the safe movement of students during critical transition periods.",
        iconColor: "#EF4444",
      },
      {
        id: "cctv_school_monitoring",
        title: "CCTV Room Assistance",
        description:
          "Trained operators assist in surveillance room operations by monitoring live camera feeds and coordinating with on-ground teams for prompt response.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_preparedness",
        title: "Emergency Preparedness & Evacuation Support",
        description:
          "Guards are trained in emergency drills, crowd management, first aid, and fire safety protocols to ensure readiness during any incident.",
        iconColor: "#EF4444",
      },
      {
        id: "child_friendly_conduct",
        title: "Child-Friendly Communication & Conduct",
        description:
          "Security personnel are trained to interact with children calmly and respectfully, supporting both safety and emotional comfort at all times.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in School Security",
    coreValuesSubtitle:
      "CSA trains its school security teams to be vigilant, approachable, and respectful, ensuring every student and visitor feels secure.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Educational institutions rely on CSA because of our disciplined processes and commitment to child safety.",
        scopeOfWork: [
          "Guards trained in school specific security requirements",
          "Police verified personnel for complete peace of mind",
          "CCTV supported supervision and real time coordination",
          "Strong understanding of student movement patterns",
          "Compliance with safety protocols and institutional guidelines",
          "Dedicated supervisors to support daily operations",
        ],
        conclusion:
          "CSA maintains a protective environment that reassures parents and faculty while keeping operations smooth.",
        image: "/images/services/School Security/s4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding School Security Needs",
        description:
          "Schools function differently from corporate or industrial sites. Children require monitoring that is gentle yet attentive. Visitors must be screened without delay. Emergency protocols must be clear and well practiced.\n\nCSA conducts on site assessments to identify critical points such as entry gates, playground zones, transport areas, CCTV coverage, and evacuation paths. This helps us design a security plan tailored to the rhythm of the school.",
        scopeOfWork: [],
        image: "/images/services/School Security/s6.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Schools and Academic Campuses",
        description:
          "CSA offers structured and people focused solutions for institutions of all sizes.",
        scopeOfWork: [
          "Gate control with strict ID verification",
          "Monitoring of student movement and arrival or dispersal patterns",
          "Patrols across classrooms, common areas, and playgrounds",
          "Coordination with teachers and administrative staff",
          "Support for emergency drills and safety sessions",
          "Monitoring of vendor access and service staff",
          "CCTV assistance and real-time incident reporting",
        ],
        conclusion:
          "These measures ensure safety while supporting a positive learning environment.",
        image: "/images/services/School Security/s7.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "School security demands guards who are disciplined, patient, and child sensitive. CSA prepares its teams through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in child-friendly interaction and communication",
          "First aid and fire safety preparation",
          "Visitor management and emergency coordination",
          "Continuous refresher training aligned with academic schedules",
        ],
        conclusion:
          "Our personnel represent safety, responsibility, and professionalism in every interaction.",
        image: "/images/services/School Security/s3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Educational Institutions Across India",
        description:
          "CSA secures schools, colleges, and academic campuses for leading education groups. Our commitment to safety, consistency, and respectful conduct has made us a preferred partner in the education sector.",
        scopeOfWork: [],
        image: "/images/services/School Security/s2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Event Security Services
  {
    slug: "event-security",
    label: "SERVICE 09",
    title: "Event Security",
    description:
      "Crown provides comprehensive event security solutions for conferences, concerts, sports events, and corporate gatherings. Our experienced team ensures crowd management, access control, and emergency response while maintaining a positive atmosphere for attendees.",
    targetSegment:
      "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
    scopeOfWork: [
      "Crowd control and flow management.",
      "Access control and ticket verification.",
      "Emergency response and medical coordination.",
      "VIP protection and secure transportation.",
      "Post-event security debriefing and reporting.",
    ],
    image: "/images/services/Event Security/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-11.jpg",
        alt: "Event Security",
      },
      content: {
        title: "Event Security Services",
        description:
          "Large gatherings and events require security that is both professional and adaptable. Crown Security Agency provides specialized Event Security Services designed to manage crowds, control access, and ensure the safety of attendees, performers, and staff across conferences, exhibitions, concerts, and corporate functions.\n\nWith nearly three decades of experience in high-traffic environments, CSA combines trained personnel, strategic deployment, and real-time coordination to deliver seamless security operations that support event success without disrupting the guest experience.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Event Security Is Critical?",
      subtitle: "",
      imageSrc: "/images/services/Event Security/1.webp",
      imageAlt: "Event Security",
      paragraphs: [
        "Events bring together large numbers of people in dynamic environments where safety risks can emerge quickly. From entry management to crowd control, emergency response to VIP protection, every aspect requires trained professionals who can anticipate needs and respond effectively.\n\nCSA ensures that every event has a security framework that maintains safety while preserving the positive atmosphere that guests expect.",
      ],
    },
    coreValuesData: [
      {
        id: "event_access_control",
        title: "Access Control & Guest Verification",
        description:
          "Security guards manage all entry points, verify invitation lists, handle ticket scanning, and maintain secure access for staff, performers, and attendees.",
        iconColor: "#EF4444",
      },
      {
        id: "crowd_queue_management",
        title: "Crowd Flow & Queue Management",
        description:
          "Trained teams regulate movement across entrances, exits, aisles, and activity zones to prevent congestion and ensure smooth, orderly crowd flow.",
        iconColor: "#EF4444",
      },
      {
        id: "vip_backstage_security",
        title: "VIP Escorting & Backstage Protection",
        description:
          "Specially trained personnel manage VIP access, secure backstage areas, and monitor restricted zones with strict confidentiality.",
        iconColor: "#EF4444",
      },
      {
        id: "event_coordination",
        title: "Coordination with Event Organisers",
        description:
          "Security operations are closely aligned with event planners, venue teams, and external partners to match schedules, layouts, and operational requirements.",
        iconColor: "#EF4444",
      },
      {
        id: "event_emergency_response",
        title: "Emergency Response & Evacuation Planning",
        description:
          "Guards are prepared to respond to medical incidents, fire alerts, or unforeseen situations, ensuring calm guidance and controlled evacuations.",
        iconColor: "#EF4444",
      },
      {
        id: "event_surveillance_support",
        title: "CCTV & Ground Monitoring Support",
        description:
          "Surveillance room assistance and continuous communication with supervisors help maintain full visibility across fast-moving and dynamic event environments.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Event Security",
    coreValuesSubtitle:
      "CSA’s event teams are trained to balance hospitality with alertness, ensuring safety while maintaining a positive guest experience.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Event organizers prefer CSA because our teams bring professionalism, preparation, and seamless coordination to every assignment.",
        scopeOfWork: [
          "Guards trained specifically for high crowd and high-pressure environments",
          "Strong communication and coordination with event teams",
          "Real-time supervision and detailed reporting",
          "Professional handling of VIP and performer movements",
          "PSARA certified personnel with ongoing training",
          "Ability to scale manpower quickly based on event size",
        ],
        conclusion:
          "CSA ensures that events remain safe, organized, and enjoyable for every attendee.",
        image: "/images/services/Event Security/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Event Security Needs",
        description:
          "Each event has its own flow, audience type, risk level, and venue layout. CSA begins by conducting a detailed review of entry points, crowd zones, stage placement, emergency exits, and operational schedules.\n\nThis allows us to build a security plan that integrates smoothly with event management and visitor experience.",
        scopeOfWork: [],
        image: "/images/services/Event Security/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Solutions for Events",
        description:
          "CSA provides customized deployment models to support events of any scale.",
        scopeOfWork: [
          "Guest entry control and registration desk support",
          "Queue and crowd flow management",
          "Backstage and green room security",
          "VIP escort and restricted zone protection",
          "Surveillance and incident response",
          "Parking management and vehicle coordination",
          "Coordination with local authorities when required",
          "Standby emergency and evacuation support",
        ],
        image: "/images/services/Event Security/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Event security requires guards who are attentive, polite, and capable of handling high activity situations. CSA ensures readiness through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in crowd management and conflict handling",
          "First aid and fire safety preparation",
          "Communication and coordination drills",
          "Refresher sessions based on event type and expected audience",
        ],
        conclusion:
          "Our personnel maintain discipline and professionalism from start to completion of the event.",
        image: "/images/services/Event Security/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Brands and Organisers Across India",
        description:
          "CSA has supported corporate events, exhibitions, concerts, weddings, and large public gatherings. Our dependable service quality and operational structure make us a preferred partner across the events industry.",
        scopeOfWork: [],
        image: "/images/services/Event Security/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Security Convoy Services
  {
    slug: "security-convoy-services",
    label: "SERVICE 10",
    title: "Security Convoy Services",
    description:
      "Crown provides armored convoy services for secure transportation of high-value cargo, personnel, and sensitive materials. Our professional teams ensure safe transit with advanced security protocols and real-time coordination.",
    targetSegment:
      "High-Value Transport, Government Agencies, and Corporate Clients.",
    scopeOfWork: [
      "Armored vehicle transportation.",
      "Multi-vehicle convoy protection.",
      "Route planning and risk assessment.",
      "Real-time communication and monitoring.",
      "Emergency response and backup coordination.",
    ],
    image: "/images/services/Security Convoy Services/Convoy_2.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-06.jpg",
        alt: "Security Convoy Services",
      },
      content: {
        title: "Security Convoy Services",
        description:
          "High risk movements require protection that is structured, coordinated, and ready for any situation. Crown Security Agency provides specialized Security Convoy Services designed for the safe transit of high value assets, sensitive consignments, and important personnel through trained escort teams and GPS supported movement plans.\n\nFor nearly three decades, CSA has supported industries, critical projects, and corporate groups across India with secure convoy operations that combine skilled manpower, real time monitoring, and disciplined supervision.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Security Convoy Services Are Important?",
      subtitle: "",
      imageSrc: "/images/services/Security Convoy Services/Convoy_2.webp",
      imageAlt: "Security Convoy Services",
      paragraphs: [
        "Sensitive or high value movements face risks related to route conditions, theft attempts, road incidents, and unpredictable external factors. Without trained convoy teams and structured protocols, the chances of exposure increase significantly.\n\nCSA ensures that every movement is planned, monitored, and executed with complete control and accountability.",
      ],
    },
    coreValuesData: [
      {
        id: "escort_teams",
        title: "Armed & Unarmed Escort Teams",
        description:
          "CSA deploys trained escort officers based on assignment requirements, skilled in situational awareness, convoy positioning, and professional conduct.",
        iconColor: "#EF4444",
      },
      {
        id: "gps_convoy_tracking",
        title: "GPS-Based Convoy Tracking",
        description:
          "All convoy movements are monitored in real-time by the CSA control room via GPS trackers and communication systems for complete situational awareness.",
        iconColor: "#EF4444",
      },
      {
        id: "route_risk_assessment",
        title: "Route & Risk Assessment",
        description:
          "Detailed route studies, threat identification, and contingency planning are conducted to ensure safe and uninterrupted movement of personnel or assets.",
        iconColor: "#EF4444",
      },
      {
        id: "support_vehicles_coordination",
        title: "Support Vehicles & Coordination",
        description:
          "Convoys may include pilot vehicles, follow vehicles, and dedicated support personnel to provide full coverage throughout the journey.",
        iconColor: "#EF4444",
      },
      {
        id: "authority_liaison",
        title: "Liaison with Local Authorities",
        description:
          "CSA coordinates with local law enforcement for high-sensitivity routes to enhance protection and reduce exposure to risks.",
        iconColor: "#EF4444",
      },
      {
        id: "reporting_delivery_confirmation",
        title: "Reporting & Delivery Confirmation",
        description:
          "Comprehensive documentation is maintained from dispatch to completion, including timings, checkpoints, and sealed delivery verification.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Security Convoy Services",
    coreValuesSubtitle:
      "Convoy operations require coordination, route intelligence, and trained officers capable of responding quickly and calmly.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Organizations choose CSA for convoy operations because they value discipline, transparency, and reliable execution.",
        scopeOfWork: [
          "Experienced escort officers trained for high-risk transit",
          "Real-time control room monitoring and communication",
          "Route planning that adapts to risk conditions",
          "Strong documentation and verification practices",
          "PSARA certified teams and strict compliance standards",
          "PAN India capability with quick deployment",
        ],
        conclusion:
          "CSA provides a secure transit environment that protects both people and assets.",
        image: "/images/services/Security Convoy Services/Convoy_2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Convoy Security Needs",
        description:
          "Convoy assignments vary based on consignment value, distance, location sensitivity, and movement schedules. CSA conducts an initial requirement assessment to understand these factors, followed by a route evaluation and risk analysis.\n\nThis results in a convoy plan that is structured, efficient, and tailored specifically to the operational need.",
        scopeOfWork: [],
        image: "/images/services/Security Convoy Services/Convoy_1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Security Convoy Solutions",
        description:
          "CSA provides flexible solutions suited for industries, sensitive cargo movements, and corporate requirements.",
        scopeOfWork: [
          "Armed or unarmed escort deployment",
          "Pilot vehicle and support vehicle arrangements",
          "GPS monitored transit with continuous communication",
          "Detailed checkpoint documentation",
          "Coordination with client teams and authorities",
          "Emergency response readiness",
          "Post movement reporting and verification",
        ],
        conclusion: "Each plan ensures safety from dispatch to destination.",
        image: "/images/services/Security Convoy Services/Convoy_5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Convoy operations require guards with discipline, quick response ability, and strong situational awareness. CSA prepares its convoy teams through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in escort positioning and emergency drills",
          "Route coordination and communication protocols",
          "First aid and fire safety preparation",
          "Continuous performance monitoring and refresher training",
        ],
        conclusion:
          "This ensures that every convoy is supervised by personnel who understand the seriousness of their role.",
        image: "/images/services/Security Convoy Services/Convoy_6.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Critical Industries Across India",
        description:
          "CSA has successfully managed convoy operations for logistics firms, high value projects, sensitive consignments, and corporate transfers. Our experience across various regions and route conditions demonstrates our capability in high risk transit management.",
        scopeOfWork: [],
        image: "/images/services/Security Convoy Services/Convoy_7.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // VIP Protection and Personal Security Services
  {
    slug: "vip-protection-personal-escort-security",
    label: "SERVICE 11",
    title: "VIP Protection / Personal Escort Security",
    description:
      "Crown delivers elite personal security and VIP protection services for high-profile individuals, celebrities, and executives. Our discreet and professional teams ensure complete safety and privacy for our clients.",
    targetSegment:
      "High-Profile Individuals, Celebrities, and Corporate Executives.",
    scopeOfWork: [
      "Personal bodyguard services.",
      "Residential and event security.",
      "Travel security and coordination.",
      "Threat assessment and planning.",
      "Emergency medical coordination.",
    ],
    image: "/images/services/VIP Protection - Personal Escort Security/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-09.jpg",
        alt: "VIP Protection / Personal Escort Security",
      },
      content: {
        title: "VIP Protection and Personal Security Services",
        description:
          "High profile individuals require security that is discreet, reliable, and backed by trained professionals who understand the importance of personal safety. Crown Security Agency provides VIP Protection and Personal Security Services designed to safeguard executives, dignitaries, celebrities, and high net worth individuals through close protection, route planning, and controlled movement support.\n\nFor nearly three decades, CSA has delivered personal security solutions across India with teams trained in threat assessment, escort positioning, and emergency response. Our focus is to ensure that clients feel safe and protected without experiencing any intrusion on their comfort or privacy.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why VIP Protection Is Essential?",
      subtitle: "",
      imageSrc: "",
      imageAlt: "",
      paragraphs: [
        "Executives and high profile individuals often face elevated risk levels due to public visibility, travel schedules, or sensitive job roles. These risks may arise in transit, during events, in public spaces, or even within private premises.\n\nCSA minimizes these vulnerabilities through trained close protection officers, structured movement planning, and continuous situational monitoring that ensures complete security at all times.",
      ],
    },
    coreValuesData: [
      {
        id: "threat_route_assessment",
        title: "Threat Assessment & Route Analysis",
        description:
          "CSA conducts detailed background checks, risk profiling, and route evaluations to plan safe and efficient movements for clients.",
        iconColor: "#EF4444",
      },
      {
        id: "close_protection_officers",
        title: "Trained Close Protection Officers",
        description:
          "Our officers maintain protective positioning, manage crowd interactions, and ensure clients move safely through public and private environments.",
        iconColor: "#EF4444",
      },
      {
        id: "discreet_escort_support",
        title: "Discreet Escorting & Travel Support",
        description:
          "Personnel accompany clients during meetings, events, airport transfers, hotel movements, and daily schedules based on requirements.",
        iconColor: "#EF4444",
      },
      {
        id: "driver_support_coordination",
        title: "Coordination with Drivers & Support Teams",
        description:
          "CSA ensures coordinated communication between security officers, drivers, and personal staff for seamless movement and minimal delays.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_response_preparedness",
        title: "Emergency Response Preparedness",
        description:
          "Officers are trained to identify risks early and manage emergency situations through controlled evacuation and protective shielding.",
        iconColor: "#EF4444",
      },
      {
        id: "round_the_clock_protection",
        title: "24×7 Availability for High Sensitivity Roles",
        description:
          "CSA provides round-the-clock personal protection supported by supervisors and control room monitoring, depending on client requirements.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in VIP Protection and Personal Security",
    coreValuesSubtitle:
      "Our protection officers are trained to maintain awareness, respond swiftly, and operate with complete discretion.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "High profile clients choose CSA because we combine professionalism with confidentiality and disciplined execution.",
        scopeOfWork: [
          "Officers trained in close protection and conflict avoidance",
          "Real-time communication with supervisors and control room teams",
          "Detailed planning for travel, routes, and public exposure points",
          "Police verified personnel with strong etiquette and conduct",
          "Strict adherence to privacy and confidentiality guidelines",
          "PAN India capability with quick mobilization",
        ],
        conclusion:
          "CSA provides a protective environment where clients feel both secure and respected.",
        image:
          "/images/services/VIP Protection - Personal Escort Security/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Personal Security Needs",
        description:
          "Every individual has unique routines, schedules, and exposure levels. CSA begins by understanding lifestyle patterns, travel frequency, event commitments, and potential risk scenarios.\n\nThis allows us to create a protection plan that aligns with both security requirements and personal comfort.",
        scopeOfWork: [],
        image:
          "/images/services/VIP Protection - Personal Escort Security/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored VIP Protection Solutions",
        description:
          "CSA offers personalized security programs designed for executives, dignitaries, celebrities, and families.",
        scopeOfWork: [
          "Close protection officer deployment",
          "Escorting during travel and public appearances",
          "Route planning and movement coordination",
          "Hotel, venue, and residence security support",
          "Coordination with event organizers and personal staff",
          "Confidentiality compliant documentation",
          "Standby emergency assistance",
        ],
        conclusion:
          "These solutions ensure complete safety across all personal and professional engagements.",
        image:
          "/images/services/VIP Protection - Personal Escort Security/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "VIP protection demands personnel who are alert, composed, and trained to maintain client dignity at all times. CSA ensures readiness through:",
        scopeOfWork: [
          "Police verification and thorough background checks",
          "Medical fitness assessments",
          "Training in close protection techniques and threat detection",
          "First aid and emergency response instruction",
          "Communication and conflict management drills",
          "Continuous supervision and skill refreshers",
        ],
        conclusion:
          "Our officers represent professionalism, discretion, and discipline in every assignment.",
        image:
          "/images/services/VIP Protection - Personal Escort Security/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by High Profile Clients Across India",
        description:
          "CSA has provided personal protection to executives, visiting dignitaries, corporate leaders, and well known personalities. Our consistent service quality and confidential handling have made us a trusted partner for sensitive security requirements.",
        scopeOfWork: [],
        image:
          "/images/services/VIP Protection - Personal Escort Security/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // CCTV Monitoring and Alarm Response Services
  {
    slug: "cctv-monitoring-alarm-response-services",
    label: "SERVICE 12",
    title: "CCTV Monitoring & Alarm Response Services",
    description:
      "Crown provides 24/7 CCTV monitoring and alarm response services with advanced surveillance technology and rapid response teams. Our centralized monitoring centers ensure immediate action on security threats.",
    targetSegment:
      "Commercial Buildings, Residential Complexes, and Security Systems.",
    scopeOfWork: [
      "24/7 CCTV monitoring and surveillance.",
      "Alarm system monitoring and response.",
      "Centralized control room operations.",
      "Rapid response team deployment.",
      "Incident documentation and reporting.",
    ],
    image: "/images/services/CCTV_Monitoring/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-12.jpg",
        alt: "CCTV Monitoring & Alarm Response Services",
      },
      content: {
        title: "CCTV Monitoring and Alarm Response Servicess",
        description:
          "Modern security relies heavily on real time surveillance and immediate incident response. Crown Security Agency provides CCTV Monitoring and Alarm Response Services that strengthen on ground protection through round the clock digital supervision and rapid communication with trained security personnel.\n\nWith nearly three decades of operational experience, CSA integrates skilled surveillance operators with advanced monitoring systems to give clients complete visibility across their facility. Our approach ensures early detection, quick escalation, and accurate reporting that enhances overall security performance.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why CCTV Monitoring and Alarm Response Matter?",
      subtitle: "",
      imageSrc: "",
      imageAlt: "",
      paragraphs: [
        "Physical guards alone cannot cover every corner of a facility. CCTV monitoring fills these gaps by providing continuous visibility, identifying irregularities early, and supporting quick decision making. When paired with a reliable alarm response system, threats are detected and acted upon before they escalate.\n\nCSA uses a structured monitoring framework that combines vigilant surveillance officers, digital tools, and real time communication with on ground teams to protect assets and operations effectively.",
      ],
    },
    coreValuesData: [
      {
        id: "live_feed_monitoring",
        title: "Live Feed Monitoring",
        description:
          "Trained operators monitor camera feeds, detect unusual activity, and promptly alert on-ground security teams for immediate action.",
        iconColor: "#EF4444",
      },
      {
        id: "alarm_response_coordination",
        title: "Alarm Response Coordination",
        description:
          "CSA manages alarm triggers for unauthorized access, perimeter breaches, or equipment alerts and ensures rapid communication with site supervisors and field officers.",
        iconColor: "#EF4444",
      },
      {
        id: "incident_reporting",
        title: "Incident Detection & Reporting",
        description:
          "All incidents are documented with timestamps, screenshots when required, and detailed reports are shared with clients for transparency and review.",
        iconColor: "#EF4444",
      },
      {
        id: "system_integration",
        title: "Integration with Existing Systems",
        description:
          "CSA works with client-provided CCTV infrastructure or integrates systems through technology partners based on the site’s specific needs.",
        iconColor: "#EF4444",
      },
      {
        id: "control_room_support",
        title: "24×7 Control Room Support",
        description:
          "CSA’s control room team provides round-the-clock monitoring, ensuring real-time oversight and continuous coordination with deployed security personnel.",
        iconColor: "#EF4444",
      },
      {
        id: "patrol_verification_audit",
        title: "Patrol Verification & Remote Audits",
        description:
          "Digital tools verify patrol routes, attendance, and shift activity to maintain accountability and strengthen security compliance.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in CCTV Monitoring and Alarm Response",
    coreValuesSubtitle: "Advanced surveillance and response services",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Organizations choose CSA for monitoring and alarm response because of our disciplined execution and reliable supervision.",
        scopeOfWork: [
          "Trained CCTV operators with strong attention to detail",
          "Clear SOPs for incident detection and escalation",
          "Real-time communication with on-ground teams",
          "Transparent reporting supported by digital tools",
          "Ability to integrate with existing technology setups",
          "Compliance-driven systems that ensure accountability",
        ],
        conclusion:
          "CSA adds value by combining human vigilance with advanced monitoring support.",
        image: "/images/services/CCTV_Monitoring/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding CCTV and Alarm Monitoring Needs",
        description:
          "Every facility has different layouts, blind spots, foot traffic patterns, and operational risks. CSA conducts a monitoring requirement assessment that includes camera positioning, lighting conditions, access points, and activity zones.\n\nThis evaluation helps design a monitoring plan that ensures complete visibility and accurate incident detection.",
        scopeOfWork: [],
        image: "/images/services/CCTV_Monitoring/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored CCTV Monitoring Solutions",
        description:
          "CSA provides customised surveillance solutions suitable for corporate offices, industries, residential complexes, retail malls, and logistics hubs.",
        scopeOfWork: [
          "Live monitoring of critical zones",
          "Alarm trigger verification and escalation",
          "Incident documentation and reporting",
          "Integration with access control systems",
          "Monitoring of parking areas and perimeter zones",
          "Coordination with security supervisors",
          "Remote audit support for compliance",
        ],
        conclusion:
          "These solutions help minimize blind spots and improve response time for potential threats.",
        image: "/images/services/CCTV_Monitoring/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Surveillance monitoring demands concentration, discretion, and the ability to identify issues quickly. CSA prepares its monitoring officers through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in CCTV system handling and incident detection",
          "Communication and coordination protocols",
          "First aid and emergency readiness sessions",
          "Continuous refresher training for system upgrades",
        ],
        conclusion:
          "Our personnel maintain discipline and attentiveness during every shift.",
        image: "/images/services/CCTV_Monitoring/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Corporates and Facilities Across India",
        description:
          "CSA supports surveillance operations for commercial buildings, industrial plants, logistics facilities, and residential communities. Our dependable monitoring and strong response structure make us a preferred partner for technology assisted security.",
        scopeOfWork: [],
        image: "/images/services/CCTV_Monitoring/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Access Control Management Services
  {
    slug: "access-control-management",
    label: "SERVICE 13",
    title: "Access Control Management",
    description:
      "Crown implements comprehensive access control systems for buildings, facilities, and restricted areas. Our solutions include biometric authentication, card-based systems, and digital monitoring for secure access management.",
    targetSegment:
      "Commercial Buildings, Government Facilities, and Secure Premises.",
    scopeOfWork: [
      "Biometric access control systems.",
      "Digital key card and RFID systems.",
      "Access log monitoring and reporting.",
      "System maintenance and upgrades.",
      "Emergency access protocols.",
    ],
    image: "/images/services/Access Control Management/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-13.jpg",
        alt: "Access Control Management",
      },
      content: {
        title: "Access Control Management Services",
        description:
          "Effective security begins at the entry point. Crown Security Agency provides Access Control Management Services that ensure only authorized individuals, vehicles, and materials enter your premises. With a combination of trained personnel, systematic verification processes, and integrated monitoring support, CSA strengthens the first and most critical layer of your security.\n\nFor nearly three decades, CSA has supported corporate parks, industrial plants, logistics hubs, and residential communities with structured access systems that enhance safety, transparency, and operational discipline.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Access Control Management Is Essential?",
      subtitle: "",
      imageSrc: "/images/services/Access Control Management/1.webp",
      imageAlt: "Access Control Management",
      paragraphs: [
        "Unauthorized entry can lead to theft, safety risks, data exposure, and operational disruptions. A reliable access control system ensures that every entry and exit is verified, documented, and approved.\n\nCSA provides a disciplined framework that reduces risks by combining trained guards with technology based verification tools and clear SOPs for visitor, staff, and material movement.",
      ],
    },
    coreValuesData: [
      {
        id: "visitor_registration",
        title: "Visitor Registration & ID Verification",
        description:
          "Security personnel verify identification, record visitor details, note purpose of visit, and issue temporary passes to ensure controlled entry.",
        iconColor: "#EF4444",
      },
      {
        id: "staff_access_control",
        title: "Staff Access Control",
        description:
          "Guards manage employee entry points, verify ID cards, monitor access logs, and assist with biometric or RFID-based systems for smooth and secure access.",
        iconColor: "#EF4444",
      },
      {
        id: "material_gate_pass_management",
        title: "Material & Gate Pass Management",
        description:
          "All materials entering or leaving the premises are checked against proper documentation to prevent unauthorized removal and maintain operational accuracy.",
        iconColor: "#EF4444",
      },
      {
        id: "cctv_coordination",
        title: "Coordination with CCTV & Control Room",
        description:
          "Every access point is monitored via live feeds, enabling quick verification and real-time reporting of any irregularities to the control room.",
        iconColor: "#EF4444",
      },
      {
        id: "vendor_contractor_screening",
        title: "Vendor & Contractor Screening",
        description:
          "Security personnel ensure that temporary workers, service staff, and contractors follow approved access procedures and comply with safety requirements.",
        iconColor: "#EF4444",
      },
      {
        id: "documentation_reporting",
        title: "Documentation & Reporting",
        description:
          "Daily logs, material movement records, and visitor reports are meticulously maintained to support audits and compliance requirements.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Access Control Management",
    coreValuesSubtitle:
      "CSA delivers a well structured access management system supported by personnel who are trained to handle both digital and manual processes.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Organizations rely on CSA for access control because of our disciplined execution and strong compliance focus.",
        scopeOfWork: [
          "Trained guards with expertise in verification procedures",
          "Seamless handling of manual and digital access systems",
          "Transparent documentation and reporting",
          "Real-time coordination with CCTV and control room staff",
          "Consistent supervision through dedicated site officers",
          "Compliance with PSARA and statutory norms",
        ],
        conclusion:
          "CSA enhances the security of your premises by maintaining complete control at every entry point.",
        image: "/images/services/Access Control Management/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Access Control Needs",
        description:
          "Different facilities have different access patterns, from busy corporate entrances to restricted industrial zones. CSA begins by assessing entry points, visitor load, shift timings, material flow, and existing security gaps.\n\nThis analysis helps create an access control plan that is both secure and convenient for daily operations.",
        scopeOfWork: [],
        image: "/images/services/Access Control Management/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Access Control Solutions",
        description:
          "CSA provides customised solutions that support a variety of environments including corporate offices, industrial plants, residential complexes, and logistics hubs.",
        scopeOfWork: [
          "Visitor registration and verification",
          "Employee access management",
          "Material and gate pass validation",
          "Vehicle entry and parking control",
          "Integration with biometric or RFID systems",
          "Coordination with facility and administrative teams",
          "Daily logs and audit-ready documentation",
        ],
        conclusion:
          "These solutions strengthen security while maintaining smooth operational flow.",
        image: "/images/services/Access Control Management/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Access control requires guards who are attentive, disciplined, and trained to interact with visitors and staff professionally. CSA prepares its personnel through:",
        scopeOfWork: [
          "Police verification and background screening",
          "Medical fitness assessments",
          "Training in documentation and access protocols",
          "Familiarity with biometric and digital systems",
          "Communication and visitor handling techniques",
          "Refresher training for site-specific procedures",
        ],
        conclusion:
          "Our guards maintain accuracy and courtesy at every checkpoint.",
        image: "/images/services/Access Control Management/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Organisations Across India",
        description:
          "CSA supports large corporate parks, industrial facilities, logistics centres, and premium residential spaces with dependable access control solutions. Our experience across multiple sectors ensures consistent and compliant site operations.",
        scopeOfWork: [],
        image: "/images/services/Access Control Management/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Fire Safety and Emergency Drill Support Services
  {
    slug: "fire-safety-emergency-drill-support",
    label: "SERVICE 14",
    title: "Fire Safety & Emergency Drill Support",
    description:
      "Crown provides fire safety services and emergency drill support for buildings and facilities. Our trained professionals conduct fire safety assessments, evacuation drills, and emergency preparedness training.",
    targetSegment:
      "Commercial Buildings, Residential Complexes, and Public Facilities.",
    scopeOfWork: [
      "Fire safety assessments and audits.",
      "Emergency evacuation drill coordination.",
      "Fire prevention training programs.",
      "Emergency response planning.",
      "Equipment maintenance and inspection.",
    ],
    image: "/images/services/Fire_Safety/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-14.jpg",
        alt: "Fire Safety & Emergency Drill Support",
      },
      content: {
        title: "Fire Safety and Emergency Drill Support Services",
        description:
          "Fire safety is a critical part of every organisation’s risk management system. Crown Security Agency provides Fire Safety and Emergency Drill Support Services that prepare facilities to respond effectively during emergencies. Through trained personnel, structured evacuation protocols, and coordination with safety teams, CSA helps reduce risks and ensures that all occupants understand how to act during a crisis.\n\nWith nearly three decades of operational experience across industries, CSA integrates fire preparedness into daily site operations, strengthening workplace safety and compliance.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Fire Safety and Emergency Preparedness Matter?",
      subtitle:
        "Target Segment: Commercial Buildings, Residential Complexes, and Public Facilities.",
      imageSrc: "/images/services/Fire_Safety/1.webp",
      imageAlt: "Fire Safety & Emergency Drill Support",
      paragraphs: [
        "Fires and emergency situations escalate quickly if not managed with trained personnel and clear procedures. Many incidents can be prevented or contained when guards are equipped with the right knowledge and when regular drills familiarise staff and visitors with evacuation steps.\n\nCSA ensures that every site has the training, readiness, and support needed to manage emergencies with confidence and discipline.",
      ],
    },
    coreValuesData: [
      {
        id: "fire_prevention_awareness",
        title: "Fire Prevention Awareness",
        description:
          "Guards monitor high-risk areas, identify hazards, and raise alerts when unsafe practices or irregularities are observed.",
        iconColor: "#EF4444",
      },
      {
        id: "fire_extinguisher_handling",
        title: "Fire Extinguisher Handling",
        description:
          "Personnel are trained to operate extinguishers and basic firefighting equipment to contain small fires until specialized responders arrive.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_evacuation_support",
        title: "Emergency Evacuation Support",
        description:
          "CSA teams guide occupants through marked evacuation routes, assist vulnerable individuals, and help maintain order during drills or emergencies.",
        iconColor: "#EF4444",
      },
      {
        id: "site_safety_coordination",
        title: "Coordination with Site Safety Officers",
        description:
          "Guards work closely with facility management and safety departments to align procedures with approved emergency response plans.",
        iconColor: "#EF4444",
      },
      {
        id: "fire_drills_mock_exercises",
        title: "Regular Fire Drills & Mock Exercises",
        description:
          "CSA participates in scheduled drills and organizes practice sessions to ensure readiness across all departments.",
        iconColor: "#EF4444",
      },
      {
        id: "documentation_compliance",
        title: "Documentation & Compliance Reporting",
        description:
          "All drills and incidents are documented with detailed reports, observations, and recommendations for safety audits.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Fire Safety and Emergency Drill Support",
    coreValuesSubtitle:
      "Our guards are trained to respond to critical situations with calmness and accuracy while guiding occupants to safety.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Organisations rely on CSA for fire safety support because of our disciplined processes and commitment to compliance.",
        scopeOfWork: [
          "Guards trained in fire safety and emergency response",
          "Accurate coordination during drills and evacuations",
          "Strong alignment with statutory and client safety requirements",
          "On-site supervision from field officers and safety coordinators",
          "Real-time reporting supported by digital tools",
          "Consistent training and refresher programs",
        ],
        conclusion:
          "CSA enhances workplace safety by combining trained manpower with structured readiness systems.",
        image: "/images/services/Fire_Safety/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Fire Safety Requirements",
        description:
          "Every facility has different fire risk levels based on layout, occupancy, equipment, and operational hazards. CSA begins by studying the site's emergency exits, assembly points, fire equipment placement, and typical foot traffic patterns.\n\nThis evaluation helps design a fire response plan that is practical and effective for the specific environment.",
        scopeOfWork: [],
        image: "/images/services/Fire_Safety/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Fire Safety and Emergency Preparedness Solutions",
        description:
          "CSA supports a variety of facilities including corporate offices, industrial plants, commercial buildings, and educational institutions with customised solutions.",
        scopeOfWork: [
          "Fire prevention monitoring and hazard identification",
          "Assistance in conducting fire drills and mock evacuations",
          "Support in equipment checks and readiness inspections",
          "Basic firefighting response and extinguisher handling",
          "Coordination with safety officers and emergency teams",
          "Evacuation route guidance and crowd control",
          "Drill documentation and compliance reports",
        ],
        conclusion:
          "These solutions strengthen safety culture and ensure preparedness across the organisation.",
        image: "/images/services/Fire_Safety/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Fire safety demands composure, awareness, and technical understanding. CSA prepares its personnel through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness evaluations",
          "Fire safety and extinguisher handling training",
          "Evacuation procedure and emergency coordination lessons",
          "First aid and incident response instruction",
          "Continuous refresher sessions based on site requirements",
        ],
        conclusion:
          "Our guards treat emergency readiness as a core responsibility, not an additional task.",
        image: "/images/services/Fire_Safety/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Leading Organisations Across India",
        description:
          "CSA supports fire safety programs for corporate parks, manufacturing plants, residential complexes, and commercial buildings. Our structured training and calm response make us a trusted partner in emergency preparedness.",
        scopeOfWork: [],
        image: "/images/services/Fire_Safety/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Gate Pass and Vehicle Movement Verification
  {
    slug: "gate-pass-and-vehicle-movement-verification-logistics-industrial",
    label: "SERVICE 15",
    title: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
    description:
      "Crown provides gate-pass and vehicle movement verification services for logistics and industrial facilities. Our systems ensure secure access control, vehicle verification, and movement tracking for enhanced security.",
    targetSegment:
      "Logistics Facilities, Industrial Complexes, and Secure Premises.",
    scopeOfWork: [
      "Gate-pass system implementation.",
      "Vehicle registration and verification.",
      "Movement tracking and logging.",
      "Access control for delivery vehicles.",
      "Security clearance procedures.",
    ],
    image:
      "/images/services/Gate-Pass and Vehicle Movement Verification (Logistics-Industrial)/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-15.jpg",
        alt: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
      },
      content: {
        title: "Gate Pass and Vehicle Movement Verification",
        description:
          "Accurate control of vehicle movement and material flow is essential for logistics hubs, factories, and industrial sites. Crown Security Agency provides Gate Pass and Vehicle Movement Verification Services that ensure every entry and exit is recorded, verified, and fully compliant with client documentation and operational protocols.\n\nWith nearly three decades of experience in high movement environments, CSA delivers a disciplined approach that prevents unauthorized removal of materials and maintains complete transparency across inbound and outbound activities.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Gate Pass Verification Is Important?",
      subtitle: "",
      imageSrc: "",
      imageAlt: "",
      paragraphs: [
        "Industrial and logistics facilities manage large volumes of vehicles, raw materials, finished goods, and vendor activity on a daily basis. Without strict verification at the gate, risks such as material theft, shipment discrepancies, and unauthorized access can compromise operations.\n\nCSA ensures accuracy at the first point of control by combining trained guards, detailed checking procedures, and clear documentation standards.",
      ],
    },
    coreValuesData: [
      {
        id: "gate_pass_validation",
        title: "Gate Pass Validation",
        description:
          "Guards verify material gate passes, match item descriptions, and ensure documents are signed and approved before allowing movement.",
        iconColor: "#EF4444",
      },
      {
        id: "driver_vehicle_identification",
        title: "Driver & Vehicle Identification",
        description:
          "Personnel check driver IDs, record registration numbers, verify vendor details, and maintain accurate entry and exit logs.",
        iconColor: "#EF4444",
      },
      {
        id: "shipment_material_inspection",
        title: "Shipment & Material Inspection",
        description:
          "Security teams inspect vehicle seals, confirm quantities or package counts, and compare documentation with actual load conditions.",
        iconColor: "#EF4444",
      },
      {
        id: "logistics_coordination",
        title: "Coordination with Logistics & Warehouse Teams",
        description:
          "CSA works closely with dispatch staff, storekeepers, and supervisors to ensure smooth verification and prevent delays.",
        iconColor: "#EF4444",
      },
      {
        id: "real_time_reporting",
        title: "Real-Time Reporting & Documentation",
        description:
          "All movements are logged in daily registers or digital systems to support client audits, compliance requirements, and loss prevention.",
        iconColor: "#EF4444",
      },
      {
        id: "unauthorized_movement_prevention",
        title: "Unauthorized Movement Prevention",
        description:
          "Guards monitor gates, parking areas, and dispatch zones to prevent unauthorized removal or diversion of materials.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Gate Pass and Vehicle Verification",
    coreValuesSubtitle:
      "CSA provides a structured verification system that enhances accountability and strengthens overall operational security.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Organisations choose CSA because our disciplined verification process reduces risk and supports accurate operational flow.",
        scopeOfWork: [
          "Guards trained in logistics and industrial gate procedures",
          "Strong understanding of documentation and verification standards",
          "Accurate log keeping and real-time reporting",
          "Coordinated approach with warehouse and transport teams",
          "Dedicated supervisors ensuring compliance with SOPs",
          "Strict adherence to PSARA, PF, ESIC, and labour norms",
        ],
        conclusion:
          "CSA brings transparency and accountability to high activity entry and exit points.",
        image:
          "/images/services/Gate-Pass and Vehicle Movement Verification (Logistics-Industrial)/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Gate Control Requirements",
        description:
          "Every facility has unique material flows, vendor schedules, and vehicle traffic patterns. CSA begins with a site survey to understand peak hours, entry layouts, dispatch patterns, and potential risk points.\n\nThis allows us to create a verification plan that supports efficiency without compromising control.",
        scopeOfWork: [],
        image:
          "/images/services/Gate-Pass and Vehicle Movement Verification (Logistics-Industrial)/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Gate Pass and Vehicle Verification Solutions",
        description:
          "CSA provides customized solutions suitable for factories, logistics yards, warehouses, and industrial plants.",
        scopeOfWork: [
          "Document verification for materials and goods",
          "Driver and vehicle identity recording",
          "Seal and shipment inspection",
          "Inbound and outbound vehicle logging",
          "Coordination with warehouse and dispatch teams",
          "Monitoring of parking and loading zones",
          "Daily movement reports and audit-ready documentation",
        ],
        conclusion:
          "These solutions help reduce loss, maintain accuracy, and support seamless operational movement.",
        image:
          "/images/services/Gate-Pass and Vehicle Movement Verification (Logistics-Industrial)/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Effective gate control requires guards who are detail oriented, disciplined, and confident in handling documentation. CSA ensures readiness through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in gate pass validation and material verification",
          "Instruction on documentation accuracy and log keeping",
          "Communication protocols for coordination with operations staff",
          "Refresher training based on client-specific SOPs",
        ],
        conclusion:
          "Our teams maintain strict attention to detail at every checkpoint.",
        image:
          "/images/services/Gate-Pass and Vehicle Movement Verification (Logistics-Industrial)/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Logistics and Industrial Leaders Across India",
        description:
          "CSA supports large manufacturing plants, distribution centres, and industrial hubs where material accuracy and verification standards are critical. Our disciplined approach makes us a preferred partner in gate control operations.",
        scopeOfWork: [],
        image:
          "/images/services/Gate-Pass and Vehicle Movement Verification (Logistics-Industrial)/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Cargo Integrity Audit Services
  {
    slug: "cargo-integrity-audits-logistics-security",
    label: "SERVICE 16",
    title: "Cargo Integrity Audits (Logistics Security)",
    description:
      "Crown conducts comprehensive cargo integrity audits for logistics and transportation companies. Our services ensure cargo security, prevent tampering, and maintain supply chain integrity throughout the transportation process.",
    targetSegment:
      "Logistics Companies, Transportation Firms, and Supply Chain Operators.",
    scopeOfWork: [
      "Cargo inspection and verification.",
      "Seal integrity checks.",
      "Documentation and record keeping.",
      "Tamper detection and prevention.",
      "Quality assurance audits.",
    ],
    image:
      "/images/services/Cargo Integrity Audits (Logistics Security)/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-16.jpg",
        alt: "Cargo Integrity Audits (Logistics Security)",
      },
      content: {
        title: "Cargo Integrity Audit Services",
        description:
          "Cargo integrity is essential for maintaining trust, accountability, and accuracy across logistics operations. Crown Security Agency provides Cargo Integrity Audit Services that verify seals, inspect consignments, and document every stage of cargo handling to ensure that shipments remain secure from loading to delivery.\n\nWith nearly three decades of experience in logistics and industrial security, CSA supports clients with a disciplined audit process that reduces discrepancies, prevents losses, and strengthens compliance across the supply chain.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Cargo Integrity Audits Are Important?",
      subtitle: "",
      imageSrc:
        "/images/services/Cargo Integrity Audits (Logistics Security)/1.webp",
      imageAlt: "Cargo Integrity Audits (Logistics Security)",
      paragraphs: [
        "Cargo can be exposed to risks such as tampering, pilferage, seal breakage, incorrect documentation, or mishandling during transit. Even small discrepancies can create delays, insurance issues, and financial impact.\n\nCSA ensures that every shipment is inspected with accuracy, documented thoroughly, and monitored at key transfer points to maintain complete accountability.",
      ],
    },
    coreValuesData: [
      {
        id: "seal_verification",
        title: "Seal Verification & Inspection",
        description:
          "Guards check seal numbers, ensure integrity, and verify them against manifests or dispatch documents to prevent tampering.",
        iconColor: "#EF4444",
      },
      {
        id: "manifest_document_matching",
        title: "Manifest & Documentation Matching",
        description:
          "Personnel compare shipment documents with actual cargo conditions to identify discrepancies early and ensure accuracy.",
        iconColor: "#EF4444",
      },
      {
        id: "loading_unloading_oversight",
        title: "Loading & Unloading Oversight",
        description:
          "CSA officers supervise key cargo handling points to ensure materials are moved safely and according to documented procedures.",
        iconColor: "#EF4444",
      },
      {
        id: "random_cargo_checks",
        title: "Random Cargo Checks",
        description:
          "Unscheduled inspections are conducted to deter tampering and verify compliance with client standards.",
        iconColor: "#EF4444",
      },
      {
        id: "incident_reporting",
        title: "Incident Identification & Reporting",
        description:
          "Any irregularity is recorded, photographed when required, and escalated to client teams with accurate documentation.",
        iconColor: "#EF4444",
      },
      {
        id: "high_value_cargo_support",
        title: "Support for High-Value or Sensitive Cargo",
        description:
          "CSA provides additional oversight for shipments requiring stricter controls or continuous monitoring throughout transit.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Cargo Integrity Audits",
    coreValuesSubtitle:
      "CSA provides a structured audit system that improves transparency and safeguards cargo movement.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Logistics and industrial companies prefer CSA because our audit process improves reliability and transparency across cargo movement.",
        scopeOfWork: [
          "Trained security personnel familiar with logistics documentation",
          "Accurate verification of seals, counts, and shipment details",
          "Real-time reporting and incident escalation",
          "Coordination with warehouse, dispatch, and transport teams",
          "Strong compliance and record-keeping practices",
          "Experience with high-value and sensitive consignments",
        ],
        conclusion:
          "CSA ensures cargo is monitored with discipline at every critical checkpoint.",
        image:
          "/images/services/Cargo Integrity Audits (Logistics Security)/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Cargo Integrity Requirements",
        description:
          "Every facility and supply chain has unique cargo handling patterns. CSA begins with an assessment of loading zones, storage areas, seal types, documentation workflows, and dispatch points.\n\nThis allows us to design a structured audit plan that aligns with operational flow and risk levels.",
        scopeOfWork: [],
        image:
          "/images/services/Cargo Integrity Audits (Logistics Security)/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Tailored Cargo Integrity Audit Solutions",
        description:
          "CSA delivers customized audit systems suitable for warehouses, distribution centres, logistics hubs, and industrial facilities.",
        scopeOfWork: [
          "Seal and manifest verification",
          "Loading and unloading supervision",
          "Random inspection cycles",
          "Photo documentation and incident reports",
          "Coordination with client logistics teams",
          "Monitoring of high-value or sensitive cargo",
          "Daily audit documentation for compliance reviews",
        ],
        conclusion:
          "These solutions help maintain accuracy and strengthen trust throughout the supply chain.",
        image:
          "/images/services/Cargo Integrity Audits (Logistics Security)/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "Cargo audits require guards who are detail oriented and trained to understand documentation and handling procedures. CSA ensures readiness through:",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness certification",
          "Training in seal checking and cargo documentation",
          "Incident identification and escalation techniques",
          "First aid and safety training",
          "Refresher programs aligned with logistics standards",
        ],
        conclusion:
          "CSA personnel bring discipline and accuracy to every audit assignment.",
        image:
          "/images/services/Cargo Integrity Audits (Logistics Security)/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title:
          "Trusted by Leading Logistics and Industrial Clients Across India",
        description:
          "CSA supports cargo integrity programs for supply chain operators, manufacturing units, and large warehouses. Our commitment to accuracy and compliance has made us a valued partner in cargo monitoring.",
        scopeOfWork: [],
        image:
          "/images/services/Cargo Integrity Audits (Logistics Security)/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
  // Perimeter Patrolling and PPE Compliance Services
  {
    slug: "perimeter-patrolling-ppe-compliance-industrial-security",
    label: "SERVICE 17",
    title: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
    description:
      "Crown provides perimeter patrolling services and PPE compliance monitoring for industrial facilities. Our trained security personnel ensure facility security and enforce safety protocols for worker protection.",
    targetSegment:
      "Industrial Facilities, Manufacturing Plants, and Construction Sites.",
    scopeOfWork: [
      "Perimeter security patrols.",
      "PPE compliance monitoring.",
      "Safety protocol enforcement.",
      "Security breach prevention.",
      "Incident reporting and documentation.",
    ],
    image: "/images/services/Perimeter_Patrolling/1.webp",
    heroData: {
      media: {
        type: "image",
        src: "/images/services/updated/service-17.jpg",
        alt: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
      },
      content: {
        title: "Perimeter Patrolling and PPE Compliance Services",
        description:
          "Industrial environments demand continuous vigilance to maintain safety, security, and operational discipline. Crown Security Agency provides Perimeter Patrolling and PPE Compliance Services that protect plant boundaries, monitor restricted zones, and ensure that every individual on site follows approved safety regulations.\n\nWith nearly three decades of experience in industrial and manufacturing security, CSA combines trained manpower, structured patrol systems, and safety focused supervision to maintain secure and compliant work environments.",
      },
      overlay: {
        enabled: true,
        color: "#252929",
        opacity: 0.6,
      },
      contentPosition: "left",
      minHeight: "600px",
    },
    infoSplitData: {
      label: "",
      title: "Why Perimeter Patrolling and PPE Compliance Are Important?",
      subtitle: "",
      imageSrc: "/images/services/Perimeter_Patrolling/1.webp",
      imageAlt: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
      paragraphs: [
        "Factories, warehouses, and industrial plants face risks related to trespassing, equipment interference, safety lapses, and unauthorized movement. At the same time, failure to follow PPE requirements can lead to injuries, operational shutdowns, and regulatory violations.\n\nCSA strengthens site security with regular patrols, strict monitoring, and professional enforcement of safety guidelines to protect people, assets, and processes.",
      ],
    },
    coreValuesData: [
      {
        id: "routine_perimeter_patrolling",
        title: "Routine Perimeter Patrolling",
        description:
          "Guards conduct scheduled and unscheduled patrols across boundary lines, restricted areas, open yards, and night routes to detect irregularities early.",
        iconColor: "#EF4444",
      },
      {
        id: "ppe_usage_verification",
        title: "PPE Usage Verification",
        description:
          "Personnel ensure that workers, contractors, and visitors comply with mandatory PPE requirements including helmets, safety shoes, gloves, jackets, and other protective gear.",
        iconColor: "#EF4444",
      },
      {
        id: "restricted_zone_monitoring",
        title: "Monitoring of Restricted Zones",
        description:
          "CSA guards monitor high-risk and sensitive areas such as hazardous zones, utility rooms, machinery areas, and storage yards.",
        iconColor: "#EF4444",
      },
      {
        id: "safety_officer_coordination",
        title: "Coordination with Safety Officers",
        description:
          "Security teams work closely with client safety departments to support audits, inspections, and ongoing compliance reviews.",
        iconColor: "#EF4444",
      },
      {
        id: "incident_detection_reporting",
        title: "Incident Detection & Reporting",
        description:
          "Safety violations, suspicious movements, or security concerns are immediately escalated and documented for timely corrective action.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency_readiness_support",
        title: "Support for Emergency Readiness",
        description:
          "Guards assist during evacuation drills, alarm activation, and routine safety checks to maintain overall workplace preparedness.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Expertise in Perimeter Patrolling and PPE Compliance",
    coreValuesSubtitle:
      "Our teams are trained to identify risks early, maintain disciplined patrol cycles, and enforce safety compliance across all work zones.",
    serviceSectionData: [
      {
        label: "",
        targetSegment: "",
        title: "Why Clients Trust Crown Security Agency?",
        description:
          "Industrial clients choose CSA because of our disciplined approach and strong understanding of safety compliance.",
        scopeOfWork: [
          "Guards trained in hazard awareness and safety protocols",
          "Regular patrol verification supported by digital tools",
          "Accurate PPE monitoring and enforcement",
          "Strong coordination with plant heads and safety officers",
          "Real-time reporting and documentation",
          "Compliance-driven operations across all deployments",
        ],
        conclusion:
          "CSA integrates security and safety to help industries maintain smooth and incident free operations.",
        image: "/images/services/Perimeter_Patrolling/1.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Understanding Industrial Safety and Patrol Requirements",
        description:
          "Each industrial facility has different layouts, risk zones, shift patterns, and safety regulations. CSA begins by studying site maps, patrol routes, PPE requirements, and operational hazards.\n\nThis allows us to create a tailored security plan that supports both safety and production efficiency.",
        scopeOfWork: [],
        image: "/images/services/Perimeter_Patrolling/2.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title:
          "Tailored Solutions for Industrial Patrolling and PPE Enforcement",
        description:
          "CSA provides customised solutions designed to protect high activity industrial environments.",
        scopeOfWork: [
          "Scheduled and surprise perimeter patrols",
          "PPE verification at entry gates and work zones",
          "Monitoring of equipment and restricted areas",
          "Coordination with safety teams and plant management",
          "Reporting of safety violations and operational irregularities",
          "Emergency support and drill participation",
          "Documentation for compliance and audits",
        ],
        conclusion:
          "These solutions help reduce risks and maintain discipline across industrial sites.",
        image: "/images/services/Perimeter_Patrolling/3.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Certified, Trained, and Reliable Personnel",
        description:
          "CSA prepares its industrial patrol teams through focused training that ensures readiness and awareness.",
        scopeOfWork: [
          "Police verification and background checks",
          "Medical fitness assessments",
          "Training in industrial safety and hazard identification",
          "First aid and fire safety instruction",
          "Documentation and reporting procedures",
          "Continuous refresher training aligned with client SOPs",
        ],
        conclusion:
          "Our guards maintain strong attention to detail and uphold the highest safety standards.",
        image: "/images/services/Perimeter_Patrolling/4.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
      {
        label: "",
        targetSegment: "",
        title: "Trusted by Manufacturing and Industrial Clients Across India",
        description:
          "CSA secures plants, factories, energy sites, and large industrial campuses where perimeter protection and safety compliance are critical. Our structured supervision and disciplined patrol practices make us a trusted partner for long term industrial operations.",
        scopeOfWork: [],
        image: "/images/services/Perimeter_Patrolling/5.webp",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#000",
            textColor: "#000",
            href: "/contact-us",
          },
        ],
      },
    ],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find((service) => service.slug === slug);
};

// Get all service slugs for static generation
export const getAllServiceSlugs = (): string[] => {
  return services.map((service) => service.slug);
};
