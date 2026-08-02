// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { brandsImages } from "@/utils/assets";

// export default function BrandsWeService() {
//     const [activeTab, setActiveTab] = useState("american");
//     const [searchQuery, setSearchQuery] = useState("");

//     const tabs = [
//         { id: "american", label: "American Brands", brands: brandsImages.americanbrands },
//         { id: "british", label: "British Brands", brands: brandsImages.britishbrands },
//         { id: "japanese", label: "Japanese Brands", brands: brandsImages.japanesebrands },
//         { id: "french", label: "French Brands", brands: brandsImages.frenchbrands },
//         { id: "other", label: "Other Brands", brands: brandsImages.otherbrands },
//     ];

//     const allBrands = Object.values(tabs).flatMap(tab =>
//         Object.entries(tab.brands).map(([name, logo]) => ({
//             name,
//             logo,
//             category: tab.id
//         }))
//     );

//     const filteredBrands = searchQuery
//         ? allBrands.filter(brand =>
//             brand.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//         : Object.entries(tabs.find(tab => tab.id === activeTab)?.brands || {}).map(([name, logo]) => ({ name, logo }));

//     const clearSearch = () => setSearchQuery("");

//     return (
//         <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Section Header */}
//                 <div className="text-center mb-8">
//                     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
//                         Car Makes We{" "}
//                         <span className="relative inline-block text-primary">
//                             Service & Repair
//                             <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full" />
//                         </span>{" "}
//                         in Dubai
//                     </h2>

//                     <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
//                         Certified mobile mechanics offering bumper-to-bumper maintenance and emergency repairs for all major vehicle brands across the UAE.
//                     </p>
//                 </div>

//                 <div className="mb-20 md:mb-7">
//                     <Tabs defaultValue="american" value={activeTab} onValueChange={setActiveTab} className="w-full">
//                         <div className="container mx-auto">
//                             <TabsList className=" py-20 md:py-7 px-8 h-auto w-full md:w-[90%] mx-auto  rounded shadow-sm bg-primary/20 grid grid-cols-3 md:grid-cols-5 gap-2 ">
//                                 {tabs.map((tab) => (
//                                     <TabsTrigger
//                                         key={tab.id}
//                                         value={tab.id}
//                                         className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg px-4 py-4 text-sm font-medium transition-all duration-300 md:-mt-7 border border-primary hover:shadow-md"
//                                     >
//                                         {tab.label}
//                                     </TabsTrigger>
//                                 ))}
//                             </TabsList>


//                         </div>
//                     </Tabs>
//                 </div>



//                 {/* Brands Grid */}
//                 <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-6">
//                     {filteredBrands.length > 0 ? (
//                         filteredBrands.map((brand, index) => (
//                             <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg  ">
//                                 <CardContent className=" h-16 flex flex-col items-center justify-center aspect-square">
//                                     <div className="relative w-full h-full flex items-center justify-center">
//                                         <Image
//                                             src={brand.logo}
//                                             alt={brand.name}
//                                             fill
//                                             className="object-contain"
//                                             sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
//                                         />
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))
//                     ) : (
//                         <div className="col-span-full text-center py-10">
//                             <p className="text-gray-500">No brands found matching your search.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { brandsImages } from "@/utils/assets";

export default function BrandsWeService() {
    const [activeTab, setActiveTab] = useState("american");
    const [searchQuery, setSearchQuery] = useState("");

    const tabs = [
        { id: "american", label: "American Brands", brands: brandsImages.americanbrands },
        { id: "british", label: "British Brands", brands: brandsImages.britishbrands },
        { id: "japanese", label: "Japanese Brands", brands: brandsImages.japanesebrands },
        { id: "french", label: "French Brands", brands: brandsImages.frenchbrands },
        { id: "other", label: "Other Brands", brands: brandsImages.otherbrands },
    ];

    const allBrands = tabs.flatMap((tab) =>
        Object.entries(tab.brands || {}).map(([name, logo]) => ({
            name,
            logo,
            category: tab.id,
        }))
    );

    const filteredBrands = searchQuery
        ? allBrands.filter((brand) =>
            brand.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : Object.entries(
            tabs.find((tab) => tab.id === activeTab)?.brands || {}
        ).map(([name, logo]) => ({ name, logo }));

    return (
        <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        Car Makes We{" "}
                        <span className="relative inline-block text-primary">
                            Service & Repair
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full" />
                        </span>{" "}
                        in Dubai
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                        Certified mobile mechanics offering bumper-to-bumper maintenance and emergency repairs for all major vehicle brands across the UAE.
                    </p>
                </div>

                {/* Pill-Style Tabs Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setSearchQuery(""); // Clears search when switching tabs
                            }}
                            className={cn(
                                "px-4 py-2 text-xs sm:text-sm font-medium rounded transition-all duration-200 cursor-pointer",
                                activeTab === tab.id && !searchQuery
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                    : "bg-primary/10 text-foreground hover:bg-primary/20 hover:text-foreground"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 w-[90%] md:w-[80%] mx-auto">
                    {filteredBrands.length > 0 ? (
                        filteredBrands.map((brand, index) => (
                            <Card
                                key={index}
                                className="group overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 hover:border-primary/20 w-28 h-28"
                            >
                                <CardContent className="p- flex flex-col items-center justify-center aspect-square">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        <Image
                                            src={brand.logo}
                                            alt={`${brand.name} repair service dubai`}
                                            fill
                                            className="object-contain -mt-4"
                                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500">No brands found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}