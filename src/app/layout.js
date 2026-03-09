import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "./service/ReactQueryProvider";
import ScrollToTop from "@/components/ScrollTop";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const solaimanLipi = localFont({
  src: "../../public/SolaimanLipi/SolaimanLipi.ttf", // or .ttf
  variable: "--font-bangla",
  display: "swap",
});

export const metadata = {
    icons: {
    icon: "/favicon.svg",            // মূল favicon
    shortcut: "/favicon.svg",        // browser shortcut
    apple: "/favicon.svg",     // iOS devices
  },
  title: "কন্ঠস্বর মিডিয়া",
  description: "বাংলাদেশ ও বিশ্বের সকল খবর, ব্রেকিং নিউজ, লাইভ নিউজ, রাজনীতি, বাণিজ্য, খেলা, বিনোদনসহ সকল সর্বশেষ সংবাদ সবার আগে পড়তে ক্লিক করুন কন্ঠস্বর ডট কম।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${solaimanLipi.className} antialiased leading-none bg-white dark:bg-white text-black dark:text-black  `}
      >
        <ScrollToTop></ScrollToTop>
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="mt-3 max-w-[1500px] mx-auto">
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
