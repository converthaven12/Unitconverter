"use client"

import { useState, useEffect } from "react"
import { convertUnits, formatNumber, type ConversionResult } from "@/lib/conversion-engine"
import { getUnitById } from "@/lib/units-registry"

interface DynamicConverterClientProps {
  fromUnitId: string
  toUnitId: string
}

export default function DynamicConverterClient({ fromUnitId, toUnitId }: DynamicConverterClientProps) {
  const [inputValue, setInputValue] = useState("1")
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const performConversion = async (value: string) => {
    const numValue = Number.parseFloat(value)
    if (isNaN(numValue)) {
      setResult(null)
      return
    }

    setIsLoading(true)
    try {
      const conversionResult = await convertUnits(numValue, fromUnitId, toUnitId)
      setResult(conversionResult)
    } catch (error) {
      console.error("Conversion error:", error)
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    performConversion(inputValue)
  }, [inputValue, fromUnitId, toUnitId])

  const fromUnit = getUnitById(fromUnitId)
  const toUnit = getUnitById(toUnitId)

  if (!fromUnit || !toUnit) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🧮</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Units Not Found</h1>
          <p className="text-gray-600 mb-6">The units you're looking for don't exist in our registry.</p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            🏠 Go Home
          </a>
        </div>
      </div>
    )
  }

  if (fromUnit.category !== toUnit.category) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Incompatible Units</h1>
          <p className="text-gray-600 mb-6">
            Cannot convert between {fromUnit.category} and {toUnit.category}.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            🏠 Go Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {fromUnit.name} to {toUnit.name} Converter
        </h1>
        <p className="text-gray-600">Convert {fromUnit.category} units instantly with precise calculations</p>
      </div>

      {/* Converter Tool */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From: {fromUnit.name} ({fromUnit.symbol})
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Enter value"
            />
          </div>

          {/* Output */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To: {toUnit.name} ({toUnit.symbol})
            </label>
            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-lg font-medium">
              {isLoading ? (
                <span className="text-gray-500">Converting...</span>
              ) : result && result.isValid ? (
                <span className="text-gray-900">{formatNumber(result.value)}</span>
              ) : (
                <span className="text-red-500">{result?.error || "Invalid input"}</span>
              )}
            </div>
          </div>
        </div>

        {/* Formula */}
        {result && result.isValid && result.formula && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Conversion Formula:</h3>
            <p className="text-blue-800 font-mono">{result.formula}</p>
          </div>
        )}
      </div>

      {/* Quick Reference */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 5, 10, 100].map((value) => {
            const converted =
              result && result.isValid
                ? formatNumber((result.value * value) / Number.parseFloat(inputValue || "1"))
                : "0"
            return (
              <div key={value} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900">
                  {value} {fromUnit.symbol}
                </div>
                <div className="text-sm text-gray-600">=</div>
                <div className="font-medium text-blue-600">
                  {converted} {toUnit.symbol}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
