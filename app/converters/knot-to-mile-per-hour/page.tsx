import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Knots to Miles per Hour - kn to mph Converter",
  description:
    "Convert knots to miles per hour instantly. Free online kn to mph converter for aviation and maritime navigation. 1 knot = 1.151 mph.",
  keywords: ["knot to mph", "kn to mph", "aviation speed", "maritime navigation", "nautical speed conversion"],
}

export const revalidate = 0

export default function KnotToMilePerHourPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Knots to Miles per Hour</h1>
            <p className="text-xl text-muted-foreground">Aviation and maritime speed converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Knots (kn)</label>
                <input
                  type="number"
                  placeholder="Enter knots"
                  className="w-full p-3 border rounded-lg"
                  id="knot-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Miles per Hour (mph)</label>
                <input
                  type="number"
                  placeholder="Result in mph"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="mph-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: mph = kn × 1.15078</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Knot to Mile per Hour Conversion</h2>
            <p>
              Knots are the standard unit of speed in aviation and maritime navigation, while miles per hour are
              commonly used for land-based transportation.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Miles per Hour = Knots × 1.15078</strong>
            </p>
            <p>For example: 100 kn × 1.15078 = 115.08 mph</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Knots</th>
                  <th className="border border-border p-3 text-left">Miles per Hour</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">10 kn</td>
                  <td className="border border-border p-3">11.5 mph</td>
                  <td className="border border-border p-3">Light breeze</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">50 kn</td>
                  <td className="border border-border p-3">57.5 mph</td>
                  <td className="border border-border p-3">Small aircraft</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">150 kn</td>
                  <td className="border border-border p-3">172.6 mph</td>
                  <td className="border border-border p-3">Light aircraft cruise</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">500 kn</td>
                  <td className="border border-border p-3">575.4 mph</td>
                  <td className="border border-border p-3">Commercial jet</td>
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
          const knotInput = document.getElementById('knot-input');
          const mphOutput = document.getElementById('mph-output');
          
          knotInput.addEventListener('input', function() {
            const knots = parseFloat(this.value);
            if (!isNaN(knots)) {
              const mph = knots * 1.15078;
              mphOutput.value = mph.toFixed(2);
            } else {
              mphOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
