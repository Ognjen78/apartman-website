import type React from "react"
import { StarIcon as FaStar, QuoteIcon as FaQuoteLeft } from "lucide-react"
import { SiAirbnb } from "react-icons/si"
import { HiReply } from "react-icons/hi"
import type { Review } from "../../pages/Reviews"

interface ReviewsListProps {
  reviews: Review[]
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <div className="space-y-8">
      {reviews.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">No reviews found</h3>
          <p className="text-gray-600">Check back soon for new reviews.</p>
        </div>
      ) : (
        reviews.map((review) => (
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
        ))
      )}
    </div>
  )
}

export default ReviewsList
