import type { Metadata } from "next"
import KilometerToMileClientPage from "./KilometerToMileClientPage"

export const metadata: Metadata = {
  title: "Kilometer to Mile Converter - Convert km to mi Instantly",
  description:
    "Convert kilometers to miles quickly and accurately. Free online km to mi converter with conversion formula, examples, and reference table.",
  keywords: ["kilometer to mile", "km to mi", "distance converter", "metric to imperial", "length conversion"],
  openGraph: {
    title: "Kilometer to Mile Converter - Convert km to mi",
    description: "Convert kilometers to miles quickly and accurately with our free online converter.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kilometer to Mile Converter",
    description: "Convert kilometers to miles quickly and accurately.",
  },
}

export const revalidate = 0

export default function KilometerToMilePage() {
  return <KilometerToMileClientPage />
}
