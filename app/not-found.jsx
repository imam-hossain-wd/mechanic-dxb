// // app/not-found.jsx
// "use client";

// import Link from "next/link";
// import { Home, Phone, Search, Wrench, ArrowLeft, Car, Battery } from "lucide-react";
// import { SiteConfig } from "@/config/siteConfig";

// export default function NotFound() {
//   const { displayNumber} = SiteConfig;

//   const popularLinks = [
//     { name: "Home", href: "/", icon: Home },
//     { name: "Car Services", href: "/dubai/services", icon: Wrench },
//     { name: "Battery Replacement", href: "/dubai/services/battery-replacement", icon: Battery },
//     { name: "Contact Support", href: "/dubai/contact", icon: Phone }
//   ];


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-2xl mx-auto text-center">

//         {/* 404 Number */}
//         <div className="relative mb-6">
//           <div className="text-[120px] md:text-[180px] font-black leading-none">
//             <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
//               4
//             </span>
//             <span className="text-gray-700 dark:text-gray-600">0</span>
//             <span className="bg-gradient-to-r from-primary/40 to-primary bg-clip-text text-transparent">
//               4
//             </span>
//           </div>

//           {/* Animated Car Icon */}
//           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-slide">
//             <Car className="h-8 w-8 text-primary/50" />
//           </div>
//         </div>

//         {/* Error Message */}
//         <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
//           Oops! Page Not Found
//         </h1>

//         <p className="text-gray-400 mb-6 max-w-md mx-auto">
//           The page you&apos;re looking for seems to have driven off. Don&apos;t worry, we&apos;ll help you get back on track.
//         </p>

//         {/* Quick Actions */}
//         <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
//           <Link
//             href="/"
//             className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
//           >
//             <Home className="h-4 w-4" />
//             Back to Home
//           </Link>

//           <Link
//             href="/dubai/services"
//             className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm border border-white/10"
//           >
//             <Wrench className="h-4 w-4" />
//             Browse Services
//           </Link>

//           <a
//             href={`tel:${displayNumber}`}
//             className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
//           >
//             <Phone className="h-4 w-4" />
//             Emergency Help
//           </a>
//         </div>

//         {/* Popular Links Grid */}
//         <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
//           <p className="text-xs text-gray-400 mb-3">Quick Links You Might Need:</p>
//           <div className="grid grid-cols-2 gap-2">
//             {popularLinks.map((link, index) => {
//               const Icon = link.icon;
//               return (
//                 <Link
//                   key={index}
//                   href={link.href}
//                   className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm text-gray-300 hover:text-white"
//                 >
//                   <Icon className="h-3.5 w-3.5" />
//                   <span>{link.name}</span>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>

//         {/* Search Suggestion */}
//         <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
//           <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
//             <Search className="h-4 w-4 text-primary" />
//             <span>Need help? Call us 24/7 at</span>
//             <a href={`tel:${displayNumber}`} className="text-primary font-semibold hover:underline">
//               {displayNumber}
//             </a>
//           </div>
//         </div>

//         {/* SEO Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": "404 - Page Not Found",
//               "description": "The requested page could not be found. Navigate back to home or contact our support team.",
//               "url": "https://carrepairmechanic.ae/404",
//               "breadcrumb": {
//                 "@type": "BreadcrumbList",
//                 "itemListElement": [{
//                   "@type": "ListItem",
//                   "position": 1,
//                   "name": "Home",
//                   "item": "https://carrepairmechanic.ae"
//                 }]
//               }
//             })
//           }}
//         />
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           0%, 100% { transform: translateX(-50%) translateX(0); }
//           50% { transform: translateX(-50%) translateX(10px); }
//         }
//         .animate-slide {
//           animation: slide 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// app/not-found.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Home,
  Phone,
  Search,
  Wrench,
  ArrowLeft,
  Car,
  Battery,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Compass,
  Navigation,
  Headphones,
  Mail,
  MessageCircle,
  AlertCircle,
  HelpCircle,
  Zap,
  Crown
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export default function NotFound() {
  const { displayNumber, email, location, brandName } = SiteConfig;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickLinks = [
    { name: "Home", href: "/", icon: Home, color: "from-blue-500 to-blue-600" },
    { name: "Services", href: "/services", icon: Wrench, color: "from-purple-500 to-purple-600" },
    { name: "Contact", href: "/contact", icon: Phone, color: "from-emerald-500 to-emerald-600" },
    { name: "Areas", href: "/area-we-serve", icon: MapPin, color: "from-amber-500 to-amber-600" },
    { name: "About", href: "/about", icon: Shield, color: "from-rose-500 to-rose-600" },
    { name: "Blog", href: "/blog", icon: HelpCircle, color: "from-cyan-500 to-cyan-600" },
  ];

  const helpfulServices = [
    { name: "Emergency Repair", icon: Zap, href: "/services/emergency-car-repair" },
    { name: "Battery Replacement", icon: Battery, href: "/services/battery-replacement" },
    { name: "AC Repair", icon: Compass, href: "/services/ac-repair" },
    { name: "Car Detailing", icon: Sparkles, href: "/services/car-detailing" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div
          className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div
          className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl"
          style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated Lines */}
        <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float rounded-full bg-primary/10"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: (Math.random() * 12 + 8) + 's',
                animationDelay: (Math.random() * 6) + 's',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`
        container mx-auto px-4 min-h-screen flex items-center justify-center
        transition-all duration-1000 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}>
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number with Animation */}
          <div className="relative mb-8">
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <span className="text-[100px] md:text-[160px] lg:text-[200px] font-black leading-none bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent animate-pulse-slow">
                4
              </span>
              <div className="relative">
                <div className="absolute inset-0 animate-ping-slow rounded-full bg-primary/20" />
                <div className="relative flex h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44 items-center justify-center rounded-full bg-primary/10 border-4 border-primary/20">
                  <Car className="h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 text-primary animate-float-slow" />
                </div>
              </div>
              <span className="text-[100px] md:text-[160px] lg:text-[200px] font-black leading-none bg-gradient-to-r from-primary/40 to-primary bg-clip-text text-transparent animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                4
              </span>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Oops! Page Not Found
            </h1>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              href="/"
              className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </Link>

            <Link
              href="/services"
              className="group rounded-full border-2 border-primary/20 bg-card/30 px-6 py-3 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary/5 hover:scale-[1.02]"
            >
              <span className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                Browse Services
              </span>
            </Link>

            <Link
              href={`tel:${displayNumber}`}
              className="group rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Emergency Help
              </span>
            </Link>
          </div>
          
          {/* Support Options */}
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href={`tel:${displayNumber}`}
              className="group flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/30 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <Phone className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-foreground">Call 24/7</span>
            </Link>
            <Link
              href={`mailto:${email}`}
              className="group flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/30 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <Mail className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-foreground">Email Us</span>
            </Link>
            <Link
              href={SiteConfig.whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/30 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <MessageCircle className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-foreground">WhatsApp</span>
            </Link>
          </div>

          {/* SEO Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "404 - Page Not Found",
                "description": "The requested page could not be found. Navigate back to home or contact our support team.",
                "url": "https://carrepairmechanicdubai.com/404",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://carrepairmechanicdubai.com"
                  }]
                }
              })
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Helper function for className
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}