import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Kilograms to Pounds - KG to LB Converter",
  description:
    "Convert kilograms to pounds instantly. Free online KG to LB converter with conversion formula and examples. 1 kg = 2.205 pounds.",
}

export const revalidate = 0

export default function KgToLbPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Kilograms to Pounds</h1>
            <p className="text-xl text-muted-foreground">Quick and accurate KG to LB conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Kilograms</label>
                <input
                  type="number"
                  placeholder="Enter kilograms"
                  className="w-full p-3 border rounded-lg"
                  id="kg-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pounds</label>
                <input
                  type="number"
                  placeholder="Result in pounds"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="lb-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Pounds = Kilograms × 2.20462</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Kilogram to Pound Conversion</h2>
            <p>
              Converting kilograms to pounds is essential for international weight measurements, fitness tracking, and
              everyday use between metric and imperial systems.
            </p>
            <p>
              The conversion factor is: 1 kilogram equals approximately 2.20462 pounds. This means to convert kg to lb,
              you multiply by 2.20462.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Pounds = Kilograms × 2.20462</strong>
            </p>
            <p>For example: 5 kg × 2.20462 = 11.023 pounds</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Kilograms</th>
                  <th className="border border-border p-3 text-left">Pounds</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 kg</td>
                  <td className="border border-border p-3">2.205 lb</td>
                  <td className="border border-border p-3">Small weights</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">5 kg</td>
                  <td className="border border-border p-3">11.023 lb</td>
                  <td className="border border-border p-3">Bag of flour</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 kg</td>
                  <td className="border border-border p-3">22.046 lb</td>
                  <td className="border border-border p-3">Medium luggage</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">70 kg</td>
                  <td className="border border-border p-3">154.32 lb</td>
                  <td className="border border-border p-3">Average adult</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>How do I convert 75 kg to pounds?</h3>
                <p>Multiply 75 by 2.20462: 75 × 2.20462 = 165.35 pounds</p>
              </div>
              <div>
                <h3>Is there a quick mental math trick?</h3>
                <p>For a rough estimate, multiply by 2.2. For example, 50 kg × 2.2 = 110 lb (actual: 110.23 lb)</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const kgInput = document.getElementById('kg-input');
            const lbOutput = document.getElementById('lb-output');
            
            kgInput.addEventListener('input', function() {
              const kg = parseFloat(this.value);
              if (!isNaN(kg)) {
                const lb = kg * 2.20462;
                lbOutput.value = lb.toFixed(3);
              } else {
                lbOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
