import React from 'react';

export const JsonLd: React.FC = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Crown Security Agencies",
    "image": "https://crownsecuritysolutions.com/images/css_logo.svg",
    "@id": "https://crownsecuritysolutions.com",
    "url": "https://crownsecuritysolutions.com",
    "telephone": "+91-8108107824",
    "email": "info@crownsecuritysolutions.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Elite's Hajra Mansion, 02, off Doctor Ansari Road, 2nd, Rabodi, Thane West",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400601",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/crownsecurity-agencies/",
      "https://www.instagram.com/crownsecurityagencies",
      "https://www.facebook.com/share/1ER1LcPvMA/?mibextid=wwXIfr"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData)
      }}
    />
  );
};