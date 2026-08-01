
import { socialIcons } from "@/utils/assets";
import { Mail, MapPin, Phone } from "lucide-react";

const { facebook, instagram, pinterest, youtube } = socialIcons;
export const SiteConfig = {
  authorName: "Md Bappi",
  brandName: "Auto Lab Car Repair Dubai",
  url: "https://www.autolabcarrepairdubai.com",
  email: "autolabcarrepair@gmail.com",
  emailLink: "mailto:autolabcarrepair@gmail.com",
  description: "Auto Lab Car Repair Dubai Provide 24/7 Professional , Fast and Reliable Mechanic Service At Your Location in Dubai",
  displayNumber: "+971 56 755 3726",
  numberCallLink: "tel:+971567553726",
  whatsappCallLink: "https://wa.me/971567553726",
  location: "Al Mankhool, Dubai, UAE",
  streetAddress: "",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  postalCode: "00000",
  mapsLink: "",
  embedMap: "",

  GMB: {
    PlaceID: "",
    CID: "",
    BusinessProfileID: "",
    mapsLink: "",
    embedMap: "",
    latitude: "",
    longitude: "",
  },

  // Al rigga ..business bay.. al mankhool ..al kerama. silicon Oasis...Jumeirah ..deira


  serviceAreas: [
    { name: "Al Mankhool" },
    { name: "Al Rigga" },
    { name: "Business Bay" },
    { name: "Al Karama" },
    { name: "Dubai Land" },
    { name: "Jumeirah" },
    { name: "Dubai Silicon Oasis" },
    { name: "Jumaireh" },
    { name: "Deira" }
  ],

  operatingHours: [
    { day: "Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
    { day: "Monday", hours: "24 Hours" },
    { day: "Tuesday", hours: "24 Hours" },
    { day: "Wednesday", hours: "24 Hours" },
    { day: "Thursday", hours: "24 Hours" },
    { day: "Friday", hours: "24 Hours" },
  ],

  city: "Dubai",
  country: "UAE",

  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas We Serve", href: "/area-we-serve" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],

  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Services", href: "/services" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Sitemap", href: "/sitemap.xml" }
  ],

  socialLinks: [
    { name: "Facebook", icon: facebook, href: "" },
    { name: "Instagram", icon: instagram, href: "" },
    { name: "Pinterest", icon: pinterest, href: "" },
    { name: "YouTube", icon: youtube, href: "" }
  ],

  contactLinks: [
    { name: "Map", icon: MapPin, href: "" },
    { name: "Phone", icon: Phone, href: this?.numberCallLink },
    { name: "Email", icon: Mail, href: this?.emailLink }
  ]
};

export const {
  contactLinks,
  socialLinks,
  footerhrefs,
  navItems,
  serviceAreas,
  location,
  streetAddress,
  addressLocality,
  addressRegion,
  addressCountry,
  postalCode,
  latitude,
  longitude,
  mapsLink,
  numberCallLink,
  whatsappCallLink,
  operatingHours,
  displayNumber,
  description,
  email,
  url,
  brandName,
  authorName,
  city,
  country
} = SiteConfig;