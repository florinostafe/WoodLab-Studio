"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Upload, MessageCircle } from "lucide-react"

export default function ContactPage() {
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
              <Link href="/blog" className="text-stone-600 hover:text-stone-800 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-amber-600 font-medium">
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
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Get In Touch</h1>
            <p className="text-xl text-stone-600 mb-8">
              Ready to transform your space with sustainable, custom furniture? Let's discuss your project and bring
              your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Free Consultation</Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">3D Design Preview</Badge>
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2">Transparent Pricing</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Forms */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-amber-600 mt-1" />
                      <div>
                        <p className="font-medium text-stone-800">Email</p>
                        <p className="text-stone-600">hello@woodlabstudio.ro</p>
                        <p className="text-stone-600">quotes@woodlabstudio.ro</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-amber-600 mt-1" />
                      <div>
                        <p className="font-medium text-stone-800">Phone</p>
                        <p className="text-stone-600">+40 123 456 789</p>
                        <p className="text-sm text-stone-500">Mon-Fri: 9:00 - 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                      <div>
                        <p className="font-medium text-stone-800">Workshop Address</p>
                        <p className="text-stone-600">Strada Meșterilor 15</p>
                        <p className="text-stone-600">Sector 2, Bucharest</p>
                        <p className="text-stone-600">Romania, 021234</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-amber-600 mt-1" />
                      <div>
                        <p className="font-medium text-stone-800">Workshop Hours</p>
                        <p className="text-stone-600">Monday - Friday: 9:00 - 18:00</p>
                        <p className="text-stone-600">Saturday: 10:00 - 16:00</p>
                        <p className="text-stone-600">Sunday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Meet Our Team</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Florin Ostafe"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-stone-800">Florin Ostafe</p>
                        <p className="text-sm text-stone-600">Creative Director & Furniture Designer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Ana Maria Soare"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-stone-800">Ana Maria Soare</p>
                        <p className="text-sm text-stone-600">Community Manager & Workshop Coordinator</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">Request a Custom Quote</h2>
                  <form
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)

                      // Basic validation
                      const firstName = formData.get("firstName") as string
                      const lastName = formData.get("lastName") as string
                      const email = formData.get("email") as string
                      const projectType = formData.get("projectType") as string
                      const description = formData.get("description") as string

                      if (!firstName || !lastName || !email || !projectType || !description) {
                        alert("Please fill in all required fields")
                        return
                      }

                      console.log("Form submitted:", {
                        firstName,
                        lastName,
                        email,
                        projectType,
                        description,
                        files: formData.getAll("images"),
                      })

                      // Add actual API call here
                      alert("Thank you! We will contact you soon.")
                    }}
                  >
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
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Email *</label>
                        <Input type="email" name="email" placeholder="your.email@example.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                        <Input type="tel" name="phone" placeholder="+40 123 456 789" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Project Type *</label>
                      <select name="projectType" className="w-full p-3 border border-stone-300 rounded-md" required>
                        <option value="">Select project type</option>
                        <option value="custom-furniture">Custom Furniture</option>
                        <option value="table">Table</option>
                        <option value="chair">Chair/Seating</option>
                        <option value="shelving">Shelving Unit</option>
                        <option value="one-off">One-Off Piece</option>
                        <option value="consultation">Design Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Budget Range (EUR)</label>
                        <select name="budget" className="w-full p-3 border border-stone-300 rounded-md">
                          <option value="">Select budget range</option>
                          <option value="500-1000">€500 - €1,000</option>
                          <option value="1000-2500">€1,000 - €2,500</option>
                          <option value="2500-5000">€2,500 - €5,000</option>
                          <option value="5000+">€5,000+</option>
                          <option value="discuss">Let's discuss</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Timeline</label>
                        <select name="timeline" className="w-full p-3 border border-stone-300 rounded-md">
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-2months">1-2 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Project Description *</label>
                      <Textarea
                        name="description"
                        placeholder="Please describe your project in detail: dimensions, style preferences, specific materials, intended use, space constraints, etc."
                        rows={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Inspiration Images (Optional)
                      </label>
                      <div
                        className="border-2 border-dashed border-stone-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors cursor-pointer"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        <Upload className="h-8 w-8 text-stone-400 mx-auto mb-2" />
                        <p className="text-stone-600 mb-1">Drop files here or click to upload</p>
                        <p className="text-sm text-stone-500">PNG, JPG up to 10MB each</p>
                        <input
                          id="file-upload"
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
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="newsletter" className="mt-1" />
                      <label htmlFor="newsletter" className="text-sm text-stone-600">
                        I'd like to receive updates about new projects, workshop schedules, and design tips.
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-stone-600">
                        I agree to the{" "}
                        <Link href="/privacy-policy" className="text-amber-600 hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-amber-600 hover:underline">
                          Terms & Conditions
                        </Link>{" "}
                        *
                      </label>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                      Send Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Book a Workshop</h2>
              <p className="text-lg text-stone-600 mb-6">
                Join our hands-on workshops and learn sustainable furniture making techniques. Perfect for beginners and
                experienced makers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Small groups (max 8 people)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">Weekend sessions available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span className="text-stone-700">All materials included</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View Workshop Schedule</Button>
                <Button variant="outline">Contact for Private Sessions</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Workshop session"
                width={200}
                height={250}
                className="rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Workshop participants"
                width={200}
                height={250}
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Visit Our Workshop</h2>
            <p className="text-lg text-stone-600">
              Located in the heart of Bucharest, our workshop is open for visits by appointment.
            </p>
          </div>
          <div className="bg-stone-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-stone-600">Interactive Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  )
}
