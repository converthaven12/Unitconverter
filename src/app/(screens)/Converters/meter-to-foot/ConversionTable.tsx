import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { meters: 1, feet: 3.28084 },
    { meters: 2, feet: 6.56168 },
    { meters: 3, feet: 9.84252 },
    { meters: 5, feet: 16.4042 },
    { meters: 10, feet: 32.8084 },
    { meters: 20, feet: 65.6168 },
    { meters: 50, feet: 164.042 },
    { meters: 100, feet: 328.084 },
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Quick Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-semibold">Meters (m)</th>
                <th className="text-left p-2 font-semibold">Feet (ft)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="p-2">{conversion.meters}</td>
                  <td className="p-2">{conversion.feet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
