"use client"

import type React from "react"

interface ReviewsPaginationProps {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

const ReviewsPagination: React.FC<ReviewsPaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevious}
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
            onClick={() => {
              setCurrentPage(index + 1)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === index + 1 ? "bg-rose-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
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
  )
}

export default ReviewsPagination
