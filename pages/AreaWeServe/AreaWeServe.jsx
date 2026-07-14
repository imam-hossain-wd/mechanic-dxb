"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Users,
  Globe,
  Compass,
  Building2,
  Home,
  Store,
  Briefcase,
  Landmark,
  BadgeCheck,
  Heart,
  Crown,
  Flame,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";

// Enhanced service areas with additional data
const enhancedAreas = SiteConfig.serviceAreas.map((area, index) => ({
  ...area,
  category: [
    "Central Dubai",
    "Central Dubai",
    "Central Dubai",
    "Central Dubai",
    "Central Dubai",
    "Central Dubai",
    "Business District",
    "Business District",
    "Business District",
    "Business District",
    "Business District",
    "Business District",
    "Residential",
    "Residential",
    "Residential",
    "Industrial",
    "Industrial",
    "Waterfront",
    "Waterfront",
    "Waterfront"
  ][index % 20],
  responseTime: `${Math.floor(Math.random() * 10) + 5}-${Math.floor(Math.random() * 10) + 15} min`,
  rating: (4 + Math.random() * 0.9).toFixed(1),
  reviews: Math.floor(Math.random() * 100) + 20,
  isPopular: index % 3 === 0,
  isNew: index % 5 === 0,
  isFeatured: index < 3,
  icon: [
    Building2, Home, Store, Briefcase, Landmark,
    Building2, Home, Store, Briefcase, Landmark,
    Building2, Home, Store, Briefcase, Landmark,
    Building2, Home, Store, Briefcase, Landmark
  ][index % 20],
  color: [
    "from-blue-500/20 to-blue-500/5",
    "from-purple-500/20 to-purple-500/5",
    "from-emerald-500/20 to-emerald-500/5",
    "from-amber-500/20 to-amber-500/5",
    "from-rose-500/20 to-rose-500/5",
    "from-cyan-500/20 to-cyan-500/5",
    "from-indigo-500/20 to-indigo-500/5",
    "from-pink-500/20 to-pink-500/5",
    "from-orange-500/20 to-orange-500/5",
    "from-teal-500/20 to-teal-500/5"
  ][index % 10]
}));

export default function AreasWeServePage() {
  const [animateItems, setAnimateItems] = useState(false);
  const totalAreas = enhancedAreas.length;

  useEffect(() => {
    setAnimateItems(true);
  }, []);


  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/10 pt-20 pb-16 ">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                  <Globe className="mr-2 h-3.5 w-3.5" />
                  Service Areas
                </Badge>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                We Serve
                <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  All Dubai
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
                </span>
              </h1>

              <p className="mb-6 text-lg text-muted-foreground">
                From Business Bay to Dubai Silicon Oasis, our mobile mechanics
                bring professional car repair services right to your doorstep
                anywhere in Dubai.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="gap-2 rounded-full bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  asChild
                >
                  <Link href="#areas">
                    <Compass className="h-4 w-4" />
                    Explore Areas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5"
                  asChild
                >
                  <Link href={`tel:${SiteConfig.displayNumber}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {totalAreas}+ Locations
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  5-15 min Response
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  4.9/5 Rating
                </span>
              </div>
            </div>

            {/* Right Content - Map Preview */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 to-primary/20 h-80 w-110 p-2 shadow-2xl shadow-primary/10">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm">
                    {/* Map Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:30px_30px]" />

                    {/* Animated Pins */}
                    <div className="absolute inset-0">
                      {enhancedAreas.slice(0, 8).map((area, index) => (
                        <div
                          key={index}
                          className="absolute animate-float-slow"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${15 + Math.random() * 70}%`,
                            animationDelay: `${index * 0.5}s`
                          }}
                        >
                          <div className="relative">
                            <div className="absolute -inset-2 animate-ping-slow rounded-full bg-primary/20" />
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-medium text-muted-foreground whitespace-nowrap">
                            {area.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Center Badge */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex items-center gap-2 rounded-full bg-card/95 px-4 py-2 shadow-2xl backdrop-blur-sm border border-primary/20">
                        <div className="relative">
                          <div className="absolute h-3 w-3 animate-ping-slow rounded-full bg-primary opacity-75" />
                          <div className="relative h-3 w-3 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">Dubai</span>
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-primary px-3 py-2 backdrop-blur-sm">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <MapPin className="h-3.5 w-3.5" />
                        {totalAreas}+ Locations
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <Clock className="h-3.5 w-3.5" />
                        5-15 min
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                        4.9/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              All Service Areas in
              <span className="relative mx-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dubai
              </span>
            </h2>
            <p className="text-muted-foreground">
              We're available across all major areas of Dubai
            </p>
          </div>

          {/* All Areas Grid */}
          <div className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            "transition-all duration-500",
            animateItems && "opacity-100 translate-y-0"
          )}>
            {enhancedAreas.map((area, index) => {
              const Icon = area.icon || MapPin;

              return (
                <div
                  key={index}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border/50 bg-primary/10 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                    "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >

                  {/* Icon & Category */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className={cn(
                      "rounded-xl bg-gradient-to-br p-2.5 transition-all duration-500 group-hover:scale-110",
                      area.color
                    )}>
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-[10px] text-primary">
                      {area.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>

                  <p className="mb-3 text-xs text-muted-foreground">
                    {area.category} • Dubai, UAE
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-0.5">
                      <Clock className="h-3 w-3 text-primary" />
                      {area.responseTime}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      {area.rating}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Users className="h-3 w-3" />
                      {area.reviews} reviews
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 top-0 h-[300px] w-[300px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
            <Heart className="mr-2 h-3.5 w-3.5" />
            Need Help?
          </Badge>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Don't See Your Area Listed?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            We're constantly expanding our service areas. Contact us to check
            if we can reach your location.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              className="gap-2 rounded-full bg-primary px-8 py-6 text-base shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              asChild
            >
              <Link href={`tel:${SiteConfig.displayNumber}`}>
                <Phone className="h-5 w-5" />
                Call Now: {SiteConfig.displayNumber}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="gap-2 rounded-full border-2 border-primary/20 px-8 py-6 text-base text-primary hover:bg-primary/5"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}