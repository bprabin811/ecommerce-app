'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductData } from "@/types/product"
import { useCart } from "@/contexts/CartContext"
import { ShoppingCart, Check, Eye } from 'lucide-react'

export function ProductCard({ product }: { product: ProductData }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Card className="flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Link href={`/products/${product.id}`} className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button variant="secondary" size="sm" className="font-semibold">
                <Eye className="mr-2 h-4 w-4" /> View details
              </Button>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              New
            </Badge>
          </div>
          <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full font-semibold transition-all duration-300"
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

