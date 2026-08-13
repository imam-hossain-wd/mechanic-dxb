/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Phone,
    Wrench,
    Heart,
    MessageCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import { ServiceCard } from "@/components/shared/ServiceCard/ServiceCard";

// Enhanced services with deterministic values to prevent hydration errors
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
    price: `AED ${((index * 47) % 400) + 100}`,
    duration: `${((index * 13) % 45) + 15} min`,
    rating: (4 + (index % 10) * 0.09).toFixed(1),
    reviews: ((index * 23) % 90) + 10,
    isPopular: index % 3 === 0,
    isNew: index % 5 === 0,
    isFeatured: index < 3
}));

export default function ServicesPage() {
    const [animateItems, setAnimateItems] = useState(false);

    // Trigger grid entry animation after mount
    useEffect(() => {
        setAnimateItems(true);
    }, []);

    return (
        <main className="relative overflow-hidden bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary/10 pt-16">
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
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section id="services" className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div
                        className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-500 ${
                            animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        {enhancedServices.map((service, index) => (
                            <div
                                key={service.slug || index}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <ServiceCard
                                    service={service}
                                    featured={service.isFeatured}
                                />
                            </div>
                        ))}
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