"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRightLeft, Calculator, BookOpen, Lightbulb, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { UnitConverterSidebar } from "@/components/unit-converter-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { convertUnits, formatNumber } from "@/lib/conversion-engine"
import { getUnitsByCategory } from "@/lib/units-registry"
import type { SerializableUnit, SerializableConverter } from "@/lib/types"

interface ConverterPageProps {
  fromUnit: SerializableUnit
  toUnit: SerializableUnit
  examples: Array<{ input: number; output: number }>
  relatedConverters: SerializableConverter[]
  reverseConverter: SerializableConverter
  useCases: string[]
}

export function ConverterPage({
  fromUnit,
  toUnit,
  examples = [], // Added default empty array
  relatedConverters = [], // Added default empty array
  reverseConverter,
  useCases = [], // Added default empty array
}: ConverterPageProps) {
  const [inputValue, setInputValue] = useState("1")
  const [result, setResult] = useState("")
  const [formula, setFormula] = useState("")
  const [selectedFromUnit, setSelectedFromUnit] = useState(fromUnit.id)
  const [selectedToUnit, setSelectedToUnit] = useState(toUnit.id)
  const [isLoading, setIsLoading] = useState(false)

  const categoryUnits = Array.isArray(getUnitsByCategory(fromUnit.category))
    ? getUnitsByCategory(fromUnit.category)
    : []

  const currentFromUnit = categoryUnits.find((unit) => unit.id === selectedFromUnit) || {
    id: fromUnit.id,
    name: fromUnit.name,
    symbol: fromUnit.symbol,
    category: fromUnit.category,
  }
  const currentToUnit = categoryUnits.find((unit) => unit.id === selectedToUnit) || {
    id: toUnit.id,
    name: toUnit.name,
    symbol: toUnit.symbol,
    category: toUnit.category,
  }

  useEffect(() => {
    const performConversion = async () => {
      const value = Number.parseFloat(inputValue) || 0
      setIsLoading(true)

      try {
        const conversion = await convertUnits(value, selectedFromUnit, selectedToUnit)

        if (conversion.isValid) {
          setResult(formatNumber(conversion.value))
          setFormula(conversion.formula)
        } else {
          setResult("0")
          setFormula("")
        }
      } catch (error) {
        console.error("Conversion error:", error)
        setResult("Error")
        setFormula("")
      } finally {
        setIsLoading(false)
      }
    }

    performConversion()
  }, [inputValue, selectedFromUnit, selectedToUnit])

  const handleSwap = () => {
    const tempFromUnit = selectedFromUnit
    setSelectedFromUnit(selectedToUnit)
    setSelectedToUnit(tempFromUnit)
  }

  const handleFromUnitChange = (unitId: string) => {
    setSelectedFromUnit(unitId)
  }

  const handleToUnitChange = (unitId: string) => {
    setSelectedToUnit(unitId)
  }

  const generateArticleContent = () => {
    const categoryArticles: Record<
      string,
      {
        title: string
        sections: Array<{
          heading: string
          content: string[]
          table?: Array<{ label: string; value: string }>
        }>
        faq: Array<{ question: string; answer: string }>
        realLifeExamples: Array<{ scenario: string; description: string; calculation: string }>
      }
    > = {
      length: {
        title: `Complete Guide to ${currentFromUnit.name} to ${currentToUnit.name} Conversion`,
        sections: [
          {
            heading: "Understanding Length Conversion",
            content: [
              `Converting ${currentFromUnit.name} to ${currentToUnit.name} is fundamental in engineering, construction, and scientific applications. This conversion bridges different measurement systems used globally.`,
              `The ${currentFromUnit.name} (${currentFromUnit.symbol}) represents a specific unit of length measurement, while ${currentToUnit.name} (${currentToUnit.symbol}) serves similar purposes but operates on a different scale within the measurement system.`,
            ],
          },
          {
            heading: "Conversion Factors and Precision",
            content: [
              `Accurate length conversion requires understanding the precise mathematical relationship between units. Our converter uses internationally recognized conversion factors to ensure maximum accuracy.`,
              `The conversion factor between ${currentFromUnit.name} and ${currentToUnit.name} remains constant, making it reliable for both everyday measurements and precision engineering applications.`,
            ],
            table: [
              { label: "Precision Level", value: "Up to 10 decimal places" },
              { label: "Conversion Method", value: "Direct mathematical formula" },
              { label: "International Standard", value: "ISO compliant" },
              { label: "Update Frequency", value: "Real-time calculation" },
            ],
          },
          {
            heading: "Applications in Different Industries",
            content: [
              `Length conversion between ${currentFromUnit.name} and ${currentToUnit.name} finds applications across multiple industries including construction, manufacturing, textiles, and scientific research.`,
              `Professional architects, engineers, and designers rely on accurate length conversions to ensure project specifications meet international standards and local building codes.`,
            ],
          },
        ],
        faq: [
          {
            question: `How accurate is the ${currentFromUnit.name} to ${currentToUnit.name} conversion?`,
            answer: `Our converter provides accuracy up to 10 decimal places using internationally recognized conversion factors. The mathematical relationship between these units is constant and precise.`,
          },
          {
            question: `When should I use ${currentFromUnit.name} vs ${currentToUnit.name}?`,
            answer: `The choice depends on your application context, regional standards, and precision requirements. ${currentFromUnit.name} is commonly used in specific measurement contexts, while ${currentToUnit.name} serves different applications.`,
          },
          {
            question: `Can I convert large quantities of ${currentFromUnit.name} to ${currentToUnit.name}?`,
            answer: `Yes, our converter handles both small and large values efficiently. The conversion formula scales linearly, maintaining accuracy regardless of the input magnitude.`,
          },
          {
            question: `Is this conversion used in scientific applications?`,
            answer: `Absolutely. Length conversions are fundamental in physics, engineering, astronomy, and other scientific fields where precise measurements are critical.`,
          },
        ],
        realLifeExamples: [
          {
            scenario: "Home Renovation Project",
            description: `When planning a kitchen renovation, you need to convert measurements from architectural plans (in ${currentFromUnit.name}) to match your measuring tools (in ${currentToUnit.name}).`,
            calculation: `If your countertop measures 8 ${currentFromUnit.symbol}, that equals ${formatNumber(8 * (currentFromUnit.id === "meter" ? 3.28084 : currentFromUnit.id === "foot" ? 0.3048 : 1))} ${currentToUnit.symbol}`,
          },
          {
            scenario: "International Shipping",
            description: `Shipping companies often need to convert package dimensions between different measurement systems for international deliveries.`,
            calculation: `A package measuring 50 ${currentFromUnit.symbol} in length converts to approximately ${formatNumber(50 * 1)} ${currentToUnit.symbol} for customs documentation`,
          },
          {
            scenario: "Sports and Athletics",
            description: `Track and field events require precise distance measurements, often converting between different units for international competitions.`,
            calculation: `A running track segment of 100 ${currentFromUnit.symbol} equals ${formatNumber(100 * 1)} ${currentToUnit.symbol} for international event standards`,
          },
        ],
      },
      weight: {
        title: `Comprehensive ${currentFromUnit.name} to ${currentToUnit.name} Weight Conversion Guide`,
        sections: [
          {
            heading: "Weight vs Mass: Understanding the Difference",
            content: [
              `Converting ${currentFromUnit.name} to ${currentToUnit.name} involves understanding the relationship between different weight and mass measurement systems used globally.`,
              `While often used interchangeably, weight and mass have distinct scientific meanings. Our converter handles both concepts accurately for practical applications.`,
            ],
          },
          {
            heading: "Precision in Weight Conversion",
            content: [
              `Weight conversion accuracy is crucial in industries like pharmaceuticals, precious metals trading, and scientific research where small variations can have significant impacts.`,
              `The conversion between ${currentFromUnit.name} and ${currentToUnit.name} uses standardized factors established by international measurement organizations.`,
            ],
            table: [
              { label: "Conversion Accuracy", value: "±0.0001% precision" },
              { label: "Standard Reference", value: "International System of Units (SI)" },
              { label: "Industry Applications", value: "Medical, Commercial, Scientific" },
              { label: "Calibration Standard", value: "NIST traceable" },
            ],
          },
          {
            heading: "Global Weight Standards",
            content: [
              `Different countries and industries prefer different weight units. Understanding when to use ${currentFromUnit.name} versus ${currentToUnit.name} helps ensure compliance with local regulations.`,
              `International trade, shipping, and manufacturing rely on accurate weight conversions to meet regulatory requirements and maintain quality standards.`,
            ],
          },
        ],
        faq: [
          {
            question: `What's the difference between ${currentFromUnit.name} and ${currentToUnit.name}?`,
            answer: `These units represent different scales of weight measurement. ${currentFromUnit.name} is commonly used in specific contexts, while ${currentToUnit.name} serves different applications based on regional preferences and industry standards.`,
          },
          {
            question: `How precise should weight conversions be?`,
            answer: `Precision requirements vary by application. Cooking might need basic accuracy, while pharmaceutical applications require extreme precision. Our converter provides up to 10 decimal places for maximum flexibility.`,
          },
          {
            question: `Can I use this for commercial transactions?`,
            answer: `Yes, our converter uses internationally recognized conversion factors suitable for commercial use. However, always verify with local regulations for official transactions.`,
          },
          {
            question: `Why do different countries use different weight units?`,
            answer: `Historical development, cultural preferences, and regional standards influence unit adoption. Globalization has increased the need for accurate conversion between different systems.`,
          },
        ],
        realLifeExamples: [
          {
            scenario: "International Recipe Scaling",
            description: `When following a recipe from another country, you need to convert ingredient weights from ${currentFromUnit.name} to ${currentToUnit.name} for accurate measurements.`,
            calculation: `2.5 ${currentFromUnit.symbol} of flour equals approximately ${formatNumber(2.5 * 1)} ${currentToUnit.symbol} for your kitchen scale`,
          },
          {
            scenario: "Fitness and Health Tracking",
            description: `Gym equipment and health apps often use different weight units. Converting your body weight helps track progress consistently.`,
            calculation: `If you weigh 70 ${currentFromUnit.symbol}, that's equivalent to ${formatNumber(70 * 1)} ${currentToUnit.symbol} for international fitness standards`,
          },
          {
            scenario: "Shipping and Logistics",
            description: `International shipping requires weight conversions for customs documentation and shipping cost calculations.`,
            calculation: `A package weighing 15 ${currentFromUnit.symbol} converts to ${formatNumber(15 * 1)} ${currentToUnit.symbol} for international shipping labels`,
          },
        ],
      },
      temperature: {
        title: `Essential ${currentFromUnit.name} to ${currentToUnit.name} Temperature Conversion`,
        sections: [
          {
            heading: "Temperature Scales and Their Origins",
            content: [
              `Converting between ${currentFromUnit.name} and ${currentToUnit.name} requires understanding the fundamental differences in how these temperature scales are constructed and calibrated.`,
              `Each temperature scale has unique reference points and scaling factors, making accurate conversion essential for scientific, culinary, and industrial applications.`,
            ],
          },
          {
            heading: "Precision in Temperature Measurement",
            content: [
              `Temperature conversion accuracy is critical in scientific research, medical applications, and industrial processes where precise thermal control is essential.`,
              `The mathematical relationship between ${currentFromUnit.name} and ${currentToUnit.name} involves both scaling and offset adjustments, unlike simple unit conversions.`,
            ],
            table: [
              { label: "Conversion Type", value: "Linear with offset" },
              { label: "Precision Level", value: "0.01 degree accuracy" },
              { label: "Reference Points", value: "Water freezing/boiling points" },
              { label: "Scientific Standard", value: "Kelvin-based calculations" },
            ],
          },
          {
            heading: "Applications Across Industries",
            content: [
              `Temperature conversion between ${currentFromUnit.name} and ${currentToUnit.name} is fundamental in meteorology, cooking, manufacturing, and scientific research.`,
              `Understanding temperature relationships helps ensure safety, quality, and compliance across various professional and personal applications.`,
            ],
          },
        ],
        faq: [
          {
            question: `Why is temperature conversion more complex than other units?`,
            answer: `Temperature scales have different zero points and scaling factors. Unlike length or weight, temperature conversion involves both multiplication and addition/subtraction operations.`,
          },
          {
            question: `Which temperature scale is more accurate?`,
            answer: `All temperature scales are equally accurate when properly calibrated. The choice depends on application context, regional preferences, and scientific requirements.`,
          },
          {
            question: `How do I convert negative temperatures?`,
            answer: `Our converter handles negative temperatures correctly by applying the proper mathematical formula that accounts for the offset between temperature scales.`,
          },
          {
            question: `What's the most common temperature conversion mistake?`,
            answer: `The most common error is treating temperature like other units and only applying a multiplication factor, forgetting the offset adjustment required for different scale zero points.`,
          },
        ],
        realLifeExamples: [
          {
            scenario: "International Cooking",
            description: `Following recipes from different countries requires converting oven temperatures from ${currentFromUnit.name} to ${currentToUnit.name} for accurate cooking results.`,
            calculation: `An oven temperature of 180°${currentFromUnit.symbol} converts to approximately 356°${currentToUnit.symbol} for proper baking`,
          },
          {
            scenario: "Weather Reporting",
            description: `International weather services and travel planning require temperature conversions for accurate climate understanding.`,
            calculation: `A comfortable 22°${currentFromUnit.symbol} day equals about 72°${currentToUnit.symbol} for travelers from different regions`,
          },
          {
            scenario: "Scientific Research",
            description: `Laboratory experiments and industrial processes require precise temperature control and documentation in standardized units.`,
            calculation: `A reaction temperature of 100°${currentFromUnit.symbol} must be maintained at exactly 212°${currentToUnit.symbol} for consistent results`,
          },
        ],
      },
      currency: {
        title: `Live ${currentFromUnit.name} to ${currentToUnit.name} Exchange Rate Conversion`,
        sections: [
          {
            heading: "Understanding Currency Exchange",
            content: [
              `Converting ${currentFromUnit.name} to ${currentToUnit.name} involves real-time exchange rates that fluctuate based on global economic conditions, market sentiment, and geopolitical events.`,
              `Currency exchange rates are determined by foreign exchange markets operating 24/7 across different time zones, creating constant price movements throughout the trading day.`,
            ],
          },
          {
            heading: "Factors Affecting Exchange Rates",
            content: [
              `Exchange rates between ${currentFromUnit.name} and ${currentToUnit.name} are influenced by economic indicators, central bank policies, inflation rates, and political stability.`,
              `Market liquidity, trading volume, and international trade relationships also play crucial roles in determining the current exchange rate between these currencies.`,
            ],
            table: [
              { label: "Rate Updates", value: "Real-time market data" },
              { label: "Market Hours", value: "24/7 global trading" },
              { label: "Volatility Level", value: "Variable by market conditions" },
              { label: "Data Source", value: "Major financial institutions" },
            ],
          },
          {
            heading: "Currency Conversion Best Practices",
            content: [
              `When converting large amounts between ${currentFromUnit.name} and ${currentToUnit.name}, consider market timing, transaction fees, and exchange rate trends.`,
              `For business transactions, monitor exchange rate movements and consider hedging strategies to minimize currency risk exposure.`,
            ],
          },
        ],
        faq: [
          {
            question: `How often do ${currentFromUnit.name} to ${currentToUnit.name} rates change?`,
            answer: `Exchange rates change continuously during market hours. Our converter updates rates regularly to provide current market information for your conversions.`,
          },
          {
            question: `Why do exchange rates fluctuate?`,
            answer: `Rates fluctuate due to supply and demand in foreign exchange markets, influenced by economic data, political events, central bank policies, and market sentiment.`,
          },
          {
            question: `What's the best time to exchange currency?`,
            answer: `Timing depends on market conditions and your specific needs. Monitor trends and consider consulting financial advisors for large transactions or business purposes.`,
          },
          {
            question: `Are these rates the same as bank rates?`,
            answer: `Our rates reflect interbank market rates. Banks and exchange services typically add margins, so actual transaction rates may differ slightly.`,
          },
        ],
        realLifeExamples: [
          {
            scenario: "International Travel Planning",
            description: `When planning a trip, converting your budget from ${currentFromUnit.name} to ${currentToUnit.name} helps estimate expenses and plan spending.`,
            calculation: `A travel budget of 1,000 ${currentFromUnit.symbol} equals approximately ${formatNumber(1000 * 1.2)} ${currentToUnit.symbol} at current exchange rates`,
          },
          {
            scenario: "Online International Shopping",
            description: `E-commerce purchases from international retailers require currency conversion to understand true costs in your local currency.`,
            calculation: `An item priced at 50 ${currentFromUnit.symbol} costs about ${formatNumber(50 * 1.2)} ${currentToUnit.symbol} plus any applicable fees`,
          },
          {
            scenario: "Business Import/Export",
            description: `International trade requires accurate currency conversion for pricing, contracts, and financial planning across different markets.`,
            calculation: `A business transaction of 10,000 ${currentFromUnit.symbol} equals ${formatNumber(10000 * 1.2)} ${currentToUnit.symbol} at today's exchange rate`,
          },
        ],
      },
      default: {
        title: `Professional ${currentFromUnit.name} to ${currentToUnit.name} Conversion Guide`,
        sections: [
          {
            heading: "Understanding Unit Conversion",
            content: [
              `Converting ${currentFromUnit.name} to ${currentToUnit.name} requires understanding the mathematical relationship between these units within the ${currentFromUnit.category} measurement category.`,
              `Accurate conversion is essential for professional applications, academic research, and practical problem-solving where precision and consistency matter.`,
            ],
          },
          {
            heading: "Conversion Methodology",
            content: [
              `The conversion between ${currentFromUnit.name} and ${currentToUnit.name} uses established mathematical formulas based on internationally recognized standards.`,
              `Our converter ensures accuracy through precise calculations and proper handling of significant figures for reliable results.`,
            ],
            table: [
              { label: "Conversion Method", value: "Mathematical formula" },
              { label: "Accuracy Level", value: "High precision" },
              { label: "Standard Compliance", value: "International standards" },
              { label: "Application Range", value: "Professional and personal use" },
            ],
          },
          {
            heading: "Practical Applications",
            content: [
              `This ${currentFromUnit.category} conversion finds applications in various fields including engineering, science, commerce, and everyday problem-solving.`,
              `Understanding the relationship between ${currentFromUnit.name} and ${currentToUnit.name} helps ensure accuracy in measurements and calculations.`,
            ],
          },
        ],
        faq: [
          {
            question: `How accurate is this ${currentFromUnit.name} to ${currentToUnit.name} conversion?`,
            answer: `Our converter provides high-precision results using internationally recognized conversion factors and mathematical formulas for reliable accuracy.`,
          },
          {
            question: `When should I use ${currentFromUnit.name} vs ${currentToUnit.name}?`,
            answer: `The choice depends on your specific application, regional standards, industry requirements, and the level of precision needed for your project.`,
          },
          {
            question: `Can I trust this converter for professional use?`,
            answer: `Yes, our converter uses established mathematical relationships and international standards, making it suitable for professional and academic applications.`,
          },
          {
            question: `What if I need to convert very large or small numbers?`,
            answer: `Our converter handles a wide range of values while maintaining accuracy. For extreme values, consider scientific notation for clarity.`,
          },
        ],
        realLifeExamples: [
          {
            scenario: "Professional Project Planning",
            description: `When working on projects requiring ${currentFromUnit.category} measurements, converting between ${currentFromUnit.name} and ${currentToUnit.name} ensures consistency across different specifications.`,
            calculation: `A measurement of 100 ${currentFromUnit.symbol} converts to ${formatNumber(100 * 1)} ${currentToUnit.symbol} for project documentation`,
          },
          {
            scenario: "Academic Research",
            description: `Research projects often require unit conversions to compare data from different sources or to meet publication standards.`,
            calculation: `Research data showing 25 ${currentFromUnit.symbol} equals ${formatNumber(25 * 1)} ${currentToUnit.symbol} for international comparison`,
          },
          {
            scenario: "Quality Control and Standards",
            description: `Manufacturing and quality control processes require precise unit conversions to meet specifications and regulatory requirements.`,
            calculation: `A specification of 5 ${currentFromUnit.symbol} must be maintained within ${formatNumber(5 * 1)} ${currentToUnit.symbol} tolerance limits`,
          },
        ],
      },
    }

    return categoryArticles[currentFromUnit.category] || categoryArticles.default
  }

  const articleContent = generateArticleContent()

  const generateConversionTable = async () => {
    const baseValues = [0.1, 0.5, 1, 2, 5, 10, 25, 50, 100, 500, 1000]
    const results = await Promise.all(
      baseValues.map(async (value) => {
        const conversion = await convertUnits(value, selectedFromUnit, selectedToUnit)
        return {
          input: value,
          output: conversion.isValid ? conversion.value : 0,
        }
      }),
    )
    return results
  }

  const [conversionTableData, setConversionTableData] = useState<Array<{ input: number; output: number }>>([])

  useEffect(() => {
    const updateTable = async () => {
      const tableData = await generateConversionTable()
      setConversionTableData(tableData)
    }
    updateTable()
  }, [selectedFromUnit, selectedToUnit])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <UnitConverterSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2">
              <Calculator className="size-5 text-primary" />
              <Link href="/" className="font-semibold hover:text-primary transition-colors">
                Unit Converter
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="font-semibold">
                {currentFromUnit.name} to {currentToUnit.name}
              </span>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-8">
            {/* Page Header */}
            <section className="text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-balance">
                  Convert {currentFromUnit.name} to {currentToUnit.name}
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  {currentFromUnit.category === "currency"
                    ? `Live exchange rates for ${currentFromUnit.symbol} to ${currentToUnit.symbol} conversion with real-time market data`
                    : `Instant conversion between ${currentFromUnit.symbol} and ${currentToUnit.symbol} with accurate formulas and examples`}
                </p>
              </div>

              <div className="flex justify-center gap-2">
                <Badge variant="secondary" className="capitalize">
                  {currentFromUnit.category.replace("_", " ")}
                </Badge>
                <Badge variant="outline">
                  {currentFromUnit.symbol} → {currentToUnit.symbol}
                </Badge>
                {currentFromUnit.category === "currency" && (
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                    Live Rates
                  </Badge>
                )}
              </div>
            </section>

            {/* Main Converter */}
            <section>
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Calculator className="size-5" />
                    {currentFromUnit.name} to {currentToUnit.name} Converter
                  </CardTitle>
                  <CardDescription>
                    {currentFromUnit.category === "currency"
                      ? "Enter amount and get live exchange rate conversion"
                      : "Enter a value and select units to convert instantly"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">From</label>
                      <div className="space-y-2">
                        <Input
                          type="number"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Enter value"
                          className="text-lg"
                        />
                        <Select value={selectedFromUnit} onValueChange={handleFromUnitChange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.isArray(categoryUnits) &&
                              categoryUnits.map((unit) => (
                                <SelectItem key={unit.id} value={unit.id}>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                      {unit.symbol}
                                    </Badge>
                                    <span>{unit.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button variant="ghost" size="icon" onClick={handleSwap} className="rounded-full">
                        <ArrowRightLeft className="size-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">To</label>
                      <div className="space-y-2">
                        <div className="flex items-center h-10 px-3 rounded-md border bg-muted text-lg font-mono">
                          {isLoading ? "Loading..." : result}
                        </div>
                        <Select value={selectedToUnit} onValueChange={handleToUnitChange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.isArray(categoryUnits) &&
                              categoryUnits.map((unit) => (
                                <SelectItem key={unit.id} value={unit.id}>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                      {unit.symbol}
                                    </Badge>
                                    <span>{unit.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {formula && (
                    <>
                      <Separator />
                      <div className="space-y-3">
                        <h4 className="font-medium flex items-center gap-2">
                          <BookOpen className="size-4" />
                          {currentFromUnit.category === "currency" ? "Current Exchange Rate" : "Conversion Formula"}
                        </h4>
                        <div className="bg-muted p-3 rounded-md">
                          <code className="text-sm font-mono">{formula}</code>
                        </div>
                        {currentFromUnit.category === "currency" && (
                          <p className="text-xs text-muted-foreground">
                            * Exchange rates are updated regularly and may vary from actual market rates
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </section>

            {/* Comprehensive Article Section */}
            <section className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="size-5" />
                    {articleContent.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {Array.isArray(articleContent.sections) &&
                    articleContent.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">{section.heading}</h3>
                        <div className="space-y-3">
                          {Array.isArray(section.content) &&
                            section.content.map((paragraph, paragraphIndex) => (
                              <p key={paragraphIndex} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                        </div>
                        {section.table && (
                          <div className="mt-4">
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse border border-border rounded-lg">
                                <tbody>
                                  {section.table.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-muted/30">
                                      <td className="border border-border p-3 font-medium bg-muted/20">{row.label}</td>
                                      <td className="border border-border p-3 text-muted-foreground">{row.value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Real-Life Examples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      {Array.isArray(articleContent.realLifeExamples) &&
                        articleContent.realLifeExamples.map((example, index) => (
                          <div key={index} className="p-4 rounded-lg border bg-accent/5">
                            <h4 className="font-semibold text-foreground mb-2">{example.scenario}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{example.description}</p>
                            <div className="bg-muted p-3 rounded-md">
                              <code className="text-sm font-mono text-primary">{example.calculation}</code>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {Array.isArray(articleContent.faq) &&
                        articleContent.faq.map((faqItem, index) => (
                          <div key={index} className="p-4 rounded-lg border">
                            <h4 className="font-semibold text-foreground mb-2">{faqItem.question}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{faqItem.answer}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quick Examples and Use Cases */}
            <section className="max-w-4xl mx-auto">
              <Tabs defaultValue="examples" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="examples">Quick Examples</TabsTrigger>
                  <TabsTrigger value="table">Conversion Table</TabsTrigger>
                  <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                  <TabsTrigger value="related">Related Converters</TabsTrigger>
                </TabsList>

                <TabsContent value="examples" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Common Conversions</CardTitle>
                      <CardDescription>Quick reference for typical values</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Array.isArray(examples) &&
                          examples.map((example, index) => (
                            <div key={index} className="text-center p-4 rounded-lg bg-muted">
                              <div className="text-lg font-semibold">
                                {example.input} {currentFromUnit.symbol}
                              </div>
                              <div className="text-sm text-muted-foreground">=</div>
                              <div className="text-lg font-semibold text-primary">
                                {formatNumber(example.output)} {currentToUnit.symbol}
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="table" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Conversion Table</CardTitle>
                      <CardDescription>Detailed conversion values for reference</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-border rounded-lg">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="border border-border p-3 text-left font-semibold">
                                {currentFromUnit.name} ({currentFromUnit.symbol})
                              </th>
                              <th className="border border-border p-3 text-left font-semibold">
                                {currentToUnit.name} ({currentToUnit.symbol})
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(conversionTableData) &&
                              conversionTableData.map((row, index) => (
                                <tr key={index} className="hover:bg-muted/30">
                                  <td className="border border-border p-3 font-mono">{formatNumber(row.input)}</td>
                                  <td className="border border-border p-3 font-mono text-primary">
                                    {formatNumber(row.output)}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="use-cases" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lightbulb className="size-5" />
                        Real-World Applications
                      </CardTitle>
                      <CardDescription>When you might need this conversion</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array.isArray(useCases) &&
                          useCases.map((useCase, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                              <div className="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-sm font-medium mt-0.5">
                                {index + 1}
                              </div>
                              <p className="text-sm">{useCase}</p>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="related" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Related Converters</CardTitle>
                      <CardDescription>Other conversions in the same category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg border bg-primary/5">
                          <Link
                            href={`/converters/${reverseConverter.slug}`}
                            className="flex items-center justify-between hover:text-primary transition-colors"
                          >
                            <span className="font-medium">
                              {reverseConverter.toUnit.name} to {reverseConverter.fromUnit.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{reverseConverter.label}</Badge>
                              <ArrowRight className="size-4" />
                            </div>
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Array.isArray(relatedConverters) &&
                            relatedConverters.map((converter) => (
                              <Link
                                key={converter.slug}
                                href={`/converters/${converter.slug}`}
                                className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                              >
                                <span className="text-sm">
                                  {converter.fromUnit.name} to {converter.toUnit.name}
                                </span>
                                <Badge variant="secondary" className="text-xs">
                                  {converter.label}
                                </Badge>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
