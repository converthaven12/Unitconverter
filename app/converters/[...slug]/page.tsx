import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const revalidate = 0

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join("/")

  return {
    title: `Unit Converter - ${slug.replace(/-/g, " ")}`,
    description: `Convert units instantly with our professional unit converter.`,
    keywords: ["unit converter", "conversion calculator", "measurement converter"],
  }
}

export default function DynamicConverterPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/")

  if (!slug.includes("-to-")) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Unit Converter</h1>
            <p className="text-lg text-muted-foreground">Professional unit conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6 mb-8">
            <div className="text-center">
              <p className="text-lg mb-4">Converter for: {slug.replace(/-/g, " ")}</p>
              <p className="text-muted-foreground">
                This converter is being prepared. Please use our static converter pages for now.
              </p>
              <div className="mt-4">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  🏠 Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
