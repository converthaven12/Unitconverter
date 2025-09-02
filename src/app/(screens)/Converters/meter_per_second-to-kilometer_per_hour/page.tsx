import type { Metadata } from "next"
import ClientMeterPerSecondToKilometerPerHour from "./ClientMeterPerSecondToKilometerPerHour"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "m/s to km/h Converter | Convert Meters per Second to Kilometers per Hour",
  description:
    "Convert m/s to km/h instantly with our accurate speed converter. Includes conversion table, formula, and real-world examples.",
  keywords: "m/s to km/h, meters per second to kilometers per hour, speed converter",
  openGraph: {
    title: "m/s to km/h Converter - Accurate Speed Conversion",
    description: "Convert meters per second to kilometers per hour instantly.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/meter_per_second-to-kilometer_per_hour",
  },
}

export default function MeterPerSecondToKilometerPerHourPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">m/s to km/h Converter</h1>

        <ClientMeterPerSecondToKilometerPerHour />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
