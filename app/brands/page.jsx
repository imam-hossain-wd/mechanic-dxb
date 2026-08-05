import BrandsPage from '@/pages/BrandsPage/BrandsPage'
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata';
import React from 'react'


export const metadata = siteMetadata.brands;
export default function page() {
    return <BrandsPage />
}
