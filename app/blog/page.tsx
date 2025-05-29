import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { ChevronRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Creative Ways to Repurpose Old Pallets",
      excerpt:
        "Discover innovative techniques for transforming discarded pallets into stunning furniture pieces. From coffee tables to vertical gardens, pallets offer endless possibilities for sustainable design.",
      content:
        "Shipping pallets are one of the most versatile reclaimed materials available to furniture makers and DIY enthusiasts. In this comprehensive guide, we'll explore five creative ways to transform these humble wooden structures into beautiful, functional furniture pieces...",
      image: "/placeholder.svg?height=400&width=600",
      category: "Inspiration",
      author: "Florin Ostafe",
      date: "March 15, 2025",
      readTime: "5 min read",
      tags: ["Pallets", "DIY", "Sustainability", "Upcycling"],
    },
    {
      id: 2,
      title: "Building Your First Reclaimed Wood Shelf",
      excerpt:
        "A step-by-step guide for beginners to create a beautiful floating shelf from reclaimed materials. Perfect for those new to woodworking and sustainable design.",
      content:
        "Creating your first piece of furniture from reclaimed wood is an incredibly rewarding experience. In this tutorial, we'll walk you through building a simple yet elegant floating shelf using reclaimed barn wood...",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFpBhH8Pxv1Aw/profile-displayphoto-shrink_400_400/B56ZNt03ojGgAg-/0/1732714449466?e=1753920000&v=beta&t=N1gHgbKlLcnpL8wi1SlyyOXl5u0mEjcRjKsdfyrHM2c",
      category: "Tutorial",
      author: "Ana Maria Soare",
      date: "March 10, 2025",
      readTime: "8 min read",
      tags: ["Tutorial", "Beginner", "Shelving", "Reclaimed Wood"],
    },
    {
      id: 3,
      title: "The Story Behind Our Bike Frame Table",
      excerpt:
        "Go behind the scenes of our most popular project - the bike frame dining table. Learn about the design process, challenges, and the story of transformation.",
      content:
        "When a client approached us with three vintage bike frames and a vision for a unique dining table, we knew this would be a special project. The challenge was to honor the industrial heritage of the bikes while creating a functional, beautiful piece of furniture...",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEKeGgPeGiUlA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712221296112?e=1753920000&v=beta&t=4WLidpV4sx2qN4ECuMeybAD8MlufGSLh2m4rkBwrzwc",
      category: "Process Stories",
      author: "Florin Ostafe",
      date: "March 5, 2025",
      readTime: "6 min read",
      tags: ["Case Study", "Custom Furniture", "Design Process", "Metal Work"],
    },
    {
      id: 4,
      title: "Sustainable Design: Why Reclaimed Materials Matter",
      excerpt:
        "Explore the environmental impact of furniture production and how choosing reclaimed materials can make a significant difference for our planet.",
      content:
        "The furniture industry has a significant environmental footprint, from deforestation to manufacturing emissions. By choosing reclaimed materials, we can dramatically reduce this impact while creating unique, characterful pieces...",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFpBhH8Pxv1Aw/profile-displayphoto-shrink_400_400/B56ZNt03ojGgAg-/0/1732714449466?e=1753920000&v=beta&t=N1gHgbKlLcnpL8wi1SlyyOXl5u0mEjcRjKsdfyrHM2c",
      category: "Inspiration",
      author: "Ana Maria Soare",
      date: "February 28, 2025",
      readTime: "7 min read",
      tags: ["Sustainability", "Environment", "Philosophy", "Impact"],
    },
    {
      id: 5,
      title: "Workshop Spotlight: Building Community Through Craft",
      excerpt:
        "Meet some of our workshop participants and discover how hands-on learning is building a community of sustainable makers in Bucharest.",
      content:
        "Our workshops are more than just learning experiences - they're community building events where like-minded individuals come together to learn, create, and share their passion for sustainable design...",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFpBhH8Pxv1Aw/profile-displayphoto-shrink_400_400/B56ZNt03ojGgAg-/0/1732714449466?e=1753920000&v=beta&t=N1gHgbKlLcnpL8wi1SlyyOXl5u0mEjcRjKsdfyrHM2c",
      category: "Process Stories",
      author: "Ana Maria Soare",
      date: "February 20, 2025",
      readTime: "4 min read",
      tags: ["Community", "Workshops", "Learning", "Stories"],
    },
    {
      id: 6,
      title: "Essential Tools for Reclaimed Wood Projects",
      excerpt:
        "A comprehensive guide to the tools you'll need for working with reclaimed wood, from basic hand tools to specialized equipment for restoration.",
      content:
        "Working with reclaimed wood requires a specific set of tools and techniques. Unlike new lumber, reclaimed wood often comes with nails, varying moisture content, and unique challenges that require the right approach...",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFpBhH8Pxv1Aw/profile-displayphoto-shrink_400_400/B56ZNt03ojGgAg-/0/1732714449466?e=1753920000&v=beta&t=N1gHgbKlLcnpL8wi1SlyyOXl5u0mEjcRjKsdfyrHM2c
        ",
      category: "Tutorial",
      author: "Florin Ostafe",
      date: "February 15, 2025",
      readTime: "10 min read",
      tags: ["Tools", "Tutorial", "Woodworking", "Equipment"],
    },
  ]

  const categories = ["All", "Inspiration", "Tutorial", "Process Stories"]

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
              <Link href="/workshops" className="text-stone-600 hover:text-stone-800 transition-colors">
                Workshops
              </Link>
              <Link href="/blog" className="text-amber-600 font-medium">
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
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Our Blog</h1>
            <p className="text-xl text-stone-600 mb-8">
              Inspiration, tutorials, and behind-the-scenes stories from our sustainable furniture workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <Button variant="outline">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Featured Article</Badge>
          </div>
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image || "https://plus.unsplash.com/premium_photo-1682145637222-1556eda23db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-green-100 text-green-800">{blogPosts[0].category}</Badge>
                  <h2 className="text-3xl font-bold text-stone-800 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-lg text-stone-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-stone-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white w-fit">
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "data:image/jpeg;base64,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"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <Badge
                      className={`mb-3 ${
                        post.category === "Inspiration"
                          ? "bg-green-100 text-green-800"
                          : post.category === "Tutorial"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-stone-800 mb-3">{post.title}</h3>
                    <p className="text-stone-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-stone-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Get the latest articles, project updates, and workshop announcements delivered to your inbox.
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
