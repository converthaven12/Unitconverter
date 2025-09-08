import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Atmospheres to Pascals - atm to Pa Converter",
  description:
    "Convert atmospheres to pascals instantly. Free online atm to Pa converter for scientific and engineering applications. 1 atm = 101,325 Pa.",
  keywords: [
    "atmosphere to pascal",
    "atm to Pa",
    "pressure conversion",
    "scientific measurements",
    "engineering units",
  ],
}

export const revalidate = 0

export default function AtmosphereToPascalPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Atmospheres to Pascals</h1>
            <p className="text-xl text-muted-foreground">Scientific pressure conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Atmospheres (atm)</label>
                <input
                  type="number"
                  placeholder="Enter atmospheres"
                  className="w-full p-3 border rounded-lg"
                  id="atmosphere-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pascals (Pa)</label>
                <input
                  type="number"
                  placeholder="Result in pascals"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="pascal-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Pa = atm × 101,325</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Atmosphere to Pascal Conversion</h2>
            <p>
              Atmospheres represent standard atmospheric pressure at sea level, while pascals are the SI unit for
              pressure used in scientific calculations.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Pascals = Atmospheres × 101,325</strong>
            </p>
            <p>For example: 2 atm × 101,325 = 202,650 Pa</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Atmospheres</th>
                  <th className="border border-border p-3 text-left">Pascals</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 atm</td>
                  <td className="border border-border p-3">101,325 Pa</td>
                  <td className="border border-border p-3">Sea level pressure</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">2 atm</td>
                  <td className="border border-border p-3">202,650 Pa</td>
                  <td className="border border-border p-3">10m underwater</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">3 atm</td>
                  <td className="border border-border p-3">303,975 Pa</td>
                  <td className="border border-border p-3">20m underwater</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 atm</td>
                  <td className="border border-border p-3">1,013,250 Pa</td>
                  <td className="border border-border p-3">90m underwater</td>
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
          const atmosphereInput = document.getElementById('atmosphere-input');
          const pascalOutput = document.getElementById('pascal-output');
          
          atmosphereInput.addEventListener('input', function() {
            const atmospheres = parseFloat(this.value);
            if (!isNaN(atmospheres)) {
              const pascals = atmospheres * 101325;
              pascalOutput.value = pascals.toFixed(0);
            } else {
              pascalOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
