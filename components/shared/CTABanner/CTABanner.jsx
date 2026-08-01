import { Button } from '@/components/ui/button'
import { SiteConfig } from '@/config/siteConfig'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CTABanner() {
    return (
        <div className='w-[90%] mx-auto py-5'>
            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl">
                <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    <div>
                        <h3 className="text-2xl font-black md:text-3xl lg:text-4xl">
                            Need an Emergency Mobile Mechanic in Dubai?
                        </h3>
                        <p className="mt-2 max-w-xl text-primary-foreground/90 text-sm md:text-base">
                            Our technicians are on standby across Dubai. Call now for instant mobile dispatch or schedule a diagnostic check at your home or office.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="rounded-full px-8 py-6 text-base font-bold shadow-lg hover:scale-105 transition-transform"
                            asChild
                        >
                            <Link href={SiteConfig.numberCallLink}>
                                <Phone className="mr-2 h-5 w-5 fill-current" />
                                Call Emergency Line
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-bold transition-all"
                            asChild
                        >
                            <Link href="/services">
                                <span>Explore Services</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
