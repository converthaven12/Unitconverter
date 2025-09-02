import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"
import { Footer } from "@/components/footer"

export const metadata = {
  description:
    "Effortlessly convert over 150 units across 27 categories with our professional unit converter. Get instant, accurate results for metric, imperial, and specialized units!",
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
