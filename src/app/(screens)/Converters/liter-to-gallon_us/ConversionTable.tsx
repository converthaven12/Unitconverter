import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { liters: 1, gallons: 0.264172 },
    { liters: 2, gallons: 0.528344 },
    { liters: 5, gallons: 1.32086 },
    { liters: 10, gallons: 2.64172 },
    { liters: 20, gallons: 5.28344 },
    { liters: 50, gallons: 13.2086 },
    { liters: 100, gallons: 26.4172 },
    { liters: 200, gallons: 52.8344 },
    { liters: 500, gallons: 132.086 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Liter to US Gallon Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Liters (L)</th>
                <th className="border border-border p-2 text-left">US Gallons (gal)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.liters}</td>
                  <td className="border border-border p-2">{conversion.gallons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
