"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    text: "Apartment Nina exceeded all our expectations. The views are even more breathtaking than the photos suggest, and the location is perfect for exploring Dubrovnik. We'll definitely be back!",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    text: "We had an amazing stay at Apartment Nina. The apartment is beautifully furnished, spotlessly clean, and the host was incredibly helpful with local recommendations. The perfect base for our Croatian adventure.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emma Schmidt",
    location: "Berlin, Germany",
    text: "The apartment is a true gem in Dubrovnik. Modern amenities, comfortable beds, and that view! Morning coffee on the terrace watching the sun rise over the Adriatic was the highlight of our trip.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
]

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent inline-block">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from guests who've experienced Apartment Nina
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative">
                    <FaQuoteLeft className="text-rose-200 text-4xl absolute top-6 left-6" />
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-amber-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 text-lg italic mb-6">{testimonial.text}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-rose-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center px-6 py-3 border border-rose-600 text-rose-600 rounded-full font-medium hover:bg-rose-600 hover:text-white transition-colors"
          >
            Read All Reviews
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
