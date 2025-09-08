export type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  return inputs.flat().filter(Boolean).join(" ").replace(/\s+/g, " ").trim()
}

export type VariantProps<T extends (...args: any) => any> = Omit<Parameters<T>[0], "class" | "className">

export function cva(
  base?: ClassValue,
  config?: {
    variants?: Record<string, Record<string, ClassValue>>
    defaultVariants?: Record<string, string>
  },
) {
  return (props?: Record<string, any>) => {
    if (!config?.variants) return cn(base)

    const { variants, defaultVariants } = config
    const classes: ClassValue[] = [base]

    // Apply variant classes
    Object.entries(variants).forEach(([key, variantMap]) => {
      const value = props?.[key] ?? defaultVariants?.[key]
      if (value && variantMap[value]) {
        classes.push(variantMap[value])
      }
    })

    return cn(classes, props?.className)
  }
}
