import AboutSection from '@/components/view/AboutSection/AboutSection'
import { ClientReviewsSection } from '@/components/view/ClientReviewsSection/ClientReviewsSection'
import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import HomeHero from '@/components/view/Hero/HomeHero'
import { Maps } from '@/components/view/Map/Map'
import ServicesSection from '@/components/view/ServicesSection/ServicesSection'
import StillHasAnyQuestions from '@/components/view/StillHasAnyQuestions/StillHasAnyQuestions'
import WhyChooseUsSection from '@/components/view/WhyChooseUsSection/WhyChooseUsSection'
import React from 'react'

export default function HomePage() {
    return (
        <div className="">
            <HomeHero />
            <ServicesSection />
            <AboutSection />
            <WhyChooseUsSection />
            <Maps />
            <ClientReviewsSection />
            <FAQSection />
            <StillHasAnyQuestions />
        </div>
    )
}
