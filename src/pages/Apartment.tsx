"use client"

import type React from "react"
import { useState } from "react"
import {
  FaUserFriends,
  FaBed,
  FaDoorOpen,
  FaWifi,
  FaParking,
  FaSnowflake,
  FaTv,
  FaSmokingBan,
  FaDog,
  FaClock,
  FaBath,
  FaMapMarkerAlt,
  FaChevronRight,
  FaChevronLeft,
  FaInfoCircle,
  FaCreditCard,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa"

import image1 from '../assets/balkon.avif';
  import image2 from '../assets/soba1.avif';
  import image3 from '../assets/soba2.avif';
  import image4 from '../assets/soba22.jpeg';
  

// Import your images here
// Example: import heroImage from "../assets/dubrovnik.jpg";


const Apartment: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  const images = [
    image1,
    image2,
    image3,
    image4,
  ];
  

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero section with image carousel */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-in-out">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt="Apartment in Dubrovnik"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        {/* Carousel controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-all z-10"
          aria-label="Previous image"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-all z-10"
          aria-label="Next image"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 text-white text-center px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
              Experience Dubrovnik in Style
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-100 leading-relaxed mb-8">
              Your exquisite retreat offering stunning views and unparalleled comfort for an unforgettable stay.
            </p>

            {/* Key features */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white mt-8">
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaUserFriends className="h-5 w-5" />
                <span className="text-sm font-medium">Up to 4 Guests</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaDoorOpen className="h-5 w-5" />
                <span className="text-sm font-medium">2 Bedrooms</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaBed className="h-5 w-5" />
                <span className="text-sm font-medium">2 Queen Beds</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaBath className="h-5 w-5" />
                <span className="text-sm font-medium">1 Modern Bathroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-5xl mx-auto py-16 px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-12 border-b border-gray-200">
          <div className="flex overflow-x-auto hide-scrollbar gap-8">
            {["about", "amenities", "sleeping", "rules", "payment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-1 font-medium text-gray-500 whitespace-nowrap transition-all ${
                  activeTab === tab ? "text-gray-900 border-b-2 border-gray-900" : ""
                }`}
              >
                {tab === "about" && "About"}
                {tab === "amenities" && "Amenities"}
                {tab === "sleeping" && "Sleeping"}
                {tab === "rules" && "House Rules"}
                {tab === "payment" && "Payment & Cancellation"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="space-y-16">
          {/* About */}
          <div className={activeTab === "about" ? "block" : "hidden"}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Your Coastal Haven</h2>
              <p className="text-gray-700 leading-relaxed">
                Nestled in a prime location, our recently renovated apartment is the perfect sanctuary for your
                Dubrovnik getaway. Enjoy a seamless blend of modern luxury and home-like comfort, just moments away from
                the vibrant city center and beautiful beaches.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The apartment features two beautifully appointed bedrooms with plush queen-size beds, ensuring restful
                nights. The contemporary bathroom boasts a spacious walk-in shower. Prepare delicious meals in the fully
                equipped, modern kitchen and unwind in the bright and airy living room. Step out onto the terrace to
                soak in the breathtaking views that will make your stay truly special.
              </p>

              <div className="mt-10 bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "State-of-the-art kitchen with all essentials",
                    "Elegant bathroom with a walk-in shower",
                    "Comfortable air conditioning and efficient heating",
                    "High-speed Wi-Fi and a Smart TV for entertainment",
                    "Convenient private parking",
                    "In-unit washing machine and ironing facilities",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-white p-1 rounded-full border border-gray-200">
                        <FaChevronRight className="h-4 w-4 text-gray-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className={activeTab === "amenities" ? "block" : "hidden"}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Modern Amenities for Your Comfort</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaWifi className="h-6 w-6" />,
                  title: "Free High-Speed Wi-Fi",
                  description: "Stay connected with our reliable high-speed internet throughout your stay.",
                },
                {
                  icon: <FaParking className="h-6 w-6" />,
                  title: "Secured Private Parking",
                  description: "Enjoy the convenience of a dedicated parking space for your vehicle.",
                },
                {
                  icon: <FaSnowflake className="h-6 w-6" />,
                  title: "Air Conditioning & Heating",
                  description: "Stay comfortable year-round with climate control in all rooms.",
                },
                {
                  icon: <FaTv className="h-6 w-6" />,
                  title: "Smart TV with Streaming",
                  description: "Access your favorite streaming services on our modern Smart TV.",
                },
                {
                  icon: <FaHome className="h-6 w-6" />,
                  title: "Fully Equipped Kitchen",
                  description: "Cook like you're at home with our modern appliances and cookware.",
                },
                {
                  icon: <FaBath className="h-6 w-6" />,
                  title: "Luxury Bathroom",
                  description: "Enjoy our modern bathroom with walk-in shower and premium fixtures.",
                },
              ].map((amenity, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-50 p-3 rounded-lg w-fit mb-4">{amenity.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sleeping Arrangements */}
          <div className={activeTab === "sleeping" ? "block" : "hidden"}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Relaxing Sleeping Arrangements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <img
                    src={images[1]}
                    alt="Master Bedroom"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Master Bedroom</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <FaBed className="h-5 w-5" />
                    <span>1 Queen Bed</span>
                  </div>
                  <p className="text-gray-600">
                    Spacious master bedroom with premium linens, blackout curtains, and ample storage space.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <img
                    src={images[2]}
                    alt="Second Bedroom"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Second Bedroom</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <FaBed className="h-5 w-5" />
                    <span>1 Queen Bed</span>
                  </div>
                  <p className="text-gray-600">
                    Comfortable second bedroom with quality linens and a peaceful ambiance for restful sleep.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 bg-gray-50 p-6 rounded-xl mt-4">
                <div className="flex items-start gap-4">
                  <FaInfoCircle className="h-5 w-5 text-gray-400 mt-1" />
                  <p className="text-gray-600">
                    A baby crib is available upon request for families with young children. Please let us know in
                    advance if you need this arrangement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* House Rules */}
          <div className={activeTab === "rules" ? "block" : "hidden"}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Simple House Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaSmokingBan className="h-6 w-6" />,
                  title: "No Smoking Allowed",
                  description: "Smoking is not permitted anywhere in the apartment or on the balcony.",
                },
                {
                  icon: <FaDog className="h-6 w-6" />,
                  title: "Pets Allowed (Upon Arrangement)",
                  description: "Well-behaved pets are welcome with prior approval. Please inform us when booking.",
                },
                {
                  icon: <FaClock className="h-6 w-6" />,
                  title: "Check-in: After 3:00 PM",
                  description: "Early check-in may be available upon request, subject to availability.",
                },
                {
                  icon: <FaClock className="h-6 w-6" />,
                  title: "Check-out: Before 11:00 AM",
                  description: "Late check-out may be arranged in advance, depending on availability.",
                },
              ].map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="bg-gray-50 p-3 rounded-lg">{rule.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{rule.title}</h3>
                    <p className="text-gray-600 text-sm">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600">
                We kindly ask all guests to respect the apartment and our neighbors. Quiet hours are from 10:00 PM to
                8:00 AM. Please treat our home as you would your own.
              </p>
            </div>
          </div>

          {/* Payment & Cancellation */}
          <div className={activeTab === "payment" ? "block" : "hidden"}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment & Cancellation Policies</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <FaCreditCard className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Schedule</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Deposit:</span> A 10% deposit is required at the time of booking
                          to secure your reservation.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Balance:</span> The remaining balance is due 30 days prior to
                          your arrival date.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Payment Methods:</span> We accept credit cards, PayPal, and bank
                          transfers.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <FaCalendarAlt className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Full Refund:</span> Cancel up to 30 days before check-in for a
                          full refund of your payment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">50% Refund:</span> Cancellations made between 10 and 30 days
                          before arrival will receive a 50% refund.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaChevronRight className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">No Refund:</span> Cancellations made less than 10 days before
                          check-in are not eligible for a refund.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <FaInfoCircle className="h-5 w-5 text-gray-400 mt-1" />
                  <p className="text-gray-600">
                    We understand that plans can change. If you need to modify your booking, please contact us as soon
                    as possible, and we'll do our best to accommodate your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking Bar */}
      <div className="sticky bottom-0 bg-white shadow-xl border-t border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Price */}
          <div className="text-left">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gray-900">€195</span>
              <span className="text-gray-500">/night</span>
            </div>
            <div className="text-sm text-gray-500">Starting from</div>
          </div>

          {/* Center: Location (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <FaMapMarkerAlt className="h-4 w-4 text-rose-500" />
            <span>Dubrovnik, Croatia</span>
          </div>

          {/* Right: Booking Button */}
          <a
            href="https://www.airbnb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>Book Your Stay</span>
            <FaChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Apartment
