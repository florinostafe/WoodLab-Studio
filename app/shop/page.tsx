"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Search, Filter, ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Reclaimed Pallet Coffee Table",
      price: 450,
      originalPrice: 550,
      image: "/placeholder.svg?height=300&width=400",
      category: "Tables",
      inStock: true,
      rating: 4.8,
      reviews: 12,
      description: "Rustic coffee table made from shipping pallets with steel hairpin legs",
      materials: ["Reclaimed pallet wood", "Steel hairpin legs", "Natural oil finish"],
    },
    {
      id: 2,
      name: "Industrial Bar Stool Set",
      price: 320,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=400",
      category: "Chairs",
      inStock: true,
      rating: 4.9,
      reviews: 8,
      description: "Set of 2 bar stools with reclaimed wood seats and metal frames",
      materials: ["Reclaimed barn wood", "Steel frame", "Industrial finish"],
    },
    {
      id: 3,
      name: "Floating Corner Shelves",
      price: 180,
      originalPrice: 220,
      image: "/placeholder.svg?height=300&width=400",
      category: "Shelving",
      inStock: false,
      rating: 4.7,
      reviews: 15,
      description: "Set of 3 floating shelves perfect for corners",
      materials: ["Reclaimed oak", "Hidden brackets", "Natural wax finish"],
    },
    {
      id: 4,
      name: "Vintage Door Side Table",
      price: 280,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=400",
      category: "Tables",
      inStock: true,
      rating: 5.0,
      reviews: 6,
      description: "Unique side table made from antique door with original hardware",
      materials: ["Antique wooden door", "Original hardware", "Protective finish"],
    },
    {
      id: 5,
      name: "Pipe & Wood Bookshelf",
      price: 650,
      originalPrice: 750,
      image: "/placeholder.svg?height=300&width=400",
      category: "Shelving",
      inStock: true,
      rating: 4.6,
      reviews: 9,
      description: "Industrial bookshelf combining reclaimed wood and steel pipes",
      materials: ["Reclaimed pine planks", "Steel pipes", "Industrial brackets"],
    },
    {
      id: 6,
      name: "Suitcase Storage Ottoman",
      price: 220,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=400",
      category: "One-Offs",
      inStock: true,
      rating: 4.8,
      reviews: 4,
      description: "Vintage suitcase transformed into storage ottoman",
      materials: ["Vintage leather suitcase", "Cushion padding", "Storage compartment"],
    },
  ]

  const categories = ["All", "Tables", "Chairs", "Shelving", "One-Offs"]

  const [cart, setCart] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (productId: number) => {
    setCart((prev) => [...prev, productId])
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-stone-800">
              WoodLab Studio
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-stone-600 hover:text-stone-800 transition-colors">
                About
              </Link>
              <Link href="/products" className="text-stone-600 hover:text-stone-800 transition-colors">
                Products
              </Link>
              <Link href="/shop" className="text-amber-600 font-medium">
                Shop
              </Link>
              <Link href="/gallery" className="text-stone-600 hover:text-stone-800 transition-colors">
                Gallery
              </Link>
              <Link href="/workshops" className="text-stone-600 hover:text-stone-800 transition-colors">
                Workshops
              </Link>
              <Link href="/blog" className="text-stone-600 hover:text-stone-800 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-stone-600 hover:text-stone-800 transition-colors">
                Contact
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cart.length})
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Ready-Made Furniture</h1>
            <p className="text-xl text-stone-600 mb-8">
              Unique pieces available for immediate purchase. Each item is handcrafted from reclaimed materials and
              ready to transform your space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Ready to Ship</Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">One-of-a-Kind</Badge>
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2">6-Month Warranty</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={category === selectedCategory ? "bg-amber-600 hover:bg-amber-700" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {product.inStock ? "In Stock" : "Sold Out"}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-red-100 text-red-800">Save €{product.originalPrice - product.price}</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-stone-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-stone-600">({product.reviews})</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
                    <p className="text-stone-600 mb-4 text-sm">{product.description}</p>
                    <div className="mb-4">
                      <p className="text-xs font-medium text-stone-700 mb-1">Materials:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.materials.slice(0, 2).map((material) => (
                          <Badge key={material} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                        {product.materials.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.materials.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-amber-600">€{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-stone-400 line-through">€{product.originalPrice}</span>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                        disabled={!product.inStock}
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Sold Out"}
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/shop/${product.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-lg bg-amber-50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Don't See What You're Looking For?</h2>
              <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                Every piece in our shop is unique, but if you have something specific in mind, we'd love to create a
                custom piece just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Request Custom Quote</Button>
                <Button variant="outline">Browse Custom Furniture</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Notified of New Arrivals</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Be the first to know when new unique pieces are added to our shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white text-stone-800" />
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
