import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
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
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Cookie Policy</h1>
          <p className="text-stone-600 mb-8">Last updated: March 1, 2025</p>

          <div className="prose prose-stone max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">What Are Cookies</h2>
              <p className="text-stone-600 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They are widely used to make websites work more efficiently and provide information to website
                owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">How We Use Cookies</h2>
              <p className="text-stone-600 mb-4">WoodLab Studio uses cookies for several purposes:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve our website performance and user experience</li>
                <li>To provide personalized content and recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Essential Cookies</h3>
              <p className="text-stone-600 mb-4">
                These cookies are necessary for the website to function and cannot be switched off. They are usually set
                in response to actions you take, such as setting privacy preferences or filling in forms.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Analytics Cookies</h3>
              <p className="text-stone-600 mb-4">
                We use Google Analytics to understand how visitors interact with our website. These cookies help us
                improve our website by collecting and reporting information anonymously.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Marketing Cookies</h3>
              <p className="text-stone-600 mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or limit
                how many times you see an ad. We use Meta Pixel for retargeting and advertising purposes.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Social Media Cookies</h3>
              <p className="text-stone-600 mb-4">
                These cookies are set by social media services (Instagram, Facebook, Pinterest) that we've added to the
                site to enable you to share our content with your friends and networks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-stone-300">
                  <thead>
                    <tr className="bg-stone-100">
                      <th className="border border-stone-300 p-3 text-left">Cookie Name</th>
                      <th className="border border-stone-300 p-3 text-left">Purpose</th>
                      <th className="border border-stone-300 p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-stone-300 p-3">_ga</td>
                      <td className="border border-stone-300 p-3">Google Analytics - distinguishes users</td>
                      <td className="border border-stone-300 p-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-300 p-3">_gid</td>
                      <td className="border border-stone-300 p-3">Google Analytics - distinguishes users</td>
                      <td className="border border-stone-300 p-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-300 p-3">_fbp</td>
                      <td className="border border-stone-300 p-3">Meta Pixel - tracks conversions</td>
                      <td className="border border-stone-300 p-3">3 months</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-300 p-3">session_id</td>
                      <td className="border border-stone-300 p-3">Essential - maintains user session</td>
                      <td className="border border-stone-300 p-3">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-300 p-3">preferences</td>
                      <td className="border border-stone-300 p-3">Remembers user preferences</td>
                      <td className="border border-stone-300 p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-stone-600 mb-4">You have several options for managing cookies:</p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Browser Settings</h3>
              <p className="text-stone-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Set exceptions for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Our Cookie Banner</h3>
              <p className="text-stone-600 mb-4">
                When you first visit our website, you'll see a cookie banner where you can:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Third-Party Cookies</h2>
              <p className="text-stone-600 mb-4">Some cookies on our website are set by third-party services:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Helps us understand website usage
                </li>
                <li>
                  <strong>Meta Pixel:</strong> Enables advertising and retargeting
                </li>
                <li>
                  <strong>Instagram:</strong> Powers our Instagram feed integration
                </li>
                <li>
                  <strong>Mailchimp:</strong> Manages newsletter subscriptions
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-stone-600 mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Your preferences may not be saved</li>
                <li>Some interactive features may not work</li>
                <li>We won't be able to provide personalized content</li>
                <li>Analytics data will be incomplete</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Updates to This Policy</h2>
              <p className="text-stone-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Contact Us</h2>
              <p className="text-stone-600 mb-4">
                If you have any questions about our use of cookies, please contact us:
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
