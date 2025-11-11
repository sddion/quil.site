import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/footer";

import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quil - Voice Assistant Device",
  description:
    "Quil: An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction.",
  keywords: "voice assistant, hardware, esp32, open-source, ai, quil",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-32x32.png",
      },
    ],
    apple: "/apple-icon.png",
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
