import type React from "react"

const ReviewsHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Guest Reviews</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover what our guests have to say about their experiences at Apartment Nina
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewsHeader
