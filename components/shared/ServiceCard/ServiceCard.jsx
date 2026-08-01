
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Flame, MapPin, Phone, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

export const ServiceCard = ({ service, featured, className }) => {
    // Quick benefits
    const benefits = [
        { icon: Clock, label: "Fast Service" },
        { icon: MapPin, label: "Onsite Repair" },
        { icon: Sparkles, label: "Expert Team" },
    ];

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl border border-primary/30",
                className
            )}
        >

            {/* Service Image - Small Banner */}
            <div className="relative h-32 w-full overflow-hidden bg-primary/5">
                {service.service_banner ? (
                    <Image
                        src={service.service_banner}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <span className="text-sm font-medium text-primary/60">{service.name}</span>
                    </div>
                )}

                {/* Badges Container */}
                <div className="absolute top-3 left-3 right-3 z-10 flex items-start justify-between">
                    <div className="flex flex-wrap gap-1.5">
                        {service.emergency && (
                            <div className="flex items-center gap-1 bg-red-500 px-2 py-0.5 text-[9px] font-bold text-white shadow-lg rounded">
                                <Zap className="h-2.5 w-2.5" />
                                24/7 Emergency
                            </div>
                        )}
                        {service.premium && (
                            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 px-2 py-0.5 text-[9px] font-bold text-white shadow-lg rounded">
                                <Sparkles className="h-2.5 w-2.5" />
                                Premium
                            </div>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {service.popular && (
                            <div className="flex items-center gap-1 bg-primary px-2 py-0.5 text-[9px] font-bold text-white shadow-lg shadow-primary/30 rounded">
                                <Flame className="h-2.5 w-2.5 fill-current" />
                                Popular
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative p-4 md:p-5">
                {/* Service Name */}
                <h3 className="mb-1.5 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                </h3>

                {/* Service Features */}
                <div className="mb-3 space-y-1">
                    {service.features?.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-1.5 text-xs text-gray-600">
                            <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                            <span className="line-clamp-1">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Quick Benefits */}
                <div className="mb-2 flex flex-wrap gap-1.5">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 rounded-full bg-primary/5 px-2 py-0.5 text-[9px] font-medium text-primary transition-all duration-300 group-hover:bg-primary/10"
                        >
                            <benefit.icon className="h-2.5 w-2.5" />
                            {benefit.label}
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                        <Button
                            variant="default"
                            className="w-full gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/30 h-9"
                        >
                            <span>View Details</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <Button
                        variant="outline"
                        className="rounded-lg border-2 border-primary/20 px-2.5 text-primary transition-all duration-300 hover:bg-primary/5 h-9 w-9"
                        asChild
                    >
                        <Link href={SiteConfig?.numberCallLink} target="_blank">
                            <Phone className="h-3.5 w-3.5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};