// app/privacy/page.jsx
import Link from "next/link";
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  CheckCircle,
  Calendar
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Privacy Policy | ${SiteConfig.brandName}`,
  description: `Read our Privacy Policy to understand how ${SiteConfig.brandName} collects, uses, and protects your personal information. We are committed to your data privacy and security.`,
  keywords: "privacy policy, data protection, personal information, data security, privacy rights",
  alternates: {
    canonical: `${SiteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const { brandName, displayNumber, email, location, url, city, country } = SiteConfig;
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const sections = [
    {
      title: "Information We Collect",
      items: [
        "Personal identification information (Name, email address, phone number)",
        "Vehicle information (Make, model, year, VIN number)",
        "Service history and repair records",
        "Location data for mobile service delivery",
        "Payment information for service transactions",
        "Communication preferences and feedback"
      ]
    },
    {
      title: "How We Use Your Information",
      items: [
        "To provide and maintain our car repair services",
        "To notify you about service appointments and updates",
        "To improve our services and customer experience",
        "To process payments and prevent fraudulent transactions",
        "To send you promotional offers and service reminders",
        "To comply with legal obligations and regulations"
      ]
    },
    {
      title: "Information Sharing",
      items: [
        "We do not sell, trade, or rent your personal information",
        "Information shared with trusted service partners for service delivery",
        "Legal disclosure when required by law",
        "With your explicit consent for specific purposes",
        "To protect our rights and prevent fraud"
      ]
    },
    {
      title: "Data Security",
      items: [
        "Industry-standard encryption for data transmission",
        "Secure servers with firewall protection",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication protocols",
        "Data backup and disaster recovery procedures",
        "Employee training on data privacy and security"
      ]
    },
    {
      title: "Cookies Policy",
      items: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "Preference cookies to remember your settings",
        "You can control cookie preferences in your browser",
        "Third-party cookies from trusted partners"
      ]
    },
    {
      title: "Your Rights",
      items: [
        "Access and request copies of your personal data",
        "Request corrections to inaccurate information",
        "Request deletion of your personal data",
        "Opt-out of marketing communications",
        "Withdraw consent at any time",
        "Lodge a complaint with data protection authorities"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Privacy Policy
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Your <span className="text-primary">Privacy</span> Matters
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl">
            We are committed to protecting your privacy and ensuring transparency in how we handle your personal information.
          </p>
          
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Last Updated: {currentDate}</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { icon: Shield, label: "GDPR Compliant" },
            { icon: CheckCircle, label: "Data Protected" },
            { icon: Globe, label: "SSL Encrypted" },
            { icon: CheckCircle, label: "Your Rights" }
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
              At <strong>{brandName}</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your personal information when you use our services. We are committed to 
              protecting your personal data and ensuring transparency in our data practices.
            </p>
            <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-gray-600">
                <strong className="text-primary">Note:</strong> By using our services, you agree to the 
                collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
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
          ))}

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Us About Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, or requests regarding your privacy, please contact us:
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
            <p>This Privacy Policy is effective as of {currentDate}</p>
            <p>We reserve the right to update this policy at any time. Please check back regularly.</p>
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
              "name": "Privacy Policy",
              "description": `Privacy Policy for ${brandName}`,
              "url": `${url}/privacy`,
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