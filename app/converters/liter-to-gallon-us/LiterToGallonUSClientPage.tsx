"use client"

export default function LiterToGallonUSClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Liter to US Gallon Converter</h1>

          {/* Interactive Converter */}
          <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="liters" className="block text-sm font-medium mb-2">
                  Liters (L)
                </label>
                <input
                  type="number"
                  id="liters"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter liters"
                  onChange={(e) => {
                    const liters = Number.parseFloat(e.target.value) || 0
                    const gallons = liters * 0.264172
                    const gallonsInput = document.getElementById("gallons") as HTMLInputElement
                    if (gallonsInput) gallonsInput.value = gallons.toFixed(6)
                  }}
                />
              </div>
              <div>
                <label htmlFor="gallons" className="block text-sm font-medium mb-2">
                  US Gallons (gal)
                </label>
                <input
                  type="number"
                  id="gallons"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Result in gallons"
                  onChange={(e) => {
                    const gallons = Number.parseFloat(e.target.value) || 0
                    const liters = gallons / 0.264172
                    const litersInput = document.getElementById("liters") as HTMLInputElement
                    if (litersInput) litersInput.value = liters.toFixed(6)
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Formula: US gallons = liters × 0.264172</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Understanding Liter to US Gallon Conversion</h2>
            <p>
              Converting liters to US gallons is important for fuel consumption, cooking, and various industrial
              applications. The liter is the standard metric unit of volume, while the US gallon is commonly used in the
              United States for measuring liquids like gasoline, milk, and other beverages.
            </p>

            <h2>Conversion Formula</h2>
            <p>The conversion from liters to US gallons uses the following formula:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <strong>US Gallons = Liters × 0.264172</strong>
            </div>
            <p>This conversion factor is based on the exact definition: 1 liter = 0.264172052 US gallons.</p>

            <h2>Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2">Liters</th>
                    <th className="border border-border p-2">US Gallons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">1 L</td>
                    <td className="border border-border p-2">0.264 gal</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">5 L</td>
                    <td className="border border-border p-2">1.321 gal</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">10 L</td>
                    <td className="border border-border p-2">2.642 gal</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">20 L</td>
                    <td className="border border-border p-2">5.283 gal</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">50 L</td>
                    <td className="border border-border p-2">13.209 gal</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">100 L</td>
                    <td className="border border-border p-2">26.417 gal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Real-World Applications</h2>
            <ul>
              <li>
                <strong>Fuel Economy:</strong> Converting car fuel consumption between L/100km and mpg
              </li>
              <li>
                <strong>Cooking and Recipes:</strong> Converting large-batch recipes between metric and imperial
              </li>
              <li>
                <strong>Swimming Pools:</strong> Understanding pool capacity in different measurement systems
              </li>
              <li>
                <strong>Industrial Processes:</strong> Converting liquid volumes in manufacturing and chemical processes
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>How many US gallons are in a liter?</h3>
            <p>There are approximately 0.264172 US gallons in one liter.</p>

            <h3>What's the difference between US gallons and UK gallons?</h3>
            <p>
              A US gallon equals 3.78541 liters, while a UK (Imperial) gallon equals 4.54609 liters. The UK gallon is
              about 20% larger than the US gallon.
            </p>

            <h3>Why are there different gallon measurements?</h3>
            <p>
              The US and UK gallons have different historical origins. The US gallon is based on the wine gallon, while
              the UK gallon is based on the ale gallon, leading to different volumes.
            </p>

            <h3>How do I remember the conversion?</h3>
            <p>
              A helpful approximation is that 4 liters ≈ 1 US gallon (actually 3.78541 liters = 1 gallon). For quick
              estimates, divide liters by 4.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
