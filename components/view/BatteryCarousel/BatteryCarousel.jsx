/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { batteryBrands } from "@/utils/assets";


const {
  acDelco,
  amaron,
  bosch,
  duracell,
  energizer,
  exide,
  fiamm,
  forgo,
  globatt,
  infinity,
  jpc,
  kays,
  metro,
  optimaBlue,
  optimaRed,
  optimaYellow,
  panasonic,
  sbk,
  seban,
  solite,
  tuflong,
  varta,
  zeetex,

} = batteryBrands;


const batteries = [
  { id: 1, name: "AC Delco", image: acDelco },
  { id: 2, name: "Amaron", image: amaron },
  { id: 3, name: "Exide", image: exide },
  { id: 4, name: "Bosch", image: bosch },
  { id: 5, name: "Varta", image: varta },
  { id: 9, name: "Solite", image: solite },
  { id: 12, name: "Metra", image: metro },
  { id: 7, name: "Panasonic", image: panasonic },
  { id: 8, name: "Seban", image: seban },
  { id: 13, name: "Duracell", image: duracell },
  { id: 14, name: "Energizer", image: energizer },
  { id: 22, name: "Optima Blue", image: optimaBlue },
  { id: 23, name: "Optima Red", image: optimaRed },
  { id: 24, name: "Optima Yellow", image: optimaYellow },
  { id: 16, name: "Fiam", image: fiamm },
  { id: 17, name: "Forgo", image: forgo },
  { id: 18, name: "Globatt", image: globatt },
  { id: 19, name: "Infinity", image: infinity },
  { id: 20, name: "JPC", image: jpc },
  { id: 21, name: "kays", image: kays },
  { id: 25, name: "SBK", image: sbk },
  { id: 26, name: "Tuflong", image: tuflong },
  { id: 27, name: "Zeetex", image: zeetex },
];



export function BatteryCarousel() {
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
        delay: 3000,
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

  return (
    <div className="relative container mx-auto px-4 py-4">
      {/* Carousel Container */}
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-2xl font-bold text-foreground md:text-4xl">
          100% Genuine
          <span className="relative mx-3 text-primary">
            Car Batteries
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary" />
          </span>
          Delivered On-Demand
        </h2>

        <p className="mx-auto max-w-2xl text-base text-gray-700 md:text-lg">
          From Amaron and Solite to Varta and Bosch—get long-lasting, official manufacturer batteries installed in 30 minutes or less.
        </p>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {batteries.map((battery) => (
            <div
              key={battery.id}
              className="flex-[0_0_33.333%] min-w-0 px-1 sm:flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_14.285%] "

            // className="flex-[0_0_50%] min-w-0 px-2 sm:flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_14.285%]"
            >
              <div className="relative flex items-center justify-center p-4 rounded-2xl border border-primary/10 bg-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                {/* Battery Image */}
                <div className="relative w-20 h-20 md:w-20 md:h-20">
                  {battery.image &&
                    <Image
                      src={battery.image}
                      alt={battery.name}
                      // fill
                      className=" w-28 h-22"
                    />
                  // ) : (
                  //   <div className="w-full h-full rounded-full bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  //     <span className="text-xs font-bold text-primary">
                  //       {battery.name.charAt(0)}
                  //     </span>
                  //   </div>
                  // )
                  }
                </div>

                {/* Battery Name - visible on hover
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2  duration-300">
                  <span className="text-xs font-medium   px-1.5 py-0.5 rounded">
                    {battery.name}
                  </span>
                </div> */}
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Desktop */}
      <button
        onClick={scrollPrev}
        className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-card/90 shadow-lg backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary hidden sm:flex items-center justify-center"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-card/90 shadow-lg backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary hidden sm:flex items-center justify-center"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Mobile Navigation */}
      <div className="flex justify-around items-center mt-4 sm:hidden">
        <button
          onClick={scrollPrev}
          className="h-8 w-8 rounded-full bg-card/80 shadow-lg backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-xs text-muted-foreground">
          {selectedIndex + 1} / {slidesCount}
        </span>
        <button
          onClick={scrollNext}
          className="h-8 w-8 rounded-full bg-card/80 shadow-lg backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dots Indicator */}
      {slidesCount > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {[...Array(slidesCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                selectedIndex === idx
                  ? "w-4 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-primary/50"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}