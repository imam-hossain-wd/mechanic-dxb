
import AboutSection from '@/components/view/AboutSection/AboutSection'
import HomeHero from '@/components/view/Hero/HomeHero'
import { Maps } from '@/components/view/Map/Map'
import ServicesSection from '@/components/view/ServicesSection/ServicesSection'
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
        </div>
    )
}
