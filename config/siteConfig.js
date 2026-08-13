import { socialIcons } from "@/utils/assets";
import { Mail, MapPin, Phone } from "lucide-react";

const { facebook, instagram, pinterest, youtube, x } = socialIcons;

export const SiteConfig = {
  authorName: "Md Bappi",
  brandName: "Onfix Car Repair Mechanic Dubai",
  url: "https://www.onfixcarrepairdubai.com",
  email: "onfixcarrepair@gmail.com",
  foundedYear: "2018",
  emailLink: "mailto:onfixcarrepair@gmail.com",
  description: "Onfix Car Repair Mechanic Dubai Provide 24/7 Professional , Fast and Reliable Mechanic Service At Your Location in Dubai",
  displayNumber: "+971 54 141 6509",
  numberCallLink: "tel:+971541416509",
  whatsappCallLink: "https://wa.me/971541416509",
  location: "Nadd Hessa - Industrial Area , Dubai, UAE",
  streetAddress: "60 Street",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  mapsLink: "https://maps.app.goo.gl/BazzBtwgpRdgFzwT7",
  embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28898.635290817074!2d55.36598682055146!3d25.124551732046235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f646c9e2a6135%3A0xad180ec0217770f6!2sNadd%20Hessa%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1786551085558!5m2!1sen!2sbd",
  GMB: {
    name:"OnFix Car Repair Mechanic Dubai",
    PlaceID: "",
    category: "Auto Repair Shop",
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
    { name: "Dubai International City" },
    { name: "Al Warqa 1" },
    { name: "Al Warqa 2" },
    { name: "Al Warqa 3" },
    { name: "Midriff" },
    { name: "Warsan 2" },
    { name: "City Lamd Mall" },
    { name: "Business Bay" },
    { name: "DIFC" },
    { name: "Zabeel Park" },
    { name: "Al Jadaf" },
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
    { name: "Facebook", icon: facebook, href: "https://www.facebook.com/onfixcarrepairdubai" },
    { name: "Instagram", icon: instagram, href: "https://www.instagram.com/onfixcarrepairdubai/" },
    { name: "Pinterest", icon: pinterest, href: "https://www.pinterest.com/onfixcarrepairdubai/" },
    { name: "X", icon: x, href: "https://x.com/onfixcarrepair" },
    { name: "YouTube", icon: youtube, href: "https://www.youtube.com/@onfixcarrepairdubai" }
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