import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import FloatingActionButtons from "@/components/shared/FloatingActionButtons/FloatingActionButtons";
import SchemaScript from "@/Seo/Schemas/SchemaScript";
import { GoogleTagManager } from "@next/third-parties/google";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "",
  description: "",
  verification: {
    google: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <head>
        <meta name="p:domain_verify" content="f8adcdf39af61a7491fd4fc6379fa955" />
      </head> */}
      <GoogleTagManager gtmId="G-WTKM96FLVR" />
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />
          <SchemaScript />
          <FloatingActionButtons />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
