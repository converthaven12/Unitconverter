import type { Metadata } from "next"
import BarToPsiClientPage from "./BarToPsiClientPage"

export const metadata: Metadata = {
  title: "Bar to PSI Converter - Convert bar to psi Instantly",
  description:
    "Convert bar to PSI (pounds per square inch) quickly and accurately. Free online bar to psi converter with conversion formula and reference table.",
  keywords: ["bar to psi", "pressure converter", "metric to imperial pressure", "bar to pounds per square inch"],
  openGraph: {
    title: "Bar to PSI Converter - Convert bar to psi",
    description: "Convert bar to PSI quickly and accurately with our free online converter.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bar to PSI Converter",
    description: "Convert bar to PSI quickly and accurately.",
  },
}

export const revalidate = 0

export default function BarToPsiPage() {
  return <BarToPsiClientPage />
}
