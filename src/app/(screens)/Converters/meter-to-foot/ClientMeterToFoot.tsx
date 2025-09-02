"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ConversionTable from "./ConversionTable"
import GuideArticle from "./GuideArticle"

export default function ClientMeterToFoot() {
  const [meterValue, setMeterValue] = useState<string>("1")
  const [footValue, setFootValue] = useState<string>("3.28084")

  const convertMeterToFoot = (meters: number): number => {
    return meters * 3.28084
  }

  const convertFootToMeter = (feet: number): number => {
    return feet / 3.28084
  }

  const handleMeterChange = (value: string) => {
    setMeterValue(value)
    const numValue = Number.parseFloat(value) || 0
    setFootValue(convertMeterToFoot(numValue).toString())
  }

  const handleFootChange = (value: string) => {
    setFootValue(value)
    const numValue = Number.parseFloat(value) || 0
    setMeterValue(convertFootToMeter(numValue).toString())
  }

  const swapValues = () => {
    const tempMeter = meterValue
    const tempFoot = footValue
    setMeterValue(tempFoot)
    setFootValue(tempMeter)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Meter to Foot Converter</h1>
        <p className="text-lg text-muted-foreground">
          Convert between meters (m) and feet (ft) with precision and ease
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conversion Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Meters (m)</label>
              <Input
                type="number"
                value={meterValue}
                onChange={(e) => handleMeterChange(e.target.value)}
                placeholder="Enter meters"
              />
            </div>

            <div className="flex justify-center">
              <Button onClick={swapValues} variant="outline" size="sm">
                ⇄ Swap
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Feet (ft)</label>
              <Input
                type="number"
                value={footValue}
                onChange={(e) => handleFootChange(e.target.value)}
                placeholder="Enter feet"
              />
            </div>
          </div>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-center">
              <strong>{meterValue} meters</strong> = <strong>{footValue} feet</strong>
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">Formula: feet = meters × 3.28084</p>
          </div>
        </CardContent>
      </Card>

      <ConversionTable />
      <GuideArticle />
    </div>
  )
}
