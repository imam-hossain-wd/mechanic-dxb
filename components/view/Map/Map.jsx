// components/ui/AdvancedMap.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Clock,
  Truck,
  Wrench,
  CheckCircle,
  Compass,
  Star,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CornerDownRight,
  Globe,
  Shield,
  Clock as ClockIcon,
  MessageCircle,
  ExternalLink,
  Target,
  LocateFixed
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



export function Maps({ className, variant = "default" }) {
 
    const {
    brandName,
    displayNumber,
    numberCallLink,
    email,
    location,
    mapsLink,
    city,
    embedMap,
    description,
    operatingHours,
    serviceAreas,
    GMB
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const mapRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section className={cn(
      "relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-8",
      className
    )}>
      {/* Ultra-Modern Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Animated Lines */}
        <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`mb-12 text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
              <Compass className="mr-2 h-3.5 w-3.5" />
              Find Us
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Visit Our
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Location
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
            </span>
            in Dubai
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {description || `Visit our service center or schedule a mobile repair. We're here to serve you across ${city}.`}
          </p>
        </div>
        {/* Main Content */}
        <div className={`grid gap-8 lg:grid-cols-5 transition-all duration-1000 delay-400 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          {/* Left Panel - Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl p-6 shadow-2xl shadow-primary/5">
              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />

              <div className="relative">
                {/* Location Badge */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Our Location</p>
                    <p className="text-sm font-semibold text-foreground">{location}</p>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="mb-4 flex gap-1 rounded-xl bg-muted/50 p-1">
                  {[
                    { id: "info", icon: MapPin, label: "Info" },
                    { id: "hours", icon: ClockIcon, label: "Hours" },
                    { id: "areas", icon: Globe, label: "Areas" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300",
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                      )}
                    >
                      <tab.icon className="h-3.5 w-3.5" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[180px] space-y-3">
                  {/* Info Tab */}
                  {activeTab === "info" && (
                    <div className="space-y-3 animate-fade-in-up">
                      <Link
                        href={numberCallLink}
                        className="flex items-center gap-3 rounded-xl bg-primary/5 p-3 transition-all duration-300 hover:bg-primary/10"
                      >
                        <div className="rounded-lg bg-primary/20 p-2">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Call Now</p>
                          <p className="text-sm font-semibold text-foreground">{displayNumber}</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                      </Link>

                      <Link
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 rounded-xl bg-primary/5 p-3 transition-all duration-300 hover:bg-primary/10"
                      >
                        <div className="rounded-lg bg-primary/20 p-2">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Email Us</p>
                          <p className="text-sm font-semibold text-foreground truncate">{email}</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                      </Link>

                      <Link
                        href={mapsLink}
                        target="_blank"
                        className="flex items-center gap-3 rounded-xl bg-primary/5 p-3 transition-all duration-300 hover:bg-primary/10"
                      >
                        <div className="rounded-lg bg-primary/20 p-2">
                          <Navigation className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Get Directions</p>
                          <p className="text-sm font-semibold text-foreground">Open in Google Maps</p>
                        </div>
                        <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                      </Link>
                    </div>
                  )}

                  {/* Hours Tab */}
                  {activeTab === "hours" && (
                    <div className="space-y-2 animate-fade-in-up">
                      {operatingHours?.slice(0, 7).map((day, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg bg-primary/5 px-3 py-2 transition-all duration-300 hover:bg-primary/10"
                        >
                          <span className="text-sm font-medium text-foreground">{day.day}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-primary">{day.hours}</span>
                            <Badge variant="outline" className="border-primary/20 text-[10px] text-primary">
                              24/7
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Areas Tab */}
                  {activeTab === "areas" && (
                    <div className="space-y-2 animate-fade-in-up">
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas?.map((area, index) => (
                          <span
                            key={index}
                            className="group flex items-center gap-1.5 rounded-full border border-border/50 bg-card/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                          >
                            <MapPin className="h-3 w-3 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            {area.name}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <Globe className="inline h-3 w-3 text-primary" />
                        {" "}Serving all areas across Dubai
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1 gap-2 rounded-2xl bg-primary py-6 text-sm font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                asChild
              >
                <Link href={numberCallLink}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1 gap-2 rounded-2xl border-2 border-primary/20 py-6 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
                asChild
              >
                <Link href={mapsLink} target="_blank">
                  <Navigation className="h-4 w-4" />
                  Directions
                </Link>
              </Button>
            </div>

            {/* Mobile Service Badge */}
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Mobile Service Available</p>
                <p className="text-xs text-muted-foreground">We come to your location anywhere in {city}</p>
              </div>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                <CheckCircle className="mr-1 h-3 w-3" />
                Free Inspection
              </Badge>
            </div>
          </div>

          {/* Right Panel - Map */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-2 backdrop-blur-sm shadow-2xl shadow-primary/10">
              {/* Map Container */}
              <div className="relative overflow-hidden rounded-2xl" ref={mapRef}>
                {/* Loading State */}
                {!isMapLoaded && (
                  <div className="flex h-[450px] items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30">
                    <div className="text-center">
                      <div className="relative mx-auto mb-4 h-16 w-16">
                        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                        <Wrench className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-pulse text-primary" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">Loading map...</p>
                    </div>
                  </div>
                )}

                {/* Map Iframe */}
                <iframe
                  title={`${brandName} - Location Map`}
                  src={embedMap}
                  width="100%"
                  height="450"
                  className={cn(
                    "transition-opacity duration-700",
                    isMapLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />

                {/* Map Overlay Controls */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <button
                    onClick={() => window.open(mapsLink, '_blank')}
                    className="group rounded-2xl bg-card/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-card"
                    aria-label="Open in Google Maps"
                  >
                    <LocateFixed className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </button>
                </div>

                {/* Location Pin with Pulse */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-3 rounded-full bg-card/95 px-4 py-2.5 shadow-2xl backdrop-blur-sm border border-primary/20">
                    <div className="relative">
                      <div className="absolute h-4 w-4 animate-ping-slow rounded-full bg-primary opacity-75" />
                      <div className="relative h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">📍 We are here</span>
                    <div className="h-4 w-px bg-border" />
                    <span className="text-xs text-primary">{city}</span>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-card/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="text-[10px] font-medium text-foreground">Live Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}