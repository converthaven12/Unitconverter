import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Footer } from "@/components/footer"

import type { Metadata } from "next";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unit Converter — Convert Any Units Instantly",
  description:
    "Free online unit converter for length, weight, temperature, volume and 20+ categories. Convert between metric, imperial and other units with accurate formulas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

}
