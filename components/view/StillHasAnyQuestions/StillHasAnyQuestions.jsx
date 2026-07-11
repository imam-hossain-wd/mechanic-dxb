
import { Button } from '@/components/ui/button'
import { SiteConfig } from '@/config/siteConfig'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function StillHasAnyQuestions() {
    return (
        <div className="py-8 mb-5 container mx-auto border border-primary/20 shadow-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-foreground md:text-2xl">
                        Still Have Questions?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        We're here to help you with any additional questions
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                        className="gap-2 px-6 py-4 rounded-full bg-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                        asChild
                    >
                        <Link href={`tel:${SiteConfig.displayNumber}`}>
                            <Phone className="h-4 w-4" />
                            Call Us
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="gap-2 px-6 py-4 rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5"
                        asChild
                    >
                        <Link href={`mailto:${SiteConfig.email}`}>
                            <Mail className="h-4 w-4" />
                            Email Us
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="gap-2 px-6 py-4 rounded-full border-2 border-green-500/20 text-green-500 hover:bg-green-500/5"
                        asChild
                    >
                        <Link href={SiteConfig.whatsappCallLink} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
