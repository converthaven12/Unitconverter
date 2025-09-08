import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Grams to Pounds - g to lb Converter",
  description:
    "Convert grams to pounds instantly. Free online g to lb converter for cooking and weight measurements. 453.592 g = 1 lb.",
  keywords: ["gram to pound", "g to lb", "cooking conversion", "recipe measurements", "weight conversion"],
}

export const revalidate = 0

export default function GramToPoundPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Grams to Pounds</h1>
            <p className="text-xl text-muted-foreground">Essential g to lb converter for cooking and measurements</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Grams (g)</label>
                <input
                  type="number"
                  placeholder="Enter grams"
                  className="w-full p-3 border rounded-lg"
                  id="gram-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pounds (lb)</label>
                <input
                  type="number"
                  placeholder="Result in pounds"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="pound-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: lb = g ÷ 453.592</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Gram to Pound Conversion</h2>
            <p>
              Converting grams to pounds is essential for cooking, baking, and everyday weight measurements when working
              between metric and imperial systems.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Pounds = Grams ÷ 453.592</strong>
            </p>
            <p>For example: 1000 g ÷ 453.592 = 2.205 lb</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Grams</th>
                  <th className="border border-border p-3 text-left">Pounds</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">100 g</td>
                  <td className="border border-border p-3">0.22 lb</td>
                  <td className="border border-border p-3">Small ingredient</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">250 g</td>
                  <td className="border border-border p-3">0.55 lb</td>
                  <td className="border border-border p-3">Butter stick</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">500 g</td>
                  <td className="border border-border p-3">1.10 lb</td>
                  <td className="border border-border p-3">Flour package</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 g</td>
                  <td className="border border-border p-3">2.20 lb</td>
                  <td className="border border-border p-3">Sugar bag</td>
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
          const gramInput = document.getElementById('gram-input');
          const poundOutput = document.getElementById('pound-output');
          
          gramInput.addEventListener('input', function() {
            const grams = parseFloat(this.value);
            if (!isNaN(grams)) {
              const pounds = grams / 453.592;
              poundOutput.value = pounds.toFixed(4);
            } else {
              poundOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
