"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

interface EnquiryFormProps {
  onSuccess?: () => void
}

export default function EnquiryForm({ onSuccess }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Call onSuccess after a delay to show the success message
    if (onSuccess) {
      setTimeout(() => {
        onSuccess()
      }, 2000)
    }
  }

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="text-center p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Enquire Now</CardTitle>
        <CardDescription>Fill the form below and we'll get back to you</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">Your enquiry has been submitted successfully. We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number</Label>
              <Input id="contact" name="contact" placeholder="Your contact number" required />
            </div>
            <Button type="submit" className="w-full bg-amber-300 text-black hover:bg-amber-400" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
