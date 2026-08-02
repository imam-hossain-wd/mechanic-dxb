// components/BrandsTab.jsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const carBrands = [
  // Japanese Brands
  { name: "Toyota", country: "Japan", models: ["Land Cruiser", "Prado", "Camry", "Hilux"] },
  { name: "Nissan", country: "Japan", models: ["Patrol", "Altima", "X-Trail", "GT-R"] },
  { name: "Lexus", country: "Japan", models: ["LX600", "ES350", "RX"] },
  { name: "Honda", country: "Japan", models: ["Accord", "Civic", "CR-V"] },
  { name: "Mitsubishi", country: "Japan", models: ["Pajero", "Montero Sport"] },
  { name: "Infiniti", country: "Japan", models: ["QX80"] },

  // Korean Brands
  { name: "Hyundai", country: "Korea", models: ["Tucson", "Creta", "Genesis G80", "GV80"] },
  { name: "Kia", country: "Korea", models: ["Sportage", "Sorento", "Telluride", "EV6"] },
  { name: "Genesis", country: "Korea", models: ["G80", "GV80"] },

  // German Brands
  { name: "Mercedes-Benz", country: "Germany", models: ["G-Class", "S-Class", "E-Class", "GLE"] },
  { name: "BMW", country: "Germany", models: ["X7", "7 Series", "M3", "M5", "X5"] },
  { name: "Audi", country: "Germany", models: ["RS6", "Q8", "R8"] },
  { name: "Porsche", country: "Germany", models: ["911", "Cayenne", "Macan", "Taycan"] },
  { name: "Volkswagen", country: "Germany", models: ["Golf", "Passat", "Tiguan"] },
  { name: "Maybach", country: "Germany", models: ["S-Class", "GLS"] },

  // British Brands
  { name: "Land Rover", country: "UK", models: ["Range Rover", "Defender", "Sport"] },
  { name: "Rolls-Royce", country: "UK", models: ["Cullinan", "Phantom", "Ghost", "Spectre"] },
  { name: "Bentley", country: "UK", models: ["Continental GT", "Bentayga"] },
  { name: "Aston Martin", country: "UK", models: ["DBX", "DBS", "Vantage"] },
  { name: "McLaren", country: "UK", models: ["750S", "Artura", "720S"] },
  { name: "Lotus", country: "UK", models: ["Eletre", "Emira"] },
  { name: "Mini", country: "UK", models: ["Cooper", "Countryman"] },

  // Italian Brands
  { name: "Ferrari", country: "Italy", models: ["Purosangue", "SF90", "812", "F8"] },
  { name: "Lamborghini", country: "Italy", models: ["Urus", "Revuelto", "Huracán"] },
  { name: "Maserati", country: "Italy", models: ["Ghibli", "MC20", "Grecale"] },
  { name: "Pagani", country: "Italy", models: ["Huayra", "Utopia"] },

  // American Brands
  { name: "Ford", country: "USA", models: ["F-150", "Mustang", "Explorer"] },
  { name: "Chevrolet", country: "USA", models: ["Tahoe", "Silverado", "Corvette"] },
  { name: "GMC", country: "USA", models: ["Yukon", "Sierra"] },
  { name: "Cadillac", country: "USA", models: ["Escalade", "CT5-V"] },
  { name: "Lincoln", country: "USA", models: ["Navigator", "Aviator"] },
  { name: "Jeep", country: "USA", models: ["Wrangler", "Grand Cherokee"] },
  { name: "Dodge", country: "USA", models: ["Charger", "Challenger"] },

  // Chinese Brands
  { name: "BYD", country: "China", models: ["Atto 3", "Han", "Seal"] },
  { name: "Geely", country: "China", models: ["Monjaro", "Tugella", "Geometry"] },
  { name: "GAC Motor", country: "China", models: ["GS8", "Empow"] },
  { name: "Jetour", country: "China", models: ["T2", "Dashing"] },
  { name: "Haval", country: "China", models: ["Tank 300", "Tank 500"] },
  { name: "Great Wall", country: "China", models: ["Tank", "Ora"] },
  { name: "Hongqi", country: "China", models: ["H9", "E-HS9"] },
  { name: "MG", country: "China", models: ["RX8", "GT"] },
  { name: "Changan", country: "China", models: ["UNI-K", "CS95"] },
  { name: "Chery", country: "China", models: ["Tiggo", "Omoda"] },
  { name: "Omoda", country: "China", models: ["C5", "E5"] },
  { name: "Jaecoo", country: "China", models: ["J7"] },
  { name: "Zeekr", country: "China", models: ["001", "X"] },
  { name: "XPeng", country: "China", models: ["G9", "P7"] },
  { name: "Li Auto", country: "China", models: ["L9", "L8"] },

  // Other Brands
  { name: "Bugatti", country: "France", models: ["Chiron", "Tourbillon"] },
  { name: "Koenigsegg", country: "Sweden", models: ["Jesko", "Gemera"] },
];

// Group brands by country
const groupedBrands = carBrands.reduce((acc, brand) => {
  if (!acc[brand.country]) {
    acc[brand.country] = [];
  }
  acc[brand.country].push(brand);
  return acc;
}, {});

const countries = Object.keys(groupedBrands);

export function BrandsTab() {
  const [activeCountry, setActiveCountry] = useState(countries[0]);

  return (
    <div className="w-full bg-background">
      {/* Country Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => setActiveCountry(country)}
            className={cn(
              "px-3.5 py-1.5 text-xs font-medium rounded transition-all duration-200 bg-primary/20 text-gray-900",
              activeCountry === country
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-primary/20 hover:bg-primary/40 hover:text-foreground"
            )}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {groupedBrands[activeCountry]?.map((brand) => (
          <div
            key={brand.name}
            className="group p-3 rounded-xl border border-border/50 bg-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
          >
            <div className="text-center">
              <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                {brand.name}
              </h4>
              <p className="text-[10px] text-white mt-0.5 line-clamp-1">
                {brand.models.slice(0, 3).join(", ")}
                {brand.models.length > 3 && "..."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Brands Count */}
      <p className="text-xs text-muted-foreground text-center mt-4">
        {carBrands.length}+ Brands Serviced • All Major Models Covered
      </p>
    </div>
  );
}