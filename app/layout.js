import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



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
      <head>
        <meta name="p:domain_verify" content="f8adcdf39af61a7491fd4fc6379fa955" />
      </head>
      <body className="min-h-full flex flex-col">
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
