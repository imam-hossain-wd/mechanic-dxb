"use client";

import Link from "next/link";
import { AlertCircle, RefreshCw, Home, Phone, Wrench } from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export default function ErrorPage({ error, reset }) {
  const { displayNumber } = SiteConfig;


  // Simple error messages
  const errorMessages = {
    "ECONNREFUSED": "Unable to connect to our servers. Please check your internet connection.",
    "TIMEOUT": "Request timed out. Please try again.",
    "NETWORK_ERROR": "Network error occurred. Please check your connection.",
    "DEFAULT": "Something went wrong. Our team has been notified."
  };

  const errorMessage = errorMessages[error?.code] || errorMessages.DEFAULT;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
            <AlertCircle className="h-10 w-10 text-red-500" />
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Something Went Wrong
        </h1>

        <p className="text-muted-foreground mb-2 max-w-md mx-auto">
          {errorMessage}
        </p>

        <p className="text-xs text-red-500 mb-6">
          Error: {error?.message || "Unknown error occurred"}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 text-sm"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card hover:bg-card/80 text-foreground font-medium rounded-lg transition-all duration-200 text-sm border border-border"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <a
            href={`tel:${displayNumber}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all duration-200 text-sm"
          >
            <Phone className="h-4 w-4" />
            Support
          </a>
        </div>
      </div>
    </div>
  );
}