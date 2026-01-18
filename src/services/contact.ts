import { ContactFormData } from "@/schemas/contact"

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    
    // Check if response is JSON before parsing
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response from server")
    }
    
    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(result.message || "Failed to submit form")
    }
    
    return { success: true, message: result.message }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to submit form. Please try again." 
    }
  }
}
