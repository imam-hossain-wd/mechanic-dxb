// app/services/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    Filter,
    Grid3x3,
    List,
    X,
    ArrowRight,
    CheckCircle,
    Clock,
    MapPin,
    Phone,
    Star,
    Sparkles,
    Wrench,
    Car,
    Shield,
    Zap,
    Award,
    Users,
    Truck,
    Calendar,
    BadgeCheck,
    Heart,
    Eye,
    ChevronDown,
    ChevronUp,
    TrendingUp,
    ThumbsUp,
    MessageCircle,
    Share2,
    ExternalLink,
    Layers,
    LayoutGrid,
    ListChecks,
    Grid2X2,
    Grid3X3 as GridIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServiceBanner, serviceImages } from "@/utils/assets";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";

// Service categories
const categories = [
    "All Services",
    "Engine & Mechanical",
    "Electrical & Battery",
    "AC & Cooling",
    "Brakes & Suspension",
    "Body & Detailing",
    "Emergency Services",
    "Diagnostics",
    "Transmission",
    "Oil & Fluids"
];

// Enhanced services with additional data
const enhancedServices = services.map((service, index) => ({
    ...service,
    category: [
        "Engine & Mechanical",
        "Electrical & Battery",
        "AC & Cooling",
        "Brakes & Suspension",
        "Body & Detailing",
        "Emergency Services",
        "Diagnostics",
        "Transmission",
        "Oil & Fluids",
        "Engine & Mechanical"
    ][index % 10],
    price: `AED ${Math.floor(Math.random() * 500) + 100}`,
    duration: `${Math.floor(Math.random() * 60) + 15} min`,
    rating: (4 + Math.random() * 0.9).toFixed(1),
    reviews: Math.floor(Math.random() * 100) + 10,
    isPopular: index % 3 === 0,
    isNew: index % 5 === 0,
    isFeatured: index < 3,
    icon: [
        Wrench, Car, Shield, Zap, Sparkles,
        Truck, BadgeCheck, Award, Users, Clock
    ][index % 10]
}));

export default function ServicesPage() {
    const [viewMode, setViewMode] = useState("grid");
    const [activeCategory, setActiveCategory] = useState("All Services");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [showFilters, setShowFilters] = useState(false);
    const [visibleServices, setVisibleServices] = useState(9);
    const [animateItems, setAnimateItems] = useState(false);
    const containerRef = useRef(null);

    // Filter services
    const filteredServices = enhancedServices.filter(service => {
        const matchesCategory = activeCategory === "All Services" || service.category === activeCategory;
        const matchesSearch = searchQuery === "" ||
            service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.features?.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Sort services
    const sortedServices = [...filteredServices].sort((a, b) => {
        switch (sortBy) {
            case "popular":
                return (b.reviews || 0) - (a.reviews || 0);
            case "newest":
                return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
            case "rating":
                return parseFloat(b.rating || "0") - parseFloat(a.rating || "0");
            case "price-low":
                return parseInt(a.price?.replace(/\D/g, "") || "0") - parseInt(b.price?.replace(/\D/g, "") || "0");
            case "price-high":
                return parseInt(b.price?.replace(/\D/g, "") || "0") - parseInt(a.price?.replace(/\D/g, "") || "0");
            default:
                return 0;
        }
    });

    // Paginate services
    const paginatedServices = sortedServices.slice(0, visibleServices);
    const hasMore = visibleServices < sortedServices.length;

    // Load more
    const loadMore = () => {
        setVisibleServices(prev => prev + 6);
    };

    // Stats
    const totalServices = enhancedServices.length;
    const categoriesCount = categories.length - 1;

    // Animation on scroll
    useEffect(() => {
        setAnimateItems(true);
    }, []);

    return (
        <main className="relative overflow-hidden bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-16 md:pt-28 md:pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -right-20 top-0 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
                    <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <div className="mb-4 flex items-center gap-3">
                            <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                                <Wrench className="mr-2 h-3.5 w-3.5" />
                                Our Services
                            </Badge>
                        </div>

                        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                            Comprehensive
                            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Auto Repair
                                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
                            </span>
                            Services
                        </h1>

                        <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
                            From emergency repairs to routine maintenance, our expert mechanics provide
                            professional car repair services across Dubai at your convenience.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                className="gap-2 rounded-full bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                asChild
                            >
                                <Link href="#services">
                                    <span>Browse Services</span>
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
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 md:py-16" ref={containerRef}>
                <div className="container mx-auto px-4">
                    {/* Stats Bar */}
                    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                        <div className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5">
                            <div className="mb-2 flex justify-center">
                                <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                    <Wrench className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-foreground">{totalServices}+</p>
                            <p className="text-xs font-medium text-muted-foreground">Services Available</p>
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
                                    <Clock className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-foreground">12 min</p>
                            <p className="text-xs font-medium text-muted-foreground">Avg. Response</p>
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
                                    placeholder="Search services..."
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
                                {/* Sort */}
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="rounded-full border-border/50 bg-card/30 px-4 py-2 text-sm backdrop-blur-sm focus:border-primary/50 focus:outline-none"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest First</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>

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
                            Showing {paginatedServices.length} of {sortedServices.length} services
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className={cn(
                        viewMode === "grid"
                            ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            : "space-y-4",
                        "transition-all duration-500",
                        animateItems && "opacity-100 translate-y-0"
                    )}>
                        {paginatedServices.map((service, index) => {
                            const Icon = service.icon || Wrench;

                            if (viewMode === "grid") {
                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                                            service.isFeatured && "border-primary/30 bg-primary/5",
                                            "animate-fade-in-up"
                                        )}
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        {/* Badges */}
                                        <div className="absolute right-3 top-3 flex flex-col gap-1">
                                            {service.isFeatured && (
                                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                                    <Sparkles className="mr-1 h-3 w-3" />
                                                    Featured
                                                </Badge>
                                            )}
                                            {service.isNew && (
                                                <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30">
                                                    New
                                                </Badge>
                                            )}
                                            {service.isPopular && (
                                                <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30">
                                                    <TrendingUp className="mr-1 h-3 w-3" />
                                                    Popular
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-4">
                                            <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-3 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:scale-110">
                                                <Icon className="h-8 w-8 text-primary" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {service.name}
                                        </h3>

                                        <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                                            {service.title}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-3 space-y-1">
                                            {service.features?.slice(0, 2).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <CheckCircle className="h-3 w-3 text-primary" />
                                                    <span className="line-clamp-1">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Meta Info */}
                                        <div className="mb-3 flex items-center gap-3 text-[10px] text-muted-foreground">
                                            <span className="flex items-center gap-0.5">
                                                <Clock className="h-3 w-3" />
                                                {service.duration}
                                            </span>
                                            <span className="flex items-center gap-0.5">
                                                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                {service.rating}
                                            </span>
                                            <span className="flex items-center gap-0.5">
                                                <Users className="h-3 w-3" />
                                                {service.reviews}
                                            </span>
                                        </div>

                                        {/* Price & Actions */}
                                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                                            <div>
                                                <p className="text-xs text-muted-foreground">Starting from</p>
                                                <p className="text-lg font-bold text-primary">{service.price}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="gap-1 rounded-full bg-primary px-4 text-xs shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                                                    asChild
                                                >
                                                    <Link href={`/services/${service.slug}`}>
                                                        <Eye className="h-3 w-3" />
                                                        View
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="gap-1 rounded-full border-2 border-primary/20 px-3 text-xs text-primary hover:bg-primary/5"
                                                    asChild
                                                >
                                                    <a href={`tel:${SiteConfig.displayNumber}`}>
                                                        <Phone className="h-3 w-3" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
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
                                            <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-3 transition-all duration-500 group-hover:scale-110">
                                                <Icon className="h-8 w-8 text-primary" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {service.name}
                                                </h3>
                                                {service.isFeatured && (
                                                    <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                                                        Featured
                                                    </Badge>
                                                )}
                                                {service.isNew && (
                                                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 text-[10px]">
                                                        New
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-1">
                                                {service.title}
                                            </p>
                                            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-0.5">
                                                    <Clock className="h-3 w-3" />
                                                    {service.duration}
                                                </span>
                                                <span className="flex items-center gap-0.5">
                                                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                    {service.rating}
                                                </span>
                                                <span className="flex items-center gap-0.5">
                                                    <Users className="h-3 w-3" />
                                                    {service.reviews} reviews
                                                </span>
                                            </div>
                                        </div>

                                        {/* Price & Actions */}
                                        <div className="flex flex-col items-end gap-2">
                                            <div className="text-right">
                                                <p className="text-xs text-muted-foreground">Starting from</p>
                                                <p className="text-xl font-bold text-primary">{service.price}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="gap-1 rounded-full bg-primary px-4 text-xs shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                                                    asChild
                                                >
                                                    <Link href={`/services/${service.slug}`}>
                                                        <Eye className="h-3 w-3" />
                                                        View
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="gap-1 rounded-full border-2 border-primary/20 px-3 text-xs text-primary hover:bg-primary/5"
                                                    asChild
                                                >
                                                    <a href={`tel:${SiteConfig.displayNumber}`}>
                                                        <Phone className="h-3 w-3" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
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
                                <span>Load More Services</span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </div>
                    )}

                    {/* No Results */}
                    {sortedServices.length === 0 && (
                        <div className="text-center py-12">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                <Search className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">No services found</h3>
                            <p className="text-sm text-muted-foreground">
                                Try adjusting your search or filter criteria
                            </p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All Services");
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
                        Not Sure Which Service You Need?
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                        Our expert team is here to help you find the right solution for your car.
                        Call us now for a free consultation.
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