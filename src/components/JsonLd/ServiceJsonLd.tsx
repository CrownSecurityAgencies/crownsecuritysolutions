import React from "react";

type ServiceJsonLdProps = {
  name: string;
  description: string;
  url: string;
};

export default function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://crownsecuritysolutions.com${url.endsWith("/") ? url : `${url}/`}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://crownsecuritysolutions.com/#business",
      name: "Crown Security Agencies",
      url: "https://crownsecuritysolutions.com/",
    },
    areaServed: [
      "Delhi",
      "Haryana",
      "Gujarat",
      "Maharashtra",
      "Karnataka",
      "Telangana",
      "Tamil Nadu",
    ].map((name) => ({ "@type": "AdministrativeArea", name })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
