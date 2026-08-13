// // "use client";

// // import Link from "next/link";
// // import { Wrench, Sparkles } from "lucide-react";
// // import Image from "next/image";
// // import { logoIcon } from "@/utils/assets";

// // export default function Logo() {
// //     return (
// //         <div className="w-full h-screen flex justify-center items-center">
// //             <Link href="/" className="flex items-center gap-2 group">
// //                 <div className="relative">
// //                     <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/20 to-primary/10 blur-md transition-all duration-500 group-hover:blur-xl" />
// //                     <div className=" flex h-28 w-28 items-center justify-center rounded-xl transition-all duration-500 bg-primary shadow-lg shadow-primary/30">
// //                         <Image class src={logoIcon.lIcon} width={1000} height={1000} alt="logo Icon" className="w-18 h-18" quality={100} />
// //                     </div>
// //                 </div>

// //                 <div className="flex gap-2 ml-2 -mt-4 flex-col leading-tight border-b-2 border-primary">
// //                     <div className="flex items-center gap-1.5">
// //                         <span className="text-7xl font-extrabold tracking-tight  text-primary">
// //                             OnFix
// //                         </span>
// //                     </div>
// //                     <span className="text-sm font-bold tracking-wider uppercase">
// //                         Car Repair Mechanic Dubai
// //                     </span>
// //                 </div>
// //             </Link>
// //         </div>
// //     );
// // }

// components/shared/Logo.jsx

// import Image from "next/image";
// import { logoIcon } from "@/utils/assets";

// export default function Logo() {
//     return (
//         <div className="w-130 mx-auto h-100 mt-10 flex gap-3 flex-col  justify-center items-center">

//             <div className="flex gap-2 -ml-3 justify-center items-center">
//                 <div className="relative">
//                     <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//                     <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary">
//                         <Image
//                             src={logoIcon.lIcon}
//                             width={80}
//                             height={80}
//                             alt="OnFix Logo Icon"
//                             className="relative z-10 h-8 w-8 object-contain"
//                             quality={100}
//                         />
//                     </div>
//                 </div>

//                 <div className="text-center space-y-2">
//                     <div className="flex items-center justify-center gap-2">
//                         <span className="text-xl font-extrabold tracking-tight bg-primary bg-clip-text text-transparent ">
//                             OnFix
//                         </span>
//                     </div>
//                 </div>

//             </div>

//             <div className="relative flex items-center justify-center gap-4">
//                 <div className="h-0.5 w-10 bg-primary" />
//                 <span className="text-xs font-semibold tracking-normal uppercase text-gray-900">
//                     Car Repair Mechanic Dubai
//                 </span>
//                 <div className="h-0.5 w-10 bg-primary" />
//             </div>
//         </div>
//     );
// }


import Image from "next/image";
import { logoIcon } from "@/utils/assets";

export default function Logo() {
  return (
    <div className="flex flex-col gap-2 my-20 justify-center w-100 h-100 mx-auto items-center gap-1 group">
      {/* Premium Badge Container */}
      <div className="relative flex -ml-4  items-center ">
        {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-md transition-all duration-500 group-hover:blur-xl" /> */}

        <div className="flex items-center justify-center ">
          <Image
            src={logoIcon.logo}
            width={300}
            height={300}
            alt="logo Icon"
            quality={75}
            className="w-22 h-18"
          />
        </div>
        <div className="flex items-center -ml-">
          <span className="text-lg md:text-6xl font-extrabold tracking-tight text-primary">
            OnFix
          </span>
        </div>
      </div>

      {/* <div className="flex flex-col leading-tight"> */}

        <div className="relative flex flex-col items-center justify-center gap-1">
          {/* <div className="h-0.5 w-10 bg-primary" /> */}
          <span className="text-xl tracking-normal  text-gray-900">
            Car Repair Mechanic Dubai
          </span>
          <div className="h-0.5 w-40 bg-primary" />
        </div>
      {/* </div> */}
    </div>
  );
}