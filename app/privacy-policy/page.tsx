import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Privacy Policy</h1>
          <p className="text-stone-600 mb-8">Last updated: March 1, 2025</p>

          <div className="prose prose-stone max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">1. Information We Collect</h2>
              <p className="text-stone-600 mb-4">
                WoodLab Studio ("we," "our," or "us") collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Request a custom furniture quote</li>
                <li>Register for workshops</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our website or email</li>
                <li>Visit our workshop location</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">2. Types of Information</h2>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Personal Information:</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Project details and preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Workshop participation records</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Technical Information:</h3>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Provide custom furniture design and manufacturing services</li>
                <li>Process workshop registrations and payments</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">4. Information Sharing</h2>
              <p className="text-stone-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>With service providers who assist in our operations (payment processors, email services)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
                <li>In connection with a business transfer (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">5. Data Security</h2>
              <p className="text-stone-600 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure storage of personal information</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Regular security assessments and updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">6. Your Rights (GDPR Compliance)</h2>
              <p className="text-stone-600 mb-4">
                As a Romanian company, we comply with GDPR regulations. You have the right to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your personal data ("right to be forgotten")</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">7. Cookies and Tracking</h2>
              <p className="text-stone-600 mb-4">Our website uses cookies to enhance your experience. We use:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand website usage</li>
                <li>Marketing cookies for social media integration</li>
              </ul>
              <p className="text-stone-600 mt-4">You can control cookie settings through your browser preferences.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">8. Data Retention</h2>
              <p className="text-stone-600">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this
                policy, comply with legal obligations, resolve disputes, and enforce our agreements. Customer project
                records are typically retained for 7 years for warranty and legal purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">9. Children's Privacy</h2>
              <p className="text-stone-600">
                Our services are not directed to children under 16. We do not knowingly collect personal information
                from children under 16. If you are a parent or guardian and believe your child has provided us with
                personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">10. Changes to This Policy</h2>
              <p className="text-stone-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">11. Contact Information</h2>
              <p className="text-stone-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-stone-100 p-4 rounded-lg">
                <p className="text-stone-700">
                  <strong>WoodLab Studio</strong>
                </p>
                <p className="text-stone-700">Email: privacy@woodlabstudio.ro</p>
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
