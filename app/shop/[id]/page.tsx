import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, ShoppingCart, Heart, Truck, Shield, Recycle } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Mock product data - in real app, fetch based on params.id
  const product = {
    id: 1,
    name: "Reclaimed Pallet Coffee Table",
    price: 450,
    originalPrice: 550,
    category: "Tables",
    inStock: true,
    rating: 4.8,
    reviews: 12,
    description:
      "This rustic coffee table is crafted from authentic shipping pallets, giving it a unique industrial character. Each piece tells a story of its previous life while serving as a beautiful centerpiece for your living space.",
    materials: ["Reclaimed pallet wood", "Steel hairpin legs", "Natural oil finish"],
    dimensions: {
      length: "120cm",
      width: "60cm",
      height: "45cm",
      weight: "25kg",
    },
    features: [
      "Handcrafted from authentic shipping pallets",
      "Steel hairpin legs for modern industrial look",
      "Natural oil finish protects and enhances wood grain",
      "Each piece is unique with natural variations",
      "Sustainable and eco-friendly construction",
    ],
    care: [
      "Dust regularly with soft cloth",
      "Reapply natural oil finish annually",
      "Avoid direct sunlight and moisture",
      "Use coasters to protect surface",
    ],
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
              <Link href="/about" className="text-stone-600 hover:text-stone-800 transition-colors">
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
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-stone-200 to-amber-100 rounded-2xl overflow-hidden shadow-xl mb-6">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-20 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg mx-auto mb-4"></div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-4 h-8 bg-stone-600 rounded-sm"></div>
                      <div className="w-4 h-8 bg-stone-600 rounded-sm"></div>
                      <div className="w-4 h-8 bg-stone-600 rounded-sm"></div>
                      <div className="w-4 h-8 bg-stone-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-stone-100 to-amber-50 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="h-full flex items-center justify-center">
                      <div className="w-8 h-5 bg-amber-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-stone-600">({product.reviews} reviews)</span>
              </div>

              <h1 className="text-4xl font-bold text-stone-800 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-amber-600">€{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-stone-400 line-through">€{product.originalPrice}</span>
                )}
                <Badge className="bg-green-100 text-green-800">In Stock</Badge>
              </div>

              <p className="text-lg text-stone-600 mb-8 leading-relaxed">{product.description}</p>

              {/* Add to Cart Section */}
              <div className="flex gap-4 mb-8">
                <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Features */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material) => (
                      <Badge key={material} variant="outline" className="px-3 py-1">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Dimensions</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-stone-700">Length:</span>
                      <span className="ml-2 text-stone-600">{product.dimensions.length}</span>
                    </div>
                    <div>
                      <span className="font-medium text-stone-700">Width:</span>
                      <span className="ml-2 text-stone-600">{product.dimensions.width}</span>
                    </div>
                    <div>
                      <span className="font-medium text-stone-700">Height:</span>
                      <span className="ml-2 text-stone-600">{product.dimensions.height}</span>
                    </div>
                    <div>
                      <span className="font-medium text-stone-700">Weight:</span>
                      <span className="ml-2 text-stone-600">{product.dimensions.weight}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Truck className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h4 className="font-bold text-stone-800 mb-2">Free Delivery</h4>
                <p className="text-stone-600 text-sm">
                  Free delivery within Bucharest. Installation available for additional fee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h4 className="font-bold text-stone-800 mb-2">6-Month Warranty</h4>
                <p className="text-stone-600 text-sm">
                  Comprehensive warranty covering craftsmanship and structural integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Recycle className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h4 className="font-bold text-stone-800 mb-2">Sustainable</h4>
                <p className="text-stone-600 text-sm">Made from 100% reclaimed materials with eco-friendly finishes.</p>
              </CardContent>
            </Card>
          </div>

          {/* Care Instructions */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Care Instructions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-stone-800 mb-4">Daily Care</h4>
                  <ul className="space-y-2">
                    {product.care.map((instruction) => (
                      <li key={instruction} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-stone-600">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-4">Need Help?</h4>
                  <p className="text-stone-600 mb-4">
                    Our team is here to help with any questions about care, maintenance, or repairs.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
