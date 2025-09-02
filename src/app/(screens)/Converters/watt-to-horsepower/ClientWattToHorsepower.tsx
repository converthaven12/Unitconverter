"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientWattToHorsepower() {
  const [watts, setWatts] = useState<string>("")
  const [horsepower, setHorsepower] = useState<string>("")

  const convertWToHp = (w: number): number => {
    return w / 745.7
  }

  const convertHpToW = (hp: number): number => {
    return hp * 745.7
  }

  const handleWattChange = (value: string) => {
    setWatts(value)
    if (value && !isNaN(Number(value))) {
      const result = convertWToHp(Number(value))
      setHorsepower(result.toFixed(6))
    } else {
      setHorsepower("")
    }
  }

  const handleHorsepowerChange = (value: string) => {
    setHorsepower(value)
    if (value && !isNaN(Number(value))) {
      const result = convertHpToW(Number(value))
      setWatts(result.toFixed(6))
    } else {
      setWatts("")
    }
  }

  const swapValues = () => {
    const tempW = watts
    setWatts(horsepower)
    setHorsepower(tempW)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Watts to Horsepower</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Watts (W)</label>
            <Input
              type="number"
              value={watts}
              onChange={(e) => handleWattChange(e.target.value)}
              placeholder="Enter watts"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Horsepower (hp)</label>
            <Input
              type="number"
              value={horsepower}
              onChange={(e) => handleHorsepowerChange(e.target.value)}
              placeholder="Enter horsepower"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> horsepower = watts ÷ 745.7
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
