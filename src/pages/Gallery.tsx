"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

import livingroom from "../assets/livingroom.avif"
import soba1 from "../assets/soba1.avif"
import bathroom from "../assets/bathroom.avif"
import kitchen from "../assets/kitchen.avif"
import balkon from "../assets/balkon.avif"
import soba2 from "../assets/soba2.avif"
import nightview from "../assets/nightview.avif"
import single from "../assets/single.avif"


// Gallery categories
const categories = [
  { id: "all", label: "All Photos" },
  { id: "interior", label: "Interior" },
  { id: "bedroom", label: "Bedroom" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "view", label: "View" },
]

// Gallery images with metadata
const galleryImages = [
  {
    id: 1,
    src: livingroom,
    alt: "Living room",
    category: "interior",
    featured: true,
  },
  {
    id: 2,
    src: soba1,
    alt: "Master bedroom",
    category: "bedroom",
  },
  {
    id: 3,
    src: bathroom,
    alt: "Modern bathroom",
    category: "bathroom",
  },
  {
    id: 4,
    src: kitchen,
    alt: "Fully equipped kitchen",
    category: "kitchen",
  },
  {
    id: 5,
    src: balkon,
    alt: "Balcony with sea view",
    category: "view",
    featured: true,
  },
  {
    id: 6,
    src: livingroom,
    alt: "Dining area",
    category: "interior",
  },
  {
    id: 7,
    src: soba2,
    alt: "Second bedroom",
    category: "bedroom",
  },
  {
    id: 8,
    src: kitchen,
    alt: "Kitchen appliances",
    category: "kitchen",
  },
  {
    id: 9,
    src: nightview,
    alt: "Sunset view from apartment",
    category: "view",
    featured: true,
  },
  {
    id: 10,
    src: bathroom,
    alt: "Shower area",
    category: "bathroom",
  },
  {
    id: 11,
    src: livingroom,
    alt: "Living room",
    category: "interior",
  },
  {
    id: 12,
    src: single,
    alt: "Single bedroom",
    category: "bedroom",
  },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loaded, setLoaded] = useState(false)

  // Filter images based on selected category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === activeCategory))
    }
  }, [activeCategory])

  // Set loaded state after component mounts
  useEffect(() => {
    setLoaded(true)
  }, [])

  // Lightbox navigation
  const handlePrevImage = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex].id)
  }

  const handleNextImage = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex].id)
  }

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "ArrowLeft") {
        handlePrevImage()
      } else if (e.key === "ArrowRight") {
        handleNextImage()
      } else if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, filteredImages])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  return (
    <div className="pt-24 pb-16 min-h-screen bg-beige/20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Gallery</span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Explore our beautiful apartment through these photos. Get a glimpse of the comfort, style, and stunning views
          that await you during your stay.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                image.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative group cursor-pointer h-64 md:h-80" onClick={() => setSelectedImage(image.id)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Current image */}
            <div className="w-full h-full max-w-5xl max-h-[80vh] p-4 flex items-center justify-center">
              {filteredImages.find((img) => img.id === selectedImage) && (
                <img
                  src={filteredImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
                  alt={filteredImages.find((img) => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4">
              {filteredImages.find((img) => img.id === selectedImage)?.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
