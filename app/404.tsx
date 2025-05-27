import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, TreePine } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center">
            <TreePine className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-stone-800">WoodLab Studio</h1>
        </div>

        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-amber-600 mb-4">404</div>
          <div className="relative w-64 h-32 mx-auto mb-6">
            {/* Broken table illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Table top pieces */}
                <div className="w-24 h-4 bg-amber-700 rounded transform -rotate-12 mb-2"></div>
                <div className="w-20 h-4 bg-amber-800 rounded transform rotate-6"></div>
                {/* Broken legs */}
                <div className="absolute -bottom-8 left-2 w-2 h-8 bg-stone-600 rounded transform rotate-45"></div>
                <div className="absolute -bottom-8 right-2 w-2 h-8 bg-stone-600 rounded transform -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-stone-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-stone-600 mb-8 leading-relaxed">
          Looks like this page got lost in the workshop! Don't worry, we can help you find what you're looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500 mb-4">Still can't find what you're looking for?</p>
          <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
