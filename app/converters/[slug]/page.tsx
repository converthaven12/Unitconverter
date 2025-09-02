import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getUnitById, getUnitsByCategory, popularPairs, units } from "@/lib/units-registry"
import { getQuickExamples } from "@/lib/conversion-engine"
import { generateCanonicalUrl, generateKeywords } from "@/lib/seo-utils"
import { ConverterPage } from "@/components/converter-page"
import { StructuredData } from "@/components/structured-data"
import type { SerializableUnit, SerializableConverter } from "@/lib/types"
import { ARTICLE_OVERRIDES } from "../articleOverrides"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Parse slug to extract from and to unit IDs
function parseSlug(slug: string): { fromUnitId: string; toUnitId: string } | null {
  const match = slug.match(/^(.+)-to-(.+)$/)
  if (!match) return null

  const [, fromUnitId, toUnitId] = match

  const normalizeUnitId = (id: string) => {
    let normalized = id.replace(/-/g, "_").toLowerCase()

    // Create symbol-to-ID mapping from units registry
    const symbolToId: Record<string, string> = {}
    const pluralToSingular: Record<string, string> = {
      inches: "inch",
      feet: "foot",
      yards: "yard",
      miles: "mile",
      meters: "meter",
      centimeters: "centimeter",
      millimeters: "millimeter",
      kilometers: "kilometer",
      pounds: "pound",
      ounces: "ounce",
      grams: "gram",
      kilograms: "kilogram",
      tons: "ton",
      gallons: "gallon",
      liters: "liter",
      milliliters: "milliliter",
      degrees: "degree",
      radians: "radian",
      seconds: "second",
      minutes: "minute",
      hours: "hour",
      days: "day",
      weeks: "week",
      months: "month",
      years: "year",
    }

    // Build symbol mapping from units registry
    if (Array.isArray(units)) {
      units.forEach((unit) => {
        if (unit.symbol) {
          symbolToId[unit.symbol.toLowerCase()] = unit.id
        }
      })
    }

    // Check if it's a plural form first
    if (pluralToSingular[normalized]) {
      normalized = pluralToSingular[normalized]
    }

    // Check if it's a symbol
    if (symbolToId[normalized]) {
      normalized = symbolToId[normalized]
    }

    return normalized
  }

  return {
    fromUnitId: normalizeUnitId(fromUnitId),
    toUnitId: normalizeUnitId(toUnitId),
  }
}

// Generate static params for popular conversions
export async function generateStaticParams() {
  if (!Array.isArray(popularPairs)) {
    console.error("[v0] popularPairs is not an array:", typeof popularPairs, popularPairs)
    return []
  }

  try {
    return popularPairs.map((pair) => ({
      slug: `${pair.from}-to-${pair.to}`,
    }))
  } catch (error) {
    console.error("[v0] Error in generateStaticParams:", error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (!parsed) {
    return {
      title: "Converter Not Found",
      description: "The requested unit conversion could not be found.",
    }
  }

  const { fromUnitId, toUnitId } = parsed
  const fromUnit = getUnitById(fromUnitId)
  const toUnit = getUnitById(toUnitId)

  if (!fromUnit || !toUnit) {
    return {
      title: "Converter Not Found",
      description: "The requested unit conversion could not be found.",
    }
  }

  const title = `Convert ${fromUnit.name} to ${toUnit.name} - ${fromUnit.symbol} to ${toUnit.symbol} Converter`
  const description = `Convert ${fromUnit.name} (${fromUnit.symbol}) to ${toUnit.name} (${toUnit.symbol}) instantly. Accurate conversion formula, examples, and real-world applications for ${fromUnit.category} measurements.`
  const canonicalUrl = generateCanonicalUrl(slug)
  const keywords = generateKeywords(fromUnit, toUnit)

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Unit Converter",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@unitconverter",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  }
}

export default async function ConverterPageRoute({ params }: PageProps) {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (!parsed) {
    notFound()
  }

  const { fromUnitId, toUnitId } = parsed

  const fromUnit = getUnitById(fromUnitId)
  const toUnit = getUnitById(toUnitId)

  if (!fromUnit || !toUnit || fromUnit.category !== toUnit.category) {
    notFound()
  }

  // Get quick examples
  const examples = getQuickExamples(fromUnitId, toUnitId)

  let categoryUnits: any[] = []
  try {
    const rawCategoryUnits = getUnitsByCategory(fromUnit.category)
    categoryUnits = Array.isArray(rawCategoryUnits) ? rawCategoryUnits : []
  } catch (error) {
    console.error("Error getting category units:", error)
    categoryUnits = []
  }

  const serializableFromUnit: SerializableUnit = {
    id: fromUnit.id,
    name: fromUnit.name,
    symbol: fromUnit.symbol,
    category: fromUnit.category,
  }

  const serializableToUnit: SerializableUnit = {
    id: toUnit.id,
    name: toUnit.name,
    symbol: toUnit.symbol,
    category: toUnit.category,
  }

  let relatedConverters: SerializableConverter[] = []
  try {
    if (Array.isArray(categoryUnits) && categoryUnits.length > 0) {
      relatedConverters = categoryUnits
        .filter((unit) => unit && unit.id && unit.id !== fromUnitId && unit.id !== toUnitId)
        .slice(0, 8)
        .map((unit) => ({
          fromUnit: serializableFromUnit,
          toUnit: {
            id: unit.id,
            name: unit.name || "Unknown",
            symbol: unit.symbol || "?",
            category: unit.category || fromUnit.category,
          },
          slug: `${fromUnitId}-to-${unit.id}`,
          label: `${fromUnit.symbol} → ${unit.symbol}`,
        }))
    }
  } catch (error) {
    console.error("Error creating related converters:", error)
    relatedConverters = []
  }

  // Get reverse converter
  const reverseConverter: SerializableConverter = {
    fromUnit: serializableToUnit,
    toUnit: serializableFromUnit,
    slug: `${toUnitId}-to-${fromUnitId}`,
    label: `${toUnit.symbol} → ${fromUnit.symbol}`,
  }

  // Generate real-life use cases based on unit category
  const useCases = generateUseCases(fromUnit, toUnit)

  const customArticle = ARTICLE_OVERRIDES[slug]

  return (
    <>
      <StructuredData fromUnit={fromUnit} toUnit={toUnit} slug={slug} />
      <ConverterPage
        fromUnit={serializableFromUnit}
        toUnit={serializableToUnit}
        examples={examples}
        relatedConverters={relatedConverters}
        reverseConverter={reverseConverter}
        useCases={useCases}
        customArticle={customArticle}
      />
    </>
  )
}

function generateUseCases(fromUnit: any, toUnit: any): string[] {
  const categoryUseCases: Record<string, string[]> = {
    length: [
      "Measuring room dimensions for furniture placement",
      "Converting height measurements for medical records",
      "Calculating distances for travel planning",
      "Engineering and construction measurements",
    ],
    weight: [
      "Converting cooking recipe measurements",
      "Tracking fitness and health metrics",
      "Shipping and logistics calculations",
      "Scientific research and laboratory work",
    ],
    temperature: [
      "Weather forecasting and climate data",
      "Cooking and baking temperature settings",
      "Medical and healthcare applications",
      "Industrial process monitoring",
    ],
    volume: [
      "Recipe conversions for cooking and baking",
      "Fuel consumption calculations",
      "Chemical and pharmaceutical measurements",
      "Home improvement and construction projects",
    ],
    speed: [
      "Vehicle speed limit conversions",
      "Athletic performance tracking",
      "Weather and wind speed reporting",
      "Aviation and maritime navigation",
    ],
    pressure: [
      "Tire pressure maintenance",
      "Weather barometric readings",
      "Industrial equipment specifications",
      "Medical blood pressure monitoring",
    ],
    energy: [
      "Electrical consumption calculations",
      "Nutritional energy content",
      "Physics and engineering applications",
      "Renewable energy system planning",
    ],
    power: [
      "Electrical appliance specifications",
      "Engine and motor performance",
      "Solar panel output calculations",
      "Industrial machinery ratings",
    ],
    data: [
      "File size and storage planning",
      "Internet bandwidth calculations",
      "Database and server capacity",
      "Digital media and streaming requirements",
    ],
    area: [
      "Real estate and property measurements",
      "Agricultural land calculations",
      "Interior design and space planning",
      "Construction and architectural projects",
    ],
  }

  return (
    categoryUseCases[fromUnit.category] || [
      "Professional and scientific calculations",
      "Educational and academic research",
      "International business and trade",
      "Personal and everyday measurements",
    ]
  )
}
