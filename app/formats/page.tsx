import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getUnitsByCategory } from "@/lib/units-registry"

export const metadata: Metadata = {
  title: "Supported Formats & Units - All Unit Converter",
  description:
    "Complete list of all supported measurement units and formats across 27 categories including length, weight, temperature, volume, and more.",
  keywords: "supported units, measurement formats, conversion units, unit types, measurement categories",
  openGraph: {
    title: "Supported Formats & Units - All Unit Converter",
    description: "Explore our comprehensive collection of 150+ measurement units across 27 categories.",
    url: "https://allunitconverter.vercel.app/formats",
    type: "website",
  },
}

export default function FormatsPage() {
  const categories = [
    "Length",
    "Area",
    "Volume",
    "Weight/Mass",
    "Temperature",
    "Time",
    "Speed",
    "Pressure",
    "Energy",
    "Power",
    "Data",
    "Angle",
    "Frequency",
    "Fuel Economy",
    "Flow",
    "Density",
    "Force",
    "Torque",
    "Acceleration",
    "Illuminance",
    "Luminance",
    "Radioactivity",
    "Sound",
    "Electrical",
    "Magnetic",
    "Viscosity",
    "Currency",
  ]

  const getUnitCount = (category: string) => {
    return getUnitsByCategory(category).length
  }

  const popularCategories = [
    {
      name: "Length",
      description: "Distance and length measurements",
      units: ["Meter", "Foot", "Inch", "Centimeter", "Kilometer", "Mile", "Yard", "Millimeter"],
      examples: ["meter-to-foot", "centimeter-to-inch", "kilometer-to-mile"],
    },
    {
      name: "Weight/Mass",
      description: "Weight and mass measurements",
      units: ["Kilogram", "Pound", "Gram", "Ounce", "Ton", "Stone", "Carat"],
      examples: ["kilogram-to-pound", "gram-to-ounce", "ton-to-pound"],
    },
    {
      name: "Temperature",
      description: "Temperature scale conversions",
      units: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
      examples: ["celsius-to-fahrenheit", "kelvin-to-celsius", "fahrenheit-to-kelvin"],
    },
    {
      name: "Volume",
      description: "Volume and capacity measurements",
      units: ["Liter", "Gallon (US)", "Gallon (UK)", "Milliliter", "Cup", "Pint", "Quart"],
      examples: ["liter-to-gallon_us", "milliliter-to-cup", "gallon_uk-to-liter"],
    },
    {
      name: "Currency",
      description: "World currencies with live exchange rates",
      units: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "BRL"],
      examples: ["usd-to-eur", "gbp-to-usd", "jpy-to-cny"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Supported Formats & Units</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Comprehensive coverage of measurement units across 27 categories with over 150 supported formats
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Total Units</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">27</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Currencies</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Conversions</div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Common Units:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.units.slice(0, 6).map((unit) => (
                        <Badge key={unit} variant="secondary" className="text-xs">
                          {unit}
                        </Badge>
                      ))}
                      {category.units.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.units.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Popular Conversions:</h4>
                    <div className="space-y-1">
                      {category.examples.slice(0, 2).map((example) => (
                        <Link
                          key={example}
                          href={`/src/app/(screens)/Converters/${example}`}
                          className="block text-sm text-primary hover:underline"
                        >
                          {example.replace(/-/g, " → ").replace(/_/g, " ")}
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">All Supported Categories</CardTitle>
            <CardDescription>Complete list of measurement categories with unit counts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">{category}</span>
                  <Badge variant="outline">{getUnitCount(category)} units</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Format Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">International Standards</h3>
              <p className="text-muted-foreground">
                All units follow international standards including SI (International System of Units), Imperial, US
                Customary, and other globally recognized measurement systems.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Precision & Accuracy</h3>
              <p className="text-muted-foreground">
                Our conversion algorithms use high-precision mathematics to ensure accurate results with proper rounding
                and significant figure handling.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-muted-foreground">
                Currency exchange rates are updated in real-time, while other conversion factors are based on the latest
                international standards and definitions.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Special Conversions</h3>
              <p className="text-muted-foreground">
                We handle complex conversions including temperature offsets (Celsius/Fahrenheit), fuel economy
                inversions (MPG/L/100km), and logarithmic scales (decibels).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card>
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Start Converting?</h3>
            <p className="text-muted-foreground mb-6">
              Choose from our comprehensive collection of measurement units and get instant, accurate results.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Converting Now
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
