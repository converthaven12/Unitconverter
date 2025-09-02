import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { cm: 1, inch: 0.393701 },
    { cm: 5, inch: 1.968504 },
    { cm: 10, inch: 3.937008 },
    { cm: 15, inch: 5.905512 },
    { cm: 20, inch: 7.874016 },
    { cm: 25, inch: 9.84252 },
    { cm: 30, inch: 11.811024 },
    { cm: 50, inch: 19.68504 },
    { cm: 100, inch: 39.37008 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Centimeter to Inch Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Centimeters (cm)</th>
                <th className="border border-border p-2 text-left">Inches (in)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.cm}</td>
                  <td className="border border-border p-2">{conversion.inch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
