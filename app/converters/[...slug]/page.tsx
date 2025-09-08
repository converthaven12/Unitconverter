import type { Metadata } from "next"
import { unitsRegistry } from "@/lib/units-registry"
import DynamicConverterClient from "./DynamicConverterClient"

export const revalidate = 0

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join("/")
  const { fromUnit, toUnit, isValid } = parseConverterSlug(slug)

  if (!isValid) {
    return {
      title: "Converter Not Found",
      description: "The requested unit conversion is not available.",
    }
  }

  const fromUnitName = fromUnit.name
  const toUnitName = toUnit.name

  return {
    title: `Convert ${fromUnitName} to ${toUnitName} - Unit Converter`,
    description: `Convert ${fromUnitName} to ${toUnitName} instantly. Professional unit converter with accurate results and detailed conversion information.`,
    keywords: [
      `${fromUnitName} to ${toUnitName}`,
      "unit converter",
      "conversion calculator",
      fromUnit.category,
      "measurement converter",
    ],
    openGraph: {
      title: `${fromUnitName} to ${toUnitName} Converter`,
      description: `Convert ${fromUnitName} to ${toUnitName} with our professional unit converter.`,
      type: "website",
    },
  }
}

function parseConverterSlug(slug: string) {
  const parts = slug.replace(/\//g, "-").split("-to-")
  if (parts.length !== 2) return { isValid: false }

  const [fromSlug, toSlug] = parts
  const fromUnit = findUnitBySlug(fromSlug)
  const toUnit = findUnitBySlug(toSlug)

  if (!fromUnit || !toUnit || fromUnit.category !== toUnit.category) {
    return { isValid: false }
  }

  return { fromUnit, toUnit, isValid: true }
}

function findUnitBySlug(slug: string): any {
  const normalizedSlug = slug.toLowerCase().replace(/-/g, "_")

  for (const category of Object.values(unitsRegistry.categories)) {
    for (const unit of category.units) {
      if (unit.id === normalizedSlug || unit.symbol?.toLowerCase() === normalizedSlug) {
        return unit
      }
    }
  }

  const aliases: Record<string, string> = {
    cm: "centimeter",
    inches: "inch",
    kg: "kilogram",
    lb: "pound",
    lbs: "pound",
    ft: "foot",
    feet: "foot",
    m: "meter",
    km: "kilometer",
    g: "gram",
    oz: "ounce",
    f: "fahrenheit",
    c: "celsius",
    k: "kelvin",
  }

  const aliasId = aliases[normalizedSlug]
  if (aliasId) {
    for (const category of Object.values(unitsRegistry.categories)) {
      for (const unit of category.units) {
        if (unit.id === aliasId) return unit
      }
    }
  }

  return null
}

export default function DynamicConverterPage({ params }: { params: { slug: string[] } }) {
  return <DynamicConverterClient params={params} />
}
