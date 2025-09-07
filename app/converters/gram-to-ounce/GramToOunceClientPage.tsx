"use client"

export default function GramToOunceClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Gram to Ounce Converter</h1>

          {/* Interactive Converter */}
          <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="grams" className="block text-sm font-medium mb-2">
                  Grams (g)
                </label>
                <input
                  type="number"
                  id="grams"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter grams"
                  onChange={(e) => {
                    const grams = Number.parseFloat(e.target.value) || 0
                    const ounces = grams * 0.035274
                    const ouncesInput = document.getElementById("ounces") as HTMLInputElement
                    if (ouncesInput) ouncesInput.value = ounces.toFixed(6)
                  }}
                />
              </div>
              <div>
                <label htmlFor="ounces" className="block text-sm font-medium mb-2">
                  Ounces (oz)
                </label>
                <input
                  type="number"
                  id="ounces"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Result in ounces"
                  onChange={(e) => {
                    const ounces = Number.parseFloat(e.target.value) || 0
                    const grams = ounces / 0.035274
                    const gramsInput = document.getElementById("grams") as HTMLInputElement
                    if (gramsInput) gramsInput.value = grams.toFixed(6)
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Formula: ounces = grams × 0.035274</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Understanding Gram to Ounce Conversion</h2>
            <p>
              Converting grams to ounces is essential in cooking, nutrition, jewelry, and international trade. The gram
              is the base unit of mass in the metric system, while the ounce is an imperial unit commonly used in the
              United States for measuring weight.
            </p>

            <h2>Conversion Formula</h2>
            <p>The conversion from grams to ounces uses the following formula:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <strong>Ounces = Grams × 0.035274</strong>
            </div>
            <p>This conversion factor is based on the exact definition: 1 gram = 0.035273961949580412 ounces.</p>

            <h2>Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2">Grams</th>
                    <th className="border border-border p-2">Ounces</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">1 g</td>
                    <td className="border border-border p-2">0.035 oz</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">10 g</td>
                    <td className="border border-border p-2">0.353 oz</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">25 g</td>
                    <td className="border border-border p-2">0.882 oz</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">50 g</td>
                    <td className="border border-border p-2">1.764 oz</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">100 g</td>
                    <td className="border border-border p-2">3.527 oz</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">500 g</td>
                    <td className="border border-border p-2">17.637 oz</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Real-World Applications</h2>
            <ul>
              <li>
                <strong>Cooking and Baking:</strong> Converting recipe ingredients between metric and imperial
                measurements
              </li>
              <li>
                <strong>Nutrition Labels:</strong> Understanding food portions and nutritional information
              </li>
              <li>
                <strong>Jewelry and Precious Metals:</strong> Measuring gold, silver, and gemstones
              </li>
              <li>
                <strong>Postal Services:</strong> Converting package weights for international shipping
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>How many ounces are in a gram?</h3>
            <p>There are approximately 0.035274 ounces in one gram.</p>

            <h3>What's the difference between fluid ounces and weight ounces?</h3>
            <p>
              Weight ounces (used in this converter) measure mass, while fluid ounces measure volume. They are different
              units and should not be confused.
            </p>

            <h3>Is 28 grams equal to 1 ounce?</h3>
            <p>
              Approximately, yes. More precisely, 1 ounce equals 28.3495 grams, so 28 grams is very close to 1 ounce.
            </p>

            <h3>Which is more precise for small measurements?</h3>
            <p>
              Grams are more precise for small measurements because they are smaller units. One gram equals about 0.035
              ounces, making grams better for precise measurements.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
