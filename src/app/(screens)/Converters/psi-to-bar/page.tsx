import type { Metadata } from "next"
import ClientPsiToBar from "./ClientPsiToBar"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export const metadata: Metadata = {
  title: "PSI to Bar Converter | Convert psi to bar Online",
  description:
    "Convert PSI to bar instantly with our accurate psi to bar converter. Includes conversion table, formula, and real-world examples.",
  keywords: "psi to bar, pressure converter, pounds per square inch to bar",
  openGraph: {
    title: "PSI to Bar Converter - Accurate psi to bar Conversion",
    description: "Convert PSI to bar instantly with our accurate psi to bar converter.",
    url: "https://unit-converter.vercel.app/src/app/(screens)/Converters/psi-to-bar",
  },
}

export default function PsiToBarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">PSI to Bar Converter</h1>

        <ClientPsiToBar />

        <div className="mt-12 space-y-8">
          <ConversionTable />
          <GuideArticle />
        </div>
      </div>
    </div>
  )
}
