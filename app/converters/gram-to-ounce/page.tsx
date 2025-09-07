import type { Metadata } from "next"
import GramToOunceClientPage from "./GramToOunceClientPage"

export const metadata: Metadata = {
  title: "Gram to Ounce Converter - Convert g to oz Instantly",
  description:
    "Convert grams to ounces quickly and accurately. Free online g to oz converter with conversion formula, examples, and reference table.",
  keywords: ["gram to ounce", "g to oz", "weight converter", "metric to imperial", "mass conversion"],
  openGraph: {
    title: "Gram to Ounce Converter - Convert g to oz",
    description: "Convert grams to ounces quickly and accurately with our free online converter.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gram to Ounce Converter",
    description: "Convert grams to ounces quickly and accurately.",
  },
}

export const revalidate = 0

export default function GramToOuncePage() {
  return <GramToOunceClientPage />
}
