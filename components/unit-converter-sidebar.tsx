"use client"
import { useState, useMemo, useCallback } from "react"
import { Search, ArrowRightLeft, Calculator } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarInput,
} from "@/components/ui/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"

import { categories, units, popularPairs, getUnitsByCategory, searchUnits } from "@/lib/units-registry"

interface UnitConverterSidebarProps {
  className?: string
}

export function UnitConverterSidebar({ className }: UnitConverterSidebarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [fromUnit, setFromUnit] = useState("")
  const [toUnit, setToUnit] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["length", "weight", "temperature"]),
  )
  const [isNavigating, setIsNavigating] = useState(false)

  // Filter units based on search query
  const filteredUnits = useMemo(() => {
    if (!searchQuery.trim()) return []
    return searchUnits(searchQuery).slice(0, 8) // Limit results
  }, [searchQuery])

  // Get units for dropdowns (popular ones first)
  const allUnits = useMemo(() => {
    const popularUnitIds = new Set(popularPairs.flatMap((pair) => [pair.from, pair.to]))
    const popularUnits = units.filter((unit) => popularUnitIds.has(unit.id))
    const otherUnits = units.filter((unit) => !popularUnitIds.has(unit.id))
    return [...popularUnits, ...otherUnits]
  }, [])

  const navigateToConverter = useCallback(
    (url: string) => {
      if (isNavigating) {
        console.log("[v0] Navigation already in progress, skipping:", url)
        return
      }

      console.log("[v0] Navigating to:", url)
      setIsNavigating(true)

      // Add a small delay to prevent rapid navigation
      setTimeout(() => {
        router.push(url)
        // Reset navigation state after a delay
        setTimeout(() => setIsNavigating(false), 1000)
      }, 100)
    },
    [router, isNavigating],
  )

  const handleQuickConvert = useCallback(() => {
    if (fromUnit && toUnit && fromUnit !== toUnit) {
      navigateToConverter(`/converters/${fromUnit}-to-${toUnit}`)
    }
  }, [fromUnit, toUnit, navigateToConverter])

  const handleSwapUnits = () => {
    const temp = fromUnit
    setFromUnit(toUnit)
    setToUnit(temp)
  }

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  const handleUnitClick = useCallback(
    (unitId: string) => {
      // Find a popular conversion pair for this unit, or create a default one
      const popularPair = popularPairs.find((pair) => pair.from === unitId || pair.to === unitId)
      if (popularPair) {
        navigateToConverter(`/converters/${popularPair.from}-to-${popularPair.to}`)
      } else {
        // Create a default conversion with the first unit of the same category
        const unit = units.find((u) => u.id === unitId)
        if (unit) {
          const categoryUnits = getUnitsByCategory(unit.category)
          const otherUnit = categoryUnits.find((u) => u.id !== unitId) || categoryUnits[0]
          if (otherUnit && otherUnit.id !== unitId) {
            navigateToConverter(`/converters/${unitId}-to-${otherUnit.id}`)
          }
        }
      }
    },
    [navigateToConverter],
  )

  return (
    <Sidebar className={className}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <Calculator className="size-5 text-primary" />
          <Link href="/" className="font-semibold text-lg hover:text-primary transition-colors">
            Unit Converter
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Quick Convert Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Convert</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3 p-2">
              <div className="space-y-2">
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="From unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {allUnits.map((unit) => (
                      <SelectItem key={unit.id} value={unit.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{unit.name}</span>
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {unit.symbol}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSwapUnits}
                    className="h-6 w-6 p-0 transition-all duration-150"
                    disabled={!fromUnit || !toUnit}
                  >
                    <ArrowRightLeft className="size-3" />
                  </Button>
                </div>

                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="To unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {allUnits.map((unit) => (
                      <SelectItem key={unit.id} value={unit.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{unit.name}</span>
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {unit.symbol}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleQuickConvert}
                disabled={!fromUnit || !toUnit || fromUnit === toUnit || isNavigating}
                className="w-full h-8 transition-all duration-150"
                size="sm"
              >
                {isNavigating ? "Loading..." : "Convert"}
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Search Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Search Units</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="p-2">
              <div className="relative">
                <Search className="absolute left-2 top-2 size-4 text-muted-foreground" />
                <SidebarInput
                  placeholder="Search units..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 transition-all duration-150"
                />
              </div>

              {filteredUnits.length > 0 && (
                <div className="mt-2 space-y-1">
                  {filteredUnits.map((unit) => (
                    <button
                      key={unit.id}
                      onClick={() => handleUnitClick(unit.id)}
                      className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent text-sm transition-all duration-150 cursor-pointer"
                    >
                      <div className="text-left">
                        <div className="font-medium">{unit.name}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {unit.category.replace("_", " ")}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {unit.symbol}
                      </Badge>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Popular Conversions */}
        <SidebarGroup>
          <SidebarGroupLabel>Popular Conversions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {popularPairs.slice(0, 8).map((pair) => (
                <SidebarMenuItem key={`${pair.from}-${pair.to}`}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={`/converters/${pair.from}-to-${pair.to}`}
                      className="transition-all duration-150 hover:bg-accent"
                    >
                      <span className="text-sm">{pair.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Categories */}
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => {
                const categoryUnits = getUnitsByCategory(category.id)
                const isExpanded = expandedCategories.has(category.id)
                const firstTwoUnits = categoryUnits.slice(0, 2)
                const defaultConverterUrl =
                  firstTwoUnits.length >= 2
                    ? `/converters/${firstTwoUnits[0].id}-to-${firstTwoUnits[1].id}`
                    : `/converters/${categoryUnits[0]?.id}-to-${categoryUnits[0]?.id}`

                return (
                  <SidebarMenuItem key={category.id}>
                    <Collapsible open={isExpanded} onOpenChange={() => toggleCategory(category.id)}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between transition-all duration-150">
                          <Link
                            href={defaultConverterUrl}
                            className="flex-1 text-left hover:text-primary transition-colors duration-150"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {category.name}
                          </Link>
                          <div className="flex items-center gap-1">
                            <Badge variant="secondary" className="text-xs">
                              {categoryUnits.length}
                            </Badge>
                            <ChevronRight
                              className={`size-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                            />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="transition-all duration-200">
                        <div className="ml-4 mt-1 space-y-1">
                          {categoryUnits.slice(0, 6).map((unit) => (
                            <button
                              key={unit.id}
                              onClick={() => handleUnitClick(unit.id)}
                              className="w-full flex items-center justify-between p-1 rounded text-sm hover:bg-accent transition-all duration-150 cursor-pointer"
                            >
                              <span className="text-muted-foreground">{unit.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {unit.symbol}
                              </Badge>
                            </button>
                          ))}
                          {categoryUnits.length > 6 && (
                            <div className="text-xs text-muted-foreground p-1">
                              +{categoryUnits.length - 6} more units
                            </div>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
