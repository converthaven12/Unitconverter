import type { Metadata } from "next"
import ClientKilogramToPound from "./ClientKilogramToPound"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Kilogram to Pound Converter | Convert kg to lbs Online",
  description:
    "Convert kilograms to pounds instantly with our accurate kg to lbs converter. Includes conversion table, formula, and real-world examples.",
  keywords: "kilogram to pound, kg to lbs, weight converter, metric to imperial",
  openGraph: {
    title: "Kilogram to Pound Converter - Accurate kg to lbs Conversion",
    description: "Convert kilograms to pounds instantly with our accurate kg to lbs converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/kilogram-to-pound",
  },
}

export default function KilogramToPoundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kilogram to Pound Converter</h1>

        <ClientKilogramToPound />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
