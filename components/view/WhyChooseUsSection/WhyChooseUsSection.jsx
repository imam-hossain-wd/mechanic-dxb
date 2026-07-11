// components/sections/WhyChooseUsSection.tsx
"use client";

import { 
  Shield, 
  Clock, 
  Phone, 
  Star, 
  Users, 
  Wrench, 
  Truck,
  Award,
  CheckCircle,
  Sparkles,
  Zap,
  HeartHandshake,
  BadgeCheck,
  MapPin,
  Calendar,
  ThumbsUp,
  Settings,
  Car,
  Headphones,
  CircleCheck,
  ArrowRight,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ServiceBanner } from "@/utils/assets";

export default function WhyChooseUsSection() {
  const primaryColor = "bg-primary";
  const primaryText = "text-primary";
  const primaryBorder = "border-primary/20";

  // Key benefits with detailed information
  const benefits = [
    {
      icon: Clock,
      title: "5-15 Minute Response",
      description: "We arrive at your location within minutes, equipped to handle any emergency.",
      highlight: "Fastest in Dubai",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "All repairs come with a warranty. We're not happy until you're satisfied.",
      highlight: "Warranty Included",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Wrench,
      title: "Certified Expert Mechanics",
      description: "Our team consists of industry-certified professionals with years of experience.",
      highlight: "Expert Team",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Truck,
      title: "Mobile Service Anywhere",
      description: "We come to your location - home, office, or roadside - across all Dubai areas.",
      highlight: "Cover All Dubai",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Phone,
      title: "24/7 Emergency Support",
      description: "Day or night, we're here for you. Call us anytime for immediate assistance.",
      highlight: "Always Available",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Star,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. Get clear quotes before any work begins.",
      highlight: "No Hidden Costs",
      color: "from-amber-500 to-amber-600",
    },
  ];

  // Statistics with animations
  const stats = [
    { value: "98%", label: "Customer Satisfaction", icon: ThumbsUp },
    { value: "12 min", label: "Average Arrival Time", icon: Clock },
    { value: "2,000+", label: "Happy Customers", icon: Users },
    { value: "4.9/5", label: "Average Rating", icon: Star },
  ];

  // Trust badges
  const trustBadges = [
    { icon: Shield, label: "Fully Insured" },
    { icon: BadgeCheck, label: "Certified Mechanics" },
    { icon: Crown, label: "Premium Service" },
    { icon: Sparkles, label: "Quality Guaranteed" },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-8">
      {/* Ultra-Modern Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute -right-20 top-0 h-[700px] w-[700px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/15 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Animated Lines */}
        <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
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

        {/* Diagonal Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(99,102,241,0.03)_100%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Badge variant="outline" className={cn("border-primary/30 px-4 py-1.5 text-sm font-medium text-primary", primaryBorder)}>
              Why Choose Us
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Dubai Drivers
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Trust Us
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            We've earned the trust of thousands of drivers across Dubai through exceptional 
            service, reliability, and a commitment to excellence.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Top Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon with Glass Effect */}
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={cn(
                  "relative inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-3 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/20",
                  "border border-primary/10"
                )}>
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Animated Checkmark on Hover */}
              <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Trust Badges & CTA */}
        <div className="space-y-8">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg"
              >
                <badge.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Section with Gradient Background */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
            </div>

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  Ready to Experience the
                  <span className="mx-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Difference?
                  </span>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Join thousands of satisfied customers who trust us with their cars.
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className={cn(
                    "group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40",
                    primaryColor
                  )}
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "group rounded-full border-2 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5",
                    primaryBorder,
                    primaryText
                  )}
                  asChild
                >
                  <Link href="/services">
                    <span>View Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Service Area Note */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Serving all areas of Dubai including:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Downtown", "Jumeirah", "Business Bay", "Dubai Marina", "Al Rigga", "Silicon Oasis"].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-foreground/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  {area}
                </span>
              ))}
              <span className="text-xs font-semibold text-primary">+ More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}