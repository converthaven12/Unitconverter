import type { Metadata } from "next"
import ClientJouleToCalorie from "./ClientJouleToCalorie"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Joule to Calorie Converter | Convert J to cal Online",
  description:
    "Convert joules to calories instantly with our accurate J to cal converter. Includes conversion table, formula, and real-world examples.",
  keywords: "joule to calorie, J to cal, energy converter, SI to imperial",
  openGraph: {
    title: "Joule to Calorie Converter - Accurate J to cal Conversion",
    description: "Convert joules to calories instantly with our accurate J to cal converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/joule-to-calorie",
  },
}

export default function JouleToCaloriePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Joule to Calorie Converter</h1>

        <ClientJouleToCalorie />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
