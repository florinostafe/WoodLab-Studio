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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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
                    src={blogPosts[0].image || "/placeholder.svg"}
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
                      src={post.image || "/placeholder.svg"}
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
