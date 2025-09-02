import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { gb: 1, gib: 0.931323 },
    { gb: 2, gib: 1.862645 },
    { gb: 5, gib: 4.656613 },
    { gb: 10, gib: 9.313226 },
    { gb: 50, gib: 46.56613 },
    { gb: 100, gib: 93.1323 },
    { gb: 500, gib: 465.661 },
    { gb: 1000, gib: 931.323 },
    { gb: 2000, gib: 1862.65 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gigabyte to Gibibyte Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Gigabytes (GB)</th>
                <th className="border border-border p-2 text-left">Gibibytes (GiB)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.gb}</td>
                  <td className="border border-border p-2">{conversion.gib}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
