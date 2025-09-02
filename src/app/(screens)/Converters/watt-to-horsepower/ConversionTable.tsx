import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { watts: 100, hp: 0.134 },
    { watts: 500, hp: 0.671 },
    { watts: 746, hp: 1.0 },
    { watts: 1000, hp: 1.341 },
    { watts: 1500, hp: 2.012 },
    { watts: 2000, hp: 2.682 },
    { watts: 5000, hp: 6.706 },
    { watts: 10000, hp: 13.41 },
    { watts: 50000, hp: 67.06 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Watt to Horsepower Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Watts (W)</th>
                <th className="border border-border p-2 text-left">Horsepower (hp)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.watts}</td>
                  <td className="border border-border p-2">{conversion.hp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
