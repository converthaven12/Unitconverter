import type { Metadata } from "next"
import ClientCelsiusToFahrenheit from "./ClientCelsiusToFahrenheit"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Celsius to Fahrenheit Converter | Convert °C to °F Online",
  description:
    "Convert Celsius to Fahrenheit instantly with our accurate °C to °F converter. Includes conversion table, formula, and real-world examples.",
  keywords: "celsius to fahrenheit, °C to °F, temperature converter, metric to imperial",
  openGraph: {
    title: "Celsius to Fahrenheit Converter - Accurate °C to °F Conversion",
    description: "Convert Celsius to Fahrenheit instantly with our accurate °C to °F converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/celsius-to-fahrenheit",
  },
}

export default function CelsiusToFahrenheitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Celsius to Fahrenheit Converter</h1>

        <ClientCelsiusToFahrenheit />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
