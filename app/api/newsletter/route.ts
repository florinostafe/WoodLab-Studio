import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Mailchimp API integration
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX // e.g., 'us1'

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      return NextResponse.json({ error: "Mailchimp configuration missing" }, { status: 500 })
    }

    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["website-signup"],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()

      // Handle already subscribed case
      if (errorData.title === "Member Exists") {
        return NextResponse.json({ message: "Email already subscribed" }, { status: 200 })
      }

      throw new Error(errorData.detail || "Failed to subscribe")
    }

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
