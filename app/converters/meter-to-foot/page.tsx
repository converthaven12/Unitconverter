import type { Metadata } from "next"
import { UnitConverterSidebar } from "@/components/unit-converter-sidebar"

export const metadata: Metadata = {
  title: "Convert Meters to Feet - M to FT Converter",
  description:
    "Convert meters to feet instantly. Free online M to FT converter with conversion formula and examples. 1 meter = 3.281 feet.",
}

export const revalidate = 0

export default function MeterToFootPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <UnitConverterSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Convert Meters to Feet</h1>
              <p className="text-xl text-muted-foreground">Quick and accurate M to FT conversion tool</p>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Meters</label>
                  <input
                    type="number"
                    placeholder="Enter meters"
                    className="w-full p-3 border rounded-lg"
                    id="meters-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Feet</label>
                  <input
                    type="number"
                    placeholder="Result in feet"
                    className="w-full p-3 border rounded-lg bg-muted"
                    id="feet-output"
                    readOnly
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Feet = Meters × 3.28084</p>
            </div>

            <article className="prose prose-lg max-w-none">
              <h2>Understanding Meter to Foot Conversion</h2>
              <p>
                Converting meters to feet is common in construction, sports, and international measurements. One meter
                equals approximately 3.28084 feet.
              </p>

              <h2>Conversion Formula</h2>
              <p>
                <strong>Feet = Meters × 3.28084</strong>
              </p>

              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Meters</th>
                    <th className="border border-border p-3 text-left">Feet</th>
                    <th className="border border-border p-3 text-left">Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">1 m</td>
                    <td className="border border-border p-3">3.281 ft</td>
                    <td className="border border-border p-3">Basic conversion</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">10 m</td>
                    <td className="border border-border p-3">32.81 ft</td>
                    <td className="border border-border p-3">Room length</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">100 m</td>
                    <td className="border border-border p-3">328.1 ft</td>
                    <td className="border border-border p-3">Track length</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </div>
        </main>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const metersInput = document.getElementById('meters-input');
            const feetOutput = document.getElementById('feet-output');
            
            metersInput.addEventListener('input', function() {
              const meters = parseFloat(this.value);
              if (!isNaN(meters)) {
                const feet = meters * 3.28084;
                feetOutput.value = feet.toFixed(3);
              } else {
                feetOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
