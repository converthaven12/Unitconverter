import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Unit Converter - Convert Between Any Units Instantly",
  description:
    "Professional unit converter supporting length, weight, temperature, volume, and 20+ categories. Convert between metric, imperial, and specialized units with accurate formulas.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
