"use client"

import type React from "react"
import { useState } from "react"
import { StarIcon as FaStar, QuoteIcon as FaQuoteLeft } from "lucide-react"
import { SiAirbnb } from "react-icons/si"
import { HiReply } from "react-icons/hi"
import ReviewsHeader from "../components/reviews/ReviewsHeader"

export type ReviewRating = 1 | 2 | 3 | 4 | 5
export type Platform = "Airbnb" | "Booking.com" | "Google" | "TripAdvisor" | "Direct"
export type SortOption = "newest" | "oldest" | "highest" | "lowest"

export interface Review {
  id: string
  name: string
  location: string
  date: string
  rating: ReviewRating
  text: string
  image?: string
  response?: {
    text: string
    date: string
  }
}

const ReviewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  // Sample reviews data - all from Airbnb
  const allReviews: Review[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      location: "London, UK",
      date: "April 15, 2025",
      rating: 5,
      text: "Apartment Nina exceeded all our expectations. The views are even more breathtaking than the photos suggest, and the location is perfect for exploring Dubrovnik. The apartment itself is beautifully furnished with everything we needed for a comfortable stay. The host was incredibly responsive and provided excellent recommendations for local restaurants and activities. We'll definitely be back!",
      
    },
    {
      id: "2",
      name: "Marco Rossi",
      location: "Milan, Italy",
      date: "March 28, 2025",
      rating: 5,
      text: "We had an amazing stay at Apartment Nina. The apartment is beautifully furnished, spotlessly clean, and the host was incredibly helpful with local recommendations. The kitchen was well-equipped for cooking, and the beds were very comfortable. The location is perfect - quiet but still close to everything. The perfect base for our Croatian adventure.",
      response: {
        text: "Thank you so much for your kind words, Marco! We're delighted that you enjoyed your stay and found the apartment comfortable. We hope to welcome you back soon!",
        date: "March 30, 2025",
      },
    },
    {
      id: "3",
      name: "Emma Schmidt",
      location: "Berlin, Germany",
      date: "March 10, 2025",
      rating: 5,
      text: "The apartment is a true gem in Dubrovnik. Modern amenities, comfortable beds, and that view! Morning coffee on the terrace watching the sun rise over the Adriatic was the highlight of our trip. The host provided excellent communication throughout our stay and even arranged airport transfers for us. Highly recommended!",
    },
    {
      id: "4",
      name: "John Smith",
      location: "New York, USA",
      date: "February 22, 2025",
      rating: 4,
      text: "Great location and beautiful apartment. Very clean and well-maintained. The only small issue was some noise from nearby construction during our stay, but that's obviously temporary and outside the host's control. Would definitely recommend to friends visiting Dubrovnik.",
    },
    {
      id: "5",
      name: "Sophie Dubois",
      location: "Paris, France",
      date: "February 15, 2025",
      rating: 5,
      text: "Magnifique! The apartment was perfect for our romantic getaway. The attention to detail in the design and amenities made us feel like we were in a luxury hotel, but with all the comforts of home. The location is ideal for exploring the old town and beaches. We particularly appreciated the restaurant recommendations from our host.",
    },
    {
      id: "6",
      name: "Akira Tanaka",
      location: "Tokyo, Japan",
      date: "January 30, 2025",
      rating: 5,
      text: "Excellent apartment with stunning views. Very clean and comfortable with all necessary amenities. The host was very kind and helpful, providing lots of useful information about Dubrovnik. The location is perfect - quiet but close to the old town. Highly recommended!",
    },
    {
      id: "7",
      name: "Isabella Garcia",
      location: "Barcelona, Spain",
      date: "January 18, 2025",
      rating: 4,
      text: "Beautiful apartment in a great location. The views are amazing and the interior is stylish and comfortable. The kitchen was well-equipped and the bathroom was modern and clean. The only reason for 4 stars instead of 5 is that the air conditioning was a bit noisy at night. Otherwise, perfect!",
    },
    {
      id: "8",
      name: "Lars Andersen",
      location: "Copenhagen, Denmark",
      date: "December 12, 2024",
      rating: 5,
      text: "We stayed at Apartment Nina during the winter and it was still a magical experience. The apartment is cozy and warm, with incredible views of the Adriatic. The host went above and beyond to make our stay special, even decorating for the holidays. The location is perfect for exploring Dubrovnik without the summer crowds.",
      response: {
        text: "Thank you for your wonderful review, Lars! We're so happy you enjoyed your winter stay with us. The holiday season in Dubrovnik is indeed special, and we're glad we could make your experience memorable. We hope to welcome you back in the future!",
        date: "December 14, 2024",
      },
    },
    {
      id: "9",
      name: "Olivia Brown",
      location: "Sydney, Australia",
      date: "November 25, 2024",
      rating: 5,
      text: "Worth traveling halfway around the world for! This apartment is absolutely stunning - the photos don't do it justice. Immaculately clean, beautifully furnished, and that view... simply breathtaking. The host was incredibly accommodating with our late arrival and provided so many thoughtful touches. Can't wait to return!",
    },
    {
      id: "10",
      name: "Pavel Novak",
      location: "Prague, Czech Republic",
      date: "November 8, 2024",
      rating: 3,
      text: "The apartment has a great location and beautiful views. The interior is nice and modern. However, we had some issues with hot water during our stay, and it took a day to resolve. The host was apologetic and responsive, but it did impact our experience.",
      response: {
        text: "Thank you for your feedback, Pavel. We sincerely apologize for the hot water issue during your stay. We've since upgraded our water heating system to prevent similar problems in the future. We appreciate your understanding and hope you'll give us another chance to provide the exceptional experience our guests typically enjoy.",
        date: "November 10, 2024",
      },
    },
    {
      id: "11",
      name: "Maria Rodriguez",
      location: "Madrid, Spain",
      date: "October 20, 2024",
      rating: 5,
      text: "Apartment Nina is a perfect place to stay in Dubrovnik. The location is ideal - close enough to walk to all the attractions but far enough from the crowds to be peaceful. The apartment itself is beautiful, clean, and has everything you need. The host's recommendations for restaurants were spot on. We had an amazing time!",
    },
    {
      id: "12",
      name: "Thomas Weber",
      location: "Munich, Germany",
      date: "October 5, 2024",
      rating: 5,
      text: "Exceptional apartment with stunning sea views. Everything was perfect from check-in to check-out. The apartment is spacious, modern, and very well-equipped. The location is excellent - just a short walk to the old town but in a quiet area. The host was very friendly and helpful. Highly recommended!",
    },
  ]

  // Pagination
  const reviewsPerPage = 6
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage)
  const currentReviews = allReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage)

  // Calculate stats
  const stats = {
    average: Number((allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1)),
    total: allReviews.length,
    distribution: {
      5: allReviews.filter((review) => review.rating === 5).length,
      4: allReviews.filter((review) => review.rating === 4).length,
      3: allReviews.filter((review) => review.rating === 3).length,
      2: allReviews.filter((review) => review.rating === 2).length,
      1: allReviews.filter((review) => review.rating === 1).length,
    },
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ReviewsHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            {/* Stats */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Overall Rating</h2>

              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mr-4">{stats.average}</div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(stats.average) ? "text-amber-400" : "text-gray-300"}
                        size={24}
                      />
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm">Based on {stats.total} reviews</div>
                </div>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = stats.distribution[rating as keyof typeof stats.distribution]
                  const percentage = Math.round((count / stats.total) * 100) || 0

                  return (
                    <div key={rating} className="flex items-center">
                      <div className="w-12 text-sm text-gray-600 flex items-center">
                        {rating} <FaStar className="ml-1 text-amber-400" size={12} />
                      </div>
                      <div className="flex-1 mx-2 h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            rating >= 4 ? "bg-emerald-500" : rating === 3 ? "bg-amber-500" : "bg-rose-500"
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="w-9 text-right text-sm text-gray-500">{percentage}%</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Airbnb Info */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <SiAirbnb className="text-[#FF5A5F] text-2xl" />
                <h3 className="text-lg font-medium text-gray-800">Airbnb Reviews</h3>
              </div>
              <p className="text-gray-600 mb-4">
                All reviews are from verified guests who booked through Airbnb and stayed at Apartment Nina.
              </p>
              <a
                href="https://www.airbnb.com/rooms/50532497/reviews?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1"
              >
                View all 47 reviews on Airbnb
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* Reviews List */}
            <div className="space-y-8">
              {currentReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {review.image ? (
                          <img
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 flex items-center justify-center text-white font-medium text-lg">
                            {review.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                          <div className="flex items-center">
                            <div className="mr-2">
                              <SiAirbnb className="text-[#FF5A5F]" />
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-2">{review.location}</p>

                        <div className="flex text-amber-400 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? "text-amber-400" : "text-gray-300"} />
                          ))}
                        </div>

                        <div className="relative">
                          <FaQuoteLeft className="absolute top-0 left-0 text-gray-200 opacity-50" size={20} />
                          <p className="pl-7 text-gray-700 leading-relaxed">{review.text}</p>
                        </div>
                      </div>
                    </div>

                    {review.response && (
                      <div className="mt-6 ml-16 p-4 bg-gray-50 rounded-lg border-l-4 border-rose-400">
                        <div className="flex items-start">
                          <HiReply className="text-rose-400 mr-2 mt-1 flex-shrink-0" size={18} />
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">Response from host</h4>
                              <span className="text-xs text-gray-500">{review.response.date}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-700">{review.response.text}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full ${
                      currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-label="Previous page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={`page-${index + 1}`}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        currentPage === index + 1 ? "bg-rose-600 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-label="Next page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-rose-600 to-amber-600 rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Enjoyed Your Stay?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We'd love to hear about your experience at Apartment Nina. Your feedback helps us improve and assists
              other travelers in making their decision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.airbnb.com/rooms/50532497/reviews?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <SiAirbnb className="text-[#FF5A5F]" />
                <span>Leave a Review on Airbnb</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsPage
