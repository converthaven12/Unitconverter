import type { Metadata } from "next"
import ClientDegreeToRadian from "./ClientDegreeToRadian"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Degree to Radian Converter | Convert ° to rad Online",
  description:
    "Convert degrees to radians instantly with our accurate ° to rad converter. Includes conversion table, formula, and real-world examples.",
  keywords: "degree to radian, ° to rad, angle converter, trigonometry",
  openGraph: {
    title: "Degree to Radian Converter - Accurate ° to rad Conversion",
    description: "Convert degrees to radians instantly with our accurate ° to rad converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/degree-to-radian",
  },
}

export default function DegreeToRadianPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Degree to Radian Converter</h1>

        <ClientDegreeToRadian />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
