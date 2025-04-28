import type React from "react"
import { FaStar } from "react-icons/fa"

interface ReviewStatsProps {
  stats: {
    average: number
    total: number
    distribution: {
      5: number
      4: number
      3: number
      2: number
      1: number
    }
  }
}

const ReviewStats: React.FC<ReviewStatsProps> = ({ stats }) => {
  return (
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
  )
}

export default ReviewStats
