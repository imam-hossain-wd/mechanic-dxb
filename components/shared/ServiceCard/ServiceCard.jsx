// components/ui/ServiceCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, MapPin, Phone, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";



export const ServiceCard = ({ service, featured = false, className }) => {
    const primaryColor = "bg-primary";
    const primaryText = "text-primary";

    // Benefits for display
    const benefits = [
        { icon: Clock, label: "Fast Service" },
        { icon: MapPin, label: "Onsite Repair" },
        { icon: Sparkles, label: "Expert Team" },
    ];

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                featured
                    ? "border-2 border-primary/30 shadow-xl shadow-primary/20 hover:shadow-primary/30"
                    : "border border-border/50 shadow-lg hover:shadow-primary/10",
                className
            )}
        >
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Glowing Border Effect */}
            <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                featured && "opacity-100"
            )} style={{ padding: '1px' }} />

            {/* Top Glow Line */}
            <div className={cn(
                "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500",
                featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )} />

            {/* Badges Container */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between">
                <div className="flex flex-wrap gap-1.5">
                    {service.emergency && (
                        <div className="flex animate-pulse items-center gap-1 bg-red-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
                            <Zap className="h-2.5 w-2.5" />
                            24/7 Emergency
                        </div>
                    )}
                    {service.premium && (
                        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
                            <Sparkles className="h-2.5 w-2.5" />
                            Premium
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {featured && (
                        <div className="flex items-center gap-1 bg-primary px-2.5 py-1 text-[10px] font-bold text-white shadow-lg shadow-primary/30">
                            <Star className="h-2.5 w-2.5 fill-current" />
                            Featured
                        </div>
                    )}
                    {service.popular && !featured && (
                        <div className="flex items-center gap-1 bg-orange-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
                            🔥 Popular
                        </div>
                    )}
                </div>
            </div>

            <div className="relative p-5 md:p-6">
                {/* Service Icon with Glass Effect */}
                <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative inline-flex rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-3.5 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:scale-110">
                        {service.service_image ? (
                            <Image
                                src={service.service_image}
                                alt={service.name}
                                width={48}
                                height={48}
                                className="h-12 w-12 object-contain"
                            />
                        ) : (
                            <div className="h-12 w-12 rounded-full bg-primary/20" />
                        )}
                    </div>
                </div>

                {/* Service Name */}
                <h3 className="mb-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.name}
                </h3>

                {/* Service Features */}
                <div className="mb-4 space-y-1.5">
                    {service.features?.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="line-clamp-1">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Quick Benefits */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 rounded-full bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-primary transition-all duration-300 group-hover:bg-primary/10"
                        >
                            <benefit.icon className="h-3 w-3" />
                            {benefit.label}
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-4">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                        <Button
                            variant="default"
                            className="w-full gap-2 rounded-xl bg-primary text-sm font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/30"
                        >
                            <span>View Details</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <Button
                        variant="outline"
                        className="rounded-xl border-2 border-primary/20 px-3 text-primary transition-all duration-300 hover:bg-primary/5"
                        asChild
                    >
                        <Link href={SiteConfig?.numberCallLink} target="_blank">
                            <Phone className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};