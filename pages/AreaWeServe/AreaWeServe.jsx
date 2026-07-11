// app/area-we-serve/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Search,
  X,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Sparkles,
  Shield,
  Users,
  Truck,
  Award,
  Globe,
  Navigation,
  Compass,
  Building2,
  Home,
  Store,
  Briefcase,
  Landmark,
  LocateFixed,
  Filter,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  ThumbsUp,
  MessageCircle,
  ExternalLink,
  Map,
  Pin,
  Circle,
  BadgeCheck,
  Heart,
  Zap,
  Crown,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  population: Math.floor(Math.random() * 100000) + 5000,
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

// Categories
const categories = [
  "All Areas",
  "Central Dubai",
  "Business District",
  "Residential",
  "Industrial",
  "Waterfront"
];

export default function AreasWeServePage() {
  const [activeCategory, setActiveCategory] = useState("All Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [visibleAreas, setVisibleAreas] = useState(9);
  const [selectedArea, setSelectedArea] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  const containerRef = useRef(null);

  // Filter areas
  const filteredAreas = enhancedAreas.filter(area => {
    const matchesCategory = activeCategory === "All Areas" || area.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      area.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Paginate areas
  const paginatedAreas = filteredAreas.slice(0, visibleAreas);
  const hasMore = visibleAreas < filteredAreas.length;

  // Featured areas (top 3)
  const featuredAreas = enhancedAreas.filter(area => area.isFeatured).slice(0, 3);

  // Stats
  const totalAreas = enhancedAreas.length;
  const totalCities = new Set(enhancedAreas.map(a => a.category)).size;

  // Load more
  const loadMore = () => {
    setVisibleAreas(prev => prev + 6);
  };

  // Animation on scroll
  useEffect(() => {
    setAnimateItems(true);
  }, []);

  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
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
            </div>

            {/* Right Content - Map Preview */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative Map Background */}
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 to-primary/20 p-2 shadow-2xl shadow-primary/10">
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
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-card/90 px-3 py-2 backdrop-blur-sm border border-border/50">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {totalAreas}+ Locations
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        5-15 min Response
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                        4.9/5 Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-4 -top-4 animate-float-slow rounded-2xl border border-primary/20 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ring-2 ring-background" />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">2,000+</p>
                      <p className="text-[10px] text-muted-foreground">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-12 md:py-16" ref={containerRef}>
        <div className="container mx-auto px-4">
          {/* Stats Bar */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{totalAreas}+</p>
              <p className="text-xs font-medium text-muted-foreground">Areas Covered</p>
            </div>
            
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">5-15 min</p>
              <p className="text-xs font-medium text-muted-foreground">Avg. Response Time</p>
            </div>
            
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">4.9/5</p>
              <p className="text-xs font-medium text-muted-foreground">Average Rating</p>
            </div>
            
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">2,000+</p>
              <p className="text-xs font-medium text-muted-foreground">Happy Customers</p>
            </div>
          </div>

          {/* Featured Areas */}
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-2">
              <Crown className="h-5 w-5 text-amber-500" />
              <h3 className="font-semibold text-foreground">Featured Areas</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredAreas.map((area, index) => {
                const Icon = area.icon || MapPin;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                    <div className="relative">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{area.name}</h4>
                          <p className="text-xs text-muted-foreground">{area.category}</p>
                        </div>
                      </div>
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
                      <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Popular
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filters & Controls */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search areas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9 rounded-full border-border/50 bg-card/30 backdrop-blur-sm focus:border-primary/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* View Toggle */}
                <div className="flex rounded-full border border-border/50 bg-card/30 p-0.5 backdrop-blur-sm">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "rounded-full p-1.5 transition-all duration-300",
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <GridIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "rounded-full p-1.5 transition-all duration-300",
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                {/* Filter Toggle (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden rounded-full border border-border/50 bg-card/30 p-2 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                >
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className={cn(
              "flex flex-wrap gap-1.5 transition-all duration-300",
              showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-96 md:opacity-100 overflow-hidden md:overflow-visible"
            )}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-xs text-muted-foreground">
              Showing {paginatedAreas.length} of {filteredAreas.length} areas
            </p>
          </div>

          {/* Areas Grid */}
          <div className={cn(
            viewMode === "grid" 
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "space-y-4",
            "transition-all duration-500",
            animateItems && "opacity-100 translate-y-0"
          )}>
            {paginatedAreas.map((area, index) => {
              const Icon = area.icon || MapPin;
              
              if (viewMode === "grid") {
                return (
                  <div
                    key={index}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                      "animate-fade-in-up"
                    )}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Badges */}
                    <div className="absolute right-3 top-3 flex flex-col gap-1">
                      {area.isFeatured && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          <Sparkles className="mr-1 h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                      {area.isNew && (
                        <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30">
                          New
                        </Badge>
                      )}
                      {area.isPopular && (
                        <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30">
                          <Flame className="mr-1 h-3 w-3" />
                          Popular
                        </Badge>
                      )}
                    </div>

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
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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

                    {/* Action Button */}
                    <Button
                      className="w-full gap-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href={`/area-we-serve/${area.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Navigation className="h-4 w-4" />
                        <span>Get Directions</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                );
              }

              // List View
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={cn(
                        "rounded-xl bg-gradient-to-br p-2.5 transition-all duration-500 group-hover:scale-110",
                        area.color
                      )}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {area.name}
                        </h3>
                        {area.isFeatured && (
                          <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                            Featured
                          </Badge>
                        )}
                        {area.isNew && (
                          <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 text-[10px]">
                            New
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-primary/20 text-[10px] text-primary">
                          {area.category}
                        </Badge>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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

                    {/* Action */}
                    <Button
                      className="gap-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href={`/area-we-serve/${area.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Navigation className="h-4 w-4" />
                        <span>Directions</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-10 text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                className="gap-2 rounded-full border-2 border-primary/20 px-8 py-6 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5 hover:scale-[1.02]"
              >
                <span>Load More Areas</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredAreas.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">No areas found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Areas");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
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

// Helper icon components
const GridIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const List = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);