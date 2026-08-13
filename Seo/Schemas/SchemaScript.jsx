// import { SiteConfig } from "@/config/siteConfig";


// export default function SchemaScript() {
//     const schemaData = {
//         "@context": "https://schema.org",
//         "@graph": [
//             {
//                 "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService"],
//                 "@id": `${SiteConfig.url}/#organization`,
//                 "name": SiteConfig.brandName,
//                 "url": SiteConfig.url,
//                 "logo": `${SiteConfig.url}/logo.png`,
//                 "image": `${SiteConfig.url}/og-image.jpg`,
//                 "description": SiteConfig.description,
//                 "telephone": SiteConfig.displayNumber,
//                 "email": SiteConfig.email,
//                 "priceRange": "$$",
//                 "foundingDate": SiteConfig.foundedYear,
//                 "hasMap": SiteConfig.GMB.mapsLink || SiteConfig.mapsLink,
//                 "address": {
//                     "@type": "PostalAddress",
//                     "streetAddress": SiteConfig.streetAddress || SiteConfig.location,
//                     "addressLocality": SiteConfig.addressLocality,
//                     "addressRegion": SiteConfig.addressRegion,
//                     "addressCountry": SiteConfig.addressCountry,
//                     "postalCode": SiteConfig.postalCode
//                 },
//                 "geo": {
//                     "@type": "GeoCoordinates",
//                     "latitude": SiteConfig.GMB.latitude || "25.2532",
//                     "longitude": SiteConfig.GMB.longitude || "55.2913"
//                 },
//                 // Dynamically mapping 24/7 operating hours from SiteConfig
//                 "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
//                     "@type": "OpeningHoursSpecification",
//                     "dayOfWeek": item.day,
//                     "opens": item.hours === "24 Hours" ? "00:00" : "08:00",
//                     "closes": item.hours === "24 Hours" ? "23:59" : "20:00"
//                 })),
//                 // Dynamically mapping service areas from SiteConfig
//                 "areaServed": SiteConfig.serviceAreas.map((area) => ({
//                     "@type": "AdministrativeArea",
//                     "name": `${area.name}, ${SiteConfig.city}`
//                 })),
//                 "aggregateRating": {
//                     "@type": "AggregateRating",
//                     "ratingValue": "4.9",
//                     "reviewCount": "2000",
//                     "bestRating": "5",
//                     "worstRating": "1"
//                 },
//                 // Dynamically mapping services array from SiteConfig
//                 "hasOfferCatalog": {
//                     "@type": "OfferCatalog",
//                     "name": "Auto Repair Services",
//                     "itemListElement": SiteConfig.services.map((service) => ({
//                         "@type": "Offer",
//                         "itemOffered": {
//                             "@type": "Service",
//                             "name": service.name,
//                             "url": `${SiteConfig.url}/services/${service.slug}`,
//                             "description": `${service.name} in ${SiteConfig.city} by ${SiteConfig.brandName}`
//                         }
//                     }))
//                 }
//             },
//             {
//                 "@type": "WebSite",
//                 "@id": `${SiteConfig.url}/#website`,
//                 "url": SiteConfig.url,
//                 "name": SiteConfig.brandName,
//                 "publisher": {
//                     "@id": `${SiteConfig.url}/#organization`
//                 }
//             }
//         ]
//     };

//     return (
//         <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//     );
// }

import { SiteConfig } from "@/config/siteConfig";

export default function SchemaScript() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService"],
                "@id": `${SiteConfig.url}/#organization`,
                "name": SiteConfig.brandName,
                "url": SiteConfig.url,
                "logo": SiteConfig.logo,
                "image": SiteConfig.ogImage,
                "description": SiteConfig.description,
                "telephone": SiteConfig.displayNumber,
                "email": SiteConfig.email,
                "priceRange": "$$",
                "foundingDate": SiteConfig.foundedYear,
                "hasMap": SiteConfig.GMB.mapsLink || SiteConfig.mapsLink,
                "sameAs": SiteConfig.socialLinks.map((s) => s.href),
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": SiteConfig.streetAddress || SiteConfig.location,
                    "addressLocality": SiteConfig.addressLocality,
                    "addressRegion": SiteConfig.addressRegion,
                    "addressCountry": SiteConfig.addressCountry,
                    "postalCode": SiteConfig.postalCode,
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": SiteConfig.GMB.latitude,
                    "longitude": SiteConfig.GMB.longitude,
                },
                "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": item.day,
                    "opens": item.hours === "24 Hours" ? "00:00" : "08:00",
                    "closes": item.hours === "24 Hours" ? "23:59" : "20:00",
                })),
                "areaServed": SiteConfig.serviceAreas.map((area) => ({
                    "@type": "AdministrativeArea",
                    "name": `${area.name}, ${SiteConfig.city}`,
                })),
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "250",
                    "bestRating": "5",
                    "worstRating": "1",
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "24/7 Mobile Car Repair Services",
                    "itemListElement": SiteConfig.services.map((service) => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": service.name,
                            "url": `${SiteConfig.url}/services/${service.slug}`,
                            "description": `${service.name} service in ${SiteConfig.city} by ${SiteConfig.brandName}`,
                        },
                    })),
                },
            },
            {
                "@type": "WebSite",
                "@id": `${SiteConfig.url}/#website`,
                "url": SiteConfig.url,
                "name": SiteConfig.brandName,
                "publisher": {
                    "@id": `${SiteConfig.url}/#organization`,
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}