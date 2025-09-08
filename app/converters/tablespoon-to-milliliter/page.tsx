import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Tablespoons to Milliliters - tbsp to mL Converter",
  description:
    "Convert tablespoons to milliliters instantly. Free online tbsp to mL converter for cooking and recipes. 1 tbsp = 14.787 mL.",
  keywords: ["tablespoon to milliliter", "tbsp to mL", "cooking conversion", "recipe measurements", "small volumes"],
}

export const revalidate = 0

export default function TablespoonToMilliliterPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Tablespoons to Milliliters</h1>
            <p className="text-xl text-muted-foreground">Precise tbsp to mL converter for cooking</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tablespoons (tbsp)</label>
                <input
                  type="number"
                  placeholder="Enter tablespoons"
                  className="w-full p-3 border rounded-lg"
                  id="tablespoon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Milliliters (mL)</label>
                <input
                  type="number"
                  placeholder="Result in milliliters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="milliliter-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: mL = tbsp × 14.787</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Tablespoon to Milliliter Conversion</h2>
            <p>
              Converting tablespoons to milliliters is essential for precise cooking and baking, especially when
              following international recipes.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Milliliters = Tablespoons × 14.787</strong>
            </p>
            <p>For example: 3 tbsp × 14.787 = 44.36 mL</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Tablespoons</th>
                  <th className="border border-border p-3 text-left">Milliliters</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 tbsp</td>
                  <td className="border border-border p-3">14.8 mL</td>
                  <td className="border border-border p-3">Oil, vinegar</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">2 tbsp</td>
                  <td className="border border-border p-3">29.6 mL</td>
                  <td className="border border-border p-3">Butter, honey</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">3 tbsp</td>
                  <td className="border border-border p-3">44.4 mL</td>
                  <td className="border border-border p-3">Sauce, dressing</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">4 tbsp</td>
                  <td className="border border-border p-3">59.1 mL</td>
                  <td className="border border-border p-3">1/4 cup equivalent</td>
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
          const tablespoonInput = document.getElementById('tablespoon-input');
          const milliliterOutput = document.getElementById('milliliter-output');
          
          tablespoonInput.addEventListener('input', function() {
            const tablespoons = parseFloat(this.value);
            if (!isNaN(tablespoons)) {
              const milliliters = tablespoons * 14.787;
              milliliterOutput.value = milliliters.toFixed(2);
            } else {
              milliliterOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
