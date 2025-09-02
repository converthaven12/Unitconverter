import type { Metadata } from "next"
import ClientFahrenheitToCelsius from "./ClientFahrenheitToCelsius"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "Fahrenheit to Celsius Converter | Convert °F to °C Online",
  description:
    "Convert Fahrenheit to Celsius instantly with our accurate °F to °C converter. Includes conversion table, formula, and real-world examples.",
  keywords: "fahrenheit to celsius, °F to °C, temperature converter, imperial to metric",
  openGraph: {
    title: "Fahrenheit to Celsius Converter - Accurate °F to °C Conversion",
    description: "Convert Fahrenheit to Celsius instantly with our accurate °F to °C converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/fahrenheit-to-celsius",
  },
}

export default function FahrenheitToCelsiusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Fahrenheit to Celsius Converter</h1>

        <ClientFahrenheitToCelsius />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
