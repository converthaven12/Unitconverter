"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientMeterPerSecondToKilometerPerHour() {
  const [mps, setMps] = useState<string>("")
  const [kmh, setKmh] = useState<string>("")

  const convertMpsToKmh = (mpsValue: number): number => {
    return mpsValue * 3.6
  }

  const convertKmhToMps = (kmhValue: number): number => {
    return kmhValue / 3.6
  }

  const handleMpsChange = (value: string) => {
    setMps(value)
    if (value && !isNaN(Number(value))) {
      const result = convertMpsToKmh(Number(value))
      setKmh(result.toFixed(6))
    } else {
      setKmh("")
    }
  }

  const handleKmhChange = (value: string) => {
    setKmh(value)
    if (value && !isNaN(Number(value))) {
      const result = convertKmhToMps(Number(value))
      setMps(result.toFixed(6))
    } else {
      setMps("")
    }
  }

  const swapValues = () => {
    const tempMps = mps
    setMps(kmh)
    setKmh(tempMps)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert m/s to km/h</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Meters per Second (m/s)</label>
            <Input
              type="number"
              value={mps}
              onChange={(e) => handleMpsChange(e.target.value)}
              placeholder="Enter m/s"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Kilometers per Hour (km/h)</label>
            <Input
              type="number"
              value={kmh}
              onChange={(e) => handleKmhChange(e.target.value)}
              placeholder="Enter km/h"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> km/h = m/s × 3.6
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
