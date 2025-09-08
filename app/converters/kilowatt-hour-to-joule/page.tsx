import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Kilowatt Hours to Joules - kWh to J Converter",
  description:
    "Convert kilowatt hours to joules instantly. Free online kWh to J converter for energy calculations. 1 kWh = 3,600,000 J.",
  keywords: ["kilowatt hour to joule", "kWh to J", "energy conversion", "electrical energy", "power calculations"],
}

export const revalidate = 0

export default function KilowattHourToJoulePage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Kilowatt Hours to Joules</h1>
            <p className="text-xl text-muted-foreground">Electrical energy conversion tool</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Kilowatt Hours (kWh)</label>
                <input
                  type="number"
                  placeholder="Enter kilowatt hours"
                  className="w-full p-3 border rounded-lg"
                  id="kwh-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Joules (J)</label>
                <input
                  type="number"
                  placeholder="Result in joules"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="joule-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: J = kWh × 3,600,000</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Kilowatt Hour to Joule Conversion</h2>
            <p>
              Kilowatt hours are commonly used to measure electrical energy consumption, while joules are the standard
              SI unit for energy in scientific calculations.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Joules = Kilowatt Hours × 3,600,000</strong>
            </p>
            <p>For example: 1 kWh × 3,600,000 = 3,600,000 J</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Kilowatt Hours</th>
                  <th className="border border-border p-3 text-left">Joules</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">0.1 kWh</td>
                  <td className="border border-border p-3">360,000 J</td>
                  <td className="border border-border p-3">LED bulb (10h)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1 kWh</td>
                  <td className="border border-border p-3">3,600,000 J</td>
                  <td className="border border-border p-3">Household usage</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 kWh</td>
                  <td className="border border-border p-3">36,000,000 J</td>
                  <td className="border border-border p-3">Daily home usage</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 kWh</td>
                  <td className="border border-border p-3">360,000,000 J</td>
                  <td className="border border-border p-3">Monthly home usage</td>
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
          const kwhInput = document.getElementById('kwh-input');
          const jouleOutput = document.getElementById('joule-output');
          
          kwhInput.addEventListener('input', function() {
            const kwh = parseFloat(this.value);
            if (!isNaN(kwh)) {
              const joules = kwh * 3600000;
              jouleOutput.value = joules.toFixed(0);
            } else {
              jouleOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
