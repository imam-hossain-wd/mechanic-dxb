"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export default function FloatingActionButtons() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);


  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };


    const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

    return (
        <>
            {/* Floating Container - Right Side */}
            <div
                className={cn(
                    "fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300",
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
                            <span className="text-xs text-white/70 font-medium">
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

                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="mb-10 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="h-5 w-5" />
                    </button>
                )}


                {/* Main Toggle Button */}
                {/* <button
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
                </button> */}
            </div>

            {/* Mobile Bottom Bar */}
            {/* backdrop-blur-xl */}
            <div className="fixed w-full md:w-[30%] mx-auto bottom-0 left-0 right-0 z-40 md:border-0 border-primary ">
            {/* <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-primary bg-black backdrop-blur-xl md:hidden"> */}
                <div className="flex items-center justify-around gap-2 py-2.5 px-3">
                    <Link
                        href={numberCallLink}
                        className="flex-1"
                    >
                        <Button className="flex w-full flex-1 items-center justify-center gap-2 rounded border border-white bg-primary px-2 py-5 shadow-lg shadow-primary/20 transition-all active:scale-95">
                            <Phone className="h-4 w-4 text-white" />
                            <span className="text-sm font-semibold text-white">Call Now <span className="hidden md:flex">{displayNumber}</span></span>
                        </Button>
                    </Link>

                    <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                    >
                        <Button className="flex w-full flex-1 items-center justify-center gap-2 rounded border border-white bg-[#25D366] hover:bg-green-500 px-2 py-5 shadow-lg shadow-[#25D366]/20 transition-all active:scale-95">
                            <MessageCircle className="h-4 w-4 text-white" />
                            <span className="text-sm font-semibold text-white">WhatsApp <span className="text-xs hidden md:flex">Chat Now</span></span>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}