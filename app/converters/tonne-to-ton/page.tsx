import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Tonne to Ton - t to ton Converter",
  description:
    "Convert metric tonnes to US tons instantly. Free online tonne to ton weight converter with formula and examples. Accurate metric to imperial conversion.",
  keywords: ["tonne to ton", "metric ton to US ton", "weight converter", "heavy weight conversion", "shipping weight"],
  openGraph: {
    title: "Tonne to Ton Converter - t to ton",
    description: "Convert metric tonnes to US tons quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function TonneToTonPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Tonne to Ton</h1>
            <p className="text-xl text-muted-foreground">Metric tonne to US ton converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tonnes (t)</label>
                <input
                  type="number"
                  placeholder="Enter weight in tonnes"
                  className="w-full p-3 border rounded-lg"
                  id="tonne-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">US Tons (ton)</label>
                <input
                  type="number"
                  placeholder="Result in US tons"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="ton-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: US tons = tonnes × 1.10231</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Tonne to Ton Conversion</h2>
            <p>
              Converting metric tonnes to US tons is crucial for international shipping, cargo calculations, and
              industrial weight measurements.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>US tons = tonnes × 1.10231</strong>
            </p>
            <p>For example: 5 tonnes × 1.10231 = 5.51155 US tons</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Tonnes</th>
                  <th className="border border-border p-3 text-left">US Tons</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 t</td>
                  <td className="border border-border p-3">1.102 ton</td>
                  <td className="border border-border p-3">Basic conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">5 t</td>
                  <td className="border border-border p-3">5.512 ton</td>
                  <td className="border border-border p-3">Small truck load</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">20 t</td>
                  <td className="border border-border p-3">22.046 ton</td>
                  <td className="border border-border p-3">Container weight</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 t</td>
                  <td className="border border-border p-3">110.231 ton</td>
                  <td className="border border-border p-3">Heavy machinery</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>What's the difference between a tonne and a ton?</h3>
                <p>
                  A metric tonne equals 1,000 kg, while a US ton (short ton) equals 2,000 pounds or about 907 kg. The
                  tonne is slightly heavier.
                </p>
              </div>
              <div>
                <h3>Which is used in international shipping?</h3>
                <p>
                  International shipping typically uses metric tonnes, but US domestic shipping often uses US tons.
                  Always verify the unit being used.
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
            const tonneInput = document.getElementById('tonne-input');
            const tonOutput = document.getElementById('ton-output');
            
            tonneInput.addEventListener('input', function() {
              const tonnes = parseFloat(this.value);
              if (!isNaN(tonnes)) {
                const tons = tonnes * 1.10231;
                tonOutput.value = tons.toFixed(5);
              } else {
                tonOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
