import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashWrapper from "./SplashWrapper";
import Navber from "./components/hero/Navber";
import SmoothScrolling from "./components/SmoothScrolling";
import localFont from "next/font/local";
import Cursor from "./components/ui/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const corporatusFont = localFont({
  src: "../public/fonts/corporatus_regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rabbi",
  description:
    "Portfolio of Muhammad Rabbi — a full-stack web developer specializing in React, TypeScript, and modern web architecture. Explore projects, case studies, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SplashWrapper>
          <SmoothScrolling />
          <div className={`px-10 ${corporatusFont.className} mx-auto max-w-[1920px] `}>
            <Cursor/>
            <Navber />
            {children}
          </div>
        </SplashWrapper>
      </body>
    </html>
  );
}
