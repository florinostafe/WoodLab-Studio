"use client"

// Meta Pixel Integration
export const initMetaPixel = () => {
  if (typeof window !== "undefined") {
    // Meta Pixel Code
    !((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
      if (f.fbq) return
      n = f.fbq = () => {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

    // Initialize the pixel
    ;(window as any).fbq("init", "YOUR_PIXEL_ID") // Replace with actual pixel ID
    ;(window as any).fbq("track", "PageView")
  }
}

// Mailchimp Integration
export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error("Failed to subscribe")
    }

    return await response.json()
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    throw error
  }
}

// Google Analytics Integration
export const initGoogleAnalytics = () => {
  if (typeof window !== "undefined") {
    // Google Analytics 4
    const script = document.createElement("script")
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" // Replace with actual GA4 ID
    document.head.appendChild(script)
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", "GA_MEASUREMENT_ID") // Replace with actual GA4 ID
  }
}

// Track Events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined") {
    // Google Analytics
    if ((window as any).gtag) {
      ;(window as any).gtag("event", eventName, parameters)
    }

    // Meta Pixel
    if ((window as any).fbq) {
      ;(window as any).fbq("track", eventName, parameters)
    }
  }
}
