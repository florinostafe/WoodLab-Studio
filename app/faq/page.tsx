"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "Materials & Sustainability",
      questions: [
        {
          question: "What types of reclaimed materials do you use?",
          answer:
            "We work with a variety of reclaimed materials including old barn wood, shipping pallets, vintage bike frames, antique doors, industrial metal pieces, and salvaged furniture components. Each piece is carefully selected for quality and character. We source materials from local demolition sites, old buildings, and partner with other craftspeople to ensure nothing goes to waste.",
        },
        {
          question: "How do you ensure the quality and safety of reclaimed materials?",
          answer:
            "All reclaimed materials undergo thorough inspection and treatment. We check for structural integrity, remove any harmful substances, sand and clean surfaces, and apply appropriate treatments for durability. Wood is tested for moisture content and treated for pests if necessary. Metal components are checked for rust and structural soundness before use.",
        },
        {
          question: "Are your finishes eco-friendly?",
          answer:
            "Yes, we exclusively use eco-friendly, non-toxic finishes including natural oils, water-based stains, and low-VOC sealers. These finishes are safe for indoor use and don't emit harmful chemicals. We can also provide completely natural finishes like beeswax or linseed oil for those with chemical sensitivities.",
        },
      ],
    },
    {
      category: "Custom Orders & Process",
      questions: [
        {
          question: "How long does a custom furniture project take?",
          answer:
            "Timeline varies depending on complexity and current workload. Simple pieces (shelves, small tables) typically take 2-4 weeks. Medium complexity items (dining tables, custom chairs) take 4-8 weeks. Complex or large pieces can take 8-12 weeks. We'll provide a detailed timeline during consultation and keep you updated throughout the process.",
        },
        {
          question: "What's included in the design consultation?",
          answer:
            "Our free consultation includes: discussion of your vision and requirements, space assessment (in-person or virtual), material recommendations, preliminary sketches, 3D design preview for complex pieces, detailed quote with timeline, and material sourcing plan. We want to ensure your vision aligns perfectly with what we can create.",
        },
        {
          question: "Can you work with materials I provide?",
          answer:
            "We love working with materials that have personal significance to our clients. Whether it's wood from a family property, metal from a meaningful object, or other materials with sentimental value, we can incorporate them into your custom piece. We'll assess the materials and discuss how to best integrate them into the design.",
        },
        {
          question: "Do you provide 3D renderings of custom pieces?",
          answer:
            "Yes, for custom projects over €1,000, we provide detailed 3D renderings so you can visualize the final piece before we begin construction. This includes different angle views, material textures, and finish options. For smaller projects, we provide detailed sketches and material samples.",
        },
      ],
    },
    {
      category: "Delivery & Installation",
      questions: [
        {
          question: "Do you deliver and install furniture?",
          answer:
            "Yes, we provide delivery and installation services throughout Bucharest and surrounding areas (up to 50km). Delivery costs depend on distance and piece size. For complex installations or built-in pieces, our team handles professional installation. We also provide assembly instructions for clients who prefer to install themselves.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We primarily serve Bucharest and Ilfov County. For special projects, we can arrange delivery throughout Romania. International shipping is available for smaller pieces. Delivery costs are calculated based on distance, piece size, and installation requirements.",
        },
        {
          question: "How is furniture packaged for delivery?",
          answer:
            "All pieces are carefully wrapped in protective materials, with extra padding for delicate areas. Large pieces may be partially disassembled for safe transport and reassembled on-site. We use sustainable packaging materials whenever possible and can arrange to collect packaging materials for reuse.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How is pricing determined?",
          answer:
            "Pricing is based on several factors: material costs and sourcing complexity, design complexity and time required, size and structural requirements, finish type and application time, and delivery/installation needs. We provide transparent, detailed quotes with no hidden fees. Payment is typically 50% deposit to start, 50% on completion.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept bank transfers, cash payments, and can arrange payment plans for larger projects. For custom orders, we require a 50% deposit to begin work, with the balance due upon completion. We can discuss flexible payment arrangements for larger projects.",
        },
        {
          question: "Do you offer warranties?",
          answer:
            "Yes, all our furniture comes with a 6-month warranty covering craftsmanship and structural integrity. This covers any defects in construction or finish application. Normal wear and tear, damage from misuse, or environmental factors are not covered. We also provide care instructions to help maintain your furniture's beauty and longevity.",
        },
      ],
    },
    {
      category: "Workshops & Learning",
      questions: [
        {
          question: "What's included in your DIY workshops?",
          answer:
            "Our workshops include all tools and materials, expert instruction from our craftspeople, safety equipment and training, a take-home project, refreshments, and a workshop manual with techniques and tips. Class sizes are limited to 8 people for personalized attention. We offer beginner, intermediate, and advanced level workshops.",
        },
        {
          question: "Do I need experience to join a workshop?",
          answer:
            "No experience necessary! Our workshops are designed for all skill levels. We start with safety basics and fundamental techniques. Our instructors provide individual guidance to ensure everyone succeeds. We have specific beginner workshops that focus on basic skills and simple projects.",
        },
        {
          question: "Can you arrange private workshops or team building events?",
          answer:
            "Yes, we offer private workshops for groups of 4-8 people. These are perfect for team building, birthday parties, or special events. We can customize the project and focus areas based on your group's interests and skill level. Private workshops can be scheduled on weekends or evenings by arrangement.",
        },
      ],
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
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-stone-600 mb-8">
              Find answers to common questions about our sustainable furniture, custom orders, workshops, and processes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-8">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(itemIndex)

                  return (
                    <Card key={questionIndex} className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-stone-800 pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-lg bg-amber-50">
            <CardContent className="p-12 text-center">
              <MessageCircle className="h-12 w-12 text-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Still Have Questions?</h2>
              <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help with any specific questions about
                your project or our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Contact Us Directly</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:hello@woodlabstudio.ro">Email Your Question</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
