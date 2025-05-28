import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, CheckCircle, Star } from "lucide-react"

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: "Beginner's Pallet Furniture Workshop",
      description: "Learn the basics of working with reclaimed pallets to create a simple coffee table or shelf.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "4 hours",
      maxParticipants: 8,
      price: "€85",
      level: "Beginner",
      includes: ["All materials", "Tool usage", "Safety equipment", "Refreshments", "Take-home project"],
      nextDates: ["April 12, 2025", "April 26, 2025", "May 10, 2025"],
      rating: 4.9,
      reviews: 24,
      inStock: true,
    },
    {
      id: 2,
      title: "Intermediate Wood Joinery Techniques",
      description: "Master traditional joinery methods for creating strong, beautiful connections in reclaimed wood.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "6 hours",
      maxParticipants: 6,
      price: "€125",
      level: "Intermediate",
      includes: ["Premium materials", "Advanced tools", "Personal guidance", "Lunch included", "Certificate"],
      nextDates: ["April 19, 2025", "May 3, 2025", "May 17, 2025"],
      rating: 4.8,
      reviews: 18,
      inStock: false,
    },
    {
      id: 3,
      title: "Metal & Wood Fusion Workshop",
      description: "Combine reclaimed metal and wood to create industrial-style furniture pieces.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "8 hours (2 days)",
      maxParticipants: 6,
      price: "€195",
      level: "Advanced",
      includes: ["All materials", "Welding instruction", "Safety gear", "2 meals", "Advanced techniques"],
      nextDates: ["April 20-21, 2025", "May 4-5, 2025", "May 18-19, 2025"],
      rating: 5.0,
      reviews: 12,
      inStock: true,
    },
    {
      id: 4,
      title: "Family DIY Workshop",
      description: "A fun workshop designed for families to work together on simple, safe projects.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "3 hours",
      maxParticipants: 12,
      price: "€60 per family",
      level: "All Ages",
      includes: ["Family-friendly tools", "Simple projects", "Safety supervision", "Snacks", "Family photo"],
      nextDates: ["April 13, 2025", "April 27, 2025", "May 11, 2025"],
      rating: 4.7,
      reviews: 31,
      inStock: true,
    },
  ]

  const testimonials = [
    {
      name: "Maria Popescu",
      workshop: "Beginner's Pallet Workshop",
      rating: 5,
      comment:
        "Amazing experience! Florin was so patient and knowledgeable. I never thought I could build furniture, but I left with a beautiful coffee table and so much confidence.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Alexandru Ionescu",
      workshop: "Metal & Wood Fusion",
      rating: 5,
      comment:
        "The advanced workshop exceeded my expectations. Learning to weld and combine materials opened up so many possibilities for my home projects.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "The Dumitrescu Family",
      workshop: "Family DIY Workshop",
      rating: 5,
      comment:
        "Our kids (ages 8 and 12) had such a blast! It was educational, safe, and we created something beautiful together. Highly recommend for families.",
      image: "/placeholder.svg?height=60&width=60",
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
              <Link href="/products" className="text-stone-600 hover:text-stone-800 transition-colors">
                Products
              </Link>
              <Link href="/gallery" className="text-stone-600 hover:text-stone-800 transition-colors">
                Gallery
              </Link>
              <Link href="/workshops" className="text-amber-600 font-medium">
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
              <h1 className="text-5xl font-bold text-stone-800 mb-6">DIY Workshops</h1>
              <p className="text-xl text-stone-600 mb-8">
                Learn sustainable furniture making in our hands-on workshops. From beginner-friendly projects to
                advanced techniques, discover the joy of creating with reclaimed materials.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-stone-600">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">4.8★</div>
                  <div className="text-stone-600">Average Rating</div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">View All Workshops</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Workshop participant"
                width={200}
                height={250}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Workshop in progress"
                width={200}
                height={250}
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Listings */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Available Workshops</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose from our range of workshops designed for different skill levels and interests.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={workshop.image || "https://plus.unsplash.com/premium_photo-1682145637222-1556eda23db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt={workshop.title}
                        fill
                        className="object-cover rounded-l-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            workshop.level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : workshop.level === "Intermediate"
                                ? "bg-blue-100 text-blue-800"
                                : workshop.level === "Advanced"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {workshop.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(workshop.rating) ? "text-amber-400 fill-current" : "text-stone-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-stone-600">({workshop.reviews} reviews)</span>
                      </div>
                      <h3 className="text-xl font-bold text-stone-800 mb-3">{workshop.title}</h3>
                      <p className="text-stone-600 mb-4">{workshop.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-stone-600">
                          <Clock className="h-4 w-4" />
                          <span>{workshop.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-stone-600">
                          <Users className="h-4 w-4" />
                          <span>Max {workshop.maxParticipants} participants</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-stone-600">
                          <Calendar className="h-4 w-4" />
                          <span>Next: {workshop.nextDates[0]}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-stone-700 mb-2">Includes:</p>
                        <div className="space-y-1">
                          {workshop.includes.slice(0, 3).map((item) => (
                            <div key={item} className="flex items-center space-x-2 text-sm text-stone-600">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-amber-600">{workshop.price}</div>
                        <Button
                          asChild
                          className="bg-amber-600 hover:bg-amber-700 text-white"
                          disabled={!workshop.inStock}
                        >
                          <Link href={`/workshops/book?workshop=${workshop.id}`}>
                            {workshop.inStock ? "Book Now" : "Sold Out"}
                          </Link>
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

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">What to Expect</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our workshops are designed to be educational, safe, and fun for all skill levels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Small Groups</h3>
              <p className="text-stone-600">
                Maximum 8 participants ensures personalized attention and hands-on guidance from our expert instructors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Everything Included</h3>
              <p className="text-stone-600">
                All tools, materials, safety equipment, and refreshments are provided. Just bring your enthusiasm!
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Take Home Your Creation</h3>
              <p className="text-stone-600">
                Every workshop includes a project you'll complete and take home, plus new skills for future projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">What Our Students Say</h2>
            <p className="text-lg text-stone-600">Real feedback from our workshop participants</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={testimonial.image || "https://images.unsplash.com/photo-1497219055242-93359eeed651?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-stone-800">{testimonial.name}</p>
                      <p className="text-sm text-stone-600">{testimonial.workshop}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-amber-400 fill-current" : "text-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Private & Corporate Workshops</h2>
              <p className="text-lg text-stone-600 mb-6">
                Perfect for team building, birthday parties, or special events. We can customize the workshop content
                and project based on your group's interests and skill level.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Customized projects and difficulty levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Flexible scheduling including evenings and weekends</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Groups of 4-12 people</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Catering options available</span>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Request Private Workshop</Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1544164560-adac3045edb2?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Workshop gallery"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Ready to Start Creating?</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Join our community of makers and learn sustainable furniture techniques in a supportive, hands-on
            environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/workshops">Book Your Workshop</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact for Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
