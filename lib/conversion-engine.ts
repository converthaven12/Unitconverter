// Core Conversion Engine - Handles all unit conversions using base-unit model

import { getUnitById, type Unit } from "./units-registry"
import { getExchangeRates, convertCurrency } from "./currency-api"

export interface ConversionResult {
  value: number
  fromUnit: Unit
  toUnit: Unit
  formula: string
  isValid: boolean
  error?: string
}

export async function convertUnits(value: number, fromUnitId: string, toUnitId: string): Promise<ConversionResult> {
  const fromUnit = getUnitById(fromUnitId)
  const toUnit = getUnitById(toUnitId)

  // Validation
  if (!fromUnit || !toUnit) {
    return {
      value: 0,
      fromUnit: fromUnit!,
      toUnit: toUnit!,
      formula: "",
      isValid: false,
      error: "Invalid unit(s) specified",
    }
  }

  if (fromUnit.category !== toUnit.category) {
    return {
      value: 0,
      fromUnit,
      toUnit,
      formula: "",
      isValid: false,
      error: `Cannot convert between ${fromUnit.category} and ${toUnit.category}`,
    }
  }

  if (isNaN(value) || !isFinite(value)) {
    return {
      value: 0,
      fromUnit,
      toUnit,
      formula: "",
      isValid: false,
      error: "Invalid input value",
    }
  }

  try {
    let convertedValue: number

    if (fromUnit.category === "currency") {
      const rates = await getExchangeRates()
      convertedValue = convertCurrency(value, fromUnit.id, toUnit.id, rates)
    } else {
      // Standard conversion for non-currency units
      const baseValue = fromUnit.toBase(value)
      convertedValue = toUnit.fromBase(baseValue)
    }

    // Generate formula description
    const formula = await generateFormula(fromUnit, toUnit, value)

    return {
      value: convertedValue,
      fromUnit,
      toUnit,
      formula,
      isValid: true,
    }
  } catch (error) {
    return {
      value: 0,
      fromUnit,
      toUnit,
      formula: "",
      isValid: false,
      error: error instanceof Error ? error.message : "Conversion calculation failed",
    }
  }
}

async function generateFormula(fromUnit: Unit, toUnit: Unit, inputValue: number): Promise<string> {
  if (fromUnit.category === "currency") {
    try {
      const rates = await getExchangeRates()
      const fromRate = rates[fromUnit.id.toUpperCase()]
      const toRate = rates[toUnit.id.toUpperCase()]

      if (fromRate && toRate) {
        const exchangeRate = toRate / fromRate
        return `1 ${fromUnit.symbol} = ${exchangeRate.toFixed(4)} ${toUnit.symbol}`
      }
    } catch (error) {
      return `${toUnit.symbol} = ${fromUnit.symbol} × Exchange Rate`
    }
  }

  // Special cases for temperature (offset conversions)
  if (fromUnit.category === "temperature") {
    if (fromUnit.id === "celsius" && toUnit.id === "fahrenheit") {
      return `°F = (°C × 9/5) + 32`
    }
    if (fromUnit.id === "fahrenheit" && toUnit.id === "celsius") {
      return `°C = (°F - 32) × 5/9`
    }
    if (fromUnit.id === "celsius" && toUnit.id === "kelvin") {
      return `K = °C + 273.15`
    }
    if (fromUnit.id === "kelvin" && toUnit.id === "celsius") {
      return `°C = K - 273.15`
    }
    if (fromUnit.id === "fahrenheit" && toUnit.id === "kelvin") {
      return `K = (°F - 32) × 5/9 + 273.15`
    }
    if (fromUnit.id === "kelvin" && toUnit.id === "fahrenheit") {
      return `°F = (K - 273.15) × 9/5 + 32`
    }
  }

  // Special cases for fuel economy (inverse relationships)
  if (fromUnit.category === "fuel") {
    if (fromUnit.id === "liter_per_100km" && toUnit.id === "mpg_us") {
      return `mpg US = 235.214 ÷ L/100km`
    }
    if (fromUnit.id === "mpg_us" && toUnit.id === "liter_per_100km") {
      return `L/100km = 235.214 ÷ mpg US`
    }
    if (fromUnit.id === "liter_per_100km" && toUnit.id === "km_per_liter") {
      return `km/L = 100 ÷ L/100km`
    }
    if (fromUnit.id === "km_per_liter" && toUnit.id === "liter_per_100km") {
      return `L/100km = 100 ÷ km/L`
    }
  }

  // Calculate conversion factor for linear conversions
  const testValue = 1
  const baseValue = fromUnit.toBase(testValue)
  const convertedValue = toUnit.fromBase(baseValue)
  const factor = convertedValue

  if (Math.abs(factor - 1) < 0.0001) {
    return `${toUnit.symbol} = ${fromUnit.symbol}`
  }

  // Format the factor nicely
  let factorStr: string
  if (factor >= 1000 || factor <= 0.001) {
    factorStr = factor.toExponential(3)
  } else if (factor >= 100) {
    factorStr = factor.toFixed(0)
  } else if (factor >= 10) {
    factorStr = factor.toFixed(1)
  } else if (factor >= 1) {
    factorStr = factor.toFixed(2)
  } else if (factor >= 0.1) {
    factorStr = factor.toFixed(3)
  } else {
    factorStr = factor.toFixed(6)
  }

  if (factor > 1) {
    return `${toUnit.symbol} = ${fromUnit.symbol} × ${factorStr}`
  } else {
    const inverseFactor = 1 / factor
    let inverseStr: string
    if (inverseFactor >= 1000) {
      inverseStr = inverseFactor.toExponential(3)
    } else if (inverseFactor >= 100) {
      inverseStr = inverseFactor.toFixed(0)
    } else if (inverseFactor >= 10) {
      inverseStr = inverseFactor.toFixed(1)
    } else {
      inverseStr = inverseFactor.toFixed(2)
    }
    return `${toUnit.symbol} = ${fromUnit.symbol} ÷ ${inverseStr}`
  }
}

export async function getQuickExamples(
  fromUnitId: string,
  toUnitId: string,
): Promise<Array<{ input: number; output: number }>> {
  const examples = [1, 10, 100]
  const results = await Promise.all(
    examples.map(async (input) => {
      const result = await convertUnits(input, fromUnitId, toUnitId)
      return {
        input,
        output: result.isValid ? result.value : 0,
      }
    }),
  )
  return results
}

export function formatNumber(value: number, precision = 6): string {
  if (!isFinite(value)) return "0"

  // Handle very large or very small numbers with scientific notation
  if (Math.abs(value) >= 1e6 || (Math.abs(value) < 0.001 && value !== 0)) {
    return value.toExponential(3)
  }

  // For normal numbers, use appropriate decimal places
  if (Math.abs(value) >= 100) {
    return value.toFixed(2)
  } else if (Math.abs(value) >= 10) {
    return value.toFixed(3)
  } else if (Math.abs(value) >= 1) {
    return value.toFixed(4)
  } else {
    return value.toFixed(precision)
  }
}

export function convertUnit(value: number, fromUnitId: string, toUnitId: string): number {
  const fromUnit = getUnitById(fromUnitId)
  const toUnit = getUnitById(toUnitId)

  if (!fromUnit || !toUnit || fromUnit.category !== toUnit.category) {
    return 0
  }

  if (isNaN(value) || !isFinite(value)) {
    return 0
  }

  try {
    const baseValue = fromUnit.toBase(value)
    return toUnit.fromBase(baseValue)
  } catch (error) {
    return 0
  }
}
