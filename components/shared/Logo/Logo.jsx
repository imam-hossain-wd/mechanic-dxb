// // components/shared/Logo.jsx
// "use client";

// import Link from "next/link";
// import { Wrench } from "lucide-react";
// import Image from "next/image";
// import { logoIcon } from "@/utils/assets";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-2 group">
//       {/* Icon Container */}
// <div className="relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-500 bg-primary shadow-lg shadow-primary/30">
//   {/* <Wrench className="h-5 w-5 text-white transition-all duration-500 " /> */}
//   <Image class src={logoIcon.lIcon} width={30} height={30} alt="logo Icon" className="w-7 h-7" />
// </div>

//       {/* Brand Name */}
//       <div className="flex flex-col md:gap-0 leading-tight">
//         <span className="text-md font-bold text-primary ">
//           Onfix
//         </span>
//         <span className="text-sm md:text-md font-bold text-primary" >
//           Car Repair
//         </span>
//       </div>
//     </Link>
//   );
// }

// components/shared/Logo.jsx
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Wrench, Settings, Car, Shield, Sparkles } from "lucide-react";
// import { logoIcon } from "@/utils/assets";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-3 group">
//       {/* Premium Icon Container */}
//       <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/30 transition-all duration-500 group-hover:shadow-primary/50 group-hover:scale-105">
//         {/* Inner Ring */}
//         <div className="absolute inset-0.5 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />

//         {/* Icon */}
//         <div className="relative z-10 flex h-6 w-6 items-center justify-center">
//           <Wrench className="h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-12" />
//         </div>

//         {/* Decorative Dots */}
//         <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-white/60" />
//         <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 rounded-full bg-white/60" />
//       </div>

//       {/* Brand Name */}
//       <div className="flex flex-col leading-tight">
//         <span className="text-lg font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
//           OnFix
//         </span>
//         <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
//           Car Repair Dubai
//         </span>
//       </div>
//     </Link>
//   );
// }

// components/shared/Logo.jsx
"use client";

import Link from "next/link";
import { Wrench, Sparkles } from "lucide-react";
import Image from "next/image";
import { logoIcon } from "@/utils/assets";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      {/* Premium Badge Container */}
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-md transition-all duration-500 group-hover:blur-xl" />
        <div className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-500 bg-primary shadow-lg shadow-primary/30">
          <Image 
            src={logoIcon.lIcon} 
            width={30} 
            height={30} 
            alt="logo Icon" 
            className="w-7 h-7" 
          />
        </div>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
            OnFix
          </span>
          <Sparkles className="h-3 w-3 text-primary/60" />
        </div>
        <span className="text-[10px] font-medium tracking-wider uppercase">
          Car Repair Dubai
        </span>
      </div>
    </div>
  );
}