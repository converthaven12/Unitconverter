"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientFahrenheitToCelsius() {
  const [fahrenheit, setFahrenheit] = useState<string>("")
  const [celsius, setCelsius] = useState<string>("")

  const convertFToC = (f: number): number => {
    return ((f - 32) * 5) / 9
  }

  const convertCToF = (c: number): number => {
    return (c * 9) / 5 + 32
  }

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value)
    if (value && !isNaN(Number(value))) {
      const result = convertFToC(Number(value))
      setCelsius(result.toFixed(2))
    } else {
      setCelsius("")
    }
  }

  const handleCelsiusChange = (value: string) => {
    setCelsius(value)
    if (value && !isNaN(Number(value))) {
      const result = convertCToF(Number(value))
      setFahrenheit(result.toFixed(2))
    } else {
      setFahrenheit("")
    }
  }

  const swapValues = () => {
    const tempF = fahrenheit
    setFahrenheit(celsius)
    setCelsius(tempF)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Fahrenheit to Celsius</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Fahrenheit (°F)</label>
            <Input
              type="number"
              value={fahrenheit}
              onChange={(e) => handleFahrenheitChange(e.target.value)}
              placeholder="Enter Fahrenheit"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Celsius (°C)</label>
            <Input
              type="number"
              value={celsius}
              onChange={(e) => handleCelsiusChange(e.target.value)}
              placeholder="Enter Celsius"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> °C = (°F - 32) × 5/9
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
