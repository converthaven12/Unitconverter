import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Feet to Meters - FT to M Converter",
  description:
    "Convert feet to meters instantly. Free online FT to M converter with conversion formula and examples. 1 foot = 0.3048 meters.",
}

export const revalidate = 0

export default function FootToMeterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Feet to Meters</h1>
            <p className="text-xl text-muted-foreground">Quick and accurate FT to M conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Feet</label>
                <input
                  type="number"
                  placeholder="Enter feet"
                  className="w-full p-3 border rounded-lg"
                  id="feet-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Meters</label>
                <input
                  type="number"
                  placeholder="Result in meters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="meters-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Meters = Feet × 0.3048</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Foot to Meter Conversion</h2>
            <p>
              Converting feet to meters is essential for international construction, engineering, and scientific
              applications. One foot equals exactly 0.3048 meters.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Meters = Feet × 0.3048</strong>
            </p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Feet</th>
                  <th className="border border-border p-3 text-left">Meters</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 ft</td>
                  <td className="border border-border p-3">0.305 m</td>
                  <td className="border border-border p-3">Basic conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 ft</td>
                  <td className="border border-border p-3">3.048 m</td>
                  <td className="border border-border p-3">Room height</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 ft</td>
                  <td className="border border-border p-3">30.48 m</td>
                  <td className="border border-border p-3">Building height</td>
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
            const feetInput = document.getElementById('feet-input');
            const metersOutput = document.getElementById('meters-output');
            
            feetInput.addEventListener('input', function() {
              const feet = parseFloat(this.value);
              if (!isNaN(feet)) {
                const meters = feet * 0.3048;
                metersOutput.value = meters.toFixed(4);
              } else {
                metersOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
