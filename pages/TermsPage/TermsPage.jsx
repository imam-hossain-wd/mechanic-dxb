// app/terms/page.jsx
import Link from "next/link";
import {
  FileCheck,
  Shield,
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle,
  Calendar,
  AlertCircle,
  Clock,
  CreditCard,
  Car,
  Wrench,
  Users
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Terms of Service | ${SiteConfig.brandName}`,
  description: `Read our Terms of Service to understand the terms and conditions for using ${SiteConfig.brandName}'s car repair services. Clear, transparent, and fair policies.`,
  keywords: "terms of service, terms and conditions, car repair terms, service agreement, legal terms",
  alternates: {
    canonical: `${SiteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  const { brandName, displayNumber, email, location, url, city, country } = SiteConfig;
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileCheck,
      items: [
        "By using our services, you agree to be bound by these Terms of Service",
        "You must be at least 18 years old to use our services",
        "You agree to provide accurate and complete information",
        "You are responsible for maintaining the confidentiality of your account",
        "We reserve the right to update these terms at any time",
        "Continued use of services constitutes acceptance of updated terms"
      ]
    },
    {
      title: "Services Provided",
      icon: Wrench,
      items: [
        "Mobile car repair and maintenance services",
        "Emergency roadside assistance",
        "Battery replacement and diagnostics",
        "AC repair and maintenance",
        "Engine diagnostics and repair",
        "Brake repair and replacement",
        "Oil change and filter replacement",
        "Electrical system repair"
      ]
    },
    {
      title: "Booking and Appointments",
      icon: Clock,
      items: [
        "Appointments can be booked via phone, WhatsApp, or online form",
        "We strive to arrive at the scheduled time but delays may occur",
        "Cancellations must be made at least 2 hours before appointment",
        "Late cancellations may be subject to a fee",
        "We reserve the right to reschedule appointments when necessary",
        "Emergency services are prioritized based on urgency"
      ]
    },
    {
      title: "Pricing and Payments",
      icon: CreditCard,
      items: [
        "All prices are inclusive of applicable taxes",
        "Payment is due upon service completion",
        "We accept cash, credit/debit cards, and bank transfer",
        "Service charges are non-refundable once work has commenced",
        "Quotes are valid for 7 days from date of issuance",
        "Additional charges may apply for unforeseen complications",
        "We provide transparent pricing with no hidden fees"
      ]
    },
    {
      title: "Customer Responsibilities",
      icon: Users,
      items: [
        "Provide accurate vehicle information and details",
        "Ensure safe and accessible parking for service",
        "Be present during the service appointment",
        "Review and confirm service details before work begins",
        "Inform us of any pre-existing vehicle conditions",
        "Provide necessary access to the vehicle",
        "Ensure vehicle is not under any other repair warranty"
      ]
    },
    {
      title: "Warranty and Guarantees",
      icon: Shield,
      items: [
        "All repairs come with a comprehensive warranty",
        "Battery replacements include 2 years warranty",
        "Mechanical repairs include up to 12 months warranty",
        "Warranty covers parts and labor for the specified period",
        "Warranty is void if the vehicle is tampered with by third parties",
        "Warranty claims must be reported within the warranty period",
        "We stand behind the quality of our workmanship"
      ]
    },
    {
      title: "Liability Limitations",
      icon: AlertCircle,
      items: [
        "We are not liable for pre-existing vehicle conditions",
        "We provide services with reasonable care and skill",
        "We are not responsible for third-party damages",
        "Our liability is limited to the service charges paid",
        "We are not liable for consequential damages",
        "We do not guarantee specific repair outcomes",
        "Customers are responsible for their vehicle's overall condition"
      ]
    },
    {
      title: "Intellectual Property",
      icon: Globe,
      items: [
        "All content on our website is our intellectual property",
        "You may not copy, reproduce, or distribute our content without permission",
        "Our brand name, logo, and images are protected by copyright",
        "Unauthorized use of our intellectual property is prohibited",
        "We reserve all rights to our content and materials"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <FileCheck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Terms of Service
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Terms of <span className="text-primary">Service</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl">
            Please read these terms carefully before using our car repair services.
          </p>
          
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Last Updated: {currentDate}</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { icon: Shield, label: "Clear Policies" },
            { icon: CheckCircle, label: "Transparent Pricing" },
            { icon: FileCheck, label: "Warranty Included" },
            { icon: Car, label: "Professional Service" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 mb-6">
            <p className="text-gray-600 leading-relaxed">
              Welcome to <strong>{brandName}</strong>. These Terms of Service govern your use of our car repair 
              services. By using our services, you agree to these terms. Please read them carefully before 
              booking any service.
            </p>
            <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-gray-600">
                <strong className="text-primary">Important:</strong> These terms are legally binding. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a href={`mailto:${email}`} className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <a href={`tel:${displayNumber}`} className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                    {displayNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Visit Us</p>
                  <p className="text-sm font-medium text-gray-900">{location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Website</p>
                  <a href={url} className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                    {url.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-xs text-gray-500 mt-8 space-y-2">
            <p>These Terms of Service are effective as of {currentDate}</p>
            <p>We reserve the right to update these terms at any time. Please check back regularly.</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <span>•</span>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            </div>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Service",
              "description": `Terms of Service for ${brandName}`,
              "url": `${url}/terms`,
              "dateModified": new Date().toISOString().split('T')[0],
              "isAccessibleForFree": true,
              "inLanguage": "en-US"
            })
          }}
        />
      </div>
    </div>
  );
}