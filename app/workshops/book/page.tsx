"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react"

export default function BookWorkshopPage() {
  const searchParams = useSearchParams()
  const workshopId = searchParams.get("workshop")
  const [selectedDate, setSelectedDate] = useState("")
  const [participants, setParticipants] = useState(1)

  const workshop = {
    id: 1,
    title: "Beginner's Pallet Furniture Workshop",
    description: "Learn the basics of working with reclaimed pallets to create a simple coffee table or shelf.",
    duration: "4 hours",
    maxParticipants: 8,
    price: 85,
    level: "Beginner",
    includes: ["All materials", "Tool usage", "Safety equipment", "Refreshments", "Take-home project"],
    nextDates: ["February 15, 2025", "February 22, 2025", "March 1, 2025", "March 8, 2025"],
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)

    console.log("Workshop booking:", {
      workshopId,
      selectedDate,
      participants,
      formData: Object.fromEntries(formData),
    })

    alert("Booking submitted! We will send you a confirmation email shortly.")
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
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/workshops">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Workshops
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Workshop Details */}
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">{workshop.level}</Badge>
              <h1 className="text-4xl font-bold text-stone-800 mb-6">{workshop.title}</h1>
              <p className="text-lg text-stone-600 mb-8">{workshop.description}</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Duration: {workshop.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Max {workshop.maxParticipants} participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Multiple dates available</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-stone-800 mb-4">What's Included:</h3>
                <div className="space-y-2">
                  {workshop.includes.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-3xl font-bold text-amber-600">€{workshop.price} per person</div>
            </div>

            {/* Booking Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">Book Your Spot</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Select Date *</label>
                    <select
                      className="w-full p-3 border border-stone-300 rounded-md"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    >
                      <option value="">Choose a date</option>
                      {workshop.nextDates.map((date) => (
                        <option key={date} value={date}>
                          {date}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Number of Participants *</label>
                    <select
                      className="w-full p-3 border border-stone-300 rounded-md"
                      value={participants}
                      onChange={(e) => setParticipants(Number(e.target.value))}
                      required
                    >
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} participant{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">First Name *</label>
                      <Input name="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Last Name *</label>
                      <Input name="lastName" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Email *</label>
                    <Input name="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                    <Input name="phone" type="tel" placeholder="+40 123 456 789" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Experience Level</label>
                    <select name="experience" className="w-full p-3 border border-stone-300 rounded-md">
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Special Requirements or Questions
                    </label>
                    <Textarea
                      name="notes"
                      placeholder="Any dietary restrictions, accessibility needs, or questions..."
                      rows={3}
                    />
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium text-stone-800">Total:</span>
                      <span className="text-2xl font-bold text-amber-600">€{workshop.price * participants}</span>
                    </div>
                    <p className="text-sm text-stone-600 mb-6">
                      Payment will be processed after confirmation. We accept bank transfers and cash.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    Book Workshop
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
