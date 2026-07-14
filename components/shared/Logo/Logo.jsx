// components/shared/Logo.jsx
"use client";

import Link from "next/link";
import { Wrench } from "lucide-react";
import Image from "next/image";
import { logoIcon } from "@/utils/assets";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon Container */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 bg-primary shadow-lg shadow-primary/30">
        {/* <Wrench className="h-5 w-5 text-white transition-all duration-500 " /> */}
        <Image class src={logoIcon.lIcon} width={30} height={30} alt="logo Icon"/>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-primary ">
          AL SATWA
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
          TRADING LLC
        </span>
      </div>
    </Link>
  );
}