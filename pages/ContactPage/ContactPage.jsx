// app/contact/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageCircle,
  ArrowRight,
  Users,
  Star,
  Award,
  Shield,
  Heart,
  Navigation,
  Compass,
  Headphones,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  User,
  MessageSquare,
  FileText,
  AtSign,
  PhoneCall,
  Map,
  Truck,
  Wrench,
  Zap,
  ExternalLink,
  SquareActivity as Twitter,
  SquareActivity as Instagram,
  Play as Youtube,
  SquareActivity as Linkedin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteConfig, socialLinks } from "@/config/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const formRef = useRef(null);

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [SiteConfig.displayNumber],
      action: `tel:${SiteConfig.numberCallLink}`,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: [SiteConfig.email],
      action: `mailto:${SiteConfig.email}`,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Location",
      details: [SiteConfig.location],
      action: SiteConfig.mapsLink,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 - 365 Days"],
      action: "#",
      color: "from-amber-500 to-amber-600"
    },
  ];

  // Service options for dropdown
  const serviceOptions = [
    "Battery Replacement",
    "Jump Start Service",
    "Computer Diagnostic",
    "AC Repair & Refill",
    "Brake Pad Replacement",
    "Oil Change Service",
    "Transmission Repair",
    "Engine Repair",
    "Car Detailing",
    "Emergency Repair",
    "Other Service"
  ];



  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };


  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/10 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 top-0 h-[600px] w-[600px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: '4s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 h-px w-full animate-gradient-x bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animationDelay: '1s' }} />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float rounded-full bg-primary/10"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDuration: (Math.random() * 12 + 8) + 's',
                  animationDelay: (Math.random() * 6) + 's',
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                <Headphones className="mr-2 h-3.5 w-3.5" />
                Contact Us
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Get in
              <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Touch
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
              </span>
              With Us
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We're here to help! Reach out to us for any questions, emergencies,
              or to schedule a service. Our team is available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl border border-border/50 bg-primary/10 p-6 backdrop-blur-sm shadow-xl">
                <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Link
                      key={index}
                      href={info.action}
                      target={info.title === "Location" ? "_blank" : undefined}
                      rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                      className={cn(
                        "group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300",
                        "hover:bg-primary/5 border border-primary/20"
                      )}
                    >
                      <div className={cn(
                        "rounded-xl bg-gradient-to-br p-3 transition-all duration-300 group-hover:scale-110",
                        info.color,
                        "opacity-80 group-hover:opacity-100"
                      )}>
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-muted-foreground">{info.title}</p>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium text-foreground truncate">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-border/50 bg-primary/10 p-6 md:p-8 backdrop-blur-sm shadow-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you within 15 minutes
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 rounded-full bg-emerald-500/20 p-4">
                      <CheckCircle className="h-12 w-12 text-emerald-500" />
                    </div>
                    <h4 className="mb-2 text-2xl font-bold text-foreground">Message Sent! 🎉</h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll respond within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={cn(
                              "pl-9 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm focus:border-primary/50",
                              errors.name && "border-red-500 focus:border-red-500"
                            )}
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={cn(
                              "pl-9 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm focus:border-primary/50",
                              errors.email && "border-red-500 focus:border-red-500"
                            )}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <PhoneCall className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 50 000 0000"
                            className={cn(
                              "pl-9 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm focus:border-primary/50",
                              errors.phone && "border-red-500 focus:border-red-500"
                            )}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border/50 bg-card/30 px-4 py-2.5 text-sm backdrop-blur-sm focus:border-primary/50 focus:outline-none"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Service inquiry"
                          className="pl-9 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your issue or inquiry..."
                          rows={5}
                          className={cn(
                            "pl-9 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm focus:border-primary/50 resize-none",
                            errors.message && "border-red-500 focus:border-red-500"
                          )}
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gap-2 rounded-xl bg-primary py-6 text-base font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      <Shield className="inline h-3 w-3" />
                      Your information is secure and will not be shared
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Headphones className="h-5 w-5 text-primary" />
            Connect With Us
          </h3>
          
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-5 text-center">
            {/* <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
              <Map className="mr-2 h-3.5 w-3.5" />
              Find Us
            </Badge> */}
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Visit Our
              <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Location
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We're conveniently located to serve you across Dubai
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map Details */}
            <div className="lg:col-span-1 space-y-4">
              <div className="rounded-3xl border border-border/50 bg-primary/10 p-2 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Our Address</h4>
                    <p className="text-sm text-muted-foreground">{SiteConfig.location}</p>
                    <Link
                      href={SiteConfig.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border/50 bg-primary/10 p-2 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mobile Service</h4>
                    <p className="text-sm text-muted-foreground">
                      We come to your location anywhere in Dubai
                    </p>
                    <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Free Inspection
                    </Badge>
                  </div>
                </div>
              </div>

              <Button
                className="w-full gap-2 rounded-xl bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                asChild
              >
                <Link href={SiteConfig.mapsLink} target="_blank">
                  <Compass className="h-4 w-4" />
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl bg-primary/10 p-1 backdrop-blur-sm shadow-2xl shadow-primary/10">
                <div className="relative overflow-hidden rounded-2xl">
                  <iframe
                    title="Car Repair Mechanic Dubai Location"
                    src={SiteConfig.embedMap}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl w-full h-80 md:h-100"
                  />

                  {/* Map Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-card/90 px-4 py-2.5 backdrop-blur-sm border border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="absolute h-3 w-3 animate-ping-slow rounded-full bg-primary opacity-75" />
                        <div className="relative h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Live Location</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-20 top-0 h-[300px] w-[300px] animate-float-slow rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] animate-float-slow rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
            <Zap className="mr-2 h-3.5 w-3.5" />
            Need Immediate Help?
          </Badge>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            We're Available
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              24/7
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
            </span>
            For Emergencies
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Don't wait! Our team is ready to assist you with any car emergency,
            day or night. Call us now for immediate support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              className="gap-2 rounded-full bg-primary px-8 py-6 text-base shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              asChild
            >
              <Link href={`tel:${SiteConfig.displayNumber}`}>
                <Phone className="h-5 w-5" />
                Call Now: {SiteConfig.displayNumber}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="gap-2 rounded-full border-2 border-primary/20 px-8 py-6 text-base text-primary hover:bg-primary/5"
              asChild
            >
              <Link href={SiteConfig.whatsappCallLink} target="_blank">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}