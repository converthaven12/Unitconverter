import type { MetadataRoute } from "next"
import { popularPairs, categories, units } from "@/lib/units-registry"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unit-converter.vercel.app"

  // Base pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Popular converter pages (high priority)
  popularPairs.forEach((pair) => {
    routes.push({
      url: `${baseUrl}/converters/${pair.from}-to-${pair.to}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })

    // Add reverse conversions
    routes.push({
      url: `${baseUrl}/converters/${pair.to}-to-${pair.from}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  })

  // Generate additional converter combinations for each category
  categories.forEach((category) => {
    const categoryUnits = units.filter((unit) => unit.category === category.id)

    // Generate combinations within each category (limited to avoid too many URLs)
    for (let i = 0; i < categoryUnits.length && i < 10; i++) {
      for (let j = 0; j < categoryUnits.length && j < 10; j++) {
        if (i !== j) {
          const fromUnit = categoryUnits[i]
          const toUnit = categoryUnits[j]
          const slug = `${fromUnit.id}-to-${toUnit.id}`

          // Skip if already added in popular pairs
          const isPopular = popularPairs.some(
            (pair) =>
              (pair.from === fromUnit.id && pair.to === toUnit.id) ||
              (pair.to === fromUnit.id && pair.from === toUnit.id),
          )

          if (!isPopular) {
            routes.push({
              url: `${baseUrl}/converters/${slug}`,
              lastModified: new Date(),
              changeFrequency: "monthly",
              priority: 0.6,
            })
          }
        }
      }
    }
  })

  return routes
}
