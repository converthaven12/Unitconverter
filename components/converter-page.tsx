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
  examples,
  relatedConverters,
  reverseConverter,
  useCases,
}: ConverterPageProps) {
  const [inputValue, setInputValue] = useState("1")
  const [result, setResult] = useState("")
  const [formula, setFormula] = useState("")
  const [selectedFromUnit, setSelectedFromUnit] = useState(fromUnit.id)
  const [selectedToUnit, setSelectedToUnit] = useState(toUnit.id)

  const categoryUnits = getUnitsByCategory(fromUnit.category)
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
    const value = Number.parseFloat(inputValue) || 0
    const conversion = convertUnits(value, selectedFromUnit, selectedToUnit)

    if (conversion.isValid) {
      setResult(formatNumber(conversion.value))
      setFormula(conversion.formula)
    } else {
      setResult("0")
      setFormula("")
    }
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
    const categoryArticles: Record<string, { title: string; content: string[] }> = {
      length: {
        title: `Understanding ${currentFromUnit.name} to ${currentToUnit.name} Conversion`,
        content: [
          `Converting ${currentFromUnit.name} to ${currentToUnit.name} is a common requirement in various fields including construction, engineering, and everyday measurements. This conversion is particularly useful when working with different measurement systems.`,
          `The ${currentFromUnit.name} (${currentFromUnit.symbol}) is ${currentFromUnit.category === "length" ? "a unit of length measurement" : "commonly used for measuring distances"}, while ${currentToUnit.name} (${currentToUnit.symbol}) serves similar purposes but in a different scale or measurement system.`,
          `Understanding this conversion helps in international communication, scientific calculations, and practical applications where precision matters. Whether you're working on construction projects, academic research, or personal measurements, this converter ensures accuracy.`,
        ],
      },
      weight: {
        title: `${currentFromUnit.name} to ${currentToUnit.name}: Weight Conversion Guide`,
        content: [
          `Weight conversion between ${currentFromUnit.name} and ${currentToUnit.name} is essential in cooking, shipping, fitness tracking, and scientific applications. This conversion bridges different measurement systems used globally.`,
          `The ${currentFromUnit.name} (${currentFromUnit.symbol}) and ${currentToUnit.name} (${currentToUnit.symbol}) represent different scales of mass measurement, each with specific applications and regional preferences.`,
          `Accurate weight conversion is crucial for recipe scaling, international shipping calculations, medical dosages, and fitness goal tracking. Our converter ensures precise results for all your weight conversion needs.`,
        ],
      },
      temperature: {
        title: `Temperature Conversion: ${currentFromUnit.name} to ${currentToUnit.name}`,
        content: [
          `Converting temperature between ${currentFromUnit.name} and ${currentToUnit.name} is vital for weather reporting, cooking, scientific research, and international communication. Each temperature scale has specific applications and regional usage.`,
          `The ${currentFromUnit.name} (${currentFromUnit.symbol}) and ${currentToUnit.name} (${currentToUnit.symbol}) scales represent different approaches to measuring thermal energy, with distinct zero points and scaling factors.`,
          `Whether you're following international recipes, understanding weather forecasts, or conducting scientific experiments, accurate temperature conversion ensures safety and precision in your work.`,
        ],
      },
      default: {
        title: `Converting ${currentFromUnit.name} to ${currentToUnit.name}`,
        content: [
          `This ${currentFromUnit.category} conversion between ${currentFromUnit.name} and ${currentToUnit.name} serves various practical and professional applications. Understanding the relationship between these units helps in accurate measurements and calculations.`,
          `The ${currentFromUnit.name} (${currentFromUnit.symbol}) and ${currentToUnit.name} (${currentToUnit.symbol}) are both important units in the ${currentFromUnit.category} category, each with specific use cases and measurement contexts.`,
          `Accurate conversion between these units is essential for professional work, academic studies, and practical applications where precision and consistency matter most.`,
        ],
      },
    }

    return categoryArticles[currentFromUnit.category] || categoryArticles.default
  }

  const articleContent = generateArticleContent()

  const generateConversionTable = () => {
    const baseValues = [0.1, 0.5, 1, 2, 5, 10, 25, 50, 100, 500, 1000]
    return baseValues.map((value) => {
      const conversion = convertUnits(value, selectedFromUnit, selectedToUnit)
      return {
        input: value,
        output: conversion.isValid ? conversion.value : 0,
      }
    })
  }

  const conversionTableData = generateConversionTable()

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
                  Instant conversion between {currentFromUnit.symbol} and {currentToUnit.symbol} with accurate formulas
                  and examples
                </p>
              </div>

              <div className="flex justify-center gap-2">
                <Badge variant="secondary" className="capitalize">
                  {currentFromUnit.category.replace("_", " ")}
                </Badge>
                <Badge variant="outline">
                  {currentFromUnit.symbol} → {currentToUnit.symbol}
                </Badge>
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
                  <CardDescription>Enter a value and select units to convert instantly</CardDescription>
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
                            {categoryUnits.map((unit) => (
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
                          {result}
                        </div>
                        <Select value={selectedToUnit} onValueChange={handleToUnitChange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {categoryUnits.map((unit) => (
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
                          Conversion Formula
                        </h4>
                        <div className="bg-muted p-3 rounded-md">
                          <code className="text-sm font-mono">{formula}</code>
                        </div>
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
                <CardContent className="space-y-4">
                  {articleContent.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
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
                        {examples.map((example, index) => (
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
                            {conversionTableData.map((row, index) => (
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
                        {useCases.map((useCase, index) => (
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
                          {relatedConverters.map((converter) => (
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
