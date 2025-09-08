import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert MPG (US) to Liters per 100km - mpg to L/100km Converter",
  description:
    "Convert US miles per gallon to liters per 100 kilometers instantly. Free online mpg to L/100km fuel economy converter.",
  keywords: [
    "mpg to L/100km",
    "fuel economy conversion",
    "miles per gallon",
    "automotive efficiency",
    "fuel consumption",
  ],
}

export const revalidate = 0

export default function MPGUSToLiterPer100kmPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert MPG (US) to Liters per 100km</h1>
            <p className="text-xl text-muted-foreground">Fuel economy conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Miles per Gallon (US)</label>
                <input type="number" placeholder="Enter MPG" className="w-full p-3 border rounded-lg" id="mpg-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Liters per 100km</label>
                <input
                  type="number"
                  placeholder="Result in L/100km"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="l100km-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: L/100km = 235.214 ÷ MPG</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding MPG to L/100km Conversion</h2>
            <p>
              MPG measures distance per fuel volume (higher is better), while L/100km measures fuel volume per distance
              (lower is better). They're inversely related.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>L/100km = 235.214 ÷ MPG (US)</strong>
            </p>
            <p>For example: 235.214 ÷ 30 MPG = 7.84 L/100km</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">MPG (US)</th>
                  <th className="border border-border p-3 text-left">L/100km</th>
                  <th className="border border-border p-3 text-left">Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">15 mpg</td>
                  <td className="border border-border p-3">15.68 L/100km</td>
                  <td className="border border-border p-3">Poor (large SUV)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">25 mpg</td>
                  <td className="border border-border p-3">9.41 L/100km</td>
                  <td className="border border-border p-3">Average car</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">35 mpg</td>
                  <td className="border border-border p-3">6.72 L/100km</td>
                  <td className="border border-border p-3">Good (compact car)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">50 mpg</td>
                  <td className="border border-border p-3">4.70 L/100km</td>
                  <td className="border border-border p-3">Excellent (hybrid)</td>
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
          const mpgInput = document.getElementById('mpg-input');
          const l100kmOutput = document.getElementById('l100km-output');
          
          mpgInput.addEventListener('input', function() {
            const mpg = parseFloat(this.value);
            if (!isNaN(mpg) && mpg > 0) {
              const l100km = 235.214 / mpg;
              l100kmOutput.value = l100km.toFixed(2);
            } else {
              l100kmOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
