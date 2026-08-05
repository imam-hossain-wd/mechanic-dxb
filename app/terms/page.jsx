import TermsPage from '@/pages/TermsPage/TermsPage'
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata';
import React from 'react'

export const metadata = siteMetadata.terms;
export default function page() {
    return <TermsPage />
}
