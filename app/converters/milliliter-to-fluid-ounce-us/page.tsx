import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Milliliters to Fluid Ounces (US) - mL to fl oz Converter",
  description:
    "Convert milliliters to US fluid ounces instantly. Free online mL to fl oz converter for cooking and recipes. 29.5735 mL = 1 fl oz.",
  keywords: ["milliliter to fluid ounce", "mL to fl oz", "cooking conversion", "recipe measurements", "liquid volume"],
}

export const revalidate = 0

export default function MilliliterToFluidOunceUSPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Milliliters to Fluid Ounces (US)</h1>
            <p className="text-xl text-muted-foreground">Essential mL to fl oz converter for cooking</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Milliliters (mL)</label>
                <input
                  type="number"
                  placeholder="Enter milliliters"
                  className="w-full p-3 border rounded-lg"
                  id="milliliter-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fluid Ounces (fl oz US)</label>
                <input
                  type="number"
                  placeholder="Result in fluid ounces"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="fluidounce-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: fl oz = mL ÷ 29.5735</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Milliliter to Fluid Ounce Conversion</h2>
            <p>
              Converting milliliters to fluid ounces is essential for cooking, baking, and following recipes that use
              different measurement systems.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Fluid Ounces = Milliliters ÷ 29.5735</strong>
            </p>
            <p>For example: 250 mL ÷ 29.5735 = 8.45 fl oz</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Milliliters</th>
                  <th className="border border-border p-3 text-left">Fluid Ounces</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">15 mL</td>
                  <td className="border border-border p-3">0.51 fl oz</td>
                  <td className="border border-border p-3">Tablespoon</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">30 mL</td>
                  <td className="border border-border p-3">1.01 fl oz</td>
                  <td className="border border-border p-3">Shot glass</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">250 mL</td>
                  <td className="border border-border p-3">8.45 fl oz</td>
                  <td className="border border-border p-3">Cup</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">500 mL</td>
                  <td className="border border-border p-3">16.91 fl oz</td>
                  <td className="border border-border p-3">Water bottle</td>
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
          const milliliterInput = document.getElementById('milliliter-input');
          const fluidounceOutput = document.getElementById('fluidounce-output');
          
          milliliterInput.addEventListener('input', function() {
            const milliliters = parseFloat(this.value);
            if (!isNaN(milliliters)) {
              const fluidounces = milliliters / 29.5735;
              fluidounceOutput.value = fluidounces.toFixed(3);
            } else {
              fluidounceOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
