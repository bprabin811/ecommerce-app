"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShoppingBag, User, Search, Menu } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MainNav } from "./main-nav"
import { CartIcon } from "./cartIcon"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold inline-block">STORE</span>
        </Link>
        <MainNav className="hidden md:flex" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 px-0">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Search products</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSearch} className="grid gap-4 py-4">
                  <Input
                    id="search"
                    placeholder="What are you looking for?"
                    className="col-span-3"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit">Search</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="icon" className="w-9 px-0">
              <User className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>
            <Link href={'/cart'}>
              <Button variant="ghost" size="icon" className="w-9 px-0">
                <CartIcon />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <nav className="flex flex-col space-y-4">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/categories"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Categories
      </Link>
      <Link
        href="/deals"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Deals
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
    </nav>
  )
}

