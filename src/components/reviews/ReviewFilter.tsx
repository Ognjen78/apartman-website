"use client"

import type React from "react"
import { FaStar, FaFilter, FaSort } from "react-icons/fa"
import { SiAirbnb, SiGooglemaps, SiTripadvisor } from "react-icons/si"
import { HiUser } from "react-icons/hi"
import type { ReviewRating, Platform, SortOption } from "../../pages/Reviews"

interface ReviewFiltersProps {
  selectedRating: ReviewRating | null
  setSelectedRating: (rating: ReviewRating | null) => void
  selectedPlatform: Platform | null
  setSelectedPlatform: (platform: Platform | null) => void
  sortBy: SortOption
  setSortBy: (option: SortOption) => void
  stats: {
    distribution: {
      5: number
      4: number
      3: number
      2: number
      1: number
    }
    total: number
  }
}

const ReviewFilters: React.FC<ReviewFiltersProps> = ({
  selectedRating,
  setSelectedRating,
  selectedPlatform,
  setSelectedPlatform,
  sortBy,
  setSortBy,
  stats,
}) => {
  const platforms: { name: Platform; icon: React.ReactNode }[] = [
    { name: "Airbnb", icon: <SiAirbnb /> },
    { name: "Google", icon: <SiGooglemaps /> },
    { name: "TripAdvisor", icon: <SiTripadvisor /> },
    { name: "Direct", icon: <HiUser /> },
  ]

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "highest", label: "Highest rated" },
    { value: "lowest", label: "Lowest rated" },
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
      <div>
        <div className="flex items-center mb-4">
          <FaFilter className="text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">Filter by Rating</h3>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setSelectedRating(null)}
            className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
              selectedRating === null ? "bg-rose-50 text-rose-600 font-medium" : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span>All ratings</span>
            <span className="text-sm text-gray-500">{stats.total}</span>
          </button>

          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.distribution[rating as keyof typeof stats.distribution]
            return (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating as ReviewRating)}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                  selectedRating === rating ? "bg-rose-50 text-rose-600 font-medium" : "text-gray-700 hover:bg-gray-50"
                } ${count === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={count === 0}
              >
                <div className="flex items-center">
                  <span>{rating}</span>
                  <FaStar className="ml-1 text-amber-400" />
                </div>
                <span className="text-sm text-gray-500">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center mb-4">
          <FaFilter className="text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">Filter by Platform</h3>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setSelectedPlatform(null)}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedPlatform === null ? "bg-rose-50 text-rose-600 font-medium" : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            All platforms
          </button>

          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => setSelectedPlatform(platform.name)}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                selectedPlatform === platform.name
                  ? "bg-rose-50 text-rose-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="mr-2">{platform.icon}</span>
              <span>{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center mb-4">
          <FaSort className="text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">Sort by</h3>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <button
          onClick={() => {
            setSelectedRating(null)
            setSelectedPlatform(null)
            setSortBy("newest")
          }}
          className="w-full py-2 text-rose-600 font-medium hover:text-rose-700 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    </div>
  )
}

export default ReviewFilters
