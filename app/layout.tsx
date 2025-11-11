import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Footer } from "@/components/footer"
import Script from "next/script"

import { Geist_Mono, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quil - Voice Assistant Device",
  description:
    "Quil: An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction.",
  generator: "v0.app",
  keywords: "voice assistant, hardware, esp32, open-source, ai, quil",
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
    title: "Quil - Voice Assistant Device",
    description:
      "Quil: An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction.",
    url: "https://meetquil.vercel.app",
    siteName: "Quil",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quil - Voice Assistant Device",
    description:
      "Quil: An AI-powered voice assistant with hardware integration. Open-source hardware and software for natural voice interaction.",
    images: ["/android-chrome-512x512.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
        <Script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="sddion"
          data-description="Support me on Buy me a coffee!"
          data-message=" Keep Quil alive — buy the damn coffee."
          data-color="#40DCA5"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        />
      </body>
    </html>
  )
}
