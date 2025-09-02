"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientDegreeToRadian() {
  const [degrees, setDegrees] = useState<string>("")
  const [radians, setRadians] = useState<string>("")

  const convertDegToRad = (deg: number): number => {
    return (deg * Math.PI) / 180
  }

  const convertRadToDeg = (rad: number): number => {
    return (rad * 180) / Math.PI
  }

  const handleDegreeChange = (value: string) => {
    setDegrees(value)
    if (value && !isNaN(Number(value))) {
      const result = convertDegToRad(Number(value))
      setRadians(result.toFixed(6))
    } else {
      setRadians("")
    }
  }

  const handleRadianChange = (value: string) => {
    setRadians(value)
    if (value && !isNaN(Number(value))) {
      const result = convertRadToDeg(Number(value))
      setDegrees(result.toFixed(6))
    } else {
      setDegrees("")
    }
  }

  const swapValues = () => {
    const tempDeg = degrees
    setDegrees(radians)
    setRadians(tempDeg)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Degrees to Radians</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Degrees (°)</label>
            <Input
              type="number"
              value={degrees}
              onChange={(e) => handleDegreeChange(e.target.value)}
              placeholder="Enter degrees"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Radians (rad)</label>
            <Input
              type="number"
              value={radians}
              onChange={(e) => handleRadianChange(e.target.value)}
              placeholder="Enter radians"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> radians = degrees × (π ÷ 180)
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
