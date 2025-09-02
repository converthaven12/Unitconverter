import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { psi: 1, bar: 0.0689476 },
    { psi: 5, bar: 0.344738 },
    { psi: 10, bar: 0.689476 },
    { psi: 15, bar: 1.03421 },
    { psi: 20, bar: 1.37895 },
    { psi: 30, bar: 2.06843 },
    { psi: 50, bar: 3.44738 },
    { psi: 100, bar: 6.89476 },
    { psi: 200, bar: 13.7895 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>PSI to Bar Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">PSI (psi)</th>
                <th className="border border-border p-2 text-left">Bar (bar)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.psi}</td>
                  <td className="border border-border p-2">{conversion.bar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
