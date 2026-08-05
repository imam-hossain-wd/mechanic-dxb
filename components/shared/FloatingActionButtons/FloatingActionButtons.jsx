// components/FloatingActionButtons.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export default function FloatingActionButtons() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

    return (
        <>
            {/* Floating Container - Right Side */}
            <div
                className={cn(
                    "fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                )}
            >
                {/* Expanded Buttons */}
                {isExpanded && (
                    <div className="flex flex-col items-end gap-3 animate-in slide-in-from-bottom-5 duration-300">
                        {/* Call Button */}
                        <Link
                            href={numberCallLink}
                            className="group flex items-center gap-3 rounded-full bg-primary px-4 py-2.5 shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40"
                        >
                            <Phone className="h-4 w-4 text-white" />
                            <span className="text-xs font-medium text-white whitespace-nowrap">
                                Call Now
                            </span>
                            <span className="text-[10px] text-white/70 font-medium">
                                {displayNumber}
                            </span>
                        </Link>

                        {/* WhatsApp Button */}
                        <Link
                            href={whatsappCallLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-2.5 shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-105 hover:shadow-[#25D366]/40"
                        >
                            <MessageCircle className="h-4 w-4 text-white" />
                            <span className="text-xs font-medium text-white whitespace-nowrap">
                                WhatsApp
                            </span>
                            <span className="text-[10px] text-white/70 font-medium">
                                Chat Now
                            </span>
                        </Link>
                    </div>
                )}

                {/* Main Toggle Button */}
                <button
                    onClick={toggleExpand}
                    className={cn(
                        "relative hidden md:flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-105",
                        isExpanded
                            ? "bg-destructive hover:bg-destructive/90"
                            : "bg-primary hover:bg-primary/90"
                    )}
                    aria-label={isExpanded ? "Close" : "Contact Us"}
                >
                    {isExpanded ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <>
                            <Phone className="h-6 w-6 text-white" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white">
                                !
                            </span>
                        </>
                    )}
                </button>

                {/* Tooltip */}
                {!isExpanded && (
                    <div className="hidden md:absolute -top-12 right-0 whitespace-nowrap rounded-lg bg-card/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm border border-border/50">
                        Need help?
                        <span className="absolute -bottom-1.5 right-4 h-3 w-3 rotate-45 border-b border-r border-border/50 bg-card/90" />
                    </div>
                )}
            </div>

            {/* Mobile Bottom Bar - Alternative for mobile */}
            <div className="fixed bg-black/50 bottom-0 left-0 right-0 z-40 border-t border-border/50 w-full md:hidden">
                <div className="flex gap-3 items-center justify-around py-2.5 px-4">
                    <Link
                        href={numberCallLink}
                        className="w-full"
                    >
                        <Button className="flex w-full border border-white px-2 py-6  flex-1 items-center justify-center gap-2 rounded bg-primary shadow-lg shadow-primary/20 transition-all active:scale-95">

                            <Phone className="h-4 w-4 text-white" />
                            <span className="text-sm font-semibold text-white">Call Now</span>
                        </Button>
                    </Link>
                    <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"

                    >
                        <Button className="flex border border-white w-full flex-1 items-center justify-center gap-2 rounded bg-[#25D366] px-2 py-6 shadow-lg shadow-[#25D366]/20 transition-all active:scale-95">
                            <MessageCircle className="h-4 w-4 text-white" />
                            <span className="text-sm font-semibold text-white">WhatsApp</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}