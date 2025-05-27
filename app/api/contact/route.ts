import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const projectType = formData.get("projectType") as string
    const description = formData.get("description") as string
    const images = formData.getAll("images") as File[]

    // Validate required fields
    if (!firstName || !lastName || !email || !projectType || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Process the contact form submission
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      projectType,
      description,
      imageCount: images.length,
    })

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Upload images to storage
    // 4. Send confirmation email to user

    return NextResponse.json(
      { message: "Thank you for your inquiry! We'll contact you within 24 hours." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
