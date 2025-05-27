"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  ArrowRight,
  Recycle,
  Hammer,
  Users,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Upload,
  ChevronRight,
  Star,
  Award,
  Leaf,
  Heart,
  Zap,
  TreePine,
  Wrench,
  Palette,
} from "lucide-react"

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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
              <Link href="/about" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/products" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                Products
              </Link>
              <Link href="/shop" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                Shop
              </Link>
              <Link href="/gallery" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                Gallery
              </Link>
              <Link href="/workshops" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                Workshops
              </Link>
              <Link href="/blog" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-stone-600 hover:text-amber-600 transition-colors font-medium">
                Contact
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-amber-300 rounded-lg rotate-45 animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-amber-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-amber-400 rounded-lg animate-pulse"></div>
          </div>
          {/* Wood grain pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(245, 158, 11, 0.1) 2px,
              rgba(245, 158, 11, 0.1) 4px
            )`,
            }}
          ></div>
        </div>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Badge className="bg-amber-600/20 text-amber-200 border-amber-400/30 mb-6 px-4 py-2 text-sm">
              🌱 Sustainable Furniture Design Since 2020
            </Badge>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            From <span className="text-amber-400">Scrap</span> to Story.
            <br />
            From <span className="text-amber-400">Story</span> to Furniture.
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-stone-200 max-w-3xl mx-auto leading-relaxed">
            WoodLab Studio gives forgotten objects new life, crafting bold furniture that tells your story — and ours.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">150+</div>
              <div className="text-stone-300 text-sm">Custom Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">750+</div>
              <div className="text-stone-300 text-sm">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">3.2T</div>
              <div className="text-stone-300 text-sm">Wood Reclaimed</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg shadow-xl"
            >
              <Link href="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 text-lg backdrop-blur-sm font-semibold"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Process
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-amber-100 text-amber-800 px-4 py-2">Our Philosophy</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8 leading-tight">
                Sustainable Design with a <span className="text-amber-600">Maker's Spirit</span>
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                We're a designer-led studio with a maker's spirit, transforming reclaimed materials into bold, custom
                furniture. Every piece tells a story of sustainability, craftsmanship, and unconventional beauty.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Recycle className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-stone-800">100% Reclaimed</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Hammer className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-stone-800">Handcrafted</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-stone-800">Community</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-900 hover:to-black text-white px-8 py-3"
              >
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              {/* Creative visual element instead of image */}
              <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Workshop tools illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 opacity-20">
                    <Hammer className="h-16 w-16 text-amber-600" />
                    <Wrench className="h-16 w-16 text-stone-600" />
                    <Palette className="h-16 w-16 text-amber-600" />
                    <TreePine className="h-16 w-16 text-green-600" />
                    <Heart className="h-16 w-16 text-red-500" />
                    <Leaf className="h-16 w-16 text-green-600" />
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-stone-800">75+ Projects</p>
                      <p className="text-amber-600 text-sm">Completed in 2025</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-12 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute top-32 right-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-gradient-to-br from-stone-100 to-amber-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 text-sm">
              ⭐ Project of the Month
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Reclaimed Bike Frame Dining Table</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              A stunning dining table crafted from vintage bike frames and reclaimed oak, showcasing our commitment to
              creative material reuse and innovative design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Main project visual */}
              <div className="relative h-80 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Creative table representation */}
                  <div className="relative">
                    {/* Table top */}
                    <div className="w-48 h-24 bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg shadow-lg"></div>
                    {/* Bike frame legs representation */}
                    <div className="absolute -bottom-16 left-4 w-8 h-16 bg-gradient-to-b from-stone-600 to-stone-700 rounded-full transform rotate-12"></div>
                    <div className="absolute -bottom-16 right-4 w-8 h-16 bg-gradient-to-b from-stone-600 to-stone-700 rounded-full transform -rotate-12"></div>
                    <div className="absolute -bottom-8 left-12 w-6 h-6 border-4 border-stone-600 rounded-full"></div>
                    <div className="absolute -bottom-8 right-12 w-6 h-6 border-4 border-stone-600 rounded-full"></div>
                  </div>
                </div>

                {/* Floating design elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-800 mb-2">Sustainable Materials</h4>
                    <p className="text-sm text-stone-600">3 vintage bike frames + reclaimed oak</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-800 mb-2">Unique Design</h4>
                    <p className="text-sm text-stone-600">One-of-a-kind industrial aesthetic</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Materials & Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-stone-700">3 vintage steel bike frames (1970s-80s)</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-stone-700">Reclaimed oak planks from old barn</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-stone-700">Eco-friendly wood finish & steel treatment</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-stone-700">Custom steel brackets & reinforcement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-800 mb-2">Client Testimonial</h4>
                    <blockquote className="text-lg text-stone-600 italic leading-relaxed">
                      "Florin transformed our vision into reality. The table is not just furniture—it's art that tells a
                      story and sparks conversations at every dinner."
                    </blockquote>
                    <p className="text-sm text-stone-500 mt-4 font-medium">— Maria & Alexandru, Bucharest</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 w-full"
              >
                <Link href="/gallery">
                  View Full Project Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Our Services</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              From custom furniture to DIY workshops, we offer comprehensive solutions for sustainable design and
              conscious living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Custom Furniture</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Bespoke pieces designed and crafted specifically for your space, using carefully selected reclaimed
                  materials.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>3D design preview</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>Material consultation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>6-month warranty</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Ready-Made Pieces</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Unique furniture pieces available for immediate purchase from our curated collection of finished
                  works.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Ready to ship</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>One-of-a-kind pieces</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Professional delivery</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <Link href="/shop">View Shop</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">DIY Workshops</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Learn sustainable furniture making techniques in our hands-on workshop sessions with expert guidance.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>All skill levels welcome</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Tools & materials included</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Take home your creation</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <Link href="/workshops">Book Workshop</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshops" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-100/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3">
                🛠️ Learn & Create
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8 leading-tight">
                Join Our <span className="text-amber-600">DIY Workshops</span>
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Learn the art of sustainable furniture making in our fully equipped workshop. Perfect for beginners and
                experienced makers who want to create with their own hands.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  <span className="text-stone-700 font-medium">Weekend workshops available</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  <span className="text-stone-700 font-medium">All tools and materials provided</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  <span className="text-stone-700 font-medium">Take home your creation</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  <span className="text-stone-700 font-medium">Small groups (max 8 people)</span>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3"
              >
                <Link href="/workshops">
                  View Workshop Schedule
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              {/* Workshop visualization */}
              <div className="relative h-96 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 rounded-3xl overflow-hidden shadow-2xl">
                {/* Workshop scene illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Workbench */}
                    <div className="relative">
                      <div className="w-24 h-16 bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg"></div>
                      <div className="absolute -bottom-8 left-2 w-4 h-8 bg-amber-900 rounded-sm"></div>
                      <div className="absolute -bottom-8 right-2 w-4 h-8 bg-amber-900 rounded-sm"></div>
                      {/* Tools on bench */}
                      <div className="absolute top-2 left-2">
                        <Hammer className="h-4 w-4 text-stone-600" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Wrench className="h-4 w-4 text-stone-600" />
                      </div>
                    </div>

                    {/* Wood pieces */}
                    <div className="space-y-2">
                      <div className="w-20 h-3 bg-gradient-to-r from-amber-700 to-amber-800 rounded-sm"></div>
                      <div className="w-16 h-3 bg-gradient-to-r from-amber-600 to-amber-700 rounded-sm"></div>
                      <div className="w-18 h-3 bg-gradient-to-r from-amber-800 to-amber-900 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Floating workshop elements */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-4 w-4 text-amber-600" />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-4 w-4 text-red-500" />
                </div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Leaf className="h-4 w-4 text-green-500" />
                </div>

                {/* Animated elements */}
                <div className="absolute top-16 right-12 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-16 right-8 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-stone-800">4.9★ Rating</p>
                    <p className="text-amber-600 text-sm">750+ Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Instagram Feed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Follow Our Journey</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              See our latest projects and behind-the-scenes moments from the workshop
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-stone-200 via-amber-100 to-stone-100 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {/* Creative content instead of images */}
                  <div className="h-full flex items-center justify-center relative">
                    {i % 4 === 1 && (
                      <div className="text-center">
                        <Hammer className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                        <p className="text-xs text-stone-600 font-medium">Workshop</p>
                      </div>
                    )}
                    {i % 4 === 2 && (
                      <div className="text-center">
                        <TreePine className="h-12 w-12 text-green-600 mx-auto mb-2" />
                        <p className="text-xs text-stone-600 font-medium">Materials</p>
                      </div>
                    )}
                    {i % 4 === 3 && (
                      <div className="text-center">
                        <Heart className="h-12 w-12 text-red-500 mx-auto mb-2" />
                        <p className="text-xs text-stone-600 font-medium">Finished</p>
                      </div>
                    )}
                    {i % 4 === 0 && (
                      <div className="text-center">
                        <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-xs text-stone-600 font-medium">Community</p>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3"
            >
              <a href="https://instagram.com/woodlabstudio" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow @woodlabstudio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-24 bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Latest from Our Blog</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Inspiration, tutorials, and behind-the-scenes stories from our sustainable design journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
              <CardContent className="p-0">
                {/* Creative blog post visual */}
                <div className="h-64 bg-gradient-to-br from-green-100 via-green-50 to-amber-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="grid grid-cols-3 gap-4 mb-4 opacity-30">
                        <div className="w-8 h-8 bg-amber-600 rounded-lg"></div>
                        <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
                        <div className="w-8 h-8 bg-amber-600 rounded-lg"></div>
                      </div>
                      <Recycle className="h-16 w-16 text-green-600 mx-auto" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-100 text-green-800">Inspiration</Badge>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-amber-600 transition-colors">
                    5 Creative Ways to Repurpose Old Pallets
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Discover innovative techniques for transforming discarded pallets into stunning furniture pieces
                    that tell a story...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-500">January 15, 2025</span>
                    <Button asChild variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                      <Link href="/blog">
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
              <CardContent className="p-0">
                {/* Creative blog post visual */}
                <div className="h-64 bg-gradient-to-br from-blue-100 via-blue-50 to-amber-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <div className="w-24 h-16 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg mb-4"></div>
                        <div className="absolute -bottom-2 left-2 w-4 h-8 bg-amber-900 rounded-sm"></div>
                        <div className="absolute -bottom-2 right-2 w-4 h-8 bg-amber-900 rounded-sm"></div>
                      </div>
                      <Hammer className="h-8 w-8 text-blue-600 mx-auto" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-100 text-blue-800">Tutorial</Badge>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-amber-600 transition-colors">
                    Building Your First Reclaimed Wood Shelf
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    A step-by-step guide for beginners to create a beautiful floating shelf from reclaimed materials and
                    basic tools...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-500">January 10, 2025</span>
                    <Button asChild variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                      <Link href="/blog">
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-8 py-3"
            >
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Quote Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8 leading-tight">
                Ready to Create Something <span className="text-amber-600">Unique?</span>
              </h2>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                Let's discuss your project and bring your vision to life with sustainable, custom furniture that tells
                your story.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-lg">Email</p>
                    <a
                      href="mailto:hello@woodlabstudio.ro"
                      className="text-stone-600 hover:text-amber-600 transition-colors"
                    >
                      hello@woodlabstudio.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-lg">Phone</p>
                    <a href="tel:+40123456789" className="text-stone-600 hover:text-blue-600 transition-colors">
                      +40 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-lg">Workshop</p>
                    <p className="text-stone-600">Strada Meșterilor 15, Bucharest</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-stone-50">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-stone-800 mb-8">Request a Quote</h3>
                <form className="space-y-6" action="/api/contact" method="POST">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-stone-700 mb-3">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        className="border-2 border-stone-200 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-stone-700 mb-3">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        className="border-2 border-stone-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-3">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-2 border-stone-200 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-stone-700 mb-3">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full p-4 border-2 border-stone-200 rounded-lg focus:border-amber-500 focus:outline-none"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="custom-furniture">Custom Furniture</option>
                      <option value="table">Table</option>
                      <option value="chair">Chair/Seating</option>
                      <option value="shelving">Shelving Unit</option>
                      <option value="workshop">Workshop Booking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-stone-700 mb-3">
                      Project Description *
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell us about your project, dimensions, materials, timeline..."
                      rows={4}
                      className="border-2 border-stone-200 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="images" className="block text-sm font-semibold text-stone-700 mb-3">
                      Inspiration Images (Optional)
                    </label>
                    <div
                      className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center hover:border-amber-400 transition-colors bg-gradient-to-br from-stone-50 to-amber-50 cursor-pointer"
                      onClick={() => document.getElementById("images")?.click()}
                    >
                      <Upload className="h-10 w-10 text-stone-400 mx-auto mb-3" />
                      <p className="text-stone-600 font-medium mb-1">Drop files here or click to upload</p>
                      <p className="text-sm text-stone-500">PNG, JPG up to 10MB each</p>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files
                          if (files && files.length > 0) {
                            console.log(`${files.length} file(s) selected`)
                          }
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 text-lg font-semibold"
                  >
                    Send Quote Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-amber-300 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-amber-500 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-stone-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Get the latest updates on new projects, workshop schedules, and sustainable design tips delivered to your
            inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const email = formData.get("email")
              console.log("Newsletter signup:", email)
              // Add actual API call here
            }}
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-stone-300 backdrop-blur-sm flex-1"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">WoodLab Studio</h3>
              </Link>
              <p className="text-stone-400 mb-6 leading-relaxed">
                Transforming reclaimed materials into bold, custom furniture that tells your story and builds a
                sustainable future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/woodlabstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/woodlabstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://pinterest.com/woodlabstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-1.95 4.515-1.05 1.05-2.655 1.78-4.513 1.95v3.28c-.038.038-.1.095-.16.095-.061 0-.122-.057-.16-.095V14.62c-1.858-.169-3.463-.896-4.515-1.95-1.05-1.05-1.78-2.655-1.95-4.513H7.6c.038-.038.095-.1.095-.16 0-.061-.057-.122-.095-.16H9.32c.169-1.858.896-3.463 1.95-4.515 1.05-1.05 2.655-1.78 4.513-1.95V4.68c.038-.038.1-.095.16-.095.061 0 .122.057.16.095v2.69c1.858.169 3.463.896 4.515 1.95 1.05 1.05 1.78 2.655 1.95 4.513H16.4c-.038.038-.095.1-.095.16 0 .061.057.122.095.16h1.168z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-stone-400">
                <li>
                  <Link href="/products/custom-furniture" className="hover:text-amber-400 transition-colors">
                    Custom Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-amber-400 transition-colors">
                    Ready-Made Pieces
                  </Link>
                </li>
                <li>
                  <Link href="/workshops" className="hover:text-amber-400 transition-colors">
                    DIY Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-400 transition-colors">
                    Consultations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-stone-400">
                <li>
                  <Link href="/blog" className="hover:text-amber-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-amber-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-amber-400 transition-colors">
                    Project Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition-colors">
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hello@woodlabstudio.ro" className="hover:text-amber-400 transition-colors">
                    hello@woodlabstudio.ro
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+40123456789" className="hover:text-amber-400 transition-colors">
                    +40 123 456 789
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bucharest, Romania</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-stone-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
            <p>&copy; 2025 WoodLab Studio. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="hover:text-amber-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full aspect-video bg-stone-800 rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video Player Placeholder</p>
                <p className="text-sm opacity-75 mt-2">Replace with actual video embed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
