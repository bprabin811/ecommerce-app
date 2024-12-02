'use client'
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { useCart } from "@/contexts/CartContext"
import { use, useState } from "react"
import { Check, ShoppingCart } from "lucide-react"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using React.use()
  const { id } = use(params)

  // Parse the id to a number
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    notFound()
  }

  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }
  
  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-700">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <div className="space-y-2">
            <p><span className="font-semibold text-gray-700">Category:</span> {product.category}</p>
            <p><span className="font-semibold text-gray-700">Color:</span> {product.color}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <Button 
            className="font-semibold transition-all duration-300"
            size={'lg'}
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
        </div>
      </div>
    </div>
  )
}