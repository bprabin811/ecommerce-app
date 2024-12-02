
'use client'

import { useState } from 'react'
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"
import { filterProducts } from '@/lib/filter-products'
import { ProductFilters } from '@/components/product-filters'

type Filters = {
  priceRange: [number, number];
  categories: string[];
  colors: string[];
};


export default function ProductsPage() {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 1000],
    categories: [],
    colors: []
  })

  const filteredProducts = filterProducts(products, filters)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 order-1 lg:order-none">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </div>
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

