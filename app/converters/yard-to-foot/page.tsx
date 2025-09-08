import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Yards to Feet - yd to ft Converter",
  description:
    "Convert yards to feet instantly. Free online yd to ft converter for construction and sports measurements. 1 yard = 3 feet.",
  keywords: ["yard to foot", "yd to ft", "construction measurements", "sports field dimensions"],
}

export const revalidate = 0

export default function YardToFootPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Yards to Feet</h1>
            <p className="text-xl text-muted-foreground">Quick yd to ft conversion for construction and sports</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Yards (yd)</label>
                <input
                  type="number"
                  placeholder="Enter yards"
                  className="w-full p-3 border rounded-lg"
                  id="yard-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Feet (ft)</label>
                <input
                  type="number"
                  placeholder="Result in feet"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="foot-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: ft = yd × 3</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Yard to Foot Conversion</h2>
            <p>
              Yards and feet are imperial units commonly used in construction, sports, and everyday measurements in the
              United States.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Feet = Yards × 3</strong>
            </p>
            <p>For example: 5 yd × 3 = 15 ft</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Yards</th>
                  <th className="border border-border p-3 text-left">Feet</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 yd</td>
                  <td className="border border-border p-3">3 ft</td>
                  <td className="border border-border p-3">Basic unit</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 yd</td>
                  <td className="border border-border p-3">30 ft</td>
                  <td className="border border-border p-3">First down (football)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">50 yd</td>
                  <td className="border border-border p-3">150 ft</td>
                  <td className="border border-border p-3">Half football field</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 yd</td>
                  <td className="border border-border p-3">300 ft</td>
                  <td className="border border-border p-3">Football field length</td>
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
          const footOutput = document.getElementById('foot-output');
          
          yardInput.addEventListener('input', function() {
            const yards = parseFloat(this.value);
            if (!isNaN(yards)) {
              const feet = yards * 3;
              footOutput.value = feet.toFixed(2);
            } else {
              footOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
