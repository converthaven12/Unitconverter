import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Millimeter to Inch - mm to in Converter",
  description:
    "Convert millimeters to inches instantly. Free online mm to in length converter with formula and examples. Accurate metric to imperial conversion.",
  keywords: ["millimeter to inch", "mm to in", "length converter", "metric to imperial", "precision measurement"],
  openGraph: {
    title: "Millimeter to Inch Converter - mm to in",
    description: "Convert millimeters to inches quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function MillimeterToInchPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Millimeter to Inch</h1>
            <p className="text-xl text-muted-foreground">Precise mm to in length converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Millimeters (mm)</label>
                <input
                  type="number"
                  placeholder="Enter length in millimeters"
                  className="w-full p-3 border rounded-lg"
                  id="mm-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Inches (in)</label>
                <input
                  type="number"
                  placeholder="Result in inches"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="inch-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: inches = millimeters ÷ 25.4</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Millimeter to Inch Conversion</h2>
            <p>
              Converting millimeters to inches is essential for precision work, engineering, manufacturing, and when
              working with international specifications.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>inches = millimeters ÷ 25.4</strong>
            </p>
            <p>For example: 50.8 mm ÷ 25.4 = 2 inches</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Millimeters</th>
                  <th className="border border-border p-3 text-left">Inches</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">25.4 mm</td>
                  <td className="border border-border p-3">1 in</td>
                  <td className="border border-border p-3">Exact conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">12.7 mm</td>
                  <td className="border border-border p-3">0.5 in</td>
                  <td className="border border-border p-3">Half inch</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">6.35 mm</td>
                  <td className="border border-border p-3">0.25 in</td>
                  <td className="border border-border p-3">Quarter inch</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">3.175 mm</td>
                  <td className="border border-border p-3">0.125 in</td>
                  <td className="border border-border p-3">Eighth inch</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>How many millimeters are in an inch?</h3>
                <p>
                  There are exactly 25.4 millimeters in one inch. This is the internationally accepted conversion
                  factor.
                </p>
              </div>
              <div>
                <h3>Why is precision important in mm to inch conversion?</h3>
                <p>
                  In manufacturing and engineering, small differences can be critical. Using the exact conversion factor
                  ensures accuracy in technical applications.
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
            const mmInput = document.getElementById('mm-input');
            const inchOutput = document.getElementById('inch-output');
            
            mmInput.addEventListener('input', function() {
              const mm = parseFloat(this.value);
              if (!isNaN(mm)) {
                const inches = mm / 25.4;
                inchOutput.value = inches.toFixed(6);
              } else {
                inchOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
