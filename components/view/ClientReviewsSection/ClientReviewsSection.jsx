"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Clock,
  Award,
  Users,
  BadgeCheck,
  Heart,
  MessageCircle
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const reviewsPerView = 4;
  const totalSlides = Math.ceil(enhancedReviews.length / reviewsPerView);

  const currentReviews = enhancedReviews.slice(
    currentIndex * reviewsPerView,
    (currentIndex + 1) * reviewsPerView
  );

  // Stats
  const averageRating = (enhancedReviews.reduce((sum, r) => sum + r.rating, 0) / enhancedReviews.length).toFixed(1);
  const totalReviews = enhancedReviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, totalSlides]);

  return (
    <section className="relative overflow-hidden bg-background py-8">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
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
        {/* Reviews Carousel */}
        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card/90 shadow-xl backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card/90 shadow-xl backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            aria-label="Next reviews"
          >
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>

          {/* Reviews Grid - 4 per row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
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
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-1.5">
            {[...Array(totalSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentIndex === idx
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-3xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ring-2 ring-background" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Trusted by 2,000+</p>
              <p className="text-xs text-muted-foreground">Drivers across Dubai</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{averageRating} Average</p>
              <p className="text-xs text-muted-foreground">Based on {totalReviews} reviews</p>
            </div>
          </div>

          <Button
            className="gap-2 rounded-full bg-primary px-6 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            asChild
          >
            <Link href="/reviews">
              <MessageCircle className="h-4 w-4" />
              Leave a Review
            </Link>
          </Button>
        </div>
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