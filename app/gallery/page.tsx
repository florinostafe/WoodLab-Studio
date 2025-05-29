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
      image: "https://www.familyhandyman.com/wp-content/uploads/2022/10/GettyImages-1391067760.jpg",
      description: "Vintage bike frames transformed into a stunning dining table",
      materials: ["Steel bike frames", "Reclaimed oak", "Eco-friendly finish"],
      year: "2024",
    },
    {
      id: 2,
      title: "Pallet Wood Bookshelf",
      category: "shelving",
      image: "https://media.istockphoto.com/id/481628382/photo/carpenter-taking-measurement.jpg?s=612x612&w=0&k=20&c=l2cAPfJL2bGltBasmnqUlsz2OHv6H6bUzjzhx0feOJg=",
      description: "Industrial-style bookshelf from shipping pallets",
      materials: ["Shipping pallets", "Steel brackets", "Natural oil finish"],
      year: "2024",
    },
    {
      id: 3,
      title: "Reclaimed Door Coffee Table",
      category: "tables",
      image: "https://img.freepik.com/free-photo/handsome-carpenter-working-with-wood_1157-26130.jpg?semt=ais_hybrid&w=740",
      description: "Antique door repurposed as a unique coffee table",
      materials: ["Antique wooden door", "Steel hairpin legs", "Glass top"],
      year: "2024",
    },
    {
      id: 4,
      title: "Industrial Bar Stools",
      category: "chairs",
      image: "data:image/jpeg;base64,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",
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
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprdFTxkf6c0zwMnhiymuwZWfDkqpQzGMjiw&s"}
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
                      src={video.thumbnail || "https://www.familyhandyman.com/wp-content/uploads/2022/10/GettyImages-1391067760.jpg"}
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
