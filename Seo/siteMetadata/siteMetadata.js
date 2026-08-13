// import { SiteConfig } from "@/config/siteConfig";

// export const siteMetadata = {
//   // Root / Home Page (/)
//   home: {
//     title: "24/7 Mobile Car Repair Service Dubai | Fast 5-15 Min Car Repair & Workshop",
//     description: "Stranded in Dubai? Auto Lab delivers 24/7 certified mobile car repair & on-site battery, AC, brake, & starter fixes in 5-15 mins—or visit our Al Mankhool garage. Call now!",
//     verification: {
//       google: "ytYG9-y7sI4wREsZZ3xJie3eyAobbPCbKz6vCRA8Gz4",
//     },
//     alternates: {
//       canonical: SiteConfig?.url,
//     }
//   },

//   //   export const metadata = {
//   //   title: 'OnFix Car Repair Dubai',
//   //   description: 'Car Repair Services in Dubai',
//   //   verification: {
//   //     google: 'আপনার_Search_Console_এর_HTML_Tag_Code',
//   //   },
//   // };
//   // <meta name="google-site-verification" content="ytYG9-y7sI4wREsZZ3xJie3eyAobbPCbKz6vCRA8Gz4" />

//   // Services Main Hub (/services)
//   services: {
//     title: "Mobile Car Repair & Garage Services in Dubai | 24/7 Auto Care",
//     description: "Comprehensive auto repairs across Dubai. From roadside jump-starts & battery replacement to OBD-II computer diagnostics & AC repair. 6-month warranty on OEM parts.",
//     alternates: {
//       canonical: `${SiteConfig?.url}/services`
//     }
//   },

//   // Area We Serve (/area-we-serve)
//   areaWeServe: {
//     title: "24/7 Mobile Mechanic Near Me | Serving All Areas in Dubai",
//     description: "On-demand mobile car repair anywhere in Dubai. Fast 5-15 min dispatch to Business Bay, Downtown, Jumeirah, Marina, Barsha, DSO & beyond. We fix your car on-site!",
//     alternates: {
//       canonical: `${SiteConfig?.url}/area-we-serve`
//     }
//   },

//   // Brands We Serve (/brands)
//   brands: {
//     title: "Car Repair for All Brands in Dubai | Japanese, German & Luxury",
//     description: "Certified mobile repair for 40+ car brands in Dubai. Expert diagnostics & repairs for Nissan, Toyota, BMW, Mercedes, Audi, Ford, Porsche & luxury fleets.",
//     alternates: {
//       canonical: `${SiteConfig?.url}/brands`
//     }
//   },
//   // Gallery (/gallery)
//   gallery: {
//     title: "Dubai Mobile Car Repair Gallery | Real On-Site Work Photos",
//     description: "See our mobile mechanics in action across Dubai. Browse real photos of doorstep battery replacements, emergency roadside fixes, and AC servicing.",
//     alternates: {
//       canonical: `${SiteConfig?.url}/gallery`
//     }
//   },

//   // Contact Us (/contact)
//   contact: {
//     title: "Contact 24/7 Mobile Mechanics Dubai | Emergency Car Repair",
//     description: "Need emergency car repair in Dubai? Call +971 56 755 3726 for 5-15 min mobile mechanic dispatch or visit our Al Mankhool garage. Available 24/7/365.",
//     alternates: {
//       canonical: `${SiteConfig?.url}/contact`
//     }
//   },

//   // About Us (/about)
//   about: {
//     title: "About Auto Lab Dubai | RTA-Certified Mobile & Garage Mechanics",
//     description: "Learn why over 15,000 drivers trust Auto Lab Dubai. Established in 2018, we combine a state-of-the-art Al Mankhool garage with 24/7 citywide mobile dispatch.",
//     alternates: {
//       canonical: `${SiteConfig?.url}/about`
//     }
//   },

//   // Privacy Policy (/privacy)
//   privacy: {
//     title: "Privacy Policy | Auto Lab Car Repair Dubai",
//     description: "Read our Privacy Policy to learn how Car Repair Mechanic Dubai collects, protects, and securely manages your personal data and service inquiries.",
//     alternates: {

//       canonical: `${SiteConfig?.url}/privacy`
//     }
//   },

//   // Terms of Service (/terms)
//   terms: {
//     title: "Terms of Service | Auto Lab Car Repair Dubai",
//     description: "Review our Terms of Service covering 24/7 mobile auto repair bookings, warranty coverage, roadside assistance, and transparent pricing in Dubai.",
//     alternates: {
//       canonical: `${SiteConfig?.url}/terms`
//     }
//   },

// };

import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  // Root / Home Page (/)
  home: {
    title: `24/7 Mobile Car Repair Service Dubai | ${SiteConfig.brandName}`,
    description: `${SiteConfig.description} Fast doorstep battery replacement, AC repair, diagnostics, & emergency mechanic service. Call ${SiteConfig.displayNumber}!`,
    verification: {
      google: "ytYG9-y7sI4wREsZZ3xJie3eyAobbPCbKz6vCRA8Gz4",
    },
    alternates: {
      canonical: SiteConfig.url,
    },
    openGraph: {
      title: `24/7 Mobile Car Repair Dubai | ${SiteConfig.brandName}`,
      description: SiteConfig.description,
      url: SiteConfig.url,
      siteName: SiteConfig.brandName,
      images: [{ url: SiteConfig.ogImage, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // Services Main Hub (/services)
  services: {
    title: `Mobile Car Repair & Mechanic Services in Dubai | 24/7 ${SiteConfig.brandName}`,
    description: `Professional auto repair services in Dubai: battery replacement, jump start, OBD computer diagnostics, AC repair, & brake service at your location.`,
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
  },

  // Area We Serve (/area-we-serve)
  areaWeServe: {
    title: `24/7 Mobile Mechanic Near Me | Service Areas in Dubai | ${SiteConfig.brandName}`,
    description: `On-demand mobile car mechanics dispatched across Business Bay, Downtown, Al Warqa, Mirdif, International City & all Dubai areas. Fast arrival!`,
    alternates: {
      canonical: `${SiteConfig.url}/area-we-serve`,
    },
  },

  // Brands We Serve (/brands)
  brands: {
    title: `Car Repair for All Brands in Dubai | Luxury & Japanese Cars`,
    description: `Certified repair for Toyota, Nissan, BMW, Mercedes, Audi, Ford, & Porsche in Dubai. On-site diagnostics and OEM spare parts with warranty.`,
    alternates: {
      canonical: `${SiteConfig.url}/brands`,
    },
  },

  // Gallery (/gallery)
  gallery: {
    title: `Mobile Car Repair Work Gallery | Real On-Site Photos Dubai`,
    description: `View real photos of our 24/7 mobile mechanics servicing cars across Dubai: battery fixes, AC refilling, computer diagnostics, and emergency repairs.`,
    alternates: {
      canonical: `${SiteConfig.url}/gallery`,
    },
  },

  // Contact Us (/contact)
  contact: {
    title: `Contact 24/7 Mobile Mechanic Dubai | Call ${SiteConfig.displayNumber}`,
    description: `Need an emergency mechanic in Dubai? Contact ${SiteConfig.brandName} at ${SiteConfig.displayNumber} or WhatsApp for immediate roadside response.`,
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
  },

  // About Us (/about)
  about: {
    title: `About ${SiteConfig.brandName} | Certified Mobile Car Mechanics Dubai`,
    description: `Established in ${SiteConfig.foundedYear}, ${SiteConfig.brandName} provides trusted 24/7 mobile auto repair services across all Dubai communities.`,
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
  },

  // Privacy Policy (/privacy)
  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Read the privacy policy for ${SiteConfig.brandName} to understand how we secure your data and service inquiries.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
  },

  // Terms of Service (/terms)
  terms: {
    title: `Terms of Service | ${SiteConfig.brandName}`,
    description: `Review service agreements, warranty coverage, pricing terms, and roadside dispatch policies for ${SiteConfig.brandName}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
  },
};