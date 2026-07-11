// components/sections/AboutSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Users, 
  Wrench, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Truck,
  Calendar,
  HeartHandshake,
  BadgeCheck,
  Building2,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceBanner } from "@/utils/assets";

export default function AboutSection() {
  const primaryColor = "bg-primary";
  const primaryText = "text-primary";
  const primaryBorder = "border-primary/20";

  // Company stats
  const stats = [
    { 
      icon: Users, 
      value: "2,000+", 
      label: "Happy Customers",
      description: "Drivers trust us"
    },
    { 
      icon: Star, 
      value: "4.9/5", 
      label: "Average Rating",
      description: "Based on 250+ reviews"
    },
    { 
      icon: Clock, 
      value: "12 min", 
      label: "Avg. Response",
      description: "Rapid arrival time"
    },
    { 
      icon: Wrench, 
      value: "10,000+", 
      label: "Repairs Done",
      description: "And counting"
    },
  ];

  // Core values
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "No hidden costs, honest diagnostics, and clear communication every step of the way.",
    },
    {
      icon: Clock,
      title: "Speed & Reliability",
      description: "We arrive at your location in 5-15 minutes, equipped to handle any emergency.",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "Your satisfaction is our priority. We treat your car like our own.",
    },
    {
      icon: BadgeCheck,
      title: "Certified Experts",
      description: "All our mechanics are certified professionals with years of experience.",
    },
  ];

  // Milestones
  const milestones = [
    { year: "2018", label: "Founded in Dubai" },
    { year: "2020", label: "Expanded to 20+ Areas" },
    { year: "2022", label: "10,000 Repairs Completed" },
    { year: "2024", label: "2,000+ Happy Customers" },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-7">
      {/* Modern Background with Dynamic Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-pulse-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-pulse-slow rounded-full bg-primary/15 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Lines */}
        <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float rounded-full bg-primary/10"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: (Math.random() * 10 + 10) + 's',
                animationDelay: (Math.random() * 5) + 's',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Badge variant="outline" className={cn("border-primary/30 px-4 py-1.5 text-sm font-medium text-primary", primaryBorder)}>
              About Us
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Dubai's Most Trusted
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Mobile Mechanic
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30" />
            </span>
            Service
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            We've been keeping Dubai's cars on the road with professional, reliable, 
            and affordable mobile mechanic services since 2018.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image & Stats */}
          <div className="space-y-8">
            {/* Image with Modern Overlay */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 transition-all duration-500 hover:shadow-primary/20">
                {/* Decorative Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl" />
                
                <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 to-primary/20 p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={ServiceBanner?.mechanic || "/images/mechanic-team.jpg"}
                      alt="Car Repair Mechanic Dubai Team"
                      width={600}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute -left-4 top-8 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-4 py-3 backdrop-blur-xl shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 ring-2 ring-background" />
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">2k+ Happy</p>
                          <p className="text-[10px] text-muted-foreground">Customers served</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-2 bottom-12 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-4 py-3 backdrop-blur-xl shadow-xl" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">4.9/5</p>
                          <p className="text-[10px] text-muted-foreground">Average rating</p>
                        </div>
                      </div>
                    </div>

                    {/* Online Status */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-emerald-500/95 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                      </span>
                      Active Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="mb-2 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-foreground md:text-2xl">{stat.value}</p>
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-[10px] text-muted-foreground/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Company Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Who We Are</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">Car Repair Dubai</span> is a premier mobile auto repair service 
                dedicated to providing fast, reliable, and professional car repair solutions 
                across Dubai. With a team of certified mechanics and state-of-the-art equipment, 
                we bring the workshop to your doorstep.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our mission is to eliminate the hassle of traditional car repairs by offering 
                convenient, transparent, and high-quality service wherever you are in the city. 
                Whether it's an emergency breakdown or routine maintenance, we've got you covered.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Our Core Values</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-border/50 bg-card/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg"
                  >
                    <div className="mb-2 flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <value.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">{value.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones & CTA */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-primary/5 p-4 backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                        {milestone.year}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {milestone.label}
                      </span>
                      {index < milestones.length - 1 && (
                        <div className="hidden h-6 w-px bg-border lg:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className={cn(
                    "group relative flex-1 overflow-hidden rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                    primaryColor
                  )}
                  asChild
                >
                  <Link href="/contact">
                    <span>Get In Touch</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "flex-1 rounded-full border-2 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5",
                    primaryBorder,
                    primaryText
                  )}
                  asChild
                >
                  <Link href="/services">
                    <Wrench className="mr-2 h-5 w-5" />
                    Explore Services
                  </Link>
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  Fully Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-primary" />
                  Mobile Service
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  Same-Day Service
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  Covering All Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}