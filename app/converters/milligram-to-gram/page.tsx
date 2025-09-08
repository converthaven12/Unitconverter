import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Milligrams to Grams - mg to g Converter",
  description:
    "Convert milligrams to grams instantly. Free online mg to g converter for medical and pharmaceutical measurements. 1000 mg = 1 g.",
  keywords: ["milligram to gram", "mg to g", "medical measurements", "pharmaceutical dosage", "medication conversion"],
}

export const revalidate = 0

export default function MilligramToGramPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Milligrams to Grams</h1>
            <p className="text-xl text-muted-foreground">
              Precise mg to g conversion for medical and pharmaceutical use
            </p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Milligrams (mg)</label>
                <input
                  type="number"
                  placeholder="Enter milligrams"
                  className="w-full p-3 border rounded-lg"
                  id="milligram-input"
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
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: g = mg ÷ 1000</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Milligram to Gram Conversion</h2>
            <p>
              Milligrams and grams are metric units essential for medical dosages, pharmaceutical measurements, and
              precise scientific calculations.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Grams = Milligrams ÷ 1000</strong>
            </p>
            <p>For example: 2500 mg ÷ 1000 = 2.5 g</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Milligrams</th>
                  <th className="border border-border p-3 text-left">Grams</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">500 mg</td>
                  <td className="border border-border p-3">0.5 g</td>
                  <td className="border border-border p-3">Aspirin tablet</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 mg</td>
                  <td className="border border-border p-3">1 g</td>
                  <td className="border border-border p-3">Vitamin C tablet</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">5000 mg</td>
                  <td className="border border-border p-3">5 g</td>
                  <td className="border border-border p-3">Teaspoon of salt</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10000 mg</td>
                  <td className="border border-border p-3">10 g</td>
                  <td className="border border-border p-3">Large supplement</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>How many milligrams are in a gram?</h3>
                <p>There are 1000 milligrams in 1 gram. This is a fixed conversion in the metric system.</p>
              </div>
              <div>
                <h3>Why is this conversion important in medicine?</h3>
                <p>
                  Medical dosages are often prescribed in milligrams but measured in grams, requiring accurate
                  conversion for patient safety.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const milligramInput = document.getElementById('milligram-input');
          const gramOutput = document.getElementById('gram-output');
          
          milligramInput.addEventListener('input', function() {
            const milligrams = parseFloat(this.value);
            if (!isNaN(milligrams)) {
              const grams = milligrams / 1000;
              gramOutput.value = grams.toFixed(6);
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
