// app/loading.js
"use client";

import { useEffect, useState } from "react";
import {Loader } from "lucide-react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 top-0 h-125 w-125 animate-float-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-100 w-100 animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping-slow rounded-full bg-primary/20" />
          <div className="relative flex h-15 w-15 items-center justify-center rounded-2xl bg-primary/10">
            <Loader className="h-8 w-8 animate-spin-slow text-primary" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 max-w-full">
          <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-linear-to-r from-primary/50 to-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {progress}% loaded
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}