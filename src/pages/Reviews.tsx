"use client"

import type React from "react"
import { useState } from "react"
import ReviewsHeader from "../components/reviews/ReviewsHeader"
import ReviewStats from "../components/reviews/ReviewStats"
import ReviewFilters from "../components/reviews/ReviewFilter"
import ReviewsList from "../components/reviews/ReviewsList"
import ReviewsPagination from "../components/reviews/ReviewsPagination"
import ReviewsCallToAction from "../components/reviews/ReviewsCallToAction"

export type Platform = "Airbnb" | "Booking.com" | "Google" | "TripAdvisor" | "Direct"
export type ReviewRating = 1 | 2 | 3 | 4 | 5
export type SortOption = "newest" | "oldest" | "highest" | "lowest"

export interface Review {
  id: string
  name: string
  location: string
  date: string
  rating: ReviewRating
  text: string
  image?: string
  platform: Platform
  response?: {
    text: string
    date: string
  }
}

const ReviewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRating, setSelectedRating] = useState<ReviewRating | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  // Sample reviews data
  const allReviews: Review[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      location: "London, UK",
      date: "April 15, 2025",
      rating: 5,
      text: "Apartment Nina exceeded all our expectations. The views are even more breathtaking than the photos suggest, and the location is perfect for exploring Dubrovnik. The apartment itself is beautifully furnished with everything we needed for a comfortable stay. The host was incredibly responsive and provided excellent recommendations for local restaurants and activities. We'll definitely be back!",
      image: "https://via.placeholder.com/150",
      platform: "Airbnb",
    },
    {
      id: "2",
      name: "Marco Rossi",
      location: "Milan, Italy",
      date: "March 28, 2025",
      rating: 5,
      text: "We had an amazing stay at Apartment Nina. The apartment is beautifully furnished, spotlessly clean, and the host was incredibly helpful with local recommendations. The kitchen was well-equipped for cooking, and the beds were very comfortable. The location is perfect - quiet but still close to everything. The perfect base for our Croatian adventure.",
      image: "https://via.placeholder.com/150",
      platform: "Booking.com",
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
      image: "https://via.placeholder.com/150",
      platform: "Airbnb",
    },
    {
      id: "4",
      name: "John Smith",
      location: "New York, USA",
      date: "February 22, 2025",
      rating: 4,
      text: "Great location and beautiful apartment. Very clean and well-maintained. The only small issue was some noise from nearby construction during our stay, but that's obviously temporary and outside the host's control. Would definitely recommend to friends visiting Dubrovnik.",
      platform: "Google",
    },
    {
      id: "5",
      name: "Sophie Dubois",
      location: "Paris, France",
      date: "February 15, 2025",
      rating: 5,
      text: "Magnifique! The apartment was perfect for our romantic getaway. The attention to detail in the design and amenities made us feel like we were in a luxury hotel, but with all the comforts of home. The location is ideal for exploring the old town and beaches. We particularly appreciated the restaurant recommendations from our host.",
      image: "https://via.placeholder.com/150",
      platform: "TripAdvisor",
    },
    {
      id: "6",
      name: "Akira Tanaka",
      location: "Tokyo, Japan",
      date: "January 30, 2025",
      rating: 5,
      text: "Excellent apartment with stunning views. Very clean and comfortable with all necessary amenities. The host was very kind and helpful, providing lots of useful information about Dubrovnik. The location is perfect - quiet but close to the old town. Highly recommended!",
      platform: "Booking.com",
    },
    {
      id: "7",
      name: "Isabella Garcia",
      location: "Barcelona, Spain",
      date: "January 18, 2025",
      rating: 4,
      text: "Beautiful apartment in a great location. The views are amazing and the interior is stylish and comfortable. The kitchen was well-equipped and the bathroom was modern and clean. The only reason for 4 stars instead of 5 is that the air conditioning was a bit noisy at night. Otherwise, perfect!",
      platform: "Airbnb",
    },
    {
      id: "8",
      name: "Lars Andersen",
      location: "Copenhagen, Denmark",
      date: "December 12, 2024",
      rating: 5,
      text: "We stayed at Apartment Nina during the winter and it was still a magical experience. The apartment is cozy and warm, with incredible views of the Adriatic. The host went above and beyond to make our stay special, even decorating for the holidays. The location is perfect for exploring Dubrovnik without the summer crowds.",
      image: "https://via.placeholder.com/150",
      platform: "Direct",
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
      platform: "TripAdvisor",
    },
    {
      id: "10",
      name: "Pavel Novak",
      location: "Prague, Czech Republic",
      date: "November 8, 2024",
      rating: 3,
      text: "The apartment has a great location and beautiful views. The interior is nice and modern. However, we had some issues with hot water during our stay, and it took a day to resolve. The host was apologetic and responsive, but it did impact our experience.",
      platform: "Booking.com",
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
      image: "https://via.placeholder.com/150",
      platform: "Google",
    },
    {
      id: "12",
      name: "Thomas Weber",
      location: "Munich, Germany",
      date: "October 5, 2024",
      rating: 5,
      text: "Exceptional apartment with stunning sea views. Everything was perfect from check-in to check-out. The apartment is spacious, modern, and very well-equipped. The location is excellent - just a short walk to the old town but in a quiet area. The host was very friendly and helpful. Highly recommended!",
      platform: "Airbnb",
    },
  ]

  // Filter and sort reviews
  const filteredReviews = allReviews
    .filter((review) => (selectedRating ? review.rating === selectedRating : true))
    .filter((review) => (selectedPlatform ? review.platform === selectedPlatform : true))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()

      switch (sortBy) {
        case "newest":
          return dateB - dateA
        case "oldest":
          return dateA - dateB
        case "highest":
          return b.rating - a.rating
        case "lowest":
          return a.rating - b.rating
        default:
          return dateB - dateA
      }
    })

  // Pagination
  const reviewsPerPage = 6
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage)
  const currentReviews = filteredReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage)

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
            <ReviewStats stats={stats} />
            <ReviewFilters
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
              sortBy={sortBy}
              setSortBy={setSortBy}
              stats={stats}
            />
          </div>

          <div className="lg:col-span-8">
            <ReviewsList reviews={currentReviews} />

            {totalPages > 1 && (
              <ReviewsPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            )}
          </div>
        </div>

        <ReviewsCallToAction />
      </div>
    </div>
  )
}

export default ReviewsPage
