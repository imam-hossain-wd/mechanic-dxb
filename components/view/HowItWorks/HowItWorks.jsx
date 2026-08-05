"use client";

import Link from "next/link";
import {
    Phone,
    MapPin,
    Truck,
    Shield,
    ArrowRight,
    Clock,
    CheckCircle,
    Navigation,
    Wrench,
    CreditCard
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/config/siteConfig";

export default function HowItWorks() {

    const steps = [
        {
            id: "share-location",
            number: "01",
            icon: MapPin,
            title: "Share Your Location",
            description: "Call or tap WhatsApp to send your live GPS pin in Dubai. Contact our 24/7 dispatch team. Tell us your car issue and send your exact WhatsApp location.",
            highlights: ["24/7 Support", "GPS Location", "Instant Response"],
            color: "from-blue-500 to-blue-600",
            lightColor: "bg-blue-50 dark:bg-blue-950/20",
            borderColor: "border-blue-200 dark:border-blue-800",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            buttonText: "Call Now",
            buttonLink: `tel:${SiteConfig.displayNumber}`,
            buttonIcon: Phone
        },
        {
            id: "van-dispatched",
            number: "02",
            icon: Truck,
            title: "Mobile Van Dispatched",
            description: "Our fully equipped service van heads to your spot instantly. A qualified mechanic in your area is assigned immediately, arriving in 15 to 30 minutes.",
            highlights: ["Fully Equipped", "15-30 Min", "Qualified Mechanic"],
            color: "from-emerald-500 to-emerald-600",
            lightColor: "bg-emerald-50 dark:bg-emerald-950/20",
            borderColor: "border-emerald-200 dark:border-emerald-800",
            iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
            buttonText: "Track Now",
            buttonLink: SiteConfig.whatsappCallLink,
            buttonIcon: Navigation
        },
        {
            id: "on-site-repair",
            number: "03",
            icon: Shield,
            title: "On-Site Repair & Warranty",
            description: "Tested, fixed, and verified on the spot. We diagnose, replace, or repair your car on-site. Pay by card or cash only after the job is complete.",
            highlights: ["Pay After Job", "Warranty Included", "Verified Service"],
            color: "from-purple-500 to-purple-600",
            lightColor: "bg-purple-50 dark:bg-purple-950/20",
            borderColor: "border-purple-200 dark:border-purple-800",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            buttonText: "Get Quote",
            buttonLink: "/contact",
            buttonIcon: Wrench
        }
    ];

    return (
        <section className="relative overflow-hidden bg-background py-8">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -right-20 top-0 h-75 w-75 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-75 w-75 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-12 bg-primary/30" />
                        <span className="text-sm font-medium uppercase tracking-wider text-primary">
                           How It Works
                        </span>
                        <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        Simple{" "}
                        <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            3-Step
                        </span>{" "}
                        Process
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1 max-w-md mx-auto">
                        Fast, reliable & transparent car repair in Dubai
                    </p>
                </div>

                {/* Steps - Horizontal Layout */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Desktop Connector Line */}
                    <div className="hidden md:block absolute top-28 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-primary/20 via-primary/40 to-primary/20" />

                    <div className="grid md:grid-cols-3 gap-6">

                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const ButtonIcon = step.buttonIcon;

                            return (
                                <div key={step.id} className="relative">

                                    <div className={cn(
                                        "relative rounded-2xl border p-6 text-center bg-primary"
                                    )}>
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-primary border-2 border-primary shadow-lg shadow-primary/30">
                                                {step.number}
                                            </div>
                                        </div>

                                        <div className="flex justify-center mt-3">
                                            <div className={cn("p-3 text-primary bg-white rounded-full")}>
                                                <Icon className={cn("h-6 w-6", step.color.replace("from-", "text-").replace(" to-", ""))} />
                                            </div>
                                        </div>

                                        <h3 className="text-base font-bold text-white mt-3 mb-1.5">
                                            {step.title}
                                        </h3>

                                        <p className="text-xs text-white leading-relaxed">
                                            {step.description}
                                        </p>

                                        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                                            {step.highlights.map((highlight, idx) => (
                                                <span key={idx} className="text-[10px] bg-white text-primary px-2 py-0.5 rounded-full">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={step.buttonLink}
                                            target={step.buttonLink.includes("wa.me") ? "_blank" : undefined}
                                            rel={step.buttonLink.includes("wa.me") ? "noopener noreferrer" : undefined}
                                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium  text-white transition-colors"
                                        >
                                            <ButtonIcon className="h-3.5 w-3.5" />
                                            <span>{step.buttonText}</span>
                                            <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>

                                    {/* Mobile Arrow */}
                                    {index < steps.length - 1 && (
                                        <div className="flex justify-center md:hidden my-1">
                                            <ArrowRight className="h-4 w-4 text-muted-foreground/30 rotate-90" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper function for className
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}