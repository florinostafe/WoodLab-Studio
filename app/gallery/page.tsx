"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: "Bike Frame Dining Table",
      category: "tables",
      image: "/placeholder.svg?height=400&width=600",
      description: "Vintage bike frames transformed into a stunning dining table",
      materials: ["Steel bike frames", "Reclaimed oak", "Eco-friendly finish"],
      year: "2024",
    },
    {
      id: 2,
      title: "Pallet Wood Bookshelf",
      category: "shelving",
      image: "/placeholder.svg?height=400&width=600",
      description: "Industrial-style bookshelf from shipping pallets",
      materials: ["Shipping pallets", "Steel brackets", "Natural oil finish"],
      year: "2024",
    },
    {
      id: 3,
      title: "Reclaimed Door Coffee Table",
      category: "tables",
      image: "/placeholder.svg?height=400&width=600",
      description: "Antique door repurposed as a unique coffee table",
      materials: ["Antique wooden door", "Steel hairpin legs", "Glass top"],
      year: "2024",
    },
    {
      id: 4,
      title: "Industrial Bar Stools",
      category: "chairs",
      image: "/placeholder.svg?height=400&width=600",
      description: "Bar stools crafted from reclaimed metal and wood",
      materials: ["Reclaimed steel", "Barn wood seats", "Industrial finish"],
      year: "2024",
    },
    {
      id: 5,
      title: "Floating Corner Shelves",
      category: "shelving",
      image: "/placeholder.svg?height=400&width=600",
      description: "Minimalist floating shelves from reclaimed beams",
      materials: ["Reclaimed wooden beams", "Hidden brackets", "Natural wax"],
      year: "2024",
    },
    {
      id: 6,
      title: "Vintage Suitcase Chair",
      category: "one-offs",
      image: "/placeholder.svg?height=400&width=600",
      description: "One-of-a-kind chair from a vintage leather suitcase",
      materials: ["Vintage leather suitcase", "Steel frame", "Cushion padding"],
      year: "2024",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "Bike Frame Table Creation Process",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Workshop Tour & Philosophy",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "2:30",
    },
    {
      id: 3,
      title: "Pallet Transformation Timelapse",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "1:20",
    },
  ]

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") {
        setSelectedImage(null)
      } else if (e.key === "ArrowLeft" && selectedImage > 0) {
        setSelectedImage(selectedImage - 1)
      } else if (e.key === "ArrowRight" && selectedImage < filteredProjects.length - 1) {
        setSelectedImage(selectedImage + 1)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, filteredProjects.length])

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
              <Link href="/gallery" className="text-amber-600 font-medium">
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
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Project Gallery</h1>
            <p className="text-xl text-stone-600 mb-8">
              Explore our collection of transformed furniture pieces, each with its own unique story and sustainable
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "tables" ? "default" : "outline"}
              onClick={() => setFilter("tables")}
              className={filter === "tables" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Tables
            </Button>
            <Button
              variant={filter === "chairs" ? "default" : "outline"}
              onClick={() => setFilter("chairs")}
              className={filter === "chairs" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Chairs
            </Button>
            <Button
              variant={filter === "shelving" ? "default" : "outline"}
              onClick={() => setFilter("shelving")}
              className={filter === "shelving" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Shelving
            </Button>
            <Button
              variant={filter === "one-offs" ? "default" : "outline"}
              onClick={() => setFilter("one-offs")}
              className={filter === "one-offs" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              One-Offs
            </Button>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(index)}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-stone-800">{project.year}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{project.title}</h3>
                    <p className="text-stone-600 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-stone-700">Materials:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.materials.map((material) => (
                          <Badge key={material} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Process Videos</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Watch our furniture transformation process and get a behind-the-scenes look at our workshop.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-stone-800 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/70 text-white">{video.duration}</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-stone-800">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-stone-200 to-amber-100 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <div className="w-24 h-16 bg-amber-600 rounded-lg mx-auto mb-4"></div>
                  <p className="font-medium">{filteredProjects[selectedImage].title}</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-t from-black/70 to-transparent absolute bottom-0 left-0 right-0">
                <h3 className="text-xl font-bold text-white mb-2">{filteredProjects[selectedImage].title}</h3>
                <p className="text-gray-200">{filteredProjects[selectedImage].description}</p>
              </div>
            </div>
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}
            {selectedImage < filteredProjects.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
