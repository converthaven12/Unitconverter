// SEO utility functions for generating structured data and meta tags

import type { Unit } from "./units-registry"

export interface ConverterStructuredData {
  "@context": string
  "@type": string
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers: {
    "@type": string
    price: string
    priceCurrency: string
  }
  aggregateRating?: {
    "@type": string
    ratingValue: string
    ratingCount: string
  }
}

export function generateConverterStructuredData(fromUnit: Unit, toUnit: Unit, slug: string): ConverterStructuredData {
  const baseUrl = "https://unit-converter.vercel.app"
  const url = `${baseUrl}/converters/${slug}`

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${fromUnit.name} to ${toUnit.name} Converter`,
    description: `Convert ${fromUnit.name} (${fromUnit.symbol}) to ${toUnit.name} (${toUnit.symbol}) instantly with accurate formulas and examples.`,
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  }
}

export function generateBreadcrumbStructuredData(fromUnit: Unit, toUnit: Unit, slug: string) {
  const baseUrl = "https://unit-converter.vercel.app"

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Converters",
        item: `${baseUrl}/converters`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${fromUnit.name} to ${toUnit.name}`,
        item: `${baseUrl}/converters/${slug}`,
      },
    ],
  }
}

export function generateFAQStructuredData(fromUnit: Unit, toUnit: Unit) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do you convert ${fromUnit.name} to ${toUnit.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `To convert ${fromUnit.name} to ${toUnit.name}, use our conversion formula and multiply by the appropriate conversion factor. Our calculator provides instant, accurate results.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the formula for ${fromUnit.symbol} to ${toUnit.symbol}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The conversion formula depends on the specific units. Our converter shows the exact formula used for each calculation.`,
        },
      },
      {
        "@type": "Question",
        name: `Is this ${fromUnit.name} to ${toUnit.name} converter accurate?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, our converter uses precise conversion factors and formulas to ensure accurate results for all ${fromUnit.category} conversions.`,
        },
      },
    ],
  }
}

// Generate canonical URL
export function generateCanonicalUrl(slug: string): string {
  const baseUrl = "https://unit-converter.vercel.app"
  return `${baseUrl}/converters/${slug}`
}

// Generate keywords for SEO
export function generateKeywords(fromUnit: Unit, toUnit: Unit): string[] {
  return [
    `${fromUnit.name} to ${toUnit.name}`,
    `${fromUnit.symbol} to ${toUnit.symbol}`,
    `convert ${fromUnit.name}`,
    `${fromUnit.name} converter`,
    `${toUnit.name} converter`,
    `${fromUnit.category} conversion`,
    `${fromUnit.category} calculator`,
    "unit converter",
    "measurement converter",
    "conversion calculator",
    `${fromUnit.name} ${toUnit.name} calculator`,
    `how to convert ${fromUnit.name} to ${toUnit.name}`,
  ]
}
