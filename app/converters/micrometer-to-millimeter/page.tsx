import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Micrometers to Millimeters - μm to mm Converter",
  description:
    "Convert micrometers to millimeters instantly. Free online μm to mm converter with formula and examples. 1000 μm = 1 mm.",
  keywords: ["micrometer to millimeter", "μm to mm", "microscopic measurements", "precision conversion"],
}

export const revalidate = 0

export default function MicrometerToMillimeterPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Micrometers to Millimeters</h1>
            <p className="text-xl text-muted-foreground">Precise μm to mm conversion for scientific measurements</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Micrometers (μm)</label>
                <input
                  type="number"
                  placeholder="Enter micrometers"
                  className="w-full p-3 border rounded-lg"
                  id="micrometer-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Millimeters (mm)</label>
                <input
                  type="number"
                  placeholder="Result in millimeters"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="millimeter-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: mm = μm ÷ 1000</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Micrometer to Millimeter Conversion</h2>
            <p>
              Micrometers and millimeters are both metric units used for precise measurements in science, engineering,
              and manufacturing.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Millimeters = Micrometers ÷ 1000</strong>
            </p>
            <p>For example: 5000 μm ÷ 1000 = 5 mm</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Micrometers</th>
                  <th className="border border-border p-3 text-left">Millimeters</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 μm</td>
                  <td className="border border-border p-3">0.001 mm</td>
                  <td className="border border-border p-3">Bacteria size</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 μm</td>
                  <td className="border border-border p-3">0.01 mm</td>
                  <td className="border border-border p-3">Cell nucleus</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 μm</td>
                  <td className="border border-border p-3">0.1 mm</td>
                  <td className="border border-border p-3">Human hair width</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 μm</td>
                  <td className="border border-border p-3">1 mm</td>
                  <td className="border border-border p-3">Pinhead</td>
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
          const micrometerInput = document.getElementById('micrometer-input');
          const millimeterOutput = document.getElementById('millimeter-output');
          
          micrometerInput.addEventListener('input', function() {
            const micrometers = parseFloat(this.value);
            if (!isNaN(micrometers)) {
              const millimeters = micrometers / 1000;
              millimeterOutput.value = millimeters.toFixed(6);
            } else {
              millimeterOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
