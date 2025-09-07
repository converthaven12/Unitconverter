"use client"

export default function KilometerToMileClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Kilometer to Mile Converter</h1>

          {/* Interactive Converter */}
          <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="kilometers" className="block text-sm font-medium mb-2">
                  Kilometers (km)
                </label>
                <input
                  type="number"
                  id="kilometers"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter kilometers"
                  onChange={(e) => {
                    const km = Number.parseFloat(e.target.value) || 0
                    const miles = km * 0.621371
                    const milesInput = document.getElementById("miles") as HTMLInputElement
                    if (milesInput) milesInput.value = miles.toFixed(6)
                  }}
                />
              </div>
              <div>
                <label htmlFor="miles" className="block text-sm font-medium mb-2">
                  Miles (mi)
                </label>
                <input
                  type="number"
                  id="miles"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Result in miles"
                  onChange={(e) => {
                    const miles = Number.parseFloat(e.target.value) || 0
                    const km = miles / 0.621371
                    const kmInput = document.getElementById("kilometers") as HTMLInputElement
                    if (kmInput) kmInput.value = km.toFixed(6)
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Formula: miles = kilometers × 0.621371</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <h2>Understanding Kilometer to Mile Conversion</h2>
            <p>
              Converting kilometers to miles is essential for international travel, sports, and scientific applications.
              The kilometer is a metric unit of length equal to 1,000 meters, while the mile is an imperial unit
              commonly used in the United States and United Kingdom.
            </p>

            <h2>Conversion Formula</h2>
            <p>The conversion from kilometers to miles uses the following formula:</p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <strong>Miles = Kilometers × 0.621371</strong>
            </div>
            <p>This conversion factor is based on the exact definition: 1 kilometer = 0.621371192 miles.</p>

            <h2>Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2">Kilometers</th>
                    <th className="border border-border p-2">Miles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">1 km</td>
                    <td className="border border-border p-2">0.621 mi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">5 km</td>
                    <td className="border border-border p-2">3.107 mi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">10 km</td>
                    <td className="border border-border p-2">6.214 mi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">25 km</td>
                    <td className="border border-border p-2">15.534 mi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">50 km</td>
                    <td className="border border-border p-2">31.069 mi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">100 km</td>
                    <td className="border border-border p-2">62.137 mi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Real-World Applications</h2>
            <ul>
              <li>
                <strong>Running and Athletics:</strong> Marathon distance is 42.195 km (26.219 miles)
              </li>
              <li>
                <strong>Travel Planning:</strong> Converting road distances for international trips
              </li>
              <li>
                <strong>Aviation:</strong> Flight distances often measured in both units
              </li>
              <li>
                <strong>Geography:</strong> Measuring distances between cities and landmarks
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>How many miles are in a kilometer?</h3>
            <p>There are approximately 0.621371 miles in one kilometer.</p>

            <h3>Is the conversion exact?</h3>
            <p>
              The conversion factor 0.621371192 is based on the exact definitions of both units, making it highly
              precise for most practical purposes.
            </p>

            <h3>Which countries use miles vs kilometers?</h3>
            <p>
              Most countries use kilometers (metric system), while the United States, United Kingdom, and a few other
              countries primarily use miles for road distances.
            </p>

            <h3>How do I remember the conversion?</h3>
            <p>
              A helpful approximation is that 1 km ≈ 0.6 miles, or roughly 5 km = 3 miles. For more precision, use 1 km
              = 0.621371 miles.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
