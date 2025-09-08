import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Ounce to Gram - oz to g Converter",
  description:
    "Convert ounces to grams instantly. Free online oz to g weight converter with formula and examples. Accurate imperial to metric conversion.",
  keywords: ["ounce to gram", "oz to g", "weight converter", "imperial to metric", "mass conversion"],
  openGraph: {
    title: "Ounce to Gram Converter - oz to g",
    description: "Convert ounces to grams quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function OunceToGramPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Ounce to Gram</h1>
            <p className="text-xl text-muted-foreground">Quick oz to g weight converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ounces (oz)</label>
                <input
                  type="number"
                  placeholder="Enter weight in ounces"
                  className="w-full p-3 border rounded-lg"
                  id="ounce-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Grams (g)</label>
                <input
                  type="number"
                  placeholder="Result in grams"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="gram-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: grams = ounces × 28.3495</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Ounce to Gram Conversion</h2>
            <p>
              Converting ounces to grams is essential for cooking, baking, nutrition tracking, and scientific
              measurements where precision matters.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>grams = ounces × 28.3495</strong>
            </p>
            <p>For example: 4 oz × 28.3495 = 113.398 grams</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Ounces</th>
                  <th className="border border-border p-3 text-left">Grams</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 oz</td>
                  <td className="border border-border p-3">28.35 g</td>
                  <td className="border border-border p-3">Basic conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">2 oz</td>
                  <td className="border border-border p-3">56.70 g</td>
                  <td className="border border-border p-3">Small portions</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">4 oz</td>
                  <td className="border border-border p-3">113.40 g</td>
                  <td className="border border-border p-3">Quarter pound</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">8 oz</td>
                  <td className="border border-border p-3">226.80 g</td>
                  <td className="border border-border p-3">Half pound</td>
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
            const ounceInput = document.getElementById('ounce-input');
            const gramOutput = document.getElementById('gram-output');
            
            ounceInput.addEventListener('input', function() {
              const ounces = parseFloat(this.value);
              if (!isNaN(ounces)) {
                const grams = ounces * 28.3495;
                gramOutput.value = grams.toFixed(3);
              } else {
                gramOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
