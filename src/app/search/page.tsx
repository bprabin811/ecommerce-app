'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ProductData } from "@/types/product"
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/data'

async function searchProducts(query: string): Promise<ProductData[]> {
  await new Promise(resolve => setTimeout(resolve, 500))

  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<ProductData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    searchProducts(query).then(products => {
      setResults(products)
      setIsLoading(false)
    })
  }, [query])

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">{`Search Results for ${query}`}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>{`No results found for ${query}. Please try a different search term.`}</p>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<p>Loading search results...</p>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}