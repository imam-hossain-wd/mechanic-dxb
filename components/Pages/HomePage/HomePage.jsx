
import AboutSection from '@/components/view/AboutSection/AboutSection'
import HomeHero from '@/components/view/Hero/HomeHero'
import ServicesSection from '@/components/view/ServicesSection/ServicesSection'
import React from 'react'

export default function HomePage() {
    return (
        <div className="">

            <HomeHero />
            <ServicesSection />
            <AboutSection />
        </div>
    )
}
