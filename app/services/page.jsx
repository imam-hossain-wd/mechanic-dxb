import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata'
import React from 'react'

export const metadata = siteMetadata.services;
export default function page() {
    return <ServicesPage />
}
