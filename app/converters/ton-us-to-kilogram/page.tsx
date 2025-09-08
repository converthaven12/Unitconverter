import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert US Tons to Kilograms - ton to kg Converter",
  description:
    "Convert US tons to kilograms instantly. Free online US ton to kg converter for heavy weight measurements. 1 US ton = 907.185 kg.",
  keywords: ["US ton to kilogram", "ton to kg", "heavy weight conversion", "industrial measurements"],
}

export const revalidate = 0

export default function TonUSToKilogramPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert US Tons to Kilograms</h1>
            <p className="text-xl text-muted-foreground">Heavy weight conversion for industrial use</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">US Tons</label>
                <input
                  type="number"
                  placeholder="Enter US tons"
                  className="w-full p-3 border rounded-lg"
                  id="ton-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Kilograms (kg)</label>
                <input
                  type="number"
                  placeholder="Result in kilograms"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="kilogram-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: kg = US ton × 907.185</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding US Ton to Kilogram Conversion</h2>
            <p>
              The US ton (short ton) is commonly used in American industry and commerce for measuring heavy weights like
              vehicles, cargo, and materials.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Kilograms = US Tons × 907.185</strong>
            </p>
            <p>For example: 2 US tons × 907.185 = 1814.37 kg</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">US Tons</th>
                  <th className="border border-border p-3 text-left">Kilograms</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">0.5 ton</td>
                  <td className="border border-border p-3">453.6 kg</td>
                  <td className="border border-border p-3">Small car</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1 ton</td>
                  <td className="border border-border p-3">907.2 kg</td>
                  <td className="border border-border p-3">Compact car</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">2 ton</td>
                  <td className="border border-border p-3">1814.4 kg</td>
                  <td className="border border-border p-3">SUV</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">5 ton</td>
                  <td className="border border-border p-3">4535.9 kg</td>
                  <td className="border border-border p-3">Large truck</td>
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
          const tonInput = document.getElementById('ton-input');
          const kilogramOutput = document.getElementById('kilogram-output');
          
          tonInput.addEventListener('input', function() {
            const tons = parseFloat(this.value);
            if (!isNaN(tons)) {
              const kilograms = tons * 907.185;
              kilogramOutput.value = kilograms.toFixed(2);
            } else {
              kilogramOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
