"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export default function ClientKilometerToMile() {
  const [kilometerValue, setKilometerValue] = useState<string>("1")
  const [mileValue, setMileValue] = useState<string>("0.621371")

  const convertKilometerToMile = (kilometers: number): number => {
    return kilometers * 0.621371
  }

  const convertMileToKilometer = (miles: number): number => {
    return miles / 0.621371
  }

  const handleKilometerChange = (value: string) => {
    setKilometerValue(value)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setMileValue(convertKilometerToMile(numValue).toFixed(6))
    } else {
      setMileValue("")
    }
  }

  const handleMileChange = (value: string) => {
    setMileValue(value)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setKilometerValue(convertMileToKilometer(numValue).toFixed(6))
    } else {
      setKilometerValue("")
    }
  }

  const handleSwap = () => {
    const tempValue = kilometerValue
    setKilometerValue(mileValue)
    setMileValue(tempValue)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Kilometer to Mile Converter</h1>
        <p className="text-lg text-muted-foreground">Convert kilometers to miles with precision and ease</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conversion Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Kilometers (km)</label>
              <Input
                type="number"
                value={kilometerValue}
                onChange={(e) => handleKilometerChange(e.target.value)}
                placeholder="Enter kilometers"
              />
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="icon" onClick={handleSwap}>
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Miles (mi)</label>
              <Input
                type="number"
                value={mileValue}
                onChange={(e) => handleMileChange(e.target.value)}
                placeholder="Enter miles"
              />
            </div>
          </div>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Formula:</strong> miles = kilometers × 0.621371
            </p>
            <p className="text-sm mt-1">
              <strong>Example:</strong> {kilometerValue} km = {mileValue} mi
            </p>
          </div>
        </CardContent>
      </Card>

      <ConversionTable />
      <GuideArticle />
    </div>
  )
}
