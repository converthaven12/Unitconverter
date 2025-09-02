import type { Metadata } from "next"
import ClientMeterToFoot from "./ClientMeterToFoot"

export const metadata: Metadata = {
  title: "Meter to Foot Converter - Convert m to ft Online",
  description:
    "Convert meters to feet instantly with our accurate meter to foot converter. Free online tool with conversion table and real-time results.",
  keywords: "meter to foot, m to ft, meter foot converter, length conversion",
  openGraph: {
    title: "Meter to Foot Converter - Convert m to ft Online",
    description: "Convert meters to feet instantly with our accurate meter to foot converter.",
    type: "website",
  },
}

export default function MeterToFootPage() {
  return <ClientMeterToFoot />
}
