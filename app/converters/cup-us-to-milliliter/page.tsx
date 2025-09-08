import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert US Cups to Milliliters - cup to mL Converter",
  description:
    "Convert US cups to milliliters instantly. Free online cup to mL converter for baking and cooking. 1 US cup = 236.588 mL.",
  keywords: ["cup to milliliter", "cup to mL", "baking conversion", "cooking measurements", "recipe conversion"],
}

export const revalidate = 0

export default function CupUSToMilliliterPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert US Cups to Milliliters</h1>
            <p className="text-xl text-muted-foreground">Essential cup to mL converter for baking</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">US Cups</label>
                <input type="number" placeholder="Enter cups" className="w-full p-3 border rounded-lg" id="cup-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Milliliters (mL)</label>
                <input
                  type="number"
                  placeholder="Result in milliliters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="milliliter-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: mL = cups × 236.588</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Cup to Milliliter Conversion</h2>
            <p>
              Converting US cups to milliliters is crucial for following international recipes and precise baking
              measurements.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Milliliters = US Cups × 236.588</strong>
            </p>
            <p>For example: 2 cups × 236.588 = 473.18 mL</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">US Cups</th>
                  <th className="border border-border p-3 text-left">Milliliters</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1/4 cup</td>
                  <td className="border border-border p-3">59.1 mL</td>
                  <td className="border border-border p-3">Small ingredient</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1/2 cup</td>
                  <td className="border border-border p-3">118.3 mL</td>
                  <td className="border border-border p-3">Medium ingredient</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1 cup</td>
                  <td className="border border-border p-3">236.6 mL</td>
                  <td className="border border-border p-3">Standard measure</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">2 cups</td>
                  <td className="border border-border p-3">473.2 mL</td>
                  <td className="border border-border p-3">Large ingredient</td>
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
          const cupInput = document.getElementById('cup-input');
          const milliliterOutput = document.getElementById('milliliter-output');
          
          cupInput.addEventListener('input', function() {
            const cups = parseFloat(this.value);
            if (!isNaN(cups)) {
              const milliliters = cups * 236.588;
              milliliterOutput.value = milliliters.toFixed(2);
            } else {
              milliliterOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
