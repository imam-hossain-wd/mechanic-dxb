
import { socialIcons } from "@/utils/assets";
import { Mail, MapPin, Phone } from "lucide-react";

const { facebook, instagram, pinterest, youtube } = socialIcons;
export const SiteConfig = {
  authorName: "Md Bappi",
  brandName: "AL SATWA TRADING LLC",
  url: "https://www.carrepairmechanicdubai.com",
  email: "alsatwatrading@gmail.com",
  emailLink: "mailto:alsatwatrading@gmail.com",
  description: "24/7 Mobile Car Repair in Dubai – Fast, Reliable & At Your Location",
  displayNumber: "+971 56 755 3726",
  numberCallLink: "tel:+971567553726",
  whatsappCallLink: "https://wa.me/971567553726",
  location: "Al Mankhool, Dubai, United Arab Emirates",
  streetAddress: "Kuwait St",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  postalCode: "00000",
  mapsLink: "https://maps.app.goo.gl/E1HBW8UdW8TqFXpg9",
  embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.1477690094521!2d55.29219986951118!3d25.25069461156736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4390f518213d%3A0x9fee2925019875f!2sAL%20SATWA%20TRADING%20LLC!5e0!3m2!1sen!2sbd!4v1783959628506!5m2!1sen!2sbd",

  GMB: {
    PlaceID: "ChIJPSEY9ZBDXz4RX4cZUJLi_gk",
    CID: "720262108462810975",
    BusinessProfileID: "11399040178541034570",
    mapsLink: "https://maps.app.goo.gl/E1HBW8UdW8TqFXpg9",
    embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.1477690094521!2d55.29219986951118!3d25.25069461156736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4390f518213d%3A0x9fee2925019875f!2sAL%20SATWA%20TRADING%20LLC!5e0!3m2!1sen!2sbd!4v1783959628506!5m2!1sen!2sbd",
    latitude: "25.2506934",
    longitude: "55.2928436",
  },

  serviceAreas: [
    { name: "Business Bay" },
    { name: "Al Rigga" },
    { name: "Dubai Land" },
    { name: "Jumeirah" },
    { name: "Al Mankhool" },
    { name: "Trade Center" },
    { name: "Dubai Silicon Oasis" },
    { name: "Downtown Dubai" },
    { name: "Za'abeel First" },
    { name: "Za'abeel Second" },
    { name: "Al Jaddaf" }
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
    { name: "Facebook", icon: facebook, href: "https://www.facebook.com" },
    { name: "Instagram", icon: instagram, href: "https://www.instagram.com" },
    { name: "Pinterest", icon: pinterest, href: "https://www.pinterest.com" },
    { name: "YouTube", icon: youtube, href: "https://www.youtube.com" }
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