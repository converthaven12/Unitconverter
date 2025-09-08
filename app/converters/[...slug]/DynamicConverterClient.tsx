"use client"

import { notFound } from "next/navigation"
import { unitsRegistry } from "@/lib/units-registry"
import { convertUnit } from "@/lib/conversion-engine"

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

export default function DynamicConverterClient({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/")
  const { fromUnit, toUnit, isValid } = parseConverterSlug(slug)

  if (!isValid) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Convert {fromUnit.name} to {toUnit.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional {fromUnit.category} converter with instant results
            </p>
          </div>

          <div className="bg-card rounded-lg border p-6 mb-8">
            <DynamicConverterTool fromUnit={fromUnit} toUnit={toUnit} />
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>
              About {fromUnit.name} to {toUnit.name} Conversion
            </h2>
            <p>
              Converting {fromUnit.name} to {toUnit.name} is a common {fromUnit.category} conversion. This converter
              provides accurate results for professional and everyday use.
            </p>

            <h3>Conversion Formula</h3>
            <p>
              The conversion between {fromUnit.name} and {toUnit.name} uses the standard {fromUnit.category} conversion
              factors.
            </p>

            <h3>Common Uses</h3>
            <ul>
              <li>Scientific calculations and research</li>
              <li>Engineering and technical applications</li>
              <li>Educational purposes and homework</li>
              <li>Professional and industrial measurements</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}

function DynamicConverterTool({ fromUnit, toUnit }: { fromUnit: any; toUnit: any }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {fromUnit.name} ({fromUnit.symbol || fromUnit.id})
          </label>
          <input
            type="number"
            id="fromValue"
            className="w-full px-3 py-2 border rounded-md"
            placeholder={`Enter ${fromUnit.name}`}
            onChange={(e) => {
              const value = Number.parseFloat(e.target.value) || 0
              const result = convertUnit(value, fromUnit.id, toUnit.id)
              const toInput = document.getElementById("toValue") as HTMLInputElement
              if (toInput) toInput.value = result.toString()
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {toUnit.name} ({toUnit.symbol || toUnit.id})
          </label>
          <input
            type="number"
            id="toValue"
            className="w-full px-3 py-2 border rounded-md"
            placeholder={`Result in ${toUnit.name}`}
            onChange={(e) => {
              const value = Number.parseFloat(e.target.value) || 0
              const result = convertUnit(value, toUnit.id, fromUnit.id)
              const fromInput = document.getElementById("fromValue") as HTMLInputElement
              if (fromInput) fromInput.value = result.toString()
            }}
          />
        </div>
      </div>
    </div>
  )
}
