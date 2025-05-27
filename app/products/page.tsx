import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const categories = [
    {
      title: "Custom Furniture",
      description: "Bespoke pieces designed specifically for your space and needs",
      image: "/placeholder.svg?height=400&width=600",
      href: "/products/custom-furniture",
      features: ["Fully customizable", "3D design preview", "Material consultation", "6-month warranty"],
    },
    {
      title: "Chairs",
      description: "Comfortable seating solutions from reclaimed materials",
      image: "/placeholder.svg?height=400&width=600",
      href: "/products/chairs",
      features: ["Ergonomic design", "Vintage materials", "Custom upholstery", "Stackable options"],
    },
    {
      title: "Tables",
      description: "Dining, coffee, and work tables with unique character",
      image: "/placeholder.svg?height=400&width=600",
      href: "/products/tables",
      features: ["Various sizes", "Live edge options", "Metal accents", "Extension capabilities"],
    },
    {
      title: "Shelving Units",
      description: "Storage solutions that double as artistic displays",
      image: "/placeholder.svg?height=400&width=600",
      href: "/products/shelving",
      features: ["Modular design", "Wall-mounted", "Freestanding", "Industrial style"],
    },
    {
      title: "One-Offs",
      description: "Unique pieces that can't be replicated",
      image: "/placeholder.svg?height=400&width=600",
      href: "/products/one-offs",
      features: ["Limited availability", "Artistic value", "Conversation pieces", "Investment quality"],
    },
  ]

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
              <Link href="/products" className="text-amber-600 font-medium">
                Products
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
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Request Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Our Products & Services</h1>
            <p className="text-xl text-stone-600 mb-8">
              From custom furniture to unique one-off pieces, every item is crafted with reclaimed materials and
              sustainable practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">100% Reclaimed Materials</Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Handcrafted Quality</Badge>
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2">Custom Design</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {categories.map((category, index) => (
              <Card key={category.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <h2 className="text-3xl font-bold text-stone-800 mb-4">{category.title}</h2>
                      <p className="text-lg text-stone-600 mb-6">{category.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {category.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                            <span className="text-stone-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                          <Link href={category.href}>
                            View Collection <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/contact">Request Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure transparency and quality at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Consultation</h3>
              <p className="text-stone-600">We discuss your vision, space, and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Design</h3>
              <p className="text-stone-600">3D modeling and material selection with your input</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Crafting</h3>
              <p className="text-stone-600">Handcrafted in our workshop with sustainable practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Delivery</h3>
              <p className="text-stone-600">Professional installation and 6-month warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's create something unique together. Get a personalized quote for your custom furniture project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
