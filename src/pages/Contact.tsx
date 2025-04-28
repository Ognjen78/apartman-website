"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus("submitting")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-beige/20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Contact Us</span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Have questions about our apartment or want to book directly? We're here to help you plan your perfect stay in
          Dubrovnik.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 text-gray-800">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Address</h3>
                  <p className="mt-1 text-gray-600">Ul. Petra Krešimira IV 12, 20000 Dubrovnik, Croatia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <p className="mt-1 text-gray-600">
                    <a href="tel:+38520123456" className="hover:text-rose-600 transition-colors">
                      +385 20 123 456
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <p className="mt-1 text-gray-600">
                    <a href="mailto:info@apartment-nina.com" className="hover:text-rose-600 transition-colors">
                      info@apartment-nina.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Response Time</h3>
                  <p className="mt-1 text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                  aria-label="TripAdvisor"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Location</h3>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.1662121622447!2d18.10686937670362!3d42.64218771669376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c0b8a9c7b8be3%3A0x9f4a8f78b2a92e19!2sUl.%20Petra%20Kre%C5%A1imira%20IV%2C%20Dubrovnik%2C%20Croatia!5e0!3m2!1sen!2sus!4v1682345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Apartment Nina location"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 text-gray-800">Send Us a Message</h2>

            {formStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you as soon as possible.</p>
              </div>
            ) : formStatus === "error" ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-6">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Something went wrong</h3>
                <p className="text-gray-600">Please try again later or contact us directly via phone or email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="Booking Inquiry">Booking Inquiry</option>
                    <option value="Availability Check">Availability Check</option>
                    <option value="Rates & Pricing">Rates & Pricing</option>
                    <option value="Facilities Question">Facilities Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gradient-to-r from-rose-600 to-amber-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Book Directly</h3>
              <p className="text-gray-600 mb-4">
                For the best rates and personalized service, consider booking directly with us instead of through
                third-party platforms.
              </p>
              <a
                href="https://www.airbnb.com/rooms/50532497"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-rose-600 to-amber-600 text-white py-2 px-6 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Check Availability
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
