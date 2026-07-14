// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
// import { MapPin, Clock, Phone, Star, Wrench, ShieldCheck, CalendarCheck, ArrowRight, Sparkles, Zap } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { SiteConfig } from "@/config/siteConfig";
// import { ServiceBanner } from "@/utils/assets";

// export default function HomeHero() {
//     const primaryColor = "bg-primary";
//     const primaryHover = "hover:bg-primary/90";
//     const primaryText = "text-primary";
//     const primaryBorder = "border-primary/20";

//     return (
//         <section className="relative min-h-screen w-full overflow-hidden bg-background pt-5">
//             {/* Ultra Modern Animated Background */}
//             <div className="absolute inset-0 -z-10">
//                 {/* Primary gradient orbs with animation */}
//                 <div className="absolute top-0 -right-20 h-200 w-200 animate-pulse-slow rounded-full bg-primary/20 blur-3xl" />
//                 <div className="absolute -bottom-40 -left-20 h-150 w-150 animate-pulse-slow rounded-full bg-primary/15 blur-3xl" style={{ animationDelay: '2s' }} />
//                 <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />

//                 {/* Dynamic grid pattern */}
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

//                 {/* Animated gradient lines */}
//                 <div className="absolute top-0 h-px w-full animate-gradient-x bg-linear-to-r from-transparent via-primary/30 to-transparent" />
//                 <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-linear-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

//                 {/* Floating particles effect */}
//                 <div className="absolute inset-0 overflow-hidden">
//                     {[...Array(20)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="absolute animate-float rounded-full bg-primary/10"
//                             style={{
//                                 width: Math.random() * 4 + 2 + 'px',
//                                 height: Math.random() * 4 + 2 + 'px',
//                                 top: Math.random() * 100 + '%',
//                                 left: Math.random() * 100 + '%',
//                                 animationDuration: (Math.random() * 10 + 10) + 's',
//                                 animationDelay: (Math.random() * 5) + 's',
//                             }}
//                         />
//                     ))}
//                 </div>

//                 {/* Glowing border effect */}
//                 <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
//                 <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />
//             </div>

//             <div className="container relative mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 lg:gap-16">
//                 {/* Left Content */}
//                 <div className="flex w-full max-w-3xl flex-col items-center text-center md:items-start md:text-left">
//                     {/* Trust Badge with glowing effect */}
//                     <div className="animate-fade-in-up mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-4 py-1.5 backdrop-blur-sm shadow-lg shadow-primary/5">
//                         <Badge variant="default" className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-primary">
//                             <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
//                             4.9/5
//                         </Badge>
//                         <span className="text-xs text-muted-foreground">Trusted by 2,000+ drivers</span>
//                         <Sparkles className="h-3 w-3 text-primary/50" />
//                     </div>

//                     {/* Main Heading with gradient animation */}
//                     <h1 className="animate-fade-in-up mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
//                         Dubai's #1
//                         <span className="relative mx-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
//                             Mobile
//                             <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary/50 to-primary/10" />
//                         </span>
//                         <br />
//                         <span className="text-foreground/90">Car Mechanic</span>
//                     </h1>

//                     {/* Description */}
//                     <p className="animate-fade-in-up mb-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl" style={{ animationDelay: '0.2s' }}>
//                         24/7 Mobile Car Repair in Dubai – Fast, Reliable & At Your Location within
//                         <span className="relative font-semibold text-primary ml-1">
//                             5–15 minutes
//                             <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary/30" />
//                         </span>
//                         . 24/7 emergency repair, battery jumpstart, AC service & more across Dubai.
//                     </p>

//                     {/* CTA Buttons with pulse animation */}
//                     <div className="animate-fade-in-up mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: '0.3s' }}>
//                         <Button
//                             size="lg"
//                             className={cn(
//                                 "group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40",
//                                 primaryColor,
//                                 primaryHover
//                             )}
//                             asChild
//                         >
//                             <Link href="tel:+971551831901">
//                                 <Phone className="mr-2 h-5 w-5" />
//                                 Call Now
//                                 <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//                                 <span className="absolute -inset-1 -z-10 animate-ping-slow rounded-full bg-primary/20 opacity-0 group-hover:opacity-100" />
//                             </Link>
//                         </Button>

//                         <Button
//                             size="lg"
//                             variant="outline"
//                             className={cn(
//                                 "group relative rounded-full border-2 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5",
//                                 primaryBorder,
//                                 primaryText
//                             )}
//                             asChild
//                         >
//                             <Link href="/services">
//                                 Our Services
//                                 <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                             </Link>
//                         </Button>
//                     </div>

//                     {/* Features Grid with glassmorphism */}
//                     <div className="animate-fade-in-up grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" style={{ animationDelay: '0.4s' }}>
//                         {[
//                             { icon: Clock, label: "24/7 Service" },
//                             { icon: MapPin, label: "On-Site Repair" },
//                             { icon: ShieldCheck, label: "Warranty" },
//                             { icon: Wrench, label: "Expert Techs" },
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className={cn(
//                                     "group flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/30 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5",
//                                     index === 0 && "border-primary/30 bg-primary/5"
//                                 )}
//                             >
//                                 <item.icon className={cn("h-4 w-4 transition-transform duration-300 group-hover:scale-110", index === 0 ? "text-primary" : "text-muted-foreground")} />
//                                 <span className={cn("text-xs font-medium transition-colors duration-300", index === 0 ? "text-primary" : "text-foreground/80 group-hover:text-foreground")}>
//                                     {item.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Trust indicators with hover effects */}
//                     <div className="animate-fade-in-up mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground md:justify-start" style={{ animationDelay: '0.5s' }}>
//                         <span className="group flex cursor-default items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-primary/5">
//                             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
//                                 <Star className="h-3 w-3 fill-primary" />
//                             </span>
//                             250+ 5-star reviews
//                         </span>
//                         <span className="group flex cursor-default items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-primary/5">
//                             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
//                                 <Clock className="h-3 w-3" />
//                             </span>
//                             Avg. 12 min arrival
//                         </span>
//                         <span className="group flex cursor-default items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-primary/5">
//                             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
//                                 <CalendarCheck className="h-3 w-3" />
//                             </span>
//                             10,000+ repairs
//                         </span>
//                     </div>
//                 </div>

//                 {/* Right Image / Visual with advanced effects */}
//                 <div className="animate-fade-in-up relative flex w-full max-w-md items-center justify-center md:max-w-lg lg:max-w-xl" style={{ animationDelay: '0.2s' }}>
//                     <div className="relative aspect-square w-full max-w-100 overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 to-primary/20 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl hover:shadow-primary/30 md:max-w-125">
//                         {/* Glowing ring around image */}
//                         <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 opacity-75 blur-xl" />

//                         <div className="relative h-full w-full overflow-hidden rounded-2xl">
//                             {/* Image with overlay */}
//                             <Image
//                                 src={ServiceBanner?.mechanic}
//                                 alt="Car Repair Mechanic Dubai"
//                                 className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                             />

//                             {/* Gradient overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />

//                             {/* Floating badges with improved styling */}
//                             <div className="absolute -left-4 top-8 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-3 py-2 backdrop-blur-xl shadow-xl shadow-primary/10">
//                                 <div className="flex items-center gap-2">
//                                     <div className="flex -space-x-1.5">
//                                         {[1, 2, 3].map((i) => (
//                                             <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary/60 ring-2 ring-background" />
//                                         ))}
//                                     </div>
//                                     <span className="text-xs font-medium">2k+ happy</span>
//                                 </div>
//                             </div>

//                             <div className="absolute -right-2 bottom-12 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-3 py-2 backdrop-blur-xl shadow-xl shadow-primary/10" style={{ animationDelay: '1s' }}>
//                                 <div className="flex items-center gap-2">
//                                     <div className="rounded-full bg-primary/20 p-1">
//                                         <Clock className="h-3 w-3 text-primary" />
//                                     </div>
//                                     <span className="text-xs font-medium">12 min avg</span>
//                                 </div>
//                             </div>

//                             {/* Animated status badge */}
//                             <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur-sm">
//                                 <span className="relative flex h-1.5 w-1.5">
//                                     <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-white opacity-75"></span>
//                                     <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
//                                 </span>
//                                 Online
//                             </div>
//                         </div>
//                     </div>

//                     {/* Background decoration with animation */}
//                     <div className="absolute -z-10 h-75 w-75 animate-spin-slow rounded-full bg-primary/5 blur-2xl" />
//                     <div className="absolute -z-10 h-50 w-50 animate-spin-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDirection: 'reverse' }} />
//                 </div>
//             </div>

//             {/* Bottom service area indicator with glassmorphism */}
//             <div className="absolute bottom-0 left-0 right-0 hidden animate-fade-in-up border-t border-primary/10 bg-card/40 backdrop-blur-xl md:block" style={{ animationDelay: '0.6s' }}>
//                 <div className="container flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
//                     <span className="group flex items-center gap-2 transition-all duration-300 hover:text-primary">
//                         <MapPin className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:scale-110" />
//                         Serving all Dubai areas
//                     </span>
//                     <div className="flex items-center gap-3">
//                         {SiteConfig.serviceAreas.slice(0, 6).map((area, index) => (
//                             <span
//                                 key={area.name}
//                                 className="cursor-default text-xs text-foreground/70 transition-all duration-300 hover:text-primary hover:underline underline-offset-2"
//                                 style={{ animationDelay: `${index * 0.05}s` }}
//                             >
//                                 {area.name}
//                             </span>
//                         ))}
//                         <span className="text-primary font-medium">+ More</span>
//                     </div>
//                     <span className="group flex items-center gap-2 transition-all duration-300 hover:text-primary">
//                         <Phone className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
//                         {SiteConfig.displayNumber}
//                     </span>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    MapPin,
    Clock,
    Phone,
    Star,
    Wrench,
    ShieldCheck,
    CalendarCheck,
    ArrowRight,
    Sparkles,
    Zap,
    Gauge,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/config/siteConfig";
import { heroImages, ServiceBanner } from "@/utils/assets";

export default function HomeHero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#05070d] pt-5">
            {/* ============================================
          PREMIUM AUTOMOTIVE BACKGROUND
          ============================================ */}
            <div className="absolute inset-0 -z-10">
                {/* Deep layered gradient base */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(234,179,8,0.15),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_50%,rgba(59,130,246,0.08),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgba(234,179,8,0.05),transparent)]" />

                {/* Technical blueprint grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        maskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
                    }}
                />

                {/* Fine diagonal technical lines */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.3) 80px, rgba(255,255,255,0.3) 81px)",
                    }}
                />

                {/* Animated light streaks — like car headlights on highway */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="light-streak light-streak-1" />
                    <div className="light-streak light-streak-2" />
                    <div className="light-streak light-streak-3" />
                    <div className="light-streak light-streak-4" />
                    <div className="light-streak light-streak-5" />
                </div>

                {/* Floating amber sparks / embers */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-amber-400/60 blur-[1px]"
                            style={{
                                width: Math.random() * 3 + 1 + "px",
                                height: Math.random() * 3 + 1 + "px",
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                animation: `emberFloat ${Math.random() * 8 + 10}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                                opacity: Math.random() * 0.6 + 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Subtle noise texture for premium feel */}
                <div
                    className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Vignette for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

                {/* Top & bottom subtle borders */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>

            {/* ============================================
          MAIN CONTENT
          ============================================ */}
            <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col-reverse items-center justify-center px-4 py-5 lg:flex-row lg:gap-16 lg:py-0">
                {/* LEFT: Text Content */}
                <div className="relative z-10 flex w-full max-w-2xl flex-col items-start text-left lg:pr-8">
                    {/* Status pill */}
                    <div className="mb-3 mt-5 hidden  md:flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 backdrop-blur-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-[11px] font-medium tracking-wide text-white">
                            AVAILABLE NOW · DUBAI-WIDE
                        </span>
                        <span className="mx-1 h-3 w-px bg-white/20" />
                        <span className="text-[11px] font-semibold text-white">
                            ★ 4.9/5
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mb-6 mt-4 md:mt-0 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Dubai's Fastest
                        <br />
                        <span className="relative inline-block">
                            <span className="bg-primary bg-clip-text text-transparent">
                                Mobile Mechanic
                            </span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                height="8"
                                viewBox="0 0 300 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 5 Q 75 2, 150 5 T 298 5"
                                    stroke="url(#underline-gradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="underline-gradient"
                                        x1="0"
                                        y1="0"
                                        x2="300"
                                        y2="0"
                                    >
                                        <stop offset="0%" stopColor="#432dd7" />
                                        <stop offset="100%" stopColor="#432dd7" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-white sm:text-xl">
                        24/7 emergency car repair at your doorstep. Our certified
                        technicians arrive in{" "}
                        <span className="font-semibold">5–15 minutes</span>{" "}
                        anywhere in Dubai — battery, AC, engine & more.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <Button
                            size="lg"
                            asChild
                            className="group relative h-14 overflow-hidden rounded-full border border-primary/30 bg-primary px-8 text-base font-bold text-white shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-5px_rgba(251,191,36,0.7)]"
                        >
                            <Link href={SiteConfig?.numberCallLink} className="flex items-center gap-2">
                                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now — Free Quote
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="group h-14 rounded-full border border-white/15 bg-white/3 px-8 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/8"
                        >
                            <Link href="/services">
                                View Services
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Feature chips */}
                    <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                        {[
                            { icon: Clock, label: "24/7 Service" },
                            { icon: MapPin, label: "On-Site Repair" },
                            { icon: ShieldCheck, label: "Warranty" },
                            { icon: Wrench, label: "Expert Techs" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group flex items-center gap-2 rounded-xl border-2 border-primary px-3 py-2.5 backdrop-blur-xl transition-all duration-300 ")}
                            >
                                <item.icon
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-300 group-hover:scale-110",
                                    )}
                                />
                                <span
                                    className={cn(
                                        "text-xs font-medium text-white",

                                    )}
                                >
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Visual Composition */}
                <div className="relative mt-12 flex w-full max-w-xl items-center justify-center lg:mt-0 lg:max-w-lg xl:max-w-xl">
                    {/* Rotating technical ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="h-[110%] w-[110%] rounded-full border border-dashed border-amber-400/20"
                            style={{ animation: "spin 40s linear infinite" }}
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="h-[95%] w-[95%] rounded-full border border-white/5"
                            style={{
                                animation: "spin 60s linear infinite reverse",
                            }}
                        />
                    </div>

                    {/* Main image card */}
                    <div className="relative aspect-[4/5] w-[90%] md:w-[90%] h-70 md:h-90 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-1 shadow-2xl backdrop-blur-xl">
                        {/* Glow behind image */}
                        <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/10 blur-2xl" />

                        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                            <Image
                                src={heroImages?.homeHero}
                                alt="Professional Car Mechanic Dubai"
                                fill
                                className="h-full w-full"
                                priority
                            />
                            {/* Color grade overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/5 mix-blend-overlay" />


                            {/* Bottom-left floating card */}
                            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white bg-primary/10 p-4 backdrop-blur-xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                                            <Gauge className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-medium uppercase tracking-wider text-white">
                                                Avg. Response
                                            </div>
                                            <div className="text-lg font-bold text-white">
                                                12 min
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-medium uppercase tracking-wider text-white">
                                            Rating
                                        </div>
                                        <div className="flex items-center gap-1 text-lg font-bold text-white">
                                            <Star className="h-4 w-4 fill-primary" />
                                            4.9
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating side card — left */}
                    <div
                        className="absolute left-2 md:-left-4 top-1/4 rounded-2xl border border-white/10 bg-primary/20 p-3 backdrop-blur-xl shadow-2xl sm:block"
                        style={{ animation: "floatY 6s ease-in-out infinite" }}
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <div className="text-[10px] font-medium uppercase tracking-wider text-white">
                                    Guaranteed
                                </div>
                                <div className="text-sm font-bold text-white">
                                    6-Month Warranty
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating side card — right */}
                    <div
                        className="absolute  right-4 md:-right-2 bottom-1/4 rounded-2xl border border-white/10 bg-primary/10 p-3 backdrop-blur-xl shadow-2xl sm:block"
                        style={{
                            animation: "floatY 6s ease-in-out infinite",
                            animationDelay: "2s",
                        }}
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="flex -space-x-2">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="h-7 w-7 rounded-full border-2 border-white bg-primary"
                                    />
                                ))}
                            </div>
                            <div>
                                <div className="text-[10px] font-medium uppercase tracking-wider text-white">
                                    Happy Clients
                                </div>
                                <div className="text-sm font-bold text-white">2,000+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* ============================================
          BOTTOM SERVICE BAR
          ============================================ */}
            <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/[0.06] bg-primary/20 backdrop-blur-xl md:block">
                <div className="container flex items-center justify-between px-4 py-3">
                    <span className="flex items-center gap-2 text-xs text-white">
                        <MapPin className="h-3.5 w-3.5 text-white" />
                        Serving all Dubai areas
                    </span>
                    <div className="flex items-center gap-4">
                        {SiteConfig.serviceAreas.slice(0, 6).map((area) => (
                            <span
                                key={area.name}
                                className="cursor-default text-xs text-white transition-colors hover:text-primary"
                            >
                                {area.name}
                            </span>
                        ))}
                        <span className="flex items-center gap-1 text-xs font-semibold text-white">
                            More <ChevronRight className="h-3 w-3" />
                        </span>
                    </div>
                    <span className="flex items-center gap-2 text-xs font-medium text-white">
                        <Phone className="h-3.5 w-3.5 text-white" />
                        {SiteConfig.displayNumber}
                    </span>
                </div>
            </div>

            {/* ============================================
          KEYFRAME ANIMATIONS
          ============================================ */}
            <style jsx global>{`
        @keyframes emberFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.8;
          }
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .light-streak {
          position: absolute;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(251, 191, 36, 0.8) 50%,
            transparent 100%
          );
          filter: blur(1px);
          opacity: 0;
        }

        .light-streak-1 {
          top: 20%;
          width: 200px;
          animation: streakMove1 8s linear infinite;
          animation-delay: 0s;
        }
        .light-streak-2 {
          top: 45%;
          width: 300px;
          animation: streakMove2 12s linear infinite;
          animation-delay: 2s;
        }
        .light-streak-3 {
          top: 70%;
          width: 150px;
          animation: streakMove1 10s linear infinite;
          animation-delay: 4s;
        }
        .light-streak-4 {
          top: 35%;
          width: 250px;
          animation: streakMove2 14s linear infinite;
          animation-delay: 6s;
        }
        .light-streak-5 {
          top: 85%;
          width: 180px;
          animation: streakMove1 9s linear infinite;
          animation-delay: 3s;
        }

        @keyframes streakMove1 {
          0% {
            left: -200px;
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            left: calc(100% + 200px);
            opacity: 0;
          }
        }

        @keyframes streakMove2 {
          0% {
            right: -300px;
            opacity: 0;
          }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% {
            right: calc(100% + 300px);
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}