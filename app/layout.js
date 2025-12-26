import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PixelMelt - Free HEIC to JPG Converter (Bulk & Secure)",
  description: "Convert unlimited HEIC photos to JPG, PNG, or WEBP securely in your browser. No server uploads. Works on Windows, Mac, iPhone, and Android.",
  keywords: "heic to jpg, heic converter, iphone photo converter, heic to png, bulk heic converter, free heic tool",
  openGraph: {
    title: "PixelMelt - Secure HEIC Converter",
    description: "Convert HEIC to JPG instantly in your browser.",
    // images: ['/og-image.png'],
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
