'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from "@/contexts/CartContext"

export function CartIcon() {
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="relative">
      <ShoppingBag className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  )
}

