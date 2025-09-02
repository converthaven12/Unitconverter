import type { Metadata } from "next"
import ClientGallonUSToLiter from "./ClientGallonUSToLiter"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "US Gallon to Liter Converter | Convert gal to L Online",
  description:
    "Convert US gallons to liters instantly with our accurate gal to L converter. Includes conversion table, formula, and real-world examples.",
  keywords: "gallon to liter, gal to L, volume converter, imperial to metric",
  openGraph: {
    title: "US Gallon to Liter Converter - Accurate gal to L Conversion",
    description: "Convert US gallons to liters instantly with our accurate gal to L converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/gallon_us-to-liter",
  },
}

export default function GallonUSToLiterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">US Gallon to Liter Converter</h1>

        <ClientGallonUSToLiter />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
