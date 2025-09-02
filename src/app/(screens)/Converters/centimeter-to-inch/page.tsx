import type { Metadata } from "next"
import ClientCentimeterToInch from "./ClientCentimeterToInch"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Centimeter to Inch Converter | Convert cm to in Online",
  description:
    "Convert centimeters to inches instantly with our accurate cm to in converter. Includes conversion table, formula, and real-world examples.",
  keywords: "centimeter to inch, cm to in, length converter, metric to imperial",
  openGraph: {
    title: "Centimeter to Inch Converter - Accurate cm to in Conversion",
    description: "Convert centimeters to inches instantly with our accurate cm to in converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/centimeter-to-inch",
  },
}

export default function CentimeterToInchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Centimeter to Inch Converter</h1>

        <ClientCentimeterToInch />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
