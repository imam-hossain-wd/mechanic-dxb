/* eslint-disable react-hooks/immutability */
// app/gallery/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Wrench,
  ArrowRight,
  Phone,
  Calendar,
  User,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";
import { galleryData } from "@/data/workingGellery";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open lightbox
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Navigate through images
  const navigateImage = (direction) => {
    const newIndex = direction === "next"
      ? (currentIndex + 1) % galleryData.length
      : (currentIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    }
  };

  // Stats
  const totalProjects = galleryData.length;
  const uniqueCategories = [...new Set(galleryData.map(img => img.category))];

  return (
    <main className="min-h-screen bg-background" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-primary/5 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 top-0 h-100 w-100 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-75 w-75 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-size-[50px_50px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Our Gallery
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Car Repair
              <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Projects
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30" />
              </span>
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse through our recent car repair and maintenance projects across Dubai
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <Wrench className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{totalProjects}+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">2024</p>
                  <p className="text-xs text-muted-foreground">Latest Work</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{uniqueCategories.length}</p>
                  <p className="text-xs text-muted-foreground">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
       
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryData.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image, index)}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-card/50 border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-4/3">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 text-[10px] font-medium bg-black/60 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>

                  {/* Featured Badge */}
                  {image.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-medium bg-primary text-white px-2 py-0.5 rounded-full shadow-lg">
                      Featured
                    </span>
                  )}

                  {/* Info on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                    <h4 className="text-sm font-semibold truncate">{image.title}</h4>
                    <div className="flex items-center gap-3 mt-1 text-xs text-white/70">
                      <span className="flex items-center gap-0.5">
                        <Clock className="h-3 w-3" />
                        {image.date}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="h-3 w-3" />
                        {image.location}
                      </span>
                    </div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="rounded-full bg-primary/90 p-3 shadow-lg">
                      <Maximize2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Need Professional Car Repair?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-lg mx-auto">
              Join thousands of satisfied customers who trust us with their vehicles
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                className="gap-2 rounded-full bg-primary shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/services">
                  <Wrench className="h-4 w-4" />
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full border-primary/20 text-primary"
                asChild
              >
                <Link href={`tel:${SiteConfig.displayNumber}`}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
         {selectedImage && (
                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
                         {/* Close */}
                         <button
                             onClick={closeLightbox}
                             className="absolute right-4 top-4 z-50 p-2 text-white/60 transition-colors hover:text-white"
                             aria-label="Close"
                         >
                             <X className="h-6 w-6" />
                         </button>
     
                         {/* Previous */}
                         <button
                             onClick={() => navigateImage("prev")}
                             className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                             aria-label="Previous image"
                         >
                             <ChevronLeft className="h-8 w-8" />
                         </button>
     
                         {/* Next */}
                         <button
                             onClick={() => navigateImage("next")}
                             className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                             aria-label="Next image"
                         >
                             <ChevronRight className="h-8 w-8" />
                         </button>
     
                         {/* Image */}
                         <div className="relative w-full max-w-5xl">
                             <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
                                 <Image
                                     src={selectedImage.image}
                                     alt={selectedImage.title}
                                     fill
                                     className="object-contain"
                                     sizes="(max-width: 1024px) 90vw, 80vw"
                                     priority
                                 />
                             </div>
     
                             {/* Image Info */}
                             <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
                                 <span>{selectedImage.title}</span>
     
                                 <span className="h-3 w-px bg-white/20" />
     
                                 <span className="flex items-center gap-0.5">
                                     <Clock className="h-3 w-3" />
                                     {selectedImage.date}
                                 </span>
     
                                 <span className="h-3 w-px bg-white/20" />
     
                                 <span className="flex items-center gap-0.5">
                                     <MapPin className="h-3 w-3" />
                                     {selectedImage.location}
                                 </span>
                             </div>
     
                             {/* Counter */}
                             <div className="absolute left-4 top-4 rounded bg-black/50 px-2 py-1 text-xs text-white/60">
                                 {currentIndex + 1} / {galleryData.length}
                             </div>
                         </div>
                     </div>
                 )}
    </main>
  );
}