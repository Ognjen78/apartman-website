"use client"

import React, { useEffect, useState } from "react"
import { FaChevronDown } from "react-icons/fa"

// Ensure this path is correct
// import balkonImage from "../assets/dubrovnik.jpg"

const HeroSection: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Replace with your actual image path
  const balkonImage = "https://via.placeholder.com/1920x1080"

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${balkonImage})`,
          transform: `translateY(${scrollPosition * 0.2}px)`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Animated entrance for title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-6 animate-fadeIn">
            Your Dream Adriatic Escape at Apartment Nina
          </h1>

          {/* Animated entrance for subtitle */}
          <p className="text-lg md:text-2xl text-white/90 mt-4 mb-10 font-sans leading-relaxed drop-shadow-md max-w-3xl mx-auto animate-fadeInDelay">
            Indulge in luxurious comfort and wake up to breathtaking coastal views. Your unforgettable Dubrovnik
            experience starts here.
          </p>

          {/* Animated entrance for buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInDelayLong">
            <a
              href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-600 to-amber-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Book Your Stay
            </a>
            <a
              href="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Gallery
            </a>
          </div>

          {/* Availability badge */}
          <div className="mt-12 animate-pulse">
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium">
              Available for Summer 2025 — Book Now
            </span>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#highlights" className="text-white/80 hover:text-white transition-colors">
            <FaChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
