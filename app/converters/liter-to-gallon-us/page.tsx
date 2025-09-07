import type { Metadata } from "next"
import LiterToGallonUSClientPage from "./LiterToGallonUSClientPage"

export const metadata: Metadata = {
  title: "Liter to US Gallon Converter - Convert L to gal Instantly",
  description:
    "Convert liters to US gallons quickly and accurately. Free online L to gal converter with conversion formula, examples, and reference table.",
  keywords: ["liter to gallon", "L to gal", "volume converter", "metric to imperial", "liquid conversion"],
  openGraph: {
    title: "Liter to US Gallon Converter - Convert L to gal",
    description: "Convert liters to US gallons quickly and accurately with our free online converter.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Liter to US Gallon Converter",
    description: "Convert liters to US gallons quickly and accurately.",
  },
}

export const revalidate = 0

export default function LiterToGallonUSPage() {
  return <LiterToGallonUSClientPage />
}
