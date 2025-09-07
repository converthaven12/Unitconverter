"use client"

export default function MileToKilometerClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Mile to Kilometer Converter</h1>

          {/* Interactive Converter */}
          <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="miles" className="block text-sm font-medium mb-2">
                  Miles (mi)
                </label>
                <input
                  type="number"
                  id="miles"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter miles"
                  onChange={(e) => {
                    const miles = Number.parseFloat(e.target.value) || 0
                    const km = miles * 1.609344
                    const kmInput = document.getElementById("kilometers") as HTMLInputElement
                    if (kmInput) kmInput.value = km.toFixed(6)
                  }}
                />
              </div>
              <div>
                <label htmlFor="kilometers" className="block text-sm font-medium mb-2">
                  Kilometers (km)
                </label>
                <input
                  type="number"
                  id="kilometers"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Result in kilometers"
                  onChange={(e) => {
                    const km = Number.parseFloat(e.target.value) || 0
                    const miles = km / 1.609344
                    const milesInput = document.getElementById("miles") as HTMLInputElement
                    if (milesInput) milesInput.value = miles.toFixed(6)
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Formula: kilometers = miles × 1.609344</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Understanding Mile to Kilometer Conversion</h2>
            <p>
              Converting miles to kilometers is crucial for international communication, travel planning, and scientific
              work. The mile is an imperial unit of length primarily used in the United States and United Kingdom, while
              the kilometer is the standard metric unit used worldwide.
            </p>

            <h2>Conversion Formula</h2>
            <p>The conversion from miles to kilometers uses the following formula:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <strong>Kilometers = Miles × 1.609344</strong>
            </div>
            <p>This conversion factor is exact, based on the international definition: 1 mile = 1.609344 kilometers.</p>

            <h2>Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2">Miles</th>
                    <th className="border border-border p-2">Kilometers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">1 mi</td>
                    <td className="border border-border p-2">1.609 km</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">5 mi</td>
                    <td className="border border-border p-2">8.047 km</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">10 mi</td>
                    <td className="border border-border p-2">16.093 km</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">25 mi</td>
                    <td className="border border-border p-2">40.234 km</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">50 mi</td>
                    <td className="border border-border p-2">80.467 km</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">100 mi</td>
                    <td className="border border-border p-2">160.934 km</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Real-World Applications</h2>
            <ul>
              <li>
                <strong>International Travel:</strong> Converting road trip distances when traveling abroad
              </li>
              <li>
                <strong>Sports and Fitness:</strong> Understanding race distances in different measurement systems
              </li>
              <li>
                <strong>Navigation:</strong> GPS systems often allow switching between miles and kilometers
              </li>
              <li>
                <strong>Scientific Research:</strong> Converting measurements for international collaboration
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>How many kilometers are in a mile?</h3>
            <p>There are exactly 1.609344 kilometers in one mile.</p>

            <h3>Why is the conversion factor 1.609344?</h3>
            <p>
              This factor comes from the international yard and pound agreement of 1959, which defined the mile as
              exactly 5,280 feet, with each foot being 0.3048 meters.
            </p>

            <h3>Which is longer, a mile or a kilometer?</h3>
            <p>
              A mile is longer than a kilometer. One mile equals approximately 1.61 kilometers, making it about 61%
              longer than a kilometer.
            </p>

            <h3>How do I quickly estimate miles to kilometers?</h3>
            <p>
              For quick estimation, multiply miles by 1.6. For example, 10 miles ≈ 16 kilometers. For more precision,
              use the exact factor 1.609344.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
