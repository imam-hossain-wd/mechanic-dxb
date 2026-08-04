"use client";

import Image from "next/image";
import {
  Clock,
  MapPin,
  Users,
  Wrench,
  Shield,
  HeartHandshake,
  BadgeCheck,
  Building2,
  Flag
} from "lucide-react";
import { banners, ServiceBanner } from "@/utils/assets";
import { SiteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function AboutSection() {

  // Core values
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "No hidden costs, honest diagnostics, and clear communication every step of the way.",
    },
    {
      icon: Clock,
      title: "Speed & Reliability",
      description: "We arrive at your location in 5-15 minutes, equipped to handle any emergency.",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "Your satisfaction is our priority. We treat your car like our own.",
    },
    {
      icon: BadgeCheck,
      title: "Certified Experts",
      description: "All our mechanics are certified professionals with years of experience.",
    },
  ];

  // Milestones
  const milestones = [
    { year: "2018", label: "Founded in Dubai", icon: Flag },
    { year: "2020", label: "Expanded to 20+ Areas", icon: MapPin },
    { year: "2022", label: "10,000 Repairs Completed", icon: Wrench },
    { year: "2024", label: "2,000+ Happy Customers", icon: Users },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-5">
      {/* Modern Background with Dynamic Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute -right-20 top-0 h-150 w-150 animate-pulse-slow rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-4 ">
          <h2 className="text-2xl md:text-xl text-center font-bold"><span className="text-primary">Dubai&lsquo;s Most Trusted</span> Mobile Car Repair Service</h2>

          <p className="mx-auto text-center max-w-2xl text-base text-gray-700 md:text-lg mt-3">
            We&lsquo;ve been keeping Dubai&lsquo;s cars on the road with professional, reliable,
            and affordable mobile mechanic services since 2018.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {/* Left Column - Image & Milestones */}
          <div className="space-y-2 w-full lg:w-[62%]">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 transition-all duration-500 hover:shadow-primary/20">
                <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary/20 via-transparent to-primary/20 blur-xl" />

                <div className="relative rounded-3xl bg-linear-to-br from-primary/5 to-primary/20 p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={banners.aboutbanner}
                      alt="Car Repair Mechanic Dubai Team"
                      width={600}
                      height={400}
                      className="w-80 md:h-100 md:w-full transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Section */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-primary/10 rounded-xl p-2 text-center border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {/* Year */}

                      <div className="flex items-center justify-center gap-2 mb-1.5">
                        <Icon className="h-4 w-4 text-primary/70" />
                        <div className="text-xl font-bold text-primary mb-1">
                          {milestone.year}
                        </div>

                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight">
                        {milestone.label}
                      </p>
                      {/* Decorative Line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-3 w-[90%] mx-auto lg:w-[55%]">
            {/* Company Description */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Who We Are</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-semibold text-primary">
                  <Link href={SiteConfig?.GMB?.mapsLink} target="_blank">
                    {SiteConfig?.brandName}
                  </Link>

                </span> is a premier mobile auto repair service
                dedicated to providing fast, reliable, and professional car repair solutions
                across Dubai. With a team of certified mechanics and state-of-the-art equipment,
                we bring the workshop to your doorstep. Our mission is to eliminate the hassle of traditional car repairs by offering
                convenient, transparent, and high-quality service wherever you are in the city.
                Whether it&lsquo;s an emergency breakdown or routine maintenance, we&lsquo;ve got you covered.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Our Core Values</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-primary/10 bg-primary/10 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary p-1.5 shrink-0 mt-0.5">
                        <value.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{value.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}