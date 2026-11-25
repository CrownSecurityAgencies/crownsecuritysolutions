// data/navigation.ts
import { services } from "./services";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Our Process",
    href: "/our-process",
  },
  {
    label: "Our Workforce",
    href: "/our-workforce",
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Certifications",
    href: "/certification",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export const contact = {
  title: "Contact Us",
  address:
    "Elite's Hajra Mansion, 02, off Doctor Ansari Road, 2nd, Rabodi, Thane West, Thane, Maharashtra 400601",
  email: "info@crownsecuritysolutions.com",
  phone: "+91 98200 00000",
  mapUrl: "https://maps.google.com/?cid=123456789",
};
