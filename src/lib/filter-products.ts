import { ProductData } from "@/types/product"

interface Filters {
  priceRange: number[];
  categories: string[];
  colors: string[];
}

export function filterProducts(products: ProductData[], filters: Filters): ProductData[] {
  return products.filter(product => {
    const priceInRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category)
    const colorMatch = filters.colors.length === 0 || filters.colors.includes(product.color)

    return priceInRange && categoryMatch && colorMatch
  })
}

