import type { Metadata } from "next"
import ClientPoundToKilogram from "./ClientPoundToKilogram"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Pound to Kilogram Converter | Convert lbs to kg Online",
  description:
    "Convert pounds to kilograms instantly with our accurate lbs to kg converter. Includes conversion table, formula, and real-world examples.",
  keywords: "pound to kilogram, lbs to kg, weight converter, imperial to metric",
  openGraph: {
    title: "Pound to Kilogram Converter - Accurate lbs to kg Conversion",
    description: "Convert pounds to kilograms instantly with our accurate lbs to kg converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/pound-to-kilogram",
  },
}

export default function PoundToKilogramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Pound to Kilogram Converter</h1>

        <ClientPoundToKilogram />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
