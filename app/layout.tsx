import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI-Powered Breed Recognition",
  description: "PWA for cattle and buffalo breed recognition in India",
  generator: "v0.app",
  manifest: "/manifest.json", // Added manifest for PWA
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      {" "}
      {/* Added antialiased and moved font variables to html tag */}
      <body className="font-sans">
        {" "}
        {/* Removed font variables from body tag */}
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
