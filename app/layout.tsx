import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashWrapper from "./SplashWrapper";
import Navber from "./components/hero/Navber";
import SmoothScrolling from "./components/SmoothScrolling";
import localFont from "next/font/local";
import Cursor from "./components/ui/Cursor";
import Script from "next/script";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

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
  variable: "--font-corporatus",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadrabbi.vercel.app"),

  title: {
    default: "Muhammad Rabbi | Full-Stack Web Developer",
    template: "%s | Muhammad Rabbi",
  },

  description:
    "Muhammad Rabbi is a full-stack web developer with a strong focus on modern frontend engineering and scalable backend systems. He specializes in Next.js, React, TypeScript, Tailwind CSS, GSAP animations, and real-time applications using Socket.IO.",
  keywords: [
    "Muhammad Rabbi",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Portfolio Website",
    "Bangladesh Web Developer",
    "Frontend Engineer",
    "Full Stack Engineer",
    "Full Stack Web Developer",
  ],

  authors: [{ name: "Muhammad Rabbi" }],

  creator: "Muhammad Rabbi",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://muhammadrabbi.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadrabbi.vercel.app",
    siteName: "Muhammad Rabbi Portfolio",
    title: "Muhammad Rabbi | Full-Stack Web Developer",
    description:
      "Portfolio of Muhammad Rabbi — building high-performance web applications with Next.js, React, and TypeScript. Explore projects, case studies, and contact details.",
    images: [
      {
        url: "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552339/portfolio_s9kyfr.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Rabbi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rabbi | Full-Stack Web Developer",
    description:
      "Explore projects and case studies by Muhammad Rabbi — a modern full-stack web developer. Building high-performance web applications with Next.js, React, and TypeScript.",
    images: [
      "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552339/portfolio_s9kyfr.webp",
    ],
    creator: "@rmlrabbi",
  },

  icons: {
    icon: "/images/muhammadrabbidev.png",
    shortcut: "/images/muhammadrabbidev.png",
    apple: "/images/muhammadrabbidev.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Rabbi",
    url: "https://muhammadrabbi.vercel.app",
    image:
      "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552339/portfolio_s9kyfr.webp",
    jobTitle: "Full Stack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://www.linkedin.com/in/muhammad-rabbi-dev",
      "https://github.com/rafiqwe",
      "https://twitter.com/rmlrabbi",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "Node.js",
      "MongoDB",
      "GSAP",
      "Web Development",
      "Frontend Development",
      "Full Stack Development",
      "Tailwind CSS",
      "Motion",
      "Prisma",
      "PostgreSQL",
      "Express.js",
      "Web Performance",
      "UI/UX Design",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Rabbi | Full Stack Web Developer",
    url: "https://muhammadrabbi.vercel.app",
    author: {
      "@type": "Person",
      name: "Muhammad Rabbi",
    },
    description:
      "Portfolio of Muhammad Rabbi — building high-performance web applications with Next.js, React, and TypeScript. Explore projects, case studies, and contact details.",
    image:
      "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552339/portfolio_s9kyfr.webp",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${corporatusFont.variable} antialiased relative `}
      >
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([schemaData, websiteSchema]),
          }}
        />

        <SplashWrapper>
          <SmoothScrolling />
          <div className={`mx-auto  `}>
            <Cursor />
            <Navber />
            {children}
          </div>
          <WhatsAppFloat />
        </SplashWrapper>
      </body>
    </html>
  );
}
