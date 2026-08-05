import PrivacyPage from '@/pages/PrivacyPage/PrivacyPage'
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata';
import React from 'react'

export const metadata = siteMetadata.privacy;
export default function Privacy() {
    return <PrivacyPage />
}
