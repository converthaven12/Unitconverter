import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert PSI to Bar - psi to bar Pressure Converter",
  description:
    "Convert PSI to bar instantly. Free online psi to bar pressure converter with formula and examples. Accurate imperial to metric pressure conversion.",
  keywords: ["psi to bar", "pressure converter", "imperial to metric pressure", "pounds per square inch to bar"],
  openGraph: {
    title: "PSI to Bar Converter - psi to bar",
    description: "Convert PSI to bar quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function PsiToBarPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert PSI to Bar</h1>
            <p className="text-xl text-muted-foreground">Quick psi to bar pressure converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">PSI (pounds per square inch)</label>
                <input
                  type="number"
                  placeholder="Enter pressure in PSI"
                  className="w-full p-3 border rounded-lg"
                  id="psi-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bar</label>
                <input
                  type="number"
                  placeholder="Result in bar"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="bar-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: bar = psi × 0.0689476</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>PSI to Bar Conversion</h2>
            <p>
              Converting PSI to bar is essential for automotive applications, hydraulic systems, and international
              pressure specifications.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>bar = psi × 0.0689476</strong>
            </p>
            <p>For example: 30 psi × 0.0689476 = 2.068 bar</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">PSI</th>
                  <th className="border border-border p-3 text-left">Bar</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">14.7 psi</td>
                  <td className="border border-border p-3">1.013 bar</td>
                  <td className="border border-border p-3">Atmospheric pressure</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">30 psi</td>
                  <td className="border border-border p-3">2.068 bar</td>
                  <td className="border border-border p-3">Tire pressure</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">60 psi</td>
                  <td className="border border-border p-3">4.137 bar</td>
                  <td className="border border-border p-3">High tire pressure</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 psi</td>
                  <td className="border border-border p-3">6.895 bar</td>
                  <td className="border border-border p-3">Hydraulic system</td>
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
            const psiInput = document.getElementById('psi-input');
            const barOutput = document.getElementById('bar-output');
            
            psiInput.addEventListener('input', function() {
              const psi = parseFloat(this.value);
              if (!isNaN(psi)) {
                const bar = psi * 0.0689476;
                barOutput.value = bar.toFixed(4);
              } else {
                barOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
