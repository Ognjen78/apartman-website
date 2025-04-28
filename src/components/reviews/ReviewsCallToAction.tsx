import type React from "react"
import { FaPencilAlt } from "react-icons/fa"

const ReviewsCallToAction: React.FC = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-rose-600 to-amber-600 rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-12 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Enjoyed Your Stay?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          We'd love to hear about your experience at Apartment Nina. Your feedback helps us improve and assists other
          travelers in making their decision.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <FaPencilAlt />
            <span>Leave a Review on Airbnb</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Apartment+Nina+Dubrovnik"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <FaPencilAlt />
            <span>Review on Google</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCallToAction
