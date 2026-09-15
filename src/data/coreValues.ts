// coreValues.data.ts

/**
 * Represents a single core value for the organization
 */
export interface CoreValue {
  /**
   * Unique identifier for the core value
   */
  id: string;

  /**
   * Display title of the core value
   */
  title: string;

  /**
   * Descriptive text explaining the core value
   */
  description: string;

  /**
   * Optional color for the icon (hex format)
   * @default '#EF4444'
   */
  iconColor?: string;
}

/**
 * Props for the ValueCard component
 */
export interface ValueCardProps {
  /**
   * The core value to display in the card
   */
  value: CoreValue;

  /**
   * Optional CSS class name for styling
   */
  className?: string;
}

/**
 * Props for the CoreValues component
 */
export interface CoreValuesProps {
  /**
   * Optional array of core values to display
   * If not provided, default values will be used
   */
  values?: CoreValue[];

  /**
   * Optional custom heading text
   */
  heading?: string;

  /**
   * Optional custom company name
   */
  companyName?: string;
}

/**
 * Core values data for Crown Security Agencies
 */
export const coreValuesData: CoreValue[] = [
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We carry out every assignment with honesty, discipline, and transparency, ensuring trust remains at the core of all we do.",
    iconColor: "#EF4444",
  },
  {
    id: "commitment",
    title: "Commitment",
    description:
      "We stand by our clients and employees every day, delivering dependable service and consistent support across all operations.",
    iconColor: "#EF4444",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We embrace modern technology and continuous improvement to make security smarter, faster, and more transparent.",
    iconColor: "#EF4444",
  },
  {
    id: "people-first",
    title: "People-First",
    description:
      "We value and empower every employee through respect, training, and growth opportunities that build lasting pride and purpose.",
    iconColor: "#EF4444",
  },
  {
    id: "compliance",
    title: "Compliance",
    description:
      "We maintain 100% adherence to PSARA, PF/ESIC, and state labour laws, ensuring ethical and lawful operations across India.",
    iconColor: "#EF4444",
  },
];

/**
 * Company information
 */
export const companyInfo = {
  name: "Crown Security Agencies",
  sectionHeading: "Core Values",
};

/**
 * Alternative core values for different contexts
 * Can be used to swap out values based on department, region, etc.
 */
export const alternativeCoreValues: Record<string, CoreValue[]> = {
  leadership: [
    {
      id: "vision",
      title: "Vision",
      description:
        "We look ahead and anticipate challenges, ensuring we stay at the forefront of industry innovation.",
      iconColor: "#3B82F6",
    },
    {
      id: "accountability",
      title: "Accountability",
      description:
        "We take ownership of our actions and decisions, holding ourselves to the highest standards.",
      iconColor: "#3B82F6",
    },
    {
      id: "excellence",
      title: "Excellence",
      description:
        "We pursue excellence in everything we do, constantly striving to exceed expectations.",
      iconColor: "#3B82F6",
    },
  ],
};
