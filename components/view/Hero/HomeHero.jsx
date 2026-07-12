import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin, Clock, Phone, Star, Wrench, ShieldCheck, CalendarCheck, ArrowRight, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceBanner } from "@/utils/assets";

export default function HomeHero() {
    const primaryColor = "bg-primary";
    const primaryHover = "hover:bg-primary/90";
    const primaryText = "text-primary";
    const primaryBorder = "border-primary/20";

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background pt-5">
            {/* Ultra Modern Animated Background */}
            <div className="absolute inset-0 -z-10">
                {/* Primary gradient orbs with animation */}
                <div className="absolute top-0 -right-20 h-200 w-200 animate-pulse-slow rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-20 h-150 w-150 animate-pulse-slow rounded-full bg-primary/15 blur-3xl" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />

                {/* Dynamic grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

                {/* Animated gradient lines */}
                <div className="absolute top-0 h-px w-full animate-gradient-x bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-linear-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

                {/* Floating particles effect */}
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
                                animationDuration: (Math.random() * 10 + 10) + 's',
                                animationDelay: (Math.random() * 5) + 's',
                            }}
                        />
                    ))}
                </div>

                {/* Glowing border effect */}
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
                <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />
            </div>

            <div className="container relative mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 lg:gap-16">
                {/* Left Content */}
                <div className="flex w-full max-w-3xl flex-col items-center text-center md:items-start md:text-left">
                    {/* Trust Badge with glowing effect */}
                    <div className="animate-fade-in-up mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-4 py-1.5 backdrop-blur-sm shadow-lg shadow-primary/5">
                        <Badge variant="default" className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-primary">
                            <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                            4.9/5
                        </Badge>
                        <span className="text-xs text-muted-foreground">Trusted by 2,000+ drivers</span>
                        <Sparkles className="h-3 w-3 text-primary/50" />
                    </div>

                    {/* Main Heading with gradient animation */}
                    <h1 className="animate-fade-in-up mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
                        Dubai's #1
                        <span className="relative mx-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                            Mobile
                            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary/50 to-primary/10" />
                        </span>
                        <br />
                        <span className="text-foreground/90">Car Mechanic</span>
                    </h1>

                    {/* Description */}
                    <p className="animate-fade-in-up mb-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl" style={{ animationDelay: '0.2s' }}>
                        24/7 Mobile Car Repair in Dubai – Fast, Reliable & At Your Location within
                        <span className="relative font-semibold text-primary ml-1">
                            5–15 minutes
                            <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary/30" />
                        </span>
                        . 24/7 emergency repair, battery jumpstart, AC service & more across Dubai.
                    </p>

                    {/* CTA Buttons with pulse animation */}
                    <div className="animate-fade-in-up mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: '0.3s' }}>
                        <Button
                            size="lg"
                            className={cn(
                                "group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40",
                                primaryColor,
                                primaryHover
                            )}
                            asChild
                        >
                            <Link href="tel:+971551831901">
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now
                                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                <span className="absolute -inset-1 -z-10 animate-ping-slow rounded-full bg-primary/20 opacity-0 group-hover:opacity-100" />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className={cn(
                                "group relative rounded-full border-2 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5",
                                primaryBorder,
                                primaryText
                            )}
                            asChild
                        >
                            <Link href="/services">
                                Our Services
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Features Grid with glassmorphism */}
                    <div className="animate-fade-in-up grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" style={{ animationDelay: '0.4s' }}>
                        {[
                            { icon: Clock, label: "24/7 Service" },
                            { icon: MapPin, label: "On-Site Repair" },
                            { icon: ShieldCheck, label: "Warranty" },
                            { icon: Wrench, label: "Expert Techs" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/30 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5",
                                    index === 0 && "border-primary/30 bg-primary/5"
                                )}
                            >
                                <item.icon className={cn("h-4 w-4 transition-transform duration-300 group-hover:scale-110", index === 0 ? "text-primary" : "text-muted-foreground")} />
                                <span className={cn("text-xs font-medium transition-colors duration-300", index === 0 ? "text-primary" : "text-foreground/80 group-hover:text-foreground")}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Trust indicators with hover effects */}
                    <div className="animate-fade-in-up mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground md:justify-start" style={{ animationDelay: '0.5s' }}>
                        <span className="group flex cursor-default items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-primary/5">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                <Star className="h-3 w-3 fill-primary" />
                            </span>
                            250+ 5-star reviews
                        </span>
                        <span className="group flex cursor-default items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-primary/5">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                <Clock className="h-3 w-3" />
                            </span>
                            Avg. 12 min arrival
                        </span>
                        <span className="group flex cursor-default items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-primary/5">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                <CalendarCheck className="h-3 w-3" />
                            </span>
                            10,000+ repairs
                        </span>
                    </div>
                </div>

                {/* Right Image / Visual with advanced effects */}
                <div className="animate-fade-in-up relative flex w-full max-w-md items-center justify-center md:max-w-lg lg:max-w-xl" style={{ animationDelay: '0.2s' }}>
                    <div className="relative aspect-square w-full max-w-100 overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 to-primary/20 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl hover:shadow-primary/30 md:max-w-125">
                        {/* Glowing ring around image */}
                        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 opacity-75 blur-xl" />

                        <div className="relative h-full w-full overflow-hidden rounded-2xl">
                            {/* Image with overlay */}
                            <Image
                                src={ServiceBanner?.mechanic}
                                alt="Car Repair Mechanic Dubai"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />

                            {/* Floating badges with improved styling */}
                            <div className="absolute -left-4 top-8 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-3 py-2 backdrop-blur-xl shadow-xl shadow-primary/10">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-1.5">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary/60 ring-2 ring-background" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium">2k+ happy</span>
                                </div>
                            </div>

                            <div className="absolute -right-2 bottom-12 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-3 py-2 backdrop-blur-xl shadow-xl shadow-primary/10" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full bg-primary/20 p-1">
                                        <Clock className="h-3 w-3 text-primary" />
                                    </div>
                                    <span className="text-xs font-medium">12 min avg</span>
                                </div>
                            </div>

                            {/* Animated status badge */}
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur-sm">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
                                </span>
                                Online
                            </div>
                        </div>
                    </div>

                    {/* Background decoration with animation */}
                    <div className="absolute -z-10 h-75 w-75 animate-spin-slow rounded-full bg-primary/5 blur-2xl" />
                    <div className="absolute -z-10 h-50 w-50 animate-spin-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDirection: 'reverse' }} />
                </div>
            </div>

            {/* Bottom service area indicator with glassmorphism */}
            <div className="absolute bottom-0 left-0 right-0 hidden animate-fade-in-up border-t border-primary/10 bg-card/40 backdrop-blur-xl md:block" style={{ animationDelay: '0.6s' }}>
                <div className="container flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
                    <span className="group flex items-center gap-2 transition-all duration-300 hover:text-primary">
                        <MapPin className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        Serving all Dubai areas
                    </span>
                    <div className="flex items-center gap-3">
                        {SiteConfig.serviceAreas.slice(0, 6).map((area, index) => (
                            <span
                                key={area.name}
                                className="cursor-default text-xs text-foreground/70 transition-all duration-300 hover:text-primary hover:underline underline-offset-2"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {area.name}
                            </span>
                        ))}
                        <span className="text-primary font-medium">+ More</span>
                    </div>
                    <span className="group flex items-center gap-2 transition-all duration-300 hover:text-primary">
                        <Phone className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        {SiteConfig.displayNumber}
                    </span>
                </div>
            </div>
        </section>
    );
}