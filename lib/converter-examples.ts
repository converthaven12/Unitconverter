// Pre-defined examples and test cases for popular conversions

import { convertUnits } from "./conversion-engine"

export interface ConversionExample {
  from: string
  to: string
  input: number
  expectedOutput: number
  description: string
}

// Popular conversion examples with expected results
export const popularExamples: ConversionExample[] = [
  // Length conversions
  {
    from: "centimeter",
    to: "inch",
    input: 2.54,
    expectedOutput: 1,
    description: "1 inch equals exactly 2.54 centimeters",
  },
  {
    from: "inch",
    to: "centimeter",
    input: 1,
    expectedOutput: 2.54,
    description: "1 inch equals exactly 2.54 centimeters",
  },
  {
    from: "meter",
    to: "foot",
    input: 1,
    expectedOutput: 3.28084,
    description: "1 meter equals approximately 3.28 feet",
  },
  {
    from: "foot",
    to: "meter",
    input: 1,
    expectedOutput: 0.3048,
    description: "1 foot equals exactly 0.3048 meters",
  },
  {
    from: "kilometer",
    to: "mile",
    input: 1,
    expectedOutput: 0.621371,
    description: "1 kilometer equals approximately 0.62 miles",
  },
  {
    from: "mile",
    to: "kilometer",
    input: 1,
    expectedOutput: 1.609344,
    description: "1 mile equals exactly 1.609344 kilometers",
  },

  // Weight conversions
  {
    from: "kilogram",
    to: "pound",
    input: 1,
    expectedOutput: 2.20462,
    description: "1 kilogram equals approximately 2.20 pounds",
  },
  {
    from: "pound",
    to: "kilogram",
    input: 1,
    expectedOutput: 0.453592,
    description: "1 pound equals approximately 0.45 kilograms",
  },

  // Temperature conversions
  {
    from: "celsius",
    to: "fahrenheit",
    input: 0,
    expectedOutput: 32,
    description: "0°C (freezing point of water) equals 32°F",
  },
  {
    from: "celsius",
    to: "fahrenheit",
    input: 100,
    expectedOutput: 212,
    description: "100°C (boiling point of water) equals 212°F",
  },
  {
    from: "fahrenheit",
    to: "celsius",
    input: 32,
    expectedOutput: 0,
    description: "32°F (freezing point of water) equals 0°C",
  },
  {
    from: "fahrenheit",
    to: "celsius",
    input: 212,
    expectedOutput: 100,
    description: "212°F (boiling point of water) equals 100°C",
  },

  // Volume conversions
  {
    from: "liter",
    to: "gallon_us",
    input: 1,
    expectedOutput: 0.264172,
    description: "1 liter equals approximately 0.26 US gallons",
  },
  {
    from: "gallon_us",
    to: "liter",
    input: 1,
    expectedOutput: 3.78541,
    description: "1 US gallon equals approximately 3.79 liters",
  },
  {
    from: "liter",
    to: "gallon_uk",
    input: 1,
    expectedOutput: 0.219969,
    description: "1 liter equals approximately 0.22 UK gallons",
  },

  // Pressure conversions
  {
    from: "psi",
    to: "bar",
    input: 14.5038,
    expectedOutput: 1,
    description: "14.5 PSI equals approximately 1 bar",
  },
  {
    from: "bar",
    to: "psi",
    input: 1,
    expectedOutput: 14.5038,
    description: "1 bar equals approximately 14.5 PSI",
  },

  // Speed conversions
  {
    from: "meter_per_second",
    to: "kilometer_per_hour",
    input: 1,
    expectedOutput: 3.6,
    description: "1 m/s equals exactly 3.6 km/h",
  },
  {
    from: "kilometer_per_hour",
    to: "mile_per_hour",
    input: 100,
    expectedOutput: 62.1371,
    description: "100 km/h equals approximately 62 mph",
  },

  // Power conversions
  {
    from: "watt",
    to: "horsepower",
    input: 745.7,
    expectedOutput: 1,
    description: "745.7 watts equals approximately 1 horsepower",
  },
  {
    from: "horsepower",
    to: "watt",
    input: 1,
    expectedOutput: 745.7,
    description: "1 horsepower equals approximately 745.7 watts",
  },
]

// Function to validate conversion accuracy
export function validateConversion(example: ConversionExample, tolerance = 0.001): boolean {
  const result = convertUnits(example.input, example.from, example.to)

  if (!result.isValid) {
    console.error(`Conversion failed: ${example.from} to ${example.to}`)
    return false
  }

  const difference = Math.abs(result.value - example.expectedOutput)
  const isAccurate = difference <= tolerance

  if (!isAccurate) {
    console.error(
      `Conversion inaccurate: ${example.from} to ${example.to}\n` +
        `Expected: ${example.expectedOutput}\n` +
        `Got: ${result.value}\n` +
        `Difference: ${difference}`,
    )
  }

  return isAccurate
}

// Function to run all validation tests
export function validateAllConversions(): boolean {
  console.log("Running conversion validation tests...")

  let passedTests = 0
  const totalTests = popularExamples.length

  for (const example of popularExamples) {
    if (validateConversion(example)) {
      passedTests++
    }
  }

  console.log(`Validation complete: ${passedTests}/${totalTests} tests passed`)

  if (passedTests === totalTests) {
    console.log("✅ All conversions are accurate!")
    return true
  } else {
    console.log("❌ Some conversions failed validation")
    return false
  }
}

// Export popular conversion pairs for easy access
export const popularConversionPairs = popularExamples.map((example) => ({
  from: example.from,
  to: example.to,
  label: `${example.from} → ${example.to}`,
  description: example.description,
}))
