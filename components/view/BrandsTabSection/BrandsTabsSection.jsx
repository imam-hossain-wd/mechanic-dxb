import React from 'react'
import { BrandsTab } from '../BrandsTab/BrandsTab'

export default function BrandsTabsSection() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">Brands We Service</h2>
                <p className="text-muted-foreground">All major car brands across Dubai</p>
            </div>

            <BrandsTab />
        </div>
    )
}
