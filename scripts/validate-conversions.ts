// Validation script to test conversion accuracy
// Run with: npx tsx scripts/validate-conversions.ts

import { validateAllConversions, popularExamples, validateConversion } from "../lib/converter-examples"
import { convertUnits } from "../lib/conversion-engine"
import { getUnitById } from "../lib/units-registry"

console.log("🧮 Unit Converter Validation Script")
console.log("=====================================")

// Run all validation tests
const allTestsPassed = validateAllConversions()

console.log("\n📊 Detailed Test Results:")
console.log("-------------------------")

// Show detailed results for each test
popularExamples.forEach((example, index) => {
  const result = convertUnits(example.input, example.from, example.to)
  const fromUnit = getUnitById(example.from)
  const toUnit = getUnitById(example.to)

  if (!fromUnit || !toUnit) {
    console.log(`❌ Test ${index + 1}: Unit not found`)
    return
  }

  const isAccurate = validateConversion(example, 0.001)
  const status = isAccurate ? "✅" : "❌"

  console.log(
    `${status} Test ${index + 1}: ${example.input} ${fromUnit.symbol} → ` +
      `${result.value.toFixed(6)} ${toUnit.symbol} ` +
      `(expected: ${example.expectedOutput})`,
  )
})

console.log("\n🎯 Summary:")
console.log("-----------")
if (allTestsPassed) {
  console.log("✅ All conversion tests passed! The unit converter is working correctly.")
} else {
  console.log("❌ Some tests failed. Please check the conversion formulas.")
  process.exit(1)
}

console.log("\n🚀 Ready for production deployment!")
