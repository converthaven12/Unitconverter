import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Newtons to Pound-Force - N to lbf Converter",
  description:
    "Convert newtons to pound-force instantly. Free online N to lbf converter for engineering and physics. 1 lbf = 4.448 N.",
  keywords: ["newton to pound force", "N to lbf", "force conversion", "engineering", "physics", "mechanics"],
}

export const revalidate = 0

export default function NewtonToPoundForcePage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Newtons to Pound-Force</h1>
            <p className="text-xl text-muted-foreground">Engineering force conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Newtons (N)</label>
                <input
                  type="number"
                  placeholder="Enter newtons"
                  className="w-full p-3 border rounded-lg"
                  id="newton-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pound-Force (lbf)</label>
                <input
                  type="number"
                  placeholder="Result in pound-force"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="lbf-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: lbf = N ÷ 4.44822</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Newton to Pound-Force Conversion</h2>
            <p>
              Newtons are the SI unit of force, while pound-force is commonly used in American engineering and
              mechanical applications.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Pound-Force = Newtons ÷ 4.44822</strong>
            </p>
            <p>For example: 100 N ÷ 4.44822 = 22.48 lbf</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Newtons</th>
                  <th className="border border-border p-3 text-left">Pound-Force</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 N</td>
                  <td className="border border-border p-3">0.225 lbf</td>
                  <td className="border border-border p-3">Small force</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 N</td>
                  <td className="border border-border p-3">2.25 lbf</td>
                  <td className="border border-border p-3">1 kg weight</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 N</td>
                  <td className="border border-border p-3">22.48 lbf</td>
                  <td className="border border-border p-3">10 kg weight</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 N</td>
                  <td className="border border-border p-3">224.8 lbf</td>
                  <td className="border border-border p-3">100 kg weight</td>
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
          const newtonInput = document.getElementById('newton-input');
          const lbfOutput = document.getElementById('lbf-output');
          
          newtonInput.addEventListener('input', function() {
            const newtons = parseFloat(this.value);
            if (!isNaN(newtons)) {
              const lbf = newtons / 4.44822;
              lbfOutput.value = lbf.toFixed(4);
            } else {
              lbfOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
