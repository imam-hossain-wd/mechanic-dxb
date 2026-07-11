// app/about/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Star,
  Clock,
  Wrench,
  Shield,
  Award,
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Truck,
  Calendar,
  BadgeCheck,
  Globe,
  Building2,
  Target,
  Eye,
  Lightbulb,
  Handshake,
  TrendingUp,
  Quote,
  Play,
  PlayCircle,
  MessageCircle,
  ThumbsUp,
  Crown,
  Flame,
  Compass,
  Navigation,
  Briefcase,
  GraduationCap,
  Trophy,
  Medal,
  Users2,
  HandHeart,
  ShieldCheck,
  Clock8,
  AwardIcon,
  StarIcon,
  Check,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceBanner, serviceImages } from "@/utils/assets";

// Team members data
const teamMembers = [
  {
    name: "Ahmed Al Maktoum",
    role: "Founder & Lead Mechanic",
    experience: "15+ years",
    specialty: "Engine Diagnostics",
    image: "/images/team-1.jpg",
    color: "from-blue-500 to-blue-600",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Mohammed Hassan",
    role: "Senior Mechanic",
    experience: "12+ years",
    specialty: "Transmission & AC",
    image: "/images/team-2.jpg",
    color: "from-purple-500 to-purple-600",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Khalid Al Rashid",
    role: "Diagnostic Specialist",
    experience: "10+ years",
    specialty: "Computer Diagnostics",
    image: "/images/team-3.jpg",
    color: "from-emerald-500 to-emerald-600",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Saeed Al Falasi",
    role: "Body & Paint Expert",
    experience: "8+ years",
    specialty: "Car Detailing",
    image: "/images/team-4.jpg",
    color: "from-amber-500 to-amber-600",
    social: { linkedin: "#", twitter: "#" }
  },
];

// Company milestones
const milestones = [
  { year: "2018", title: "Founded in Dubai", description: "Started with a vision to revolutionize car repair" },
  { year: "2019", title: "First 100 Customers", description: "Reached 100 happy customers in our first year" },
  { year: "2020", title: "Expanded Services", description: "Added 24/7 emergency support and mobile service" },
  { year: "2021", title: "1,000th Customer", description: "Celebrated serving 1,000 customers across Dubai" },
  { year: "2022", title: "Team Growth", description: "Grew to 15+ certified mechanics" },
  { year: "2023", title: "10,000+ Repairs", description: "Reached 10,000+ successful car repairs" },
  { year: "2024", title: "2,000+ Happy Customers", description: "Serving 2,000+ customers with 4.9/5 rating" },
];

// Core values
const coreValues = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We believe in honest communication, transparent pricing, and doing the right thing every time.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We treat every car like it's our own and every customer like family.",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description: "We value your time. Quick response, efficient service, and reliable repairs you can count on.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Award,
    title: "Excellence & Quality",
    description: "We use premium parts, cutting-edge tools, and continuous training to deliver the best service.",
    color: "from-emerald-500 to-emerald-600"
  },
];

// Stats
const stats = [
  { icon: Users, value: "2,000+", label: "Happy Customers" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Clock, value: "12 min", label: "Avg. Response Time" },
  { icon: Wrench, value: "10,000+", label: "Repairs Done" },
];

export default function AboutPage() {
  const [animateItems, setAnimateItems] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-16 md:pt-28 md:pb-20">
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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                  <Building2 className="mr-2 h-3.5 w-3.5" />
                  About Us
                </Badge>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Dubai's Most Trusted
                <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Mobile Mechanic
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
                </span>
              </h1>

              <p className="mb-6 text-lg text-muted-foreground">
                We've been keeping Dubai's cars on the road with professional, reliable, 
                and affordable mobile mechanic services since 2018.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="gap-2 rounded-full bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  asChild
                >
                  <Link href="#mission">
                    <Target className="h-4 w-4" />
                    Our Mission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5"
                  asChild
                >
                  <Link href={`tel:${SiteConfig.displayNumber}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ring-2 ring-background" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">2,000+ Happy Customers</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                    <span className="text-xs font-medium text-muted-foreground ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 to-primary/20 p-2 shadow-2xl shadow-primary/10">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={ServiceBanner?.mechanic || "/images/about-hero.jpg"}
                      alt="Car Repair Mechanic Dubai Team"
                      width={500}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute -left-4 top-8 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">2,000+</p>
                          <p className="text-[10px] text-muted-foreground">Happy Customers</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-2 bottom-12 animate-float-slow rounded-xl border border-primary/20 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-sm" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">4.9/5</p>
                          <p className="text-[10px] text-muted-foreground">Average Rating</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-amber-500" />
                        <div>
                          <p className="text-sm font-bold text-foreground">6+ Years</p>
                          <p className="text-[10px] text-muted-foreground">Of Excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-y border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide fast, reliable, and professional mobile car repair services 
                  across Dubai, ensuring every customer experiences peace of mind knowing 
                  their vehicle is in expert hands.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>24/7 Emergency Support</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>On-Site Service Anywhere</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become Dubai's most trusted mobile car repair service, setting the 
                  standard for excellence in automotive care through innovation, 
                  professionalism, and unwavering commitment to customer satisfaction.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>Industry-Leading Standards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>Innovation & Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
              <Heart className="mr-2 h-3.5 w-3.5" />
              Our Core Values
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Drives
              <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Us Forward
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our values shape everything we do and guide us in serving you better
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className={cn(
                  "absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-2xl bg-gradient-to-br",
                  value.color
                )} />
                <div className="relative">
                  <div className="mb-4">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Journey Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
                <Clock className="mr-2 h-3.5 w-3.5" />
                Our Journey
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                From Humble Beginnings to
                <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Dubai's Trusted
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
                </span>
                Mechanic
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Founded in 2018 with a simple vision - to make car repair convenient, 
                transparent, and stress-free. What started as a single mechanic with 
                a toolkit has grown into a team of certified professionals serving 
                thousands of customers across Dubai.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Today, we're proud to be one of Dubai's most trusted mobile mechanic 
                services, known for our speed, reliability, and commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="gap-2 rounded-full bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  asChild
                >
                  <Link href="/contact">
                    <MessageCircle className="h-4 w-4" />
                    Join Our Journey
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5"
                  asChild
                >
                  <Link href="/services">
                    <Wrench className="h-4 w-4" />
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Milestones Timeline */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">Our Milestones</h3>
              <div className="space-y-4">
                {milestones.slice(0, 6).map((milestone, index) => (
                  <div
                    key={index}
                    className="group relative flex items-start gap-4 rounded-2xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute left-6 top-14 h-4 w-0.5 bg-border/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
              <Users className="mr-2 h-3.5 w-3.5" />
              Our Team
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Meet Our
              <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Expert Mechanics
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our team of certified professionals is dedicated to providing the best service
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative mx-auto mb-4 h-24 w-24">
                  <div className={cn(
                    "absolute inset-0 rounded-full bg-gradient-to-br p-1",
                    member.color
                  )}>
                    <div className="h-full w-full rounded-full bg-background p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-2xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-foreground">{member.name}</h4>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-0.5">
                    <Clock className="h-3 w-3" />
                    {member.experience}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <Wrench className="h-3 w-3" />
                    {member.specialty}
                  </span>
                </div>
              </div>
            ))}
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
            <Heart className="mr-2 h-3.5 w-3.5" />
            Get in Touch
          </Badge>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Ready to Experience the
            <span className="relative mx-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Difference?
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 animate-pulse-slow" />
            </span>
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join thousands of satisfied customers who trust us with their cars. 
            Contact us today for professional, reliable car repair services.
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
              <Link href="/contact">
                <MessageCircle className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}