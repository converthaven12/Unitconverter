"use client"
import { useState, useEffect } from "react"
const ArrowRightLeft = () => <span className="text-lg">⇄</span>
const Calculator = () => <span className="text-lg">🧮</span>

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { convertUnits, formatNumber } from "@/lib/conversion-engine"
import { getUnitById } from "@/lib/units-registry"

export function FeaturedConverter() {
  const [inputValue, setInputValue] = useState("1")
  const [result, setResult] = useState("")

  // Featured conversion: Celsius to Fahrenheit
  const fromUnitId = "celsius"
  const toUnitId = "fahrenheit"

  const fromUnit = getUnitById(fromUnitId)
  const toUnit = getUnitById(toUnitId)

  useEffect(() => {
    const value = Number.parseFloat(inputValue) || 0
    const conversion = convertUnits(value, fromUnitId, toUnitId)

    if (conversion.isValid) {
      setResult(formatNumber(conversion.value))
    } else {
      setResult("0")
    }
  }, [inputValue])

  const handleSwap = () => {
    // For demo purposes, we'll just swap the values
    setInputValue(result)
  }

  if (!fromUnit || !toUnit) return null

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Calculator />
          Temperature Converter
        </CardTitle>
        <CardDescription>Convert between Celsius and Fahrenheit instantly</CardDescription>
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
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{fromUnit.symbol}</Badge>
                <span className="text-sm text-muted-foreground">{fromUnit.name}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="ghost" size="icon" onClick={handleSwap} className="rounded-full">
              <ArrowRightLeft />
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">To</label>
            <div className="space-y-2">
              <div className="flex items-center h-10 px-3 rounded-md border bg-muted text-lg">{result}</div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{toUnit.symbol}</Badge>
                <span className="text-sm text-muted-foreground">{toUnit.name}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h4 className="font-medium">Formula</h4>
          <div className="bg-muted p-3 rounded-md">
            <code className="text-sm">°F = (°C × 9/5) + 32</code>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-medium">0°C</div>
              <div className="text-muted-foreground">32°F</div>
            </div>
            <div className="text-center">
              <div className="font-medium">25°C</div>
              <div className="text-muted-foreground">77°F</div>
            </div>
            <div className="text-center">
              <div className="font-medium">100°C</div>
              <div className="text-muted-foreground">212°F</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
