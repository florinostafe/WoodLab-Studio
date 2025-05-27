import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, Heart, Users, Award, ArrowRight, TreePine } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Recycle,
      title: "Sustainability First",
      description: "Every piece we create gives new life to materials that would otherwise be discarded.",
    },
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "We pour our love for woodworking and design into every project, big or small.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building connections through workshops, education, and shared creative experiences.",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "Uncompromising standards in materials, craftsmanship, and customer service.",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Florin started WoodLab Studio in a small garage, transforming his first pallet into a coffee table.",
    },
    {
      year: "2021",
      title: "First Workshop",
      description: "Moved to a proper workshop space and welcomed our first students for DIY classes.",
    },
    {
      year: "2022",
      title: "Growing Community",
      description: "Ana Maria joined the team, and we expanded our workshop program significantly.",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Featured in Romanian design magazines and won the Sustainable Design Award.",
    },
    {
      year: "2024",
      title: "Major Expansion",
      description: "Completed over 150 custom projects and taught 750+ students in our workshops.",
    },
    {
      year: "2025",
      title: "New Chapter",
      description: "Launching our enhanced online presence and expanding our reach across Romania.",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <TreePine className="h-5 w-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-stone-800">WoodLab Studio</div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-amber-600 font-medium">
                About
              </Link>
              <Link href="/products" className="text-stone-600 hover:text-stone-800 transition-colors">
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
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-stone-800 mb-6">Our Story</h1>
              <p className="text-xl text-stone-600 mb-8">
                WoodLab Studio was born from a simple belief: that discarded materials can become beautiful, functional
                furniture when combined with creativity, skill, and passion for sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">150+</div>
                  <div className="text-stone-600">Custom Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">750+</div>
                  <div className="text-stone-600">Students Taught</div>
                </div>
              </div>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <TreePine className="h-24 w-24 text-amber-600 mx-auto mb-4" />
                    <p className="text-stone-700 font-semibold">Sustainable Design</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">Est. 2020</p>
                  <p className="text-amber-100">Bucharest, Romania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-8">Our Mission</h2>
          <blockquote className="text-2xl text-stone-700 italic max-w-4xl mx-auto leading-relaxed">
            "To transform forgotten materials into meaningful furniture that tells stories, builds community, and
            inspires a more sustainable way of living."
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">What Drives Us</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our values guide every decision we make, from material selection to customer relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{value.title}</h3>
                  <p className="text-stone-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The passionate individuals behind every piece of furniture and workshop experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-700">FO</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Florin Ostafe</h3>
                <p className="text-amber-600 font-medium mb-4">Creative Director & Furniture Designer</p>
                <p className="text-stone-600 mb-6">
                  With over 10 years in furniture design, Florin combines traditional craftsmanship with innovative
                  sustainable practices. His passion for reclaimed materials started during his architecture studies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Furniture Design</Badge>
                  <Badge variant="outline">Sustainable Materials</Badge>
                  <Badge variant="outline">Woodworking</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-700">AS</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Ana Maria Soare</h3>
                <p className="text-amber-600 font-medium mb-4">Community Manager & Workshop Coordinator</p>
                <p className="text-stone-600 mb-6">
                  Ana Maria brings energy and organization to our workshop programs. Her background in education and
                  passion for DIY culture helps create engaging learning experiences for all skill levels.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Workshop Design</Badge>
                  <Badge variant="outline">Community Building</Badge>
                  <Badge variant="outline">Education</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Journey</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From a small garage workshop to a thriving community of sustainable makers.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-stone-300 mx-auto mt-4"></div>}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Environmental Impact</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Every piece we create represents materials saved from landfills and forests preserved.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">3.2 tons</div>
              <div className="text-stone-700">Wood Reclaimed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-stone-700">Pallets Upcycled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">75+</div>
              <div className="text-stone-700">Metal Pieces Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-stone-700">Eco-Friendly Finishes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Story</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for custom furniture or want to learn sustainable making techniques, we'd love to be
            part of your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800"
            >
              <Link href="/workshops">Join a Workshop</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
