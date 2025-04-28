"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLang, setActiveLang] = useState("en")
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Apartment", path: "/apartment" },
    { label: "Gallery", path: "/gallery" },
    { label: "Rates", path: "/rates" },
    { label: "Reviews", path: "/reviews" },
    { label: "Location", path: "/location" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 font-sans transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-semibold tracking-wide relative group">
            <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              Apartment Nina
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={`relative text-gray-800 font-medium hover:text-rose-600 transition-colors duration-200 py-1 ${
                    location.pathname === path ? "text-rose-600" : ""
                  }`}
                >
                  {label}
                  {location.pathname === path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-5">
              <button
                onClick={() => setActiveLang("hr")}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeLang === "hr" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                🇭🇷 HR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setActiveLang("en")}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeLang === "en" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Book Now Button */}
            <a
              href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-600 to-amber-600 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end justify-center gap-1.5">
                <span
                  className={`block h-0.5 rounded-full bg-gray-800 transition-all duration-300 ease-out ${
                    isOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 rounded-full bg-gray-800 transition-all duration-300 ease-out ${
                    isOpen ? "opacity-0 w-6" : "opacity-100 w-4"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 rounded-full bg-gray-800 transition-all duration-300 ease-out ${
                    isOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white/95 backdrop-blur-lg shadow-lg">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`block py-2 text-gray-800 font-medium hover:text-rose-600 transition-colors ${
                location.pathname === path ? "text-rose-600 border-l-2 border-rose-600 pl-3" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-4 py-2">
            <button
              onClick={() => setActiveLang("hr")}
              className={`text-sm font-medium transition-all duration-200 ${
                activeLang === "hr" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              🇭🇷 Croatian
            </button>
            <button
              onClick={() => setActiveLang("en")}
              className={`text-sm font-medium transition-all duration-200 ${
                activeLang === "en" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              🇬🇧 English
            </button>
          </div>

          {/* Mobile Book Now Button */}
          <div className="pt-2">
            <a
              href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-rose-600 to-amber-600 text-white py-3 rounded-lg font-medium text-center shadow-md"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
