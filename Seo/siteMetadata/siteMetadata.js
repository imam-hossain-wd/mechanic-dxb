import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  // Root / Home Page (/)
  home: {
    title: "24/7 Mobile Car Repair Service Dubai | Fast 5-15 Min Car Repair & Workshop",
    description: "Stranded in Dubai? Auto Lab delivers 24/7 certified mobile car repair & on-site battery, AC, brake, & starter fixes in 5-15 mins—or visit our Al Mankhool garage. Call now!",
    alternates: {
      canonical: SiteConfig?.url,
    }
  },

  // Services Main Hub (/services)
  services: {
    title: "Mobile Car Repair & Garage Services in Dubai | 24/7 Auto Care",
    description: "Comprehensive auto repairs across Dubai. From roadside jump-starts & battery replacement to OBD-II computer diagnostics & AC repair. 6-month warranty on OEM parts.",
    alternates: {
      canonical: `${SiteConfig?.url}/services`
    }
  },

  // Area We Serve (/area-we-serve)
  areaWeServe: {
    title: "24/7 Mobile Mechanic Near Me | Serving All Areas in Dubai",
    description: "On-demand mobile car repair anywhere in Dubai. Fast 5-15 min dispatch to Business Bay, Downtown, Jumeirah, Marina, Barsha, DSO & beyond. We fix your car on-site!",
    alternates: {
      canonical: `${SiteConfig?.url}/area-we-serve`
    }
  },

  // Brands We Serve (/brands)
  brands: {
    title: "Car Repair for All Brands in Dubai | Japanese, German & Luxury",
    description: "Certified mobile repair for 40+ car brands in Dubai. Expert diagnostics & repairs for Nissan, Toyota, BMW, Mercedes, Audi, Ford, Porsche & luxury fleets.",
    alternates: {
      canonical: `${SiteConfig?.url}/brands`
    }
  },
  // Gallery (/gallery)
  gallery: {
    title: "Dubai Mobile Car Repair Gallery | Real On-Site Work Photos",
    description: "See our mobile mechanics in action across Dubai. Browse real photos of doorstep battery replacements, emergency roadside fixes, and AC servicing.",
    alternates: {
      canonical: `${SiteConfig?.url}/gallery`
    }
  },

  // Contact Us (/contact)
  contact: {
    title: "Contact 24/7 Mobile Mechanics Dubai | Emergency Car Repair",
    description: "Need emergency car repair in Dubai? Call +971 56 755 3726 for 5-15 min mobile mechanic dispatch or visit our Al Mankhool garage. Available 24/7/365.",
    alternates: {
      canonical: `${SiteConfig?.url}/contact`
    }
  },

  // About Us (/about)
  about: {
    title: "About Auto Lab Dubai | RTA-Certified Mobile & Garage Mechanics",
    description: "Learn why over 15,000 drivers trust Auto Lab Dubai. Established in 2018, we combine a state-of-the-art Al Mankhool garage with 24/7 citywide mobile dispatch.",
    alternates: {
      canonical: `${SiteConfig?.url}/about`
    }
  },

  // Privacy Policy (/privacy)
  privacy: {
    title: "Privacy Policy | Auto Lab Car Repair Dubai",
    description: "Read our Privacy Policy to learn how Car Repair Mechanic Dubai collects, protects, and securely manages your personal data and service inquiries.",
    alternates: {

      canonical: `${SiteConfig?.url}/privacy`
    }
  },

  // Terms of Service (/terms)
  terms: {
    title: "Terms of Service | Auto Lab Car Repair Dubai",
    description: "Review our Terms of Service covering 24/7 mobile auto repair bookings, warranty coverage, roadside assistance, and transparent pricing in Dubai.",
    alternates: {
      canonical: `${SiteConfig?.url}/terms`
    }
  },

};