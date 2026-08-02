"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Star,
  Quote,
  ThumbsUp,
  Clock,
  BadgeCheck,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/reviews";

// Enhanced review data with additional fields
const enhancedReviews = reviews.map((review, index) => ({
  ...review,
  date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  helpful: Math.floor(Math.random() * 50) + 10,
  avatarColor: [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-cyan-500 to-cyan-600",
  ][index % 6],
  isFeatured: index === 0 || index === 3,
}));

export function ClientReviewsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [slidesCount, setSlidesCount] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    setSlidesCount(emblaApi.scrollSnapList().length);
  }, [emblaApi, onSelect]);

  // Stats
  const averageRating = (enhancedReviews.reduce((sum, r) => sum + r.rating, 0) / enhancedReviews.length).toFixed(1);
  const totalReviews = enhancedReviews.length;

  return (
    <section className="relative overflow-hidden bg-background py-6">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-20 top-0 h-150 w-150 animate-float-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-125 w-125 animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
              <Heart className="mr-2 h-3.5 w-3.5" />
              Testimonials
            </Badge>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            What Our
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Customers Say
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Real stories from real customers who trusted us with their vehicles
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {enhancedReviews.map((review, index) => (
                <div
                  key={review.id}
                  className={cn(
                    "flex-[0_0_100%] min-w-0 px-2 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                  )}
                >
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full",
                      "border-primary/30 bg-primary/5"
                    )}
                  >
                    {/* Quote & Rating */}
                    <div className="mb-3 flex items-start justify-between">
                      <Quote className="h-8 w-8 text-primary/20" />
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3.5 w-3.5",
                              i < review.rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="mb-3 text-sm text-foreground/80 leading-relaxed line-clamp-3">
                      "{review.review}"
                    </p>

                    {/* Service Tag */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                        <WrenchIcon className="h-3 w-3" />
                        {review.service}
                      </span>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-2.5">
                        <div className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                          review.avatarColor
                        )}>
                          {review.avatar || review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {review.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {review.location}
                          </p>
                        </div>
                      </div>
                      {review.verified && (
                        <BadgeCheck className="h-4 w-4 text-emerald-500" />
                      )}
                    </div>

                    {/* Helpful & Date */}
                    <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {review.helpful} helpful
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={scrollPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card/90 shadow-xl backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary hidden sm:flex items-center justify-center"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card/90 shadow-xl backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary hidden sm:flex items-center justify-center"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Navigation Buttons - Mobile (Small Devices) */}
          <div className="flex justify-around items-center mt-4 sm:hidden">
            <Button
              onClick={scrollPrev}
              className="h-9 w-9 rounded-full  shadow-lg backdrop-blur-sm border border-border/50 transition-all duration-300 bg-primary  flex items-center justify-center"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground">
              {selectedIndex + 1} / {slidesCount}
            </span>
            <Button
              onClick={scrollNext}
              className="h-9 w-9 rounded-full shadow-lg backdrop-blur-sm border border-border/50 transition-all duration-300 bg-primary  flex items-center justify-center"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        {slidesCount > 1 && (
          <div className="mt-6 flex justify-center gap-1.5">
            {[...Array(slidesCount)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  selectedIndex === idx
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Helper icon component
const WrenchIcon = ({ className }) => (
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
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);