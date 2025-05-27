import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock, Ruler, Palette } from "lucide-react"

export default function CustomFurniturePage() {
  const projects = [
    {
      title: "Industrial Dining Set",
      description: "Complete dining set with reclaimed wood table and metal frame chairs",
      image: "/placeholder.svg?height=400&width=600",
      materials: ["Reclaimed oak planks", "Steel tube frame", "Industrial finish"],
      dimensions: "Table: 200x90x75cm, Chairs: 45x50x80cm",
      timeline: "6-8 weeks",
      priceRange: "€2,500 - €3,200",
    },
    {
      title: "Live Edge Office Desk",
      description: "Unique office desk featuring natural live edge and steel hairpin legs",
      image: "/placeholder.svg?height=400&width=600",
      materials: ["Live edge walnut slab", "Steel hairpin legs", "Natural oil finish"],
      dimensions: "160x80x75cm",
      timeline: "4-6 weeks",
      priceRange: "€1,800 - €2,400",
    },
    {
      title: "Modular Storage System",
      description: "Flexible storage solution combining shelving, cabinets, and display areas",
      image: "/placeholder.svg?height=400&width=600",
      materials: ["Reclaimed pine", "Steel brackets", "Custom hardware"],
      dimensions: "Customizable modular units",
      timeline: "8-10 weeks",
      priceRange: "€3,000 - €4,500",
    },
  ]

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your vision, space requirements, and functional needs",
      duration: "1-2 hours",
    },
    {
      step: 2,
      title: "Design Development",
      description: "3D modeling, material selection, and detailed planning",
      duration: "1-2 weeks",
    },
    {
      step: 3,
      title: "Material Sourcing",
      description: "Finding and preparing the perfect reclaimed materials",
      duration: "1-3 weeks",
    },
    {
      step: 4,
      title: "Crafting & Assembly",
      description: "Handcrafted construction in our workshop",
      duration: "2-6 weeks",
    },
    {
      step: 5,
      title: "Finishing & Quality Check",
      description: "Final finishing, quality inspection, and preparation",
      duration: "1 week",
    },
    {
      step: 6,
      title: "Delivery & Installation",
      description: "Professional delivery and setup in your space",
      duration: "1 day",
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800">Custom Furniture</Badge>
              <h1 className="text-5xl font-bold text-stone-800 mb-6">Fully Custom Furniture Design</h1>
              <p className="text-xl text-stone-600 mb-8">
                Transform your space with bespoke furniture pieces designed specifically for your needs, crafted from
                carefully selected reclaimed materials.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Ruler className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-stone-800">Perfect Fit</p>
                </div>
                <div className="text-center">
                  <Palette className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-stone-800">Your Style</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-stone-800">6-Month Warranty</p>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Start Your Project</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Custom furniture design process"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Recent Custom Projects</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Each piece is unique, designed and crafted specifically for our clients' spaces and needs.
            </p>
          </div>
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <h3 className="text-3xl font-bold text-stone-800 mb-4">{project.title}</h3>
                      <p className="text-lg text-stone-600 mb-6">{project.description}</p>
                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="font-medium text-stone-800 mb-2">Materials:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.materials.map((material) => (
                              <Badge key={material} variant="outline" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-stone-800">Dimensions:</p>
                            <p className="text-stone-600">{project.dimensions}</p>
                          </div>
                          <div>
                            <p className="font-medium text-stone-800">Timeline:</p>
                            <p className="text-stone-600">{project.timeline}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-stone-800">Price Range:</p>
                          <p className="text-amber-600 font-bold">{project.priceRange}</p>
                        </div>
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white w-fit">
                        Request Similar Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Custom Design Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From initial concept to final installation, we guide you through every step of creating your perfect
              piece.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && <div className="w-0.5 h-16 bg-stone-300 mx-auto mt-4"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-stone-800">{step.title}</h3>
                    <div className="flex items-center text-stone-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Features */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">What's Included</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-stone-700">Free initial consultation and space assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-stone-700">3D design renderings and material samples</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-stone-700">Handcrafted construction with premium materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-stone-700">Professional delivery and installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-stone-700">6-month warranty on craftsmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-stone-700">Care instructions and maintenance guide</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Starting Prices</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                  <span className="text-stone-700">Small pieces (stools, side tables)</span>
                  <span className="font-bold text-amber-600">€500+</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                  <span className="text-stone-700">Medium pieces (dining chairs, desks)</span>
                  <span className="font-bold text-amber-600">€1,200+</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                  <span className="text-stone-700">Large pieces (dining tables, wardrobes)</span>
                  <span className="font-bold text-amber-600">€2,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-700">Complete room sets</span>
                  <span className="font-bold text-amber-600">€5,000+</span>
                </div>
              </div>
              <p className="text-sm text-stone-500 mt-4">
                *Prices vary based on size, complexity, and materials. Free quote provided after consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Ready to Create Your Custom Piece?</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create furniture that perfectly fits your space and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
