import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { feet: 1, meters: 0.3048 },
    { feet: 2, meters: 0.6096 },
    { feet: 3, meters: 0.9144 },
    { feet: 5, meters: 1.524 },
    { feet: 10, meters: 3.048 },
    { feet: 20, meters: 6.096 },
    { feet: 50, meters: 15.24 },
    { feet: 100, meters: 30.48 },
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
                <th className="text-left p-2 font-semibold">Feet (ft)</th>
                <th className="text-left p-2 font-semibold">Meters (m)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{conversion.feet}</td>
                  <td className="p-2">{conversion.meters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
