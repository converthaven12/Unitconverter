import type { Metadata } from "next"
import ClientFootToMeter from "./ClientFootToMeter"

export const metadata: Metadata = {
  title: "Foot to Meter Converter - Convert ft to m | Unit Converter",
  description:
    "Convert feet to meters instantly with our accurate foot to meter converter. Get precise ft to m conversions with conversion table, formula, and real-world examples.",
  keywords: "foot to meter, ft to m, feet to meters converter, length conversion, imperial to metric",
  openGraph: {
    title: "Foot to Meter Converter - Convert ft to m",
    description: "Convert feet to meters instantly with our accurate foot to meter converter.",
    type: "website",
  },
}

export default function FootToMeterPage() {
  return <ClientFootToMeter />
}
