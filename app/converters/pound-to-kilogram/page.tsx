import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Pounds to Kilograms - LB to KG Converter",
  description:
    "Convert pounds to kilograms instantly. Free online LB to KG converter with conversion formula and examples. 1 pound = 0.453 kilograms.",
}

export const revalidate = 0

export default function PoundToKilogramPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Pounds to Kilograms</h1>
            <p className="text-xl text-muted-foreground">Quick and accurate LB to KG conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pounds</label>
                <input
                  type="number"
                  placeholder="Enter pounds"
                  className="w-full p-3 border rounded-lg"
                  id="lb-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Kilograms</label>
                <input
                  type="number"
                  placeholder="Result in kilograms"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="kg-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Kilograms = Pounds × 0.453592</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Pound to Kilogram Conversion</h2>
            <p>
              Converting pounds to kilograms is essential for international weight measurements, fitness tracking, and
              scientific applications. One pound equals approximately 0.453592 kilograms.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Kilograms = Pounds × 0.453592</strong>
            </p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Pounds</th>
                  <th className="border border-border p-3 text-left">Kilograms</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 lb</td>
                  <td className="border border-border p-3">0.454 kg</td>
                  <td className="border border-border p-3">Basic conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">150 lb</td>
                  <td className="border border-border p-3">68.04 kg</td>
                  <td className="border border-border p-3">Average adult</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">200 lb</td>
                  <td className="border border-border p-3">90.72 kg</td>
                  <td className="border border-border p-3">Heavy weight</td>
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
            const lbInput = document.getElementById('lb-input');
            const kgOutput = document.getElementById('kg-output');
            
            lbInput.addEventListener('input', function() {
              const lb = parseFloat(this.value);
              if (!isNaN(lb)) {
                const kg = lb * 0.453592;
                kgOutput.value = kg.toFixed(3);
              } else {
                kgOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
