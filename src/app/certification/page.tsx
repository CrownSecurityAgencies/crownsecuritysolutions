import type { Metadata } from "next";
import CertificatesSection from "@/components/Sections/CertificatesSection/CertificatesSection";
import "./page.module.scss";

export const metadata: Metadata = {
  title: "PSARA & ISO Certified",
  description:
    "Crown Security Agencies is a PSARA licensed and ISO certified security guard company offering compliant, background-verified security services across India.",
  alternates: {
    canonical: "https://crownsecuritysolutions.com/certification/",
  },
};

export default function Certification() {
  return (
    <>
      <CertificatesSection />
    </>
  );
}
