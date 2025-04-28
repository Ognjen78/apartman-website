import type React from "react"

const ReviewsHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans py-24 px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Guest Reviews</span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Discover what our guests have to say about their experiences at Apartment Nina
        </p>
      </div>
    </div>
  )
}

export default ReviewsHeader
