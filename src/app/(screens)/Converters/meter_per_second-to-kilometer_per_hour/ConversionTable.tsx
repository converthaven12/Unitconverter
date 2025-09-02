import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { mps: 1, kmh: 3.6 },
    { mps: 2, kmh: 7.2 },
    { mps: 5, kmh: 18 },
    { mps: 10, kmh: 36 },
    { mps: 15, kmh: 54 },
    { mps: 20, kmh: 72 },
    { mps: 25, kmh: 90 },
    { mps: 30, kmh: 108 },
    { mps: 50, kmh: 180 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>m/s to km/h Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">m/s</th>
                <th className="border border-border p-2 text-left">km/h</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.mps}</td>
                  <td className="border border-border p-2">{conversion.kmh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
