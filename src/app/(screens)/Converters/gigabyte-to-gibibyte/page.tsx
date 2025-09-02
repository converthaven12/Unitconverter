import type { Metadata } from "next"
import ClientGigabyteToGibibyte from "./ClientGigabyteToGibibyte"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Gigabyte to Gibibyte Converter | Convert GB to GiB Online",
  description:
    "Convert gigabytes to gibibytes instantly with our accurate GB to GiB converter. Includes conversion table, formula, and real-world examples.",
  keywords: "gigabyte to gibibyte, GB to GiB, data converter, decimal to binary",
  openGraph: {
    title: "Gigabyte to Gibibyte Converter - Accurate GB to GiB Conversion",
    description: "Convert gigabytes to gibibytes instantly with our accurate GB to GiB converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/gigabyte-to-gibibyte",
  },
}

export default function GigabyteToGibibytePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Gigabyte to Gibibyte Converter</h1>

        <ClientGigabyteToGibibyte />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
