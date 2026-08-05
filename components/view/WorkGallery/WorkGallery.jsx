/* eslint-disable react-hooks/immutability */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    Clock,
    MapPin,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { galleryData } from "@/data/workingGellery";

export function WorkGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "";
    };

    const navigateImage = (direction) => {
        const newIndex =
            direction === "next"
                ? (currentIndex + 1) % galleryData.length
                : (currentIndex - 1 + galleryData.length) % galleryData.length;

        setCurrentIndex(newIndex);
        setSelectedImage(galleryData[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!selectedImage) return;

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                navigateImage("prev");
            }

            if (event.key === "ArrowRight") {
                navigateImage("next");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImage, currentIndex]);

    return (
        <section className="bg-background py-5">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-12 bg-primary/30" />

                        <span className="text-sm font-medium uppercase tracking-wider text-primary">
                            Our Work
                        </span>

                        <div className="h-px w-12 bg-primary/30" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                        Recent{" "}
                        <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
                        See what we&apos;ve been working on across Dubai
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {galleryData.slice(0, 10).map((image, index) => (
                        <div
                            key={image.id}
                            onClick={() => openLightbox(image, index)}
                            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card/50 transition-all hover:border-primary/30"
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={image.image}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                {/* Category */}
                                <span className="absolute left-2 top-2 rounded bg-black/50 px-1.5 py-0.5 text-[8px] font-medium text-white">
                                    {image.category}
                                </span>

                                {/* Image Info */}
                                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-2 text-white transition-transform group-hover:translate-y-0">
                                    <p className="truncate text-xs font-medium">
                                        {image.title}
                                    </p>

                                    <div className="flex items-center gap-1 text-[8px] text-white/70">
                                        <Clock className="h-2.5 w-2.5" />
                                        <span>{image.date}</span>
                                    </div>
                                </div>

                                {/* View Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="rounded-full bg-primary/90 p-2 shadow-lg">
                                        <Maximize2 className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                {galleryData.length > 8 && (
                    <div className="flex items-center justify-center">
                        <Button className="mt-6 rounded px-4 py-4">
                            <Link
                                href="/gallery"
                                className="inline-flex items-center gap-1.5 text-sm font-medium"
                            >
                                View All Projects
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>

            {/* Lightbox */}
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
        </section>
    );
}

