"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

import apartmentImage from "../assets/soba1.avif";

// Replace with your actual image paths
import viewImage from "../assets/balkon.avif";
import soba1 from "../assets/soba2.avif";
import kitchen from "../assets/kitchen.avif";
import bathroom from "../assets/bathroom.avif"
import terrace from  "../assets/terrace.avif";

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("interior")

  const features = {
    interior: [
      {
        image: apartmentImage,
        title: "Elegant Living Space",
        description: "Relax in our spacious and stylishly furnished living area with comfortable seating and modern amenities.",
      },
      {
        image: soba1,
        title: "Peaceful Bedrooms",
        description: "Enjoy restful nights in our beautifully appointed bedrooms with premium linens and comfortable mattresses.",
      },
      {
        image: kitchen,
        title: "Fully Equipped Kitchen",
        description: "Prepare delicious meals with our modern, fully equipped kitchen featuring high-quality appliances.",
      },
    ],
    exterior: [
      {
        image: viewImage,
        title: "Panoramic Sea Views",
        description: "Wake up to stunning vistas of the Adriatic Sea and Dubrovnik's picturesque coastline.",
      },
      {
        image: terrace,
        title: "Private Terrace",
        description: "Unwind on your private terrace, perfect for morning coffee or evening drinks with a view.",
      },
      {
        image: bathroom,
        title: "Luxury Bathroom",
        description: "Indulge in our spa-like bathroom with premium fixtures and complimentary toiletries.",
      },
    ],
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent inline-block">
            Explore Our Exceptional Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Every detail of Apartment Nina has been carefully designed to ensure your comfort and satisfaction
          </p>

          {/* Tab navigation */}
          <div className="flex justify-center mt-10 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("interior")}
              className={`px-8 py-3 font-medium text-lg transition-colors ${
                activeTab === "interior"
                  ? "text-rose-600 border-b-2 border-rose-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveTab("exterior")}
              className={`px-8 py-3 font-medium text-lg transition-colors ${
                activeTab === "exterior"
                  ? "text-rose-600 border-b-2 border-rose-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Exterior & Views
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features[activeTab as keyof typeof features].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-full font-medium hover:bg-rose-700 transition-colors"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
