import type { Metadata } from "next"
import ClientKilometerToMile from "./ClientKilometerToMile"

export const metadata: Metadata = {
  title: "Kilometer to Mile Converter - Convert km to mi | Unit Converter",
  description:
    "Convert kilometers to miles instantly with our accurate kilometer to mile converter. Get precise km to mi conversions with conversion table, formula, and real-world examples.",
  keywords: "kilometer to mile, km to mi, kilometers to miles converter, distance conversion, metric to imperial",
  openGraph: {
    title: "Kilometer to Mile Converter - Convert km to mi",
    description: "Convert kilometers to miles instantly with our accurate kilometer to mile converter.",
    type: "website",
  },
}

export default function KilometerToMilePage() {
  return <ClientKilometerToMile />
}
