export interface ButtonConfig {
  text: string;
  variant?: 'primary' | 'secondary';
  iconBgColor?: string;
  textColor?: string;
  href?: string;
  onClick?: () => void;
}

export interface ServiceData {
  label: string;
  title: string;
  description: string;
  targetSegment: string;
  scopeOfWork: string[];
  image: string;
  buttons?: ButtonConfig[];
  conclusion?: string;
}

export const serviceData: ServiceData[] = [
  {
    label: "SERVICE 01",
    title: "Corporate Park Security",
    description: "Crown’s Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment. Our trained personnel manage access points, visitor verification, vehicle checks, and CCTV surveillance with precision and discretion. Every site operates on clearly defined SOPs, regular audits, and emergency response drills to ensure smooth business continuity. With a customer-focused approach, we combine strong deterrence with courteous service that ensures all employees, clients, and visitors feel safe and valued within your premises.",
    targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
    scopeOfWork: [
      "Visitor verification and employee ID checks.",
      "Access control and vehicle management.",
      "CCTV monitoring and alarm response coordination.",
      "Fire and emergency drill assistance.",
      "Incident reporting, documentation, and escalation to supervisors."
    ],
    image: "/images/services/updated/service-01.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/corporate-park-security"
      }
    ]
  },
  {
    label: "SERVICE 02",
    title: "Escort Services",
    description: "Crown’s Escort Services provide end-to-end protection for high-value personnel, cash, documents, or sensitive consignments. Each movement is planned with detailed route mapping, risk assessments, and timed check-ins to minimize exposure. Our escort teams are trained in close protection, communication protocols, and contingency handling, ensuring security without disrupting operations. Whether it’s a single transfer or a recurring route, we maintain chain-of-custody documentation and real-time tracking that offers safety, reliability, and complete accountability.",
    targetSegment: "Banks, Logistics Firms, High-Profile Individuals, and Corporations.",
    scopeOfWork: [
      "Route planning and risk assessment.",
      "Armed/unarmed escort deployment for asset or personnel movement.",
      "Real-time GPS tracking and communication with the control room.",
      "Chain-of-custody documentation and secure delivery confirmation.",
      "Coordination with local authorities for safe transit."
    ],
    image: "/images/services/updated/service-05.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/escort-services"
      }
    ]
  },
  {
    label: "SERVICE 03",
    title: "Hospitality Services",
    description: "Our Hospitality Security services are built to protect guests, staff, and assets while upholding the warmth and elegance your brand represents. Trained guards seamlessly blend into hotel and venue environments whilst managing access control, crowd flow, and emergency procedures with professionalism. We emphasize discretion, guest assistance, and conflict de-escalation to ensure security never feels intrusive. From luxury hotels to large-scale events, Crown helps you create a safe yet refined atmosphere for every guest experience.",
    targetSegment: "Hotels, Resorts, Clubs, and Event Venues.",
    scopeOfWork: [
      "Access control and guest screening.",
      "Lobby and event area patrolling.",
      "Crowd management and queue control.",
      "Coordination with hotel staff and emergency response teams.",
      "VIP handling and discreet guest assistance."
    ],
    image: "/images/services/updated/service-07.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/hospitality-services"
      }
    ]
  },
  {
    label: "SERVICE 04",
    title: "Industrial Security",
    description: "Crown’s Industrial Security programs safeguard factories, plants, and high-risk industrial zones with a robust, compliance-driven framework. Our teams are trained in hazard awareness, perimeter defence, permit-to-work procedures, and coordination with on-site safety departments. We conduct continuous inspections, vehicle and goods verification, and maintain detailed incident documentation to ensure audit readiness. By integrating manpower with surveillance systems and safety controls, we protect people, processes, assets and keep operations running securely and efficiently.",
    targetSegment: "Factories, Manufacturing Units, Industrial Estates, and Warehouses.",
    scopeOfWork: [
      "Perimeter guarding and gate management.",
      "PPE and safety compliance enforcement.",
      "Vehicle entry checks and goods verification.",
      "Fire safety coordination and alarm response.",
      "Perimeter patrols and equipment security monitoring."
    ],
    image: "/images/services/updated/service-02.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/industrial-security"
      }
    ]
  },
  {
    label: "SERVICE 05",
    title: "Logistics Security",
    description: "We provide comprehensive Logistics Security solutions that protect goods from origin to destination. Crown’s security personnel oversee warehouse operations, loading docks, and vehicle movements with strict verification and monitoring systems. For high-value or sensitive cargo, we add armed escorts, GPS tracking, and sealed-shipment monitoring to ensure zero diversion or loss. Our procedures integrate seamlessly with your logistics network, giving complete visibility, minimising inventory loss and unauthorized movement of goods, and smooth operational flow across the supply chain.",
    targetSegment: "Logistics Hubs, E-Commerce Warehouses, Transport Companies, and Distribution Centers.",
    scopeOfWork: [
      "Warehouse and dockside guarding.",
      "Vehicle movement verification and driver checks.",
      "GPS-tracked convoy escorts for high-value cargo.",
      "Shipment sealing and integrity verification.",
      "Inventory loss prevention and real-time reporting."
    ],
    image: "/images/services/updated/service-03.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/logistics-security"
      }
    ]
  },
  {
    label: "SERVICE 06",
    title: "Mall Security",
    description: "Crown’s Mall Security service ensures that every visitor enjoys a safe, comfortable shopping experience while retailers operate without disruption. Our personnel are trained in access control, emergency response, first aid, and crowd management, working closely with mall administration and local authorities. We provide 24/7 surveillance, event support, and loss prevention measures designed for large public environments. Professional yet approachable, our team embodies the perfect balance of safety, hospitality, and vigilance.",
    targetSegment: "Shopping Malls, Retail Complexes, and Entertainment Centers.",
    scopeOfWork: [
      "Access control and bag checks at entry points.",
      "Mall floor and parking lot patrolling.",
      "CCTV and crowd movement monitoring.",
      "Lost-and-found and first-aid assistance.",
      "Event support and coordination with management."
    ],
    image: "/images/services/updated/service-10.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/mall-security"
      }
    ]
  },
  {
    label: "SERVICE 07",
    title: "High-End Residential Security",
    description: "Crown delivers discreet, reliable protection for premium residences and gated communities through a blend of technology and human expertise. We manage visitor entries, monitor CCTV systems, and conduct round-the-clock patrols, all while maintaining residents’ privacy and comfort. Our guards are trained in etiquette, emergency handling, and resident coordination services, ensuring trust and reassurance at every interaction. By creating a secure yet peaceful environment, we help residents feel protected without feeling watched.",
    targetSegment: "Gated Communities, Luxury Apartments, and Private Residences.",
    scopeOfWork: [
      "Visitor and delivery verification.",
      "RFID/Biometric entry management.",
      "Night patrols and perimeter checks.",
      "Emergency response and resident assistance.",
      "Regular audits and community updates."
    ],
    image: "/images/services/updated/service-08.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/high-end-residential-security"
      }
    ]
  },
  {
    label: "SERVICE 08",
    title: "School Security",
    description: "Crown’s School Security service is designed to create a safe, nurturing environment for students, staff, and parents. We implement controlled entry systems, visitor ID checks, and supervised patrols throughout school hours. Guards are carefully trained in child protection, first response, and crisis management to ensure safety with empathy. Working hand-in-hand with administrators, we develop customized emergency plans and conduct safety drills, keeping the focus on learning, care, and confidence.",
    targetSegment: "Schools, Colleges, and Educational Institutions.",
    scopeOfWork: [
      "Controlled entry and visitor screening.",
      "Guarding during school hours and bus timings.",
      "Student safety patrols across campus.",
      "Emergency drills and evacuation support.",
      "Background-verified security personnel."
    ],
    image: "/images/services/updated/service-04.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/school-security"
      }
    ]
  },
  {
    label: "SERVICE 09",
    title: "Event Security",
    description: "Crown’s Event Security services are designed to handle gatherings of any scale, from corporate conferences and exhibitions to concerts and private functions. Our trained personnel manage entry control, crowd flow, stage and backstage access, and emergency response coordination. Each deployment is tailored to the event layout and risk level, with on-ground supervisors ensuring seamless execution. We focus on maintaining safety while preserving the atmosphere of the event, ensuring that guests, organizers, and VIPs can enjoy a secure and organized experience.",
    targetSegment: "Corporate Events, Exhibitions, Concerts, Weddings, and Public Gatherings.",
    scopeOfWork: [
      "Access control and guest verification.",
      "Crowd flow and queue management.",
      "VIP escorting and backstage protection.",
      "Coordination with event organisers and local authorities.",
      "Emergency response and evacuation planning."
    ],
    image: "/images/services/updated/service-11.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/event-security"
      }
    ]
  },
  {
    label: "SERVICE 10",
    title: "Security Convoy Services",
    description: "For the safe transit of high-value assets or personnel, Crown offers specialized Security Convoy Services. Each convoy is manned by armed or trained escort officers who follow pre-defined routes and communication protocols, ensuring protection against potential threats during movement. Our teams coordinate with local law enforcement and utilize GPS tracking for real-time updates and control room oversight. This service is ideal for corporate transfers, sensitive consignments, and high-risk areas where additional escort support is essential.",
    targetSegment: "Defense Projects, Cash-in-Transit Firms, and High-Risk Consignment Operators.",
    scopeOfWork: [
      "Armed escort and support vehicle deployment.",
      "GPS-based convoy tracking and live communication.",
      "Route and risk planning with contingency protocols.",
      "Liaison with local authorities during transit.",
      "Reporting and verification of delivery completion."
    ],
    image: "/images/services/updated/service-06.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/security-convoy-services"
      }
    ]
  },
  {
    label: "SERVICE 11",
    title: "VIP Protection / Personal Escort Security",
    description: "Crown’s VIP Protection division provides discreet and reliable close protection for executives, dignitaries, and high-profile individuals. Our security officers are professionally trained in threat assessment, movement control, and emergency response. Every assignment is planned with route analysis, vehicle coordination, and standby contingencies. We balance strong personal protection with tact and discretion, ensuring safety without intruding on comfort or privacy.",
    targetSegment: "Executives, Diplomats, Celebrities, and High-Profile Individuals.",
    scopeOfWork: [
      "Threat assessment and advanced route planning.",
      "Close protection deployment and vehicle coordination.",
      "Discreet escorting in public and private spaces.",
      "24/7 supervision and real-time updates to client coordinators."
    ],
    image: "/images/services/updated/service-09.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/vip-protection-personal-escort-security"
      }
    ]
  },
  {
    label: "SERVICE 12",
    title: "CCTV Monitoring & Alarm Response Services",
    description: "Beyond physical manpower, Crown offers integrated CCTV monitoring and alarm response services to strengthen site security. Our trained surveillance operators monitor live feeds, manage access systems, and coordinate with ground teams for quick incident response. Whether through client-provided infrastructure or our technology partners, we ensure continuous monitoring and documentation of activities. This integration of manpower and technology helps reduce blind spots and improve reaction time across all types of facilities.",
    targetSegment: "Corporate Offices, Industrial Units, Residential Complexes, and Retail Malls",
    scopeOfWork: [
      "Real-time CCTV feed monitoring.",
      "Alarm response and control room coordination.",
      "Surveillance reporting and evidence documentation.",
      "Integration with client or partnered systems."
    ],
    image: "/images/services/updated/service-12.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/cctv-monitoring-alarm-response-services"
      }
    ]
  },
  {
    label: "SERVICE 13",
    title: "Access Control Management",
    description: "Crown’s Access Control Management system ensures that only authorized individuals gain entry to your premises. Security personnel are trained to handle digital or manual access systems, maintain visitor logs, and verify identification credentials. Combined with CCTV oversight, this layered system helps prevent unauthorized entry and enhances accountability. We customize access protocols based on client operations, whether for offices, industrial sites, or gated communities.",
    targetSegment: "Corporate Parks, Industrial Sites, and Residential Complexes",
    scopeOfWork: [
      "Visitor registration and ID verification.",
      "Staff access control and log maintenance.",
      "Gate-pass validation for materials and vehicles.",
      "Coordination with CCTV and the control room."
    ],
    image: "/images/services/updated/service-13.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/access-control-management"
      }
    ]
  },
  {
    label: "SERVICE 14",
    title: "Fire Safety & Emergency Drill Support",
    description: "Crown incorporates fire safety and emergency preparedness into every major deployment. Our guards receive basic fire-safety and evacuation training, allowing them to assist during critical situations until specialized responders arrive. We collaborate with client safety officers to conduct periodic fire drills, equipment checks, and evacuation rehearsals. This proactive approach minimizes downtime, enhances readiness, and ensures compliance with safety standards.",
    targetSegment: "Industrial Plants, Commercial Buildings, and Corporate Offices",
    scopeOfWork: [
      "Fire prevention awareness and training.",
      "Fire extinguisher inspection and readiness.",
      "Coordinating with fire safety officers during emergencies.",
      "Conducting evacuation drills and equipment checks."
    ],
    image: "/images/services/updated/service-14.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/fire-safety-emergency-drill-support"
      }
    ]
  },
  {
    label: "SERVICE 15",
    title: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
    description: "At logistics hubs and industrial plants, Crown enforces strict gate-pass and vehicle movement verification systems. Each entry and exit is recorded, checked, and validated against client-issued documentation. Guards verify driver credentials, vehicle seals, and shipment integrity before release. These measures help prevent unauthorized removals and maintain accurate tracking of goods, which is a key factor in maintaining operational transparency and reducing loss.",
    targetSegment: "Factories, Logistics Yards, Industrial Complexes.",
    scopeOfWork: [
      "Gate-pass validation for goods and materials.",
      "Vehicle entry/exit log maintenance.",
      "Driver ID and document verification.",
      "Coordination with logistics and control room."
    ],
    image: "/images/services/updated/service-15.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/gate-pass-and-vehicle-movement-verification-logistics-industrial"
      }
    ]
  },
  {
    label: "SERVICE 16",
    title: "Cargo Integrity Audits (Logistics Security)",
    description: "Crown conducts cargo integrity audits to ensure that consignments remain secure from loading to delivery. Our teams inspect shipment seals, verify manifests, and monitor handling practices at key transfer points. Reports are logged and shared with clients to maintain accountability and compliance with insurance and audit standards. This service adds an extra layer of assurance for high-value or time-sensitive cargo.",
    targetSegment: "Warehouses, Supply Chain Hubs, and Logistics Partners.",
    scopeOfWork: [
      "Seal and manifest verification.",
      "Random cargo inspections.",
      "Handling oversight at loading/unloading points.",
      "Incident reporting and compliance documentation."
    ],
    image: "/images/services/updated/service-16.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/cargo-integrity-audits-logistics-security"
      }
    ]
  },
  {
    label: "SERVICE 17",
    title: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
    description: "For industrial and manufacturing sites, Crown integrates perimeter patrols with safety compliance monitoring. Our guards perform routine checks along boundary lines and restricted areas, ensuring there are no breaches or safety lapses. They also help enforce Personal Protective Equipment (PPE) usage, coordinating with safety officers to maintain workplace safety standards. This combination of vigilance and compliance keeps industrial operations running safely and efficiently.",
    targetSegment: "Manufacturing Plants, Industrial Facilities, and Energy Sites.",
    scopeOfWork: [
      "Regular perimeter checks and restricted zone monitoring.",
      "PPE compliance verification.",
      "Coordination with safety officers and site supervisors.",
      "Reporting safety or operational irregularities."
    ],
    image: "/images/services/updated/service-17.jpg",
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/perimeter-patrolling-ppe-compliance-industrial-security"
      }
    ]
  }
];
