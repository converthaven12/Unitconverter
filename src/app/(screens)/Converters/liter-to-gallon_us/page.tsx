import type { Metadata } from "next"
import ClientLiterToGallonUS from "./ClientLiterToGallonUS"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Liter to US Gallon Converter | Convert L to gal Online",
  description:
    "Convert liters to US gallons instantly with our accurate L to gal converter. Includes conversion table, formula, and real-world examples.",
  keywords: "liter to gallon, L to gal, volume converter, metric to imperial",
  openGraph: {
    title: "Liter to US Gallon Converter - Accurate L to gal Conversion",
    description: "Convert liters to US gallons instantly with our accurate L to gal converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/liter-to-gallon_us",
  },
}

export default function LiterToGallonUSPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Liter to US Gallon Converter</h1>

        <ClientLiterToGallonUS />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
