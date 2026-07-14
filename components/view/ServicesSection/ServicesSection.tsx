// components/sections/ServicesSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { services } from "@/data/services/services";
import { ServiceCard } from "@/components/shared/ServiceCard/ServiceCard";

export default function ServicesSection() {
    const [visibleServices, setVisibleServices] = useState(services.slice(0, 8));

    return (
        <section className="relative overflow-hidden bg-background py-10">
            {/* Modern Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute right-0 top-0 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-12 bg-primary/30" />
                        <span className="text-sm font-medium uppercase tracking-wider text-primary">
                            Our Services
                        </span>
                        <div className="h-px w-12 bg-primary/30" />
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Comprehensive{" "}
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Auto Repair
                        </span>{" "}
                        Services
                    </h2>

                    <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                        From emergency fixes to complete overhauls, our expert mechanics handle
                        all your car repair needs with precision and care.
                    </p>
                </div>

                {/* Stats Bar */}
                {/* <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-primary/30  bg-primary/5  p-4 text-center backdrop-blur-sm transition-all duration-300 shadow-lg shadow-primary/5"
                        >
                            <div className="mb-2 flex justify-center">
                                <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                    <stat.icon className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                            <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                            <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                        </div>
                    ))}
                </div> */}

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-[90%] md:w-full mx-auto">
                    {visibleServices.map((service, index) => (
                        <div
                            key={service.slug}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <ServiceCard
                                className=""
                                service={service}
                                featured={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* View All Services CTA */}
                <div className="mt-12 text-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 rounded-full bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <Button
                            size="lg"
                            className="group relative gap-3 rounded-full bg-primary px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40"
                            asChild
                        >
                            <Link href="/services">
                                <span>View All Services</span>
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}