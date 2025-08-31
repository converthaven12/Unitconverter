import Link from "next/link"
import { Calculator, ArrowRight, Zap, Target, Globe } from "lucide-react"
import Script from "next/script"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { UnitConverterSidebar } from "@/components/unit-converter-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { popularPairs, categories, getUnitsByCategory } from "@/lib/units-registry"
import { FeaturedConverter } from "@/components/featured-converter"

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Unit Converter",
  description:
    "Professional unit converter supporting 27 categories and 150+ units. Convert between metric, imperial, and specialized units instantly.",
  url: "https://unit-converter.vercel.app",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "150+ units across 27 categories",
    "Instant accurate conversions",
    "Detailed formulas and examples",
    "Mobile-friendly interface",
  ],
}

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageStructuredData),
        }}
      />
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <UnitConverterSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center gap-2">
                <Calculator className="size-5 text-primary" />
                <h1 className="font-semibold">Unit Converter</h1>
              </div>
            </header>

            <main className="flex-1 p-6 space-y-8">
              {/* Hero Section */}
              <section className="text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight text-balance">Convert Any Unit Instantly</h1>
                  <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                    Professional-grade unit converter supporting 27 categories and 150+ units. From metric to imperial,
                    scientific to everyday measurements.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {categories.slice(0, 6).map((category) => (
                    <Badge key={category.id} variant="secondary" className="text-sm">
                      {category.name}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-sm">
                    +{categories.length - 6} more
                  </Badge>
                </div>
              </section>

              {/* Featured Converter */}
              <section className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">Try It Now</h2>
                  <p className="text-muted-foreground">Start with our most popular conversion</p>
                </div>
                <FeaturedConverter />
              </section>

              {/* Popular Conversions Grid */}
              <section className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">Popular Conversions</h2>
                  <p className="text-muted-foreground">Quick access to the most commonly used unit conversions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {popularPairs.slice(0, 12).map((pair) => (
                    <Card key={`${pair.from}-${pair.to}`} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          {pair.label}
                          <ArrowRight className="size-4 text-muted-foreground" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href={`/converters/${pair.from}-to-${pair.to}`}>Convert Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need something else? Use the sidebar to explore all {categories.length} categories
                  </p>
                </div>
              </section>

              {/* How It Works */}
              <section className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
                  <p className="text-muted-foreground">Simple, accurate, and reliable unit conversions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                          <Target className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Choose Units</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Select from 150+ units across 27 categories. Use the sidebar search or browse by category to
                        find exactly what you need.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                          <Zap className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Instant Results</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Get precise conversions instantly using our base-unit conversion model. All calculations include
                        proper formulas and examples.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                          <Globe className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Universal Access</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Works everywhere - metric, imperial, scientific units. Perfect for students, professionals, and
                        everyday use.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Categories Overview */}
              <section className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">All Categories</h2>
                  <p className="text-muted-foreground">Comprehensive coverage across all measurement types</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {categories.map((category) => {
                    const categoryUnits = getUnitsByCategory(category.id)
                    const defaultConverter =
                      categoryUnits.length >= 2
                        ? `${categoryUnits[0].id}-to-${categoryUnits[1].id}`
                        : `${categoryUnits[0]?.id}-to-${categoryUnits[0]?.id}`

                    return (
                      <Link key={category.id} href={`/converters/${defaultConverter}`}>
                        <Card className="hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105">
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <h3 className="font-medium text-sm text-primary hover:text-primary/80">
                                {category.name}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2">{category.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </section>

              {/* Quick Reference Table */}
              <section className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">Quick Reference Table</h2>
                  <p className="text-muted-foreground">Common conversion values at a glance</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-semibold">From</th>
                        <th className="border border-border p-3 text-left font-semibold">To</th>
                        <th className="border border-border p-3 text-left font-semibold">Example</th>
                        <th className="border border-border p-3 text-left font-semibold">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/30">
                        <td className="border border-border p-3">Meters</td>
                        <td className="border border-border p-3">Feet</td>
                        <td className="border border-border p-3">1 m</td>
                        <td className="border border-border p-3">3.28084 ft</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="border border-border p-3">Kilograms</td>
                        <td className="border border-border p-3">Pounds</td>
                        <td className="border border-border p-3">1 kg</td>
                        <td className="border border-border p-3">2.20462 lbs</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="border border-border p-3">Celsius</td>
                        <td className="border border-border p-3">Fahrenheit</td>
                        <td className="border border-border p-3">0°C</td>
                        <td className="border border-border p-3">32°F</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="border border-border p-3">Liters</td>
                        <td className="border border-border p-3">Gallons (US)</td>
                        <td className="border border-border p-3">1 L</td>
                        <td className="border border-border p-3">0.26417 gal</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="border border-border p-3">Kilometers</td>
                        <td className="border border-border p-3">Miles</td>
                        <td className="border border-border p-3">1 km</td>
                        <td className="border border-border p-3">0.62137 mi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  )
}
