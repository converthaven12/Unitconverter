import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Inches to Centimeters - IN to CM Converter",
  description:
    "Convert inches to centimeters instantly. Free online IN to CM converter with conversion formula and examples. 1 inch = 2.54 centimeters.",
}

export const revalidate = 0

export default function InchToCentimeterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Inches to Centimeters</h1>
            <p className="text-xl text-muted-foreground">Quick and accurate IN to CM conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Inches</label>
                <input
                  type="number"
                  placeholder="Enter inches"
                  className="w-full p-3 border rounded-lg"
                  id="inches-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Centimeters</label>
                <input
                  type="number"
                  placeholder="Result in centimeters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="cm-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Centimeters = Inches × 2.54</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding the Inch to Centimeter Conversion</h2>
            <p>
              Converting inches to centimeters is essential for international measurements and working between imperial
              and metric systems. The conversion is straightforward: 1 inch equals exactly 2.54 centimeters.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Centimeters = Inches × 2.54</strong>
            </p>
            <p>For example: 5 inches × 2.54 = 12.7 centimeters</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Inches</th>
                  <th className="border border-border p-3 text-left">Centimeters</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 in</td>
                  <td className="border border-border p-3">2.54 cm</td>
                  <td className="border border-border p-3">Exact conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">6 in</td>
                  <td className="border border-border p-3">15.24 cm</td>
                  <td className="border border-border p-3">Phone screen</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">12 in</td>
                  <td className="border border-border p-3">30.48 cm</td>
                  <td className="border border-border p-3">1 foot</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>How do I convert 8 inches to centimeters?</h3>
                <p>Multiply 8 by 2.54: 8 × 2.54 = 20.32 centimeters</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const inchesInput = document.getElementById('inches-input');
            const cmOutput = document.getElementById('cm-output');
            
            inchesInput.addEventListener('input', function() {
              const inches = parseFloat(this.value);
              if (!isNaN(inches)) {
                const cm = inches * 2.54;
                cmOutput.value = cm.toFixed(4);
              } else {
                cmOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
