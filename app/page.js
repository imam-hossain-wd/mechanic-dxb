import HomePage from '@/pages/HomePage/HomePage'
import { Button } from '@/components/ui/button'
import React from 'react'
import { siteMetadata } from '@/Seo/siteMetadata/siteMetadata'

export const metadata = siteMetadata.home;
export default function Home() {
  return <HomePage />
}
