"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export default function ClientFootToMeter() {
  const [footValue, setFootValue] = useState<string>("1")
  const [meterValue, setMeterValue] = useState<string>("0.3048")

  const convertFootToMeter = (feet: number): number => {
    return feet * 0.3048
  }

  const convertMeterToFoot = (meters: number): number => {
    return meters / 0.3048
  }

  const handleFootChange = (value: string) => {
    setFootValue(value)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setMeterValue(convertFootToMeter(numValue).toFixed(6))
    } else {
      setMeterValue("")
    }
  }

  const handleMeterChange = (value: string) => {
    setMeterValue(value)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setFootValue(convertMeterToFoot(numValue).toFixed(6))
    } else {
      setFootValue("")
    }
  }

  const handleSwap = () => {
    const tempValue = footValue
    setFootValue(meterValue)
    setMeterValue(tempValue)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Foot to Meter Converter</h1>
        <p className="text-lg text-muted-foreground">Convert feet to meters with precision and ease</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conversion Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Feet (ft)</label>
              <Input
                type="number"
                value={footValue}
                onChange={(e) => handleFootChange(e.target.value)}
                placeholder="Enter feet"
              />
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="icon" onClick={handleSwap}>
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Meters (m)</label>
              <Input
                type="number"
                value={meterValue}
                onChange={(e) => handleMeterChange(e.target.value)}
                placeholder="Enter meters"
              />
            </div>
          </div>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Formula:</strong> meters = feet × 0.3048
            </p>
            <p className="text-sm mt-1">
              <strong>Example:</strong> {footValue} ft = {meterValue} m
            </p>
          </div>
        </CardContent>
      </Card>

      <ConversionTable />
      <GuideArticle />
    </div>
  )
}
