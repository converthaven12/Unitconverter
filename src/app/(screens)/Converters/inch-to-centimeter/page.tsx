import type { Metadata } from "next"
import ClientInchToCentimeter from "./ClientInchToCentimeter"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Inch to Centimeter Converter | Convert in to cm Online",
  description:
    "Convert inches to centimeters instantly with our accurate in to cm converter. Includes conversion table, formula, and real-world examples.",
  keywords: "inch to centimeter, in to cm, length converter, imperial to metric",
  openGraph: {
    title: "Inch to Centimeter Converter - Accurate in to cm Conversion",
    description: "Convert inches to centimeters instantly with our accurate in to cm converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/inch-to-centimeter",
  },
}

export default function InchToCentimeterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Inch to Centimeter Converter</h1>

        <ClientInchToCentimeter />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
