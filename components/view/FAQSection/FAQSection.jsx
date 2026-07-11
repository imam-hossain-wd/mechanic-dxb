// components/sections/FAQSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    ChevronDown,
    HelpCircle,
    Phone,
    Mail,
    MessageCircle,
    Search,
    X,
    Sparkles,
    Zap,
    Clock,
    Shield,
    Wrench,
    Car,
    Users,
    Award,
    Lightbulb,
    CheckCircle,
    ArrowRight,
    Filter,
    ThumbsUp,
    ThumbsDown,
    Share2,
    Copy,
    Globe,
    MapPin,
    Headphones,
    Star,
    BadgeCheck,
    Flame,
    TrendingUp,
    
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteConfig } from "@/config/siteConfig";
import { faqData } from "@/data/faq";


// Helper icon components
const CalendarIcon = ({ className }) => (
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
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const TruckIcon = ({ className }) => (
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
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

// Enhanced FAQ data with additional fields
const enhancedFaqData = faqData.map((faq, index) => ({
    ...faq,
    helpful: Math.floor(Math.random() * 50) + 10,
    notHelpful: Math.floor(Math.random() * 5),
    views: Math.floor(Math.random() * 1000) + 100,
    isNew: index % 5 === 0,
    isPopular: index % 3 === 0,
    tags: [
        ["quick", "service", "emergency"],
        ["pricing", "transparent", "affordable"],
        ["quality", "expert", "certified"],
        ["mobile", "convenient", "onsite"],
        ["warranty", "guarantee", "trust"],
        ["fast", "reliable", "professional"],
        ["24/7", "support", "help"],
        ["safety", "secure", "tested"]
    ][index % 8],
    icon: [
        Zap, Clock, Shield, Wrench, Car,
        Users, Award, Lightbulb, Sparkles, CheckCircle,
        Headphones, Globe, MapPin, Star, Flame
    ][index % 15]
}));

// Categories with icons
const categoryIcons = {
    "All": Filter,
    "General": HelpCircle,
    "Services": Wrench,
    "Pricing": Award,
    "Emergency": Phone,
    "Technical": Shield,
    "Booking": CalendarIcon,
    "Mobile Service": TruckIcon,
    "Warranty": BadgeCheck,
    "Parts": Car
};

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [feedbackGiven, setFeedbackGiven] = useState({});
    const [showSharePopup, setShowSharePopup] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchInputRef = useRef(null);

    // Categories
    const categories = ["All", ...new Set(enhancedFaqData.map(faq => faq.category))];

    // Filter FAQs
    const filteredFAQs = enhancedFaqData.filter(faq => {
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
        const matchesSearch = searchQuery === "" ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Popular FAQs (top 3)
    const popularFAQs = enhancedFaqData
        .filter(faq => faq.isPopular)
        .slice(0, 3);

    // Stats
    const totalFAQs = enhancedFaqData.length;
    const avgHelpful = Math.round(
        enhancedFaqData.reduce((sum, f) => sum + (f.helpful / (f.helpful + f.notHelpful + 1)) * 100, 0) / totalFAQs
    );

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleFeedback = (index) => {
        setFeedbackGiven(prev => ({ ...prev, [index]: type }));
    };

    const handleCopyLink = (question) => {
        const url = `${window.location.origin}/faq#${question.toLowerCase().replace(/\s+/g, '-')}`;
        navigator.clipboard.writeText(url);
        setShowSharePopup(null);
    };

    // FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": enhancedFaqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Get icon for category
    const getCategoryIcon = (category) => {
        const Icon = categoryIcons[category] || HelpCircle;
        return Icon;
    };

    return (
        <section className="relative overflow-hidden bg-background py-2">
            {/* Ultra-Modern Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
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
                                animationDuration: (Math.random() * 10 + 8) + 's',
                                animationDelay: (Math.random() * 5) + 's',
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                        <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                            <HelpCircle className="mr-2 h-3.5 w-3.5" />
                            FAQ
                        </Badge>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Frequently Asked
                        <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Questions
                            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                        Find answers to the most common questions about our services
                    </p>
                </div>

                {/* Popular FAQs */}
                <div className="mb-10">
                    <div className="mb-4 flex items-center gap-2">
                        <Flame className="h-5 w-5 text-orange-500" />
                        <h3 className="font-semibold text-foreground">Most Popular Questions</h3>
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                        {popularFAQs.map((faq, index) => {
                            const globalIndex = enhancedFaqData.findIndex(f => f.question === faq.question);
                            const Icon = faq.icon || HelpCircle;
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setOpenIndex(openIndex === globalIndex ? null : globalIndex);
                                        setActiveCategory("All");
                                    }}
                                    className="group flex items-center gap-3 rounded-2xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg"
                                >
                                    <div className="rounded-full bg-primary/10 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                        <Icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="flex-1 text-left text-sm font-medium text-foreground line-clamp-1">
                                        {faq.question}
                                    </span>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="mb-8 space-y-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search questions..."
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

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-1.5">
                            {categories.map((category) => {
                                const Icon = getCategoryIcon(category);
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={cn(
                                            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300",
                                            activeCategory === category
                                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                                        )}
                                    >
                                        <Icon className="h-3 w-3" />
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Results count */}
                    {searchQuery && (
                        <p className="text-xs text-muted-foreground">
                            Found {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                        </p>
                    )}
                </div>

                {/* FAQ Accordion */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {filteredFAQs.map((faq, index) => {
                        const globalIndex = enhancedFaqData.findIndex(f => f.question === faq.question);
                        const Icon = faq.icon || HelpCircle;
                        const isOpen = openIndex === globalIndex;

                        return (
                            <div
                                key={globalIndex}
                                className={cn(
                                    "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500",
                                    isOpen && "border-primary/30 bg-primary/5 shadow-xl shadow-primary/10"
                                )}
                            >
                                {/* Category Badge */}
                                <div className="absolute right-3 top-3">
                                    <Badge variant="outline" className="border-primary/20 text-[10px] text-primary">
                                        {faq.category}
                                    </Badge>
                                </div>

                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(globalIndex)}
                                    className="w-full p-5 text-left"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={cn(
                                            "mt-0.5 rounded-full p-2 transition-all duration-300",
                                            isOpen
                                                ? "bg-primary/20 text-primary"
                                                : "bg-primary/10 text-primary/70 group-hover:bg-primary/20 group-hover:text-primary"
                                        )}>
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start flex-wrap gap-1.5">
                                                <h4 className="text-sm font-semibold text-foreground">
                                                    {faq.question}
                                                </h4>
                                                {faq.isNew && (
                                                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 text-[10px]">
                                                        New
                                                    </Badge>
                                                )}
                                                {faq.isPopular && (
                                                    <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 text-[10px]">
                                                        <Sparkles className="mr-0.5 h-2.5 w-2.5" />
                                                        Popular
                                                    </Badge>
                                                )}
                                            </div>
                                            {faq.tags && faq.tags.length > 0 && (
                                                <div className="mt-1 flex flex-wrap gap-1">
                                                    {faq.tags.slice(0, 2).map((tag) => (
                                                        <span key={tag} className="text-[10px] text-muted-foreground/70">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <ChevronDown
                                            className={cn(
                                                "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                                                isOpen && "rotate-180 text-primary"
                                            )}
                                        />
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={cn(
                                        "transition-all duration-300 ease-in-out overflow-hidden",
                                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="px-5 pb-5 pt-0">
                                        <div className="border-t border-border/50 pt-4">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>

                                            {/* Action Buttons */}
                                            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] text-muted-foreground">
                                                        Was this helpful?
                                                    </span>
                                                    <button
                                                        onClick={() => handleFeedback(globalIndex, 'helpful')}
                                                        className={cn(
                                                            "rounded-full p-1.5 transition-all duration-300",
                                                            feedbackGiven[globalIndex] === 'helpful'
                                                                ? "bg-emerald-500/20 text-emerald-500"
                                                                : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                                                        )}
                                                    >
                                                        <ThumbsUp className="h-3.5 w-3.5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleFeedback(globalIndex, 'not-helpful')}
                                                        className={cn(
                                                            "rounded-full p-1.5 transition-all duration-300",
                                                            feedbackGiven[globalIndex] === 'not-helpful'
                                                                ? "bg-red-500/20 text-red-500"
                                                                : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                                                        )}
                                                    >
                                                        <ThumbsDown className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>

                                                <div className="flex items-center gap-1.5">
                                                    {/* Views */}
                                                    <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                                                        <TrendingUp className="h-3 w-3" />
                                                        {faq.views}
                                                    </span>

                                                    {/* Share Button */}
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setShowSharePopup(showSharePopup === globalIndex ? null : globalIndex)}
                                                            className="rounded-full p-1.5 text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                                                        >
                                                            <Share2 className="h-3.5 w-3.5" />
                                                        </button>

                                                        {/* Share Popup */}
                                                        {showSharePopup === globalIndex && (
                                                            <div className="absolute right-0 top-full mt-1 z-20 rounded-xl border border-border/50 bg-card p-2 shadow-2xl backdrop-blur-sm min-w-[160px]">
                                                                <button
                                                                    onClick={() => handleCopyLink(faq.question)}
                                                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-foreground transition-all duration-300 hover:bg-primary/10"
                                                                >
                                                                    <Copy className="h-3.5 w-3.5" />
                                                                    Copy Link
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Emergency Contact */}
                                            {faq.category === "Emergency" && (
                                                <div className="mt-3 rounded-xl bg-red-500/10 p-3 border border-red-500/20">
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="h-4 w-4 text-red-500" />
                                                        <span className="text-sm font-medium text-red-500">Emergency Contact:</span>
                                                        <a
                                                            href={`tel:${SiteConfig.displayNumber}`}
                                                            className="text-sm font-semibold text-red-500 hover:underline"
                                                        >
                                                            {SiteConfig.displayNumber}
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredFAQs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                            <Search className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">No results found</h3>
                        <p className="text-sm text-muted-foreground">
                            Try adjusting your search or filter criteria
                        </p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setSearchQuery("");
                                setActiveCategory("All");
                            }}
                        >
                            Clear filters
                        </Button>
                    </div>
                )}

                {/* FAQ Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </div>
        </section>
    );
}

