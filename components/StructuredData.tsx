export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://greenthumb-ke.vercel.app/#organization",
    "name": "GreenThumb KE",
    "alternateName": "GreenThumb Kenya",
    "description": "Best irrigation systems and lawn care company in Kenya and East Africa. Professional lawn care services, smart irrigation installation, garden maintenance, and hydroponic systems in Nairobi, Kenya.",
    "url": "https://greenthumb-ke.vercel.app",
    "logo": "https://greenthumb-ke.vercel.app/logos/Green%20Thumb%20Logo%20Round.png",
    "image": "https://greenthumb-ke.vercel.app/logos/Green%20Thumb%20Logo%20Round.png",
    "telephone": ["+254702005560", "+254704096417"],
    "email": "254greenthumb@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalimoni",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921",
      "longitude": "36.8219"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-1.2921",
          "longitude": "36.8219"
        },
        "geoRadius": {
          "@type": "Distance",
          "name": "East Africa"
        }
      }
    ],
    "priceRange": "$$",
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
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/1BiBATzodF/",
      "https://www.instagram.com/greenthumb_254",
      "https://www.tiktok.com/@greenthumbkenya"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care and Irrigation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Care Services",
            "description": "Professional lawn care and maintenance services in Kenya. Best lawn care company in Nairobi and East Africa.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GreenThumb KE"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kenya"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Irrigation Systems Installation",
            "description": "Best irrigation systems company in Kenya. Smart irrigation installation, drip irrigation, and automated watering systems in Nairobi and East Africa.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GreenThumb KE"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kenya"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Services",
            "description": "Professional garden design and maintenance services in Kenya. Garden care and landscaping services in Nairobi.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GreenThumb KE"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kenya"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hydroponic Systems",
            "description": "Hydroponic farming systems installation in Kenya. Soilless farming solutions for homes and businesses in Nairobi and East Africa.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GreenThumb KE"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kenya"
            }
          }
        }
      ]
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GreenThumb KE",
    "alternateName": "GreenThumb Kenya",
    "description": "Best irrigation systems and lawn care company in Kenya and East Africa. Leading provider of professional lawn care services, smart irrigation systems, garden maintenance, and hydroponic solutions in Nairobi, Kenya.",
    "url": "https://greenthumb-ke.vercel.app",
    "logo": "https://greenthumb-ke.vercel.app/logos/Green%20Thumb%20Logo%20Round.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254702005560",
      "contactType": "Customer Service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"]
    },
    "sameAs": [
      "https://www.facebook.com/share/1BiBATzodF/",
      "https://www.instagram.com/greenthumb_254",
      "https://www.tiktok.com/@greenthumbkenya"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

