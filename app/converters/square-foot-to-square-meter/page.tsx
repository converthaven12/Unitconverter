import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Square Foot to Square Meter - ft² to m² Converter",
  description:
    "Convert square feet to square meters instantly. Free online ft² to m² area converter with formula and examples. Accurate imperial to metric conversion.",
  keywords: ["square foot to square meter", "ft² to m²", "area converter", "imperial to metric", "floor area"],
  openGraph: {
    title: "Square Foot to Square Meter Converter - ft² to m²",
    description: "Convert square feet to square meters quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function SquareFootToSquareMeterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Square Foot to Square Meter</h1>
            <p className="text-xl text-muted-foreground">Quick ft² to m² area converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Square Feet (ft²)</label>
                <input
                  type="number"
                  placeholder="Enter area in square feet"
                  className="w-full p-3 border rounded-lg"
                  id="sqft-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Square Meters (m²)</label>
                <input
                  type="number"
                  placeholder="Result in square meters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="sqm-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: m² = ft² × 0.092903</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Square Foot to Square Meter Conversion</h2>
            <p>
              Converting square feet to square meters is essential for real estate, construction, and international
              property comparisons.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>m² = ft² × 0.092903</strong>
            </p>
            <p>For example: 1000 ft² × 0.092903 = 92.903 m²</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Square Feet</th>
                  <th className="border border-border p-3 text-left">Square Meters</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">100 ft²</td>
                  <td className="border border-border p-3">9.29 m²</td>
                  <td className="border border-border p-3">Small room</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">500 ft²</td>
                  <td className="border border-border p-3">46.45 m²</td>
                  <td className="border border-border p-3">Studio apartment</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 ft²</td>
                  <td className="border border-border p-3">92.90 m²</td>
                  <td className="border border-border p-3">Small house</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">2000 ft²</td>
                  <td className="border border-border p-3">185.81 m²</td>
                  <td className="border border-border p-3">Family home</td>
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
            const sqftInput = document.getElementById('sqft-input');
            const sqmOutput = document.getElementById('sqm-output');
            
            sqftInput.addEventListener('input', function() {
              const sqft = parseFloat(this.value);
              if (!isNaN(sqft)) {
                const sqm = sqft * 0.092903;
                sqmOutput.value = sqm.toFixed(3);
              } else {
                sqmOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
