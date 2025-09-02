import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { kilometers: 1, miles: 0.621371 },
    { kilometers: 5, miles: 3.10686 },
    { kilometers: 10, miles: 6.21371 },
    { kilometers: 25, miles: 15.5343 },
    { kilometers: 50, miles: 31.0686 },
    { kilometers: 100, miles: 62.1371 },
    { kilometers: 200, miles: 124.274 },
    { kilometers: 500, miles: 310.686 },
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
                <th className="text-left p-2 font-semibold">Kilometers (km)</th>
                <th className="text-left p-2 font-semibold">Miles (mi)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{conversion.kilometers}</td>
                  <td className="p-2">{conversion.miles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
