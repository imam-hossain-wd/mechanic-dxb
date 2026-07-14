// app/brands/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Heart,
  Sparkles,
  Zap,
  Crown,
  Flame,
  TrendingUp,
  Filter,
  Grid3x3,
  List,
  ChevronDown,
  Phone,
  MessageCircle,
  ExternalLink,
  BadgeCheck,
  Car,
  Wrench,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteConfig } from "@/config/siteConfig";

// Car brands data
const carBrands = [
  {
    id: 1,
    name: "Toyota",
    logo: "/brands/toyota.svg",
    country: "Japan",
    founded: 1937,
    specialties: ["Reliability", "Fuel Efficiency", "Hybrid Technology"],
    popularModels: ["Camry", "Corolla", "Land Cruiser", "Prado"],
    rating: 4.9,
    reviews: 250,
    isPopular: true,
    isFeatured: true,
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: 2,
    name: "BMW",
    logo: "/brands/bmw.svg",
    country: "Germany",
    founded: 1916,
    specialties: ["Performance", "Luxury", "Precision Engineering"],
    popularModels: ["3 Series", "5 Series", "X5", "X6"],
    rating: 4.8,
    reviews: 180,
    isPopular: true,
    isFeatured: true,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    id: 3,
    name: "Mercedes-Benz",
    logo: "/brands/mercedes.svg",
    country: "Germany",
    founded: 1926,
    specialties: ["Luxury", "Innovation", "Safety"],
    popularModels: ["C-Class", "E-Class", "GLE", "G-Class"],
    rating: 4.9,
    reviews: 210,
    isPopular: true,
    isFeatured: true,
    color: "from-gray-500/20 to-gray-500/5"
  },
  {
    id: 4,
    name: "Nissan",
    logo: "/brands/nissan.svg",
    country: "Japan",
    founded: 1933,
    specialties: ["Affordability", "Reliability", "Innovation"],
    popularModels: ["Altima", "Patrol", "X-Trail", "Sunny"],
    rating: 4.7,
    reviews: 190,
    isPopular: false,
    isFeatured: false,
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: 5,
    name: "Honda",
    logo: "/brands/honda.svg",
    country: "Japan",
    founded: 1948,
    specialties: ["Reliability", "Fuel Efficiency", "Performance"],
    popularModels: ["Civic", "Accord", "CR-V", "Pilot"],
    rating: 4.8,
    reviews: 200,
    isPopular: true,
    isFeatured: false,
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: 6,
    name: "Lexus",
    logo: "/brands/lexus.svg",
    country: "Japan",
    founded: 1989,
    specialties: ["Luxury", "Quality", "Hybrid Technology"],
    popularModels: ["ES", "RX", "LX", "NX"],
    rating: 4.9,
    reviews: 160,
    isPopular: false,
    isFeatured: false,
    color: "from-gray-500/20 to-gray-500/5"
  },
  {
    id: 7,
    name: "Audi",
    logo: "/brands/audi.svg",
    country: "Germany",
    founded: 1909,
    specialties: ["Innovation", "Performance", "Quattro"],
    popularModels: ["A4", "A6", "Q5", "Q7"],
    rating: 4.8,
    reviews: 170,
    isPopular: true,
    isFeatured: false,
    color: "from-gray-500/20 to-gray-500/5"
  },
  {
    id: 8,
    name: "Porsche",
    logo: "/brands/porsche.svg",
    country: "Germany",
    founded: 1931,
    specialties: ["Performance", "Luxury", "Precision"],
    popularModels: ["911", "Cayenne", "Panamera", "Macan"],
    rating: 4.9,
    reviews: 140,
    isPopular: true,
    isFeatured: true,
    color: "from-gray-500/20 to-gray-500/5"
  },
  {
    id: 9,
    name: "Ford",
    logo: "/brands/ford.svg",
    country: "USA",
    founded: 1903,
    specialties: ["Trucks", "Performance", "Durability"],
    popularModels: ["F-150", "Mustang", "Explorer", "Edge"],
    rating: 4.6,
    reviews: 150,
    isPopular: false,
    isFeatured: false,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    id: 10,
    name: "Chevrolet",
    logo: "/brands/chevrolet.svg",
    country: "USA",
    founded: 1911,
    specialties: ["Affordability", "Durability", "Performance"],
    popularModels: ["Silverado", "Camaro", "Malibu", "Tahoe"],
    rating: 4.5,
    reviews: 130,
    isPopular: false,
    isFeatured: false,
    color: "from-gold-500/20 to-gold-500/5"
  },
  {
    id: 11,
    name: "Volkswagen",
    logo: "/brands/volkswagen.svg",
    country: "Germany",
    founded: 1937,
    specialties: ["Reliability", "Innovation", "Efficiency"],
    popularModels: ["Golf", "Passat", "Tiguan", "Tuareg"],
    rating: 4.7,
    reviews: 160,
    isPopular: false,
    isFeatured: false,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    id: 12,
    name: "Hyundai",
    logo: "/brands/hyundai.svg",
    country: "South Korea",
    founded: 1967,
    specialties: ["Affordability", "Innovation", "Warranty"],
    popularModels: ["Elantra", "Sonata", "Tucson", "Santa Fe"],
    rating: 4.6,
    reviews: 140,
    isPopular: false,
    isFeatured: false,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    id: 13,
    name: "Kia",
    logo: "/brands/kia.svg",
    country: "South Korea",
    founded: 1944,
    specialties: ["Affordability", "Design", "Warranty"],
    popularModels: ["Optima", "Sportage", "Telluride", "Sorento"],
    rating: 4.5,
    reviews: 120,
    isPopular: false,
    isFeatured: false,
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: 14,
    name: "Mitsubishi",
    logo: "/brands/mitsubishi.svg",
    country: "Japan",
    founded: 1917,
    specialties: ["SUVs", "Reliability", "Performance"],
    popularModels: ["Outlander", "Pajero", "Lancer", "ASX"],
    rating: 4.5,
    reviews: 110,
    isPopular: false,
    isFeatured: false,
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: 15,
    name: "Mazda",
    logo: "/brands/mazda.svg",
    country: "Japan",
    founded: 1920,
    specialties: ["Design", "Performance", "Reliability"],
    popularModels: ["Mazda3", "Mazda6", "CX-5", "MX-5"],
    rating: 4.7,
    reviews: 130,
    isPopular: false,
    isFeatured: false,
    color: "from-red-500/20 to-red-500/5"
  },
  {
    id: 16,
    name: "Jeep",
    logo: "/brands/jeep.svg",
    country: "USA",
    founded: 1941,
    specialties: ["Off-Road", "Durability", "Performance"],
    popularModels: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass"],
    rating: 4.6,
    reviews: 120,
    isPopular: false,
    isFeatured: false,
    color: "from-green-500/20 to-green-500/5"
  }
];


export default function BrandsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  // Filter brands
  const filteredBrands = carBrands

  const paginatedBrands = filteredBrands;
  const totalBrands = carBrands.length;
  const totalCountries = new Set(carBrands.map(b => b.country)).size;

  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/10 pt-20 pb-16">
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
                  <Car className="mr-2 h-3.5 w-3.5" />
                  Brands We Service
                </Badge>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                All
                <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Car Brands
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
                </span>
                We Repair
              </h1>

              <p className="mb-6 text-lg text-muted-foreground">
                From Japanese reliability to German precision, our expert mechanics 
                service all major car brands with specialized knowledge and advanced tools.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="gap-2 rounded-full bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  asChild
                >
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

              {/* Trust Indicators */}
              {/* <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ring-2 ring-background" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">2000+ Cars Repaired</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                    <span className="text-xs font-medium text-muted-foreground ml-1">4.9/5</span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Content - Brand Showcase */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Brand Grid Showcase */}
                <div className="grid grid-cols-4 gap-3">
                  {carBrands.slice(0, 8).map((brand, index) => (
                    <div
                      key={brand.id}
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10",
                        "animate-fade-in-up"
                      )}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="mb-2 flex h-12 w-full items-center justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                          {brand.name.charAt(0)}
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{brand.name}</p>
                      <p className="text-[8px] text-muted-foreground">{brand.country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Brands Section */}
      <section id="brands" className="py-10">
        <div className="container mx-auto px-4">
          {/* Featured Brands */}
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-2">
              <Crown className="h-5 w-5 text-amber-500" />
              <h3 className="font-semibold text-foreground">Featured Brands</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {carBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                        {brand.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{brand.name}</h4>
                        <p className="text-xs text-muted-foreground">{brand.country}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {brand.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

        


          {/* Brands Grid */}
          <div className={cn(
            viewMode === "grid" 
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "space-y-4",
            "transition-all duration-500",
            animateItems && "opacity-100 translate-y-0"
          )}>
            {paginatedBrands.map((brand, index) => {
              if (viewMode === "grid") {
                return (
                  <div
                    key={brand.id}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                      brand.isFeatured && "border-primary/30 bg-primary/5",
                      "animate-fade-in-up"
                    )}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Badges */}
                    <div className="absolute right-3 top-3 flex flex-col gap-1">
                      {brand.isFeatured && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          <Sparkles className="mr-1 h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                      {brand.isPopular && (
                        <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30">
                          <Flame className="mr-1 h-3 w-3" />
                          Popular
                        </Badge>
                      )}
                    </div>

                    {/* Brand Logo */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-xl font-bold text-primary",
                        brand.color
                      )}>
                        {brand.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {brand.country} • Founded {brand.founded}
                        </p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {brand.specialties.map((specialty, idx) => (
                        <span key={idx} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Popular Models */}
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-1.5">Popular Models:</p>
                      <div className="flex flex-wrap gap-1">
                        {brand.popularModels.slice(0, 3).map((model, idx) => (
                          <span key={idx} className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-0.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                        {brand.rating}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Users className="h-3.5 w-3.5" />
                        {brand.reviews} reviews
                      </span>
                    </div>
                  </div>
                );
              }

              // List View
              return (
                <div
                  key={brand.id}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    {/* Brand Logo */}
                    <div className="flex-shrink-0">
                      <div className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-xl font-bold text-primary",
                        brand.color
                      )}>
                        {brand.name.charAt(0)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {brand.name}
                        </h3>
                        {brand.isFeatured && (
                          <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                            Featured
                          </Badge>
                        )}
                        {brand.isPopular && (
                          <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 text-[10px]">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {brand.country} • Founded {brand.founded}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {brand.specialties.map((specialty, idx) => (
                          <span key={idx} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="flex items-center gap-0.5">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        {brand.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">({brand.reviews})</span>
                    </div>
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
            Need Expert Service?
          </Badge>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Don't See Your
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Brand?
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
            </span>
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            We service all major and luxury car brands. Contact us to confirm 
            if we can service your vehicle.
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

const ListIcon = ({ className }) => (
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

const GlobeIcon = ({ className }) => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);