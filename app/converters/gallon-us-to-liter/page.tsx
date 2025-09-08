import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert US Gallon to Liter - gal to L Converter",
  description:
    "Convert US gallons to liters instantly. Free online gal to L volume converter with formula and examples. Accurate imperial to metric conversion.",
  keywords: ["gallon to liter", "gal to L", "volume converter", "imperial to metric", "fuel conversion"],
  openGraph: {
    title: "US Gallon to Liter Converter - gal to L",
    description: "Convert US gallons to liters quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function GallonUSToLiterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert US Gallon to Liter</h1>
            <p className="text-xl text-muted-foreground">Quick gal to L volume converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">US Gallons (gal)</label>
                <input
                  type="number"
                  placeholder="Enter volume in gallons"
                  className="w-full p-3 border rounded-lg"
                  id="gallon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Liters (L)</label>
                <input
                  type="number"
                  placeholder="Result in liters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="liter-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: liters = gallons × 3.78541</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>US Gallon to Liter Conversion</h2>
            <p>
              Converting US gallons to liters is essential for fuel calculations, cooking measurements, and
              international volume comparisons.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>liters = gallons × 3.78541</strong>
            </p>
            <p>For example: 5 gallons × 3.78541 = 18.927 liters</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">US Gallons</th>
                  <th className="border border-border p-3 text-left">Liters</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 gal</td>
                  <td className="border border-border p-3">3.785 L</td>
                  <td className="border border-border p-3">Basic conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">5 gal</td>
                  <td className="border border-border p-3">18.927 L</td>
                  <td className="border border-border p-3">Small fuel tank</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">15 gal</td>
                  <td className="border border-border p-3">56.781 L</td>
                  <td className="border border-border p-3">Car fuel tank</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">20 gal</td>
                  <td className="border border-border p-3">75.708 L</td>
                  <td className="border border-border p-3">Large fuel tank</td>
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
            const gallonInput = document.getElementById('gallon-input');
            const literOutput = document.getElementById('liter-output');
            
            gallonInput.addEventListener('input', function() {
              const gallons = parseFloat(this.value);
              if (!isNaN(gallons)) {
                const liters = gallons * 3.78541;
                literOutput.value = liters.toFixed(3);
              } else {
                literOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
