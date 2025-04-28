"use client"

import type React from "react"

import { useState } from "react"
import {
  MapPin,
  Navigation,
  Clock,
  Landmark,
  Utensils,
  ShoppingBag,
  Umbrella,
  Coffee,
  Bus,
  Car,
  Plane,
  Ship,
  CarTaxiFrontIcon as Taxi,
  FootprintsIcon as Walking,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react"

// Map component would typically use a library like Google Maps, Mapbox, or Leaflet
// This is a simplified version for demonstration purposes
const InteractiveMap = () => {
  return (
    <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11622.954786406802!2d18.09075391109815!3d42.64266239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b8ba20835e87d%3A0x400ad50862bd500!2sDubrovnik%2C%20Croatia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Apartment Nina Location"
      ></iframe>

      {/* Custom overlay with location pin */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md z-10 max-w-xs">
        <div className="flex items-center gap-2 text-gray-800">
          <MapPin className="text-rose-600 h-5 w-5 flex-shrink-0" />
          <span className="font-medium">Apartment Nina</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">Ul. Petra Krešimira IV 12, 20000 Dubrovnik, Croatia</p>
      </div>

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors" aria-label="Zoom in">
          <span className="text-xl font-bold">+</span>
        </button>
        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Zoom out"
        >
          <span className="text-xl font-bold">−</span>
        </button>
      </div>
    </div>
  )
}

// Types for our data
interface Attraction {
  id: number
  name: string
  category: "landmark" | "dining" | "shopping" | "beach" | "cafe"
  description: string
  distance: string
  walkingTime: string
  image: string
  link?: string
}

interface TransportOption {
  id: number
  name: string
  icon: React.ReactNode
  description: string
  details: string[]
}

const LocationPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSection, setExpandedSection] = useState<string | null>("attractions")

  // Sample data for nearby attractions
  const attractions: Attraction[] = [
    {
      id: 1,
      name: "Dubrovnik Old Town",
      category: "landmark",
      description: "The historic walled city center with stunning architecture and rich history.",
      distance: "1.2 km",
      walkingTime: "15 min",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://visitdubrovnik.hr/old-town/",
    },
    {
      id: 2,
      name: "Banje Beach",
      category: "beach",
      description: "Popular pebble beach with crystal clear water and views of the Old Town.",
      distance: "0.8 km",
      walkingTime: "10 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Lokanda Peskarija",
      category: "dining",
      description: "Seafood restaurant in the old harbor with fresh catches and local dishes.",
      distance: "1.5 km",
      walkingTime: "18 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      name: "Cable Car Station",
      category: "landmark",
      description: "Take a ride up to Mount Srđ for panoramic views of the city and coastline.",
      distance: "1.7 km",
      walkingTime: "22 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      name: "Gundulić Square Market",
      category: "shopping",
      description: "Morning market with local produce, souvenirs, and handmade crafts.",
      distance: "1.3 km",
      walkingTime: "16 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      name: "Gradska Kavana Arsenal",
      category: "cafe",
      description: "Historic café with terrace seating and views of the main street.",
      distance: "1.4 km",
      walkingTime: "17 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      name: "Lovrijenac Fortress",
      category: "landmark",
      description: "Impressive fortress perched on a cliff, featured in Game of Thrones.",
      distance: "1.9 km",
      walkingTime: "25 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      name: "Lapad Beach",
      category: "beach",
      description: "Family-friendly beach area with shallow waters and nearby amenities.",
      distance: "3.2 km",
      walkingTime: "40 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      name: "Nautika Restaurant",
      category: "dining",
      description: "Upscale dining with seafood specialties and stunning sea views.",
      distance: "1.8 km",
      walkingTime: "23 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 10,
      name: "Dubrovnik Cathedral",
      category: "landmark",
      description: "Baroque cathedral with religious artifacts and beautiful architecture.",
      distance: "1.3 km",
      walkingTime: "16 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 11,
      name: "Café Festival",
      category: "cafe",
      description: "Popular café on the main street with outdoor seating and people watching.",
      distance: "1.4 km",
      walkingTime: "17 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 12,
      name: "Gruž Market",
      category: "shopping",
      description: "Local market with fresh seafood, fruits, vegetables, and more.",
      distance: "2.5 km",
      walkingTime: "30 min",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Transportation options
  const transportOptions: TransportOption[] = [
    {
      id: 1,
      name: "Airport Transfer",
      icon: <Plane className="h-6 w-6" />,
      description: "Dubrovnik Airport is located 20 km from the apartment.",
      details: [
        "Taxi: 30-40 minutes, approximately €35-45",
        "Airport shuttle: 45 minutes, approximately €10 per person",
        "Private transfer: Can be arranged upon request",
      ],
    },
    {
      id: 2,
      name: "Public Bus",
      icon: <Bus className="h-6 w-6" />,
      description: "Convenient bus service throughout Dubrovnik.",
      details: [
        "Bus stop: 200m from the apartment",
        "Tickets: €2 one-way, €10 daily pass",
        "Buses run every 15-20 minutes",
        "Route 4 takes you directly to Old Town",
      ],
    },
    {
      id: 3,
      name: "Taxi Services",
      icon: <Taxi className="h-6 w-6" />,
      description: "Readily available throughout the city.",
      details: [
        "Can be hailed on the street or called",
        "Uber and Bolt are also available",
        "Old Town to apartment: approximately €8-10",
      ],
    },
    {
      id: 4,
      name: "Car Rental",
      icon: <Car className="h-6 w-6" />,
      description: "Several rental agencies available in Dubrovnik.",
      details: [
        "Free parking available near the apartment",
        "Not recommended for Old Town visits (limited parking)",
        "Ideal for exploring surrounding areas and Montenegro",
      ],
    },
    {
      id: 5,
      name: "Walking",
      icon: <Walking className="h-6 w-6" />,
      description: "Many attractions are within walking distance.",
      details: ["Old Town: 15-minute walk", "Banje Beach: 10-minute walk", "Scenic coastal path starts nearby"],
    },
    {
      id: 6,
      name: "Boat Services",
      icon: <Ship className="h-6 w-6" />,
      description: "Explore nearby islands and coastal areas.",
      details: [
        "Ferry terminal: 2 km from apartment",
        "Day trips to Lokrum, Elafiti Islands",
        "Water taxis available at Old Town harbor",
      ],
    },
  ]

  // Filter attractions based on category and search query
  const filteredAttractions = attractions.filter((attraction) => {
    const matchesCategory = activeCategory ? attraction.category === activeCategory : true
    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          attraction.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "landmark":
        return <Landmark className="h-5 w-5" />
      case "dining":
        return <Utensils className="h-5 w-5" />
      case "shopping":
        return <ShoppingBag className="h-5 w-5" />
      case "beach":
        return <Umbrella className="h-5 w-5" />
      case "cafe":
        return <Coffee className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  // Toggle section expansion
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Discover Our Location</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Perfectly situated to experience the best of Dubrovnik, with easy access to beaches, historic sites, and
              local amenities
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Address and Map */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-2">Our Address</h2>
                <div className="flex items-start gap-3">
                  <MapPin className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">Apartment Nina</p>
                    <p className="text-gray-600">Ul. Petra Krešimira IV 12</p>
                    <p className="text-gray-600">20000 Dubrovnik, Croatia</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Dubrovnik+Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>

                <button className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Clock className="h-4 w-4" />
                  <span>Calculate ETA</span>
                </button>
              </div>
            </div>

            <InteractiveMap />
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-12">
          <div
            className="flex items-center justify-between cursor-pointer bg-white p-6 rounded-t-xl shadow-sm border-b border-gray-200"
            onClick={() => toggleSection("attractions")}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800">Nearby Attractions</h2>
            <ChevronDown
              className={`h-6 w-6 text-gray-500 transition-transform ${expandedSection === "attractions" ? "rotate-180" : ""}`}
            />
          </div>

          {expandedSection === "attractions" && (
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-md">
              {/* Search and filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search attractions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === null ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All
                  </button>

                  {["landmark", "beach", "dining", "shopping", "cafe"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                        activeCategory === category
                          ? "bg-rose-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {getCategoryIcon(category)}
                      <span className="capitalize">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Attractions grid */}
              {filteredAttractions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAttractions.map((attraction) => (
                    <div
                      key={attraction.id}
                      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={"../assets/dubrovnik.jpg"}
                          alt={attraction.name}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                          {getCategoryIcon(attraction.category)}
                          <span className="capitalize">{attraction.category}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                          {attraction.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-gray-500">
                            <MapPin className="h-4 w-4 text-rose-500" />
                            <span>{attraction.distance}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <Walking className="h-4 w-4 text-amber-500" />
                            <span>{attraction.walkingTime}</span>
                          </div>
                        </div>

                        {attraction.link && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <a
                              href={attraction.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-rose-600 hover:text-rose-700 font-medium text-sm flex items-center gap-1"
                            >
                              Learn more
                              <ChevronRight className="h-4 w-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No attractions found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setActiveCategory(null)
                      setSearchQuery("")
                    }}
                    className="mt-4 text-rose-600 hover:text-rose-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Transportation */}
        <div className="mb-12">
          <div
            className="flex items-center justify-between cursor-pointer bg-white p-6 rounded-t-xl shadow-sm border-b border-gray-200"
            onClick={() => toggleSection("transportation")}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800">Getting Around</h2>
            <ChevronDown
              className={`h-6 w-6 text-gray-500 transition-transform ${expandedSection === "transportation" ? "rotate-180" : ""}`}
            />
          </div>

          {expandedSection === "transportation" && (
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transportOptions.map((option) => (
                  <div
                    key={option.id}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-rose-100 text-rose-600 p-3 rounded-full">{option.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-800">{option.name}</h3>
                    </div>

                    <p className="text-gray-600 mb-4">{option.description}</p>

                    <ul className="space-y-2">
                      {option.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Neighborhood Guide */}
        <div className="mb-12">
          <div
            className="flex items-center justify-between cursor-pointer bg-white p-6 rounded-t-xl shadow-sm border-b border-gray-200"
            onClick={() => toggleSection("neighborhood")}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800">Neighborhood Guide</h2>
            <ChevronDown
              className={`h-6 w-6 text-gray-500 transition-transform ${expandedSection === "neighborhood" ? "rotate-180" : ""}`}
            />
          </div>

          {expandedSection === "neighborhood" && (
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">About Our Area</h3>
                  <p className="text-gray-600 mb-4">
                    Apartment Nina is located in a peaceful residential area just east of Dubrovnik's historic center.
                    This prime location offers the perfect balance of tranquility and convenience, with easy access to
                    the city's main attractions.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The neighborhood is known for its stunning sea views, proximity to beautiful beaches, and local
                    charm. You'll find small bakeries, cafés, and convenience stores within a short walking distance.
                  </p>
                  <p className="text-gray-600">
                    The area is safe, well-lit at night, and popular with both locals and tourists. It's an ideal base
                    for exploring all that Dubrovnik has to offer while enjoying a more authentic Croatian experience.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Tips</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          <span className="font-medium text-gray-800">Best time to visit Old Town:</span> Early morning
                          (before 9 AM) or evening (after 6 PM) to avoid cruise ship crowds.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          <span className="font-medium text-gray-800">Local bakery:</span> Try "Pekara Zlatno Zrno" just
                          200m from the apartment for fresh morning pastries.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          <span className="font-medium text-gray-800">Hidden beach:</span> Walk 15 minutes east to find
                          a small, less crowded pebble beach popular with locals.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          <span className="font-medium text-gray-800">Sunset spot:</span> The coastal path near the
                          apartment offers beautiful sunset views without the crowds.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl overflow-hidden h-64 relative">
                    <img
                      src="/placeholder.svg?height=600&width=800"
                      alt="Neighborhood view"
                      
                      className="object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden h-40 relative">
                      <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="Local street"
                        
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden h-40 relative">
                      <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="Nearby cafe"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Walking Times
                    </h4>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-center justify-between">
                        <span>Nearest beach:</span>
                        <span className="font-medium">5 min</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Old Town entrance:</span>
                        <span className="font-medium">15 min</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Nearest restaurant:</span>
                        <span className="font-medium">3 min</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Grocery store:</span>
                        <span className="font-medium">4 min</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Bus stop:</span>
                        <span className="font-medium">2 min</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rose-600 to-amber-600 rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Explore Dubrovnik?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book your stay at Apartment Nina and enjoy our perfect location with easy access to all of Dubrovnik's
              attractions, beaches, and cultural sites.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span>Book Your Stay</span>
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Navigation className="h-5 w-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPage
