import AboutPage from '@/pages/AboutPage/AboutPage'
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata'
import React from 'react'

export const metadata = siteMetadata.about;
export default function About() {
    return <AboutPage />
}
