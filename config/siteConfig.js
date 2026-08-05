import { socialIcons } from "@/utils/assets";
import { Mail, MapPin, Phone } from "lucide-react";

const { facebook, instagram, pinterest, youtube } = socialIcons;

export const SiteConfig = {
  authorName: "Md Bappi",
  brandName: "Auto Lab Car Repair Dubai",
  url: "https://www.autolabcarrepairdubai.com",
  email: "autolabcarrepair@gmail.com",
  foundedYear: "2018",
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
  embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.928991405868!2d55.2512200206842!3d25.182436611227814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1785665365419!5m2!1sen!2sbd",

  GMB: {
    PlaceID: "",
    CID: "",
    BusinessProfileID: "",
    mapsLink: "https://maps.app.goo.gl/xCsHRiMYSnpPw93N9",
    embedMap: "",
    latitude: "",
    longitude: "",
  },

  services: [
    { name: "Car Battery Replacement", slug: "car-battery-replacement" },
    { name: "Jump Start Car", slug: "jump-start-car" },
    { name: "Car Computer Diagnostic", slug: "car-computer-diagnostic" },
    { name: "Car Alternator Repair", slug: "car-alternator-repair" },
    { name: "Car Fuel Pump Repair", slug: "car-fuel-pump-repair" },
    { name: "Car Starter Motor Repair", slug: "car-starter-motor-repair" },
    { name: "Car AC Repair", slug: "car-ac-repair" },
    { name: "Car Window Motor Repair", slug: "car-window-motor-repair" },
    { name: "Radiator Replacement", slug: "radiator-replacement" },
    { name: "ABS System Repair", slug: "abs-system-repair" },
    { name: "Brake Pad Repair", slug: "brake-pad-repair" },
    { name: "Car Detailing Service", slug: "car-detailing-service" },
    { name: "Emergency Car Repair", slug: "emergency-car-repair" },
    { name: "Car Mechanic Service", slug: "car-mechanic-service" },
    { name: "Oil Change Service", slug: "oil-change-service" },
    { name: "Car AC Gas Refill Service", slug: "car-ac-gas-refill-service" },
    { name: "Car Transmission Repair", slug: "car-transmission-repair" },
    { name: "Car Service Dubai", slug: "car-service-dubai" },
    { name: "Car Repair Dubai", slug: "car-repair-dubai" }
  ],

  serviceAreas: [
    { name: "Business Bay" },
    { name: "Dubai Silicon Oasis" },
    { name: "DIFC" },
    { name: "Downtown Dubai" },
    { name: "Nad Al Sheba" },
    { name: "Al Barsha" },
    { name: "Al Barsha South" },
    { name: "Barsha Heights" },
    { name: "Al Sufouh" },
    { name: "Al Quoz Industrial" },
    { name: "Dubai Hills Estate" },
    { name: "Jumeirah" },
    { name: "Al Wasl" },
    { name: "Al Bada'a" },
    { name: "City Walk" },
    { name: "Al Warqa" },
    { name: "Warsan" },
    { name: "Academic City" },
    { name: "Liwan" }
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
    { name: "Phone", icon: Phone, href: "" },
    { name: "Email", icon: Mail, href: "" }
  ]
};

export const {
  services,
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