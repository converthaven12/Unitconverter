"use client"

export default function BarToPsiClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Bar to PSI Converter</h1>

          {/* Interactive Converter */}
          <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bar" className="block text-sm font-medium mb-2">
                  Bar
                </label>
                <input
                  type="number"
                  id="bar"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter bar"
                  onChange={(e) => {
                    const bar = Number.parseFloat(e.target.value) || 0
                    const psi = bar * 14.5038
                    const psiInput = document.getElementById("psi") as HTMLInputElement
                    if (psiInput) psiInput.value = psi.toFixed(6)
                  }}
                />
              </div>
              <div>
                <label htmlFor="psi" className="block text-sm font-medium mb-2">
                  PSI (Pounds per Square Inch)
                </label>
                <input
                  type="number"
                  id="psi"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Result in PSI"
                  onChange={(e) => {
                    const psi = Number.parseFloat(e.target.value) || 0
                    const bar = psi / 14.5038
                    const barInput = document.getElementById("bar") as HTMLInputElement
                    if (barInput) barInput.value = bar.toFixed(6)
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Formula: PSI = bar × 14.5038</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Understanding Bar to PSI Conversion</h2>
            <p>
              Converting bar to PSI (pounds per square inch) is essential in automotive, industrial, and scientific
              applications. Bar is a metric unit of pressure commonly used in Europe and scientific contexts, while PSI
              is widely used in the United States for tire pressure, hydraulic systems, and various industrial
              applications.
            </p>

            <h2>Conversion Formula</h2>
            <p>The conversion from bar to PSI uses the following formula:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <strong>PSI = Bar × 14.5038</strong>
            </div>
            <p>This conversion factor is based on the exact definition: 1 bar = 14.503773773 PSI.</p>

            <h2>Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2">Bar</th>
                    <th className="border border-border p-2">PSI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">0.5 bar</td>
                    <td className="border border-border p-2">7.25 PSI</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">1 bar</td>
                    <td className="border border-border p-2">14.50 PSI</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">2 bar</td>
                    <td className="border border-border p-2">29.01 PSI</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">3 bar</td>
                    <td className="border border-border p-2">43.51 PSI</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">5 bar</td>
                    <td className="border border-border p-2">72.52 PSI</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">10 bar</td>
                    <td className="border border-border p-2">145.04 PSI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Real-World Applications</h2>
            <ul>
              <li>
                <strong>Automotive:</strong> Tire pressure specifications (typically 2-3 bar or 30-45 PSI)
              </li>
              <li>
                <strong>Hydraulic Systems:</strong> Industrial machinery and equipment pressure ratings
              </li>
              <li>
                <strong>Compressed Air:</strong> Air compressor and pneumatic tool specifications
              </li>
              <li>
                <strong>Scuba Diving:</strong> Tank pressure measurements and depth calculations
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>How many PSI are in one bar?</h3>
            <p>There are approximately 14.5038 PSI in one bar.</p>

            <h3>Which unit is more commonly used?</h3>
            <p>
              PSI is more common in the United States, while bar is widely used in Europe, Asia, and scientific
              applications worldwide.
            </p>

            <h3>What's the relationship between bar and atmospheric pressure?</h3>
            <p>
              Standard atmospheric pressure is approximately 1.01325 bar or 14.696 PSI. This is why 1 bar is very close
              to atmospheric pressure.
            </p>

            <h3>How do I convert tire pressure from bar to PSI?</h3>
            <p>
              Multiply the bar value by 14.5038. For example, 2.2 bar × 14.5038 = 31.9 PSI, which is a typical car tire
              pressure.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
