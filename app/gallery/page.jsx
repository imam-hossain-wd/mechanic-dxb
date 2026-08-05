import GalleryPage from '@/pages/GalleryPage/GalleryPage'
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata';
import React from 'react'

export const metadata = siteMetadata.gallery;

export default function page() {
    return <GalleryPage />
}
