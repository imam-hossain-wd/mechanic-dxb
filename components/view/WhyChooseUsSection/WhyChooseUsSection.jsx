import {
  Shield,
  Clock,
  Phone,
  Star,
  Users,
  Wrench,
  Truck,
  CheckCircle2,
  BadgeCheck,
  MapPin,
  ThumbsUp,
  ArrowRight,
  Crown,
  Sparkles,
  Zap,
  Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiteConfig } from "@/config/siteConfig";

export default function WhyChooseUsSection() {
  const brandName = SiteConfig?.brandName || "Auto Lab Dubai";

  // Schema for Local Business (GEO & Knowledge Graph)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": brandName,
    "description": `${brandName} provides 24/7 mobile auto repair, roadside assistance, car battery replacement, and emergency mechanic services across all areas of Dubai within 15 minutes.`,
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "Place", "name": "Downtown Dubai" },
      { "@type": "Place", "name": "Dubai Marina" },
      { "@type": "Place", "name": "Business Bay" },
      { "@type": "Place", "name": "Al Karama" },
      { "@type": "Place", "name": "Jumeirah" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2150"
    },
    "priceRange": "$$"
  };

  // High-Intent GEO/SEO Benefits
  const benefits = [
    {
      icon: Clock,
      title: "10-15 Min Emergency On-Site Arrival",
      description: "Fastest mobile mechanic dispatch in Dubai. Fully equipped units stationed across SZR, Business Bay, Marina, and Deira for immediate assistance.",
      highlight: "Rapid Dispatch",
      badge: "SZR & Highway Ready"
    },
    {
      icon: Shield,
      title: "100% Genuine Parts & Warranty",
      description: "We use only OEM parts with official warranty for European, American, and Japanese vehicles adapted for Dubai desert heat conditions.",
      highlight: "OEM Guaranteed",
      badge: "Full Warranty"
    },
    {
      icon: Wrench,
      title: "RTA-Certified Expert Mechanics",
      description: "Our certified technicians carry advanced computer diagnostics (OBD-II scanner) for high-end luxury and daily commuter vehicles.",
      highlight: "Master Techs",
      badge: "All Makes & Models"
    },
    {
      icon: Truck,
      title: "Doorstep & Roadside Mobile Service",
      description: "From home driveway battery swaps to roadside emergency AC repairs, we bring a complete garage workshop directly to your location.",
      highlight: "Full Mobile Unit",
      badge: "24/7 Coverage"
    },
    {
      icon: Phone,
      title: "24/7 Multilingual Emergency Line",
      description: "Instant dispatch line available day and night. Direct phone support with real-time ETA updates via GPS tracking.",
      highlight: "Always On",
      badge: "Zero Waiting Time"
    },
    {
      icon: Star,
      title: "Fixed Upfront Pricing (No Hidden Fees)",
      description: "Clear cost estimate provided before any wrench turns. Transparent diagnostics report sent directly to your phone.",
      highlight: "Transparent Costs",
      badge: "Best Rates Dubai"
    },
  ];

  const stats = [
    { value: "98.8%", label: "First-Time Fix Rate", icon: ThumbsUp },
    { value: "12 min", label: "Avg. Arrival in Dubai", icon: Clock },
    { value: "15,000+", label: "Vehicles Repaired", icon: Users },
    { value: "4.9/5", label: "Google Business Rating", icon: Star },
  ];

  const trustBadges = [
    { icon: Shield, label: "Insured & Licensed" },
    { icon: BadgeCheck, label: "RTA Compliant" },
    { icon: Crown, label: "Luxury Car Specialists" },
    { icon: Sparkles, label: "100% Satisfaction Guarantee" },
  ];

  const coverageAreas = [
    "Downtown Dubai",
    "Business Bay",
    "Dubai Marina",
    "Jumeirah (JBR)",
    "Al Karama",
    "Deira & Rigga",
    "Silicon Oasis",
    "Arabian Ranches",
    "Al Barsha",
    "Sheikh Zayed Road (SZR)"
  ];

  return (
    <section
      className="relative overflow-hidden bg-background py-6"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* Inject JSON-LD Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Modern Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-5 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary/50" />
            <Badge variant="outline" className="border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Dubai's Premier Auto Workshop
            </Badge>
            <span className="h-px w-8 bg-primary/50" />
          </div>

          <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl " itemProp="name">
            Why Drivers Trust <span className="text-primary">{brandName}</span> Across Dubai
          </h2>

          <p className="mx-auto max-w-3xl text-base text-gray-700 md:text-lg leading-relaxed" itemProp="description">
            When your vehicle breaks down in the Dubai heat, you need immediate, certified auto repair.
            We operate fully equipped mobile garage units delivering rapid roadside emergency repair, battery replacement,
            and computer diagnostics straight to your location.
          </p>
        </div>

        {/* Key AEO Direct Answer Block */}
        <div className="mb-5 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-6 w-6 text-primary flex-shrink-0" />
            <h3 className="text-lg font-bold text-foreground md:text-xl">
              At a Glance: Why {brandName} is Rated #1 for Car Repairs in Dubai
            </h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-foreground/90 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span><strong>10-15 Min ETA</strong> across all major Dubai highways</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span><strong>OEM & Original Parts</strong> with official warranty</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span><strong>24/7 Mobile Service</strong> at home, office, or roadside</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span><strong>Advanced Computer Diagnostics</strong> for all luxury brands</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span><strong>Zero Towing Fees</strong> — we fix it on the spot</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span><strong>Transparent Pricing</strong> prior to service starting</span>
            </li>
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-5 text-center shadow-lg"
            >
              <div className="mb-2 flex justify-center items-center gap-2">
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center text-white">
                  <stat.icon className="h-5 w-5" />
                </div>

                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-xl bg-primary p-3 text-white">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold tracking-wide uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  {benefit.badge}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm shadow-sm"
            >
              <badge.icon className="h-4 w-4 text-primary" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
}