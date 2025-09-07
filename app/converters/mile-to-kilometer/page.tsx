import type { Metadata } from "next"
import MileToKilometerClientPage from "./MileToKilometerClientPage"

export const metadata: Metadata = {
  title: "Mile to Kilometer Converter - Convert mi to km Instantly",
  description:
    "Convert miles to kilometers quickly and accurately. Free online mi to km converter with conversion formula, examples, and reference table.",
  keywords: ["mile to kilometer", "mi to km", "distance converter", "imperial to metric", "length conversion"],
  openGraph: {
    title: "Mile to Kilometer Converter - Convert mi to km",
    description: "Convert miles to kilometers quickly and accurately with our free online converter.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mile to Kilometer Converter",
    description: "Convert miles to kilometers quickly and accurately.",
  },
}

export const revalidate = 0

export default function MileToKilometerPage() {
  return <MileToKilometerClientPage />
}
