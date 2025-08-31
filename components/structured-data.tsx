import Script from "next/script"
import type { Unit } from "@/lib/units-registry"
import {
  generateConverterStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
} from "@/lib/seo-utils"

interface StructuredDataProps {
  fromUnit: Unit
  toUnit: Unit
  slug: string
}

export function StructuredData({ fromUnit, toUnit, slug }: StructuredDataProps) {
  const converterData = generateConverterStructuredData(fromUnit, toUnit, slug)
  const breadcrumbData = generateBreadcrumbStructuredData(fromUnit, toUnit, slug)
  const faqData = generateFAQStructuredData(fromUnit, toUnit)

  return (
    <>
      <Script
        id="converter-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(converterData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  )
}
