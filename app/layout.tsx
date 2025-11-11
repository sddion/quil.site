import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/footer";
import { OrganizationSchema } from "@/components/organization-schema";

import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Quil - Voice Assistant Device",
    template: "%s | Quil - Voice Assistant Device"
  },
  description:
    "Quil: An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction. Features gesture control, expression display, and LLM integration.",
  keywords: [
    "voice assistant", 
    "hardware", 
    "esp32", 
    "open-source", 
    "ai", 
    "quil", 
    "llm", 
    "gesture control", 
    "voice recognition", 
    "open hardware",
    "maker project",
    "developer tools"
  ],
  authors: [{ name: "Quil Project Team" }],
  creator: "Quil Project",
  publisher: "Quil Project",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://meetquil.vercel.app"
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meetquil.vercel.app",
    title: "Quil - Voice Assistant Device",
    description: "An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction.",
    siteName: "Quil",
    images: [
      {
        url: "https://meetquil.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quil - Open Source Voice Assistant Device",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quil - Voice Assistant Device",
    description: "An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction.",
    images: ["https://meetquil.vercel.app/og-image.png"],
    creator: "@sddion_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0d0d12" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Quil: An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction." />
        
        {/* Organization Schema for GEO */}
        <OrganizationSchema 
          name="Quil Project"
          url="https://meetquil.vercel.app"
          logo="https://meetquil.vercel.app/icon.svg"
          description="An open-source voice assistant device designed for developers and makers. Combines hardware and software for natural voice interaction."
          sameAs={[
            "https://github.com/sddion/quil",
            "https://instagram.com/wordswires",
            "https://x.com/sddion_"
          ]}
        />
      </head>
      <body className={`${geistMono.className} font-mono antialiased`}>
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer /> {/* Render Footer here */}
      </body>
    </html>
  );
}