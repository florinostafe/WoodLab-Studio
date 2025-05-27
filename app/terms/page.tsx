import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Terms & Conditions</h1>
          <p className="text-stone-600 mb-8">Last updated: March 1, 2025</p>

          <div className="prose prose-stone max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-stone-600">
                By accessing and using WoodLab Studio's services, website, or participating in our workshops, you agree
                to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not
                access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">2. Services Description</h2>
              <p className="text-stone-600 mb-4">WoodLab Studio provides:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Custom furniture design and manufacturing using reclaimed materials</li>
                <li>Ready-made furniture pieces</li>
                <li>DIY workshops and educational services</li>
                <li>Design consultations</li>
                <li>Delivery and installation services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">3. Custom Furniture Orders</h2>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">3.1 Order Process</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>All custom orders begin with a consultation and detailed quote</li>
                <li>Orders are confirmed upon receipt of 50% deposit</li>
                <li>Design changes after confirmation may incur additional costs</li>
                <li>Production timelines are estimates and may vary based on material availability</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">3.2 Materials</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>We work primarily with reclaimed materials, which may have natural variations</li>
                <li>Material availability cannot be guaranteed and substitutions may be necessary</li>
                <li>Client-provided materials are used at client's risk</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">3.3 Delivery and Installation</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Delivery dates are estimates and may be subject to change</li>
                <li>Client must provide suitable access for delivery and installation</li>
                <li>Additional charges may apply for difficult access or special requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Custom orders require 50% deposit to commence work</li>
                <li>Balance payment due upon completion before delivery</li>
                <li>Workshop fees are due at time of booking</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are in EUR and include applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">5. Cancellation and Refund Policy</h2>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">5.1 Custom Furniture</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Orders may be cancelled within 48 hours of confirmation for full refund</li>
                <li>After production begins, cancellation fees may apply</li>
                <li>Completed custom pieces cannot be returned unless defective</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">5.2 Workshops</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Full refund if cancelled 7+ days before workshop</li>
                <li>50% refund if cancelled 3-6 days before workshop</li>
                <li>No refund for cancellations within 48 hours</li>
                <li>We may reschedule workshops due to insufficient enrollment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">6. Warranty and Liability</h2>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">6.1 Warranty</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>6-month warranty on craftsmanship and structural integrity</li>
                <li>Warranty covers defects in materials and workmanship</li>
                <li>Normal wear, misuse, or environmental damage not covered</li>
                <li>Warranty void if furniture is modified by third parties</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">6.2 Limitation of Liability</h3>
              <p className="text-stone-600 mb-4">
                Our liability is limited to the value of the specific product or service. We are not liable for
                indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">7. Workshop Terms</h2>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Participants must follow all safety instructions</li>
                <li>Minimum age requirements apply for certain workshops</li>
                <li>We reserve the right to remove participants who violate safety rules</li>
                <li>Participants assume risk of injury and must sign waivers</li>
                <li>Workshop content may vary based on group skill level and time constraints</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">8. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>All designs, techniques, and methods remain our intellectual property</li>
                <li>Clients may not reproduce our designs for commercial purposes</li>
                <li>We may photograph completed work for marketing purposes unless requested otherwise</li>
                <li>Workshop participants may use learned techniques for personal projects</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">9. Force Majeure</h2>
              <p className="text-stone-600">
                We are not liable for delays or failures due to circumstances beyond our control, including but not
                limited to natural disasters, government actions, material shortages, or other unforeseeable events.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">10. Governing Law</h2>
              <p className="text-stone-600">
                These terms are governed by Romanian law. Any disputes will be resolved in the courts of Bucharest,
                Romania.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">11. Changes to Terms</h2>
              <p className="text-stone-600">
                We reserve the right to modify these terms at any time. Changes will be posted on our website and take
                effect immediately. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">12. Contact Information</h2>
              <p className="text-stone-600 mb-4">For questions about these terms, please contact us:</p>
              <div className="bg-stone-100 p-4 rounded-lg">
                <p className="text-stone-700">
                  <strong>WoodLab Studio</strong>
                </p>
                <p className="text-stone-700">Email: legal@woodlabstudio.ro</p>
                <p className="text-stone-700">Phone: +40 123 456 789</p>
                <p className="text-stone-700">Address: Strada Meșterilor 15, Sector 2, Bucharest, Romania</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
