import type { Metadata } from "next"
import ClientWattToHorsepower from "./ClientWattToHorsepower"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Watt to Horsepower Converter | Convert W to hp Online",
  description:
    "Convert watts to horsepower instantly with our accurate W to hp converter. Includes conversion table, formula, and real-world examples.",
  keywords: "watt to horsepower, W to hp, power converter, metric to imperial",
  openGraph: {
    title: "Watt to Horsepower Converter - Accurate W to hp Conversion",
    description: "Convert watts to horsepower instantly with our accurate W to hp converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/watt-to-horsepower",
  },
}

export default function WattToHorsepowerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Watt to Horsepower Converter</h1>

        <ClientWattToHorsepower />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
