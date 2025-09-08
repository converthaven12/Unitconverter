import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Yard to Meter - yd to m Converter",
  description:
    "Convert yards to meters instantly. Free online yd to m length converter with formula and examples. Accurate imperial to metric conversion.",
  keywords: ["yard to meter", "yd to m", "length converter", "imperial to metric", "distance conversion"],
  openGraph: {
    title: "Yard to Meter Converter - yd to m",
    description: "Convert yards to meters quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function YardToMeterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Yard to Meter</h1>
            <p className="text-xl text-muted-foreground">Quick yd to m length converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Yards (yd)</label>
                <input
                  type="number"
                  placeholder="Enter length in yards"
                  className="w-full p-3 border rounded-lg"
                  id="yard-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Meters (m)</label>
                <input
                  type="number"
                  placeholder="Result in meters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="meter-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: meters = yards × 0.9144</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Yard to Meter Conversion</h2>
            <p>
              Converting yards to meters is useful for sports measurements, fabric calculations, and international
              distance comparisons.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>meters = yards × 0.9144</strong>
            </p>
            <p>For example: 10 yards × 0.9144 = 9.144 meters</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Yards</th>
                  <th className="border border-border p-3 text-left">Meters</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 yd</td>
                  <td className="border border-border p-3">0.9144 m</td>
                  <td className="border border-border p-3">Basic conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 yd</td>
                  <td className="border border-border p-3">91.44 m</td>
                  <td className="border border-border p-3">Football field length</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">220 yd</td>
                  <td className="border border-border p-3">201.17 m</td>
                  <td className="border border-border p-3">Track straightaway</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1760 yd</td>
                  <td className="border border-border p-3">1609.34 m</td>
                  <td className="border border-border p-3">One mile</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const yardInput = document.getElementById('yard-input');
            const meterOutput = document.getElementById('meter-output');
            
            yardInput.addEventListener('input', function() {
              const yards = parseFloat(this.value);
              if (!isNaN(yards)) {
                const meters = yards * 0.9144;
                meterOutput.value = meters.toFixed(4);
              } else {
                meterOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
