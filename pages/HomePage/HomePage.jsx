import React from 'react'
import CTABanner from '@/components/shared/CTABanner/CTABanner'
import AboutSection from '@/components/view/AboutSection/AboutSection'
import { ClientReviewsSection } from '@/components/view/ClientReviewsSection/ClientReviewsSection'
import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import HomeHero from '@/components/view/Hero/HomeHero'
import { Maps } from '@/components/view/Map/Map'
import ServicesSection from '@/components/view/ServicesSection/ServicesSection'
import WhyChooseUsSection from '@/components/view/WhyChooseUsSection/WhyChooseUsSection'
import BrandsTabsSection from '@/components/view/BrandsTabSection/BrandsTabsSection'
import { BatteryCarousel } from '@/components/view/BatteryCarousel/BatteryCarousel'
import BrandsWeService from '@/components/view/BrandsWeService/BrandsWeService'


export default function HomePage() {
    return (
        <div className="">
            <HomeHero />
            <ServicesSection />
            <AboutSection />
            <WhyChooseUsSection />
            <BatteryCarousel />
            <BrandsWeService />
            {/* <BrandsTabsSection /> */}
            <Maps />
            <ClientReviewsSection />
            <FAQSection />
            <CTABanner />
        </div>
    )
}
