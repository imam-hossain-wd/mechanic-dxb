// components/sections/FAQSection.tsx
"use client";

import { useState, useRef} from "react";
import {
    ChevronDown,
    HelpCircle,
    Phone,
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
    Filter,
    Globe,
    MapPin,
    Headphones,
    Star,
    BadgeCheck,
    Flame,
    
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
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef(null);



    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
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



    return (
        <section className="w-full md:w-[70%] mx-auto relative overflow-hidden bg-background py-2">
            {/* Ultra-Modern Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-8 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/50" />
                        <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                            <HelpCircle className="mr-2 h-3.5 w-3.5" />
                            FAQ
                        </Badge>
                        <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/50" />
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Frequently Asked
                        <span className="relative mx-3 bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Questions
                            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-linear-to-r from-primary to-primary/30 animate-pulse-slow" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                        Find answers to the most common questions about our services
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
                    {faqData.map((faq, index) => {
                        const globalIndex = enhancedFaqData.findIndex(f => f.question === faq.question);
                        const isOpen = openIndex === globalIndex;

                        return (
                            <div
                                key={globalIndex}
                                className={cn(
                                    "group relative overflow-hidden rounded border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-500 ",
                                    isOpen && "border-primary/30 bg-primary/5 shadow-xl shadow-primary/10"
                                )}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(globalIndex)}
                                    className="w-full p-2 text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "mt-0.5 rounded p-2 transition-all duration-300",
                                            isOpen
                                                ? " text-primary"
                                                : " text-primary"
                                                // ? "bg-primary/20 text-primary"
                                                // : "bg-primary/10 text-primary/70 group-hover:bg-primary/20 group-hover:text-primary"
                                        )}>
                                            <HelpCircle className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start flex-wrap gap-1.5">
                                                <h4 className="text-sm font-semibold text-foreground">
                                                    {faq.question}
                                                </h4>
                                            </div>
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
                                    <div className="px-5 pb-1">
                                        <div className="border-t border-border/50 pt-1">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* FAQ Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </div>
        </section>
    );
}

