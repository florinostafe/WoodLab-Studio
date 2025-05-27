import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WoodLab Studio - Sustainable Custom Furniture | Bucharest, Romania",
  description:
    "WoodLab Studio transforms reclaimed materials into bold, custom furniture. Sustainable design workshop in Bucharest offering custom pieces, ready-made furniture, and DIY workshops.",
  keywords:
    "custom furniture Romania, reclaimed wood furniture Bucharest, sustainable furniture, DIY workshops, handcrafted furniture",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
