import React from 'react';

export const JsonLd: React.FC = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Crown Security Agencies",
    "image": "/images/logo.png",
    "@id": "https://crownsecuritysolutions.com",
    "url": "https://crownsecuritysolutions.com",
    "telephone": "+91-98200 98200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 201, 2nd Floor, Shreeji Plaza, Near Khar West Station",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400052",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0330,
      "longitude": 72.8270
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://in.linkedin.com/company/crown-security-solutions"
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