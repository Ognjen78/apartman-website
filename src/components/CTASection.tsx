import type React from "react"
import { FaCalendarAlt, FaEnvelope } from "react-icons/fa"

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-600 to-amber-600 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for Your Dubrovnik Adventure?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Book your stay at Apartment Nina today and experience the perfect blend of comfort, luxury, and authentic
          Croatian hospitality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-600 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <FaCalendarAlt />
            <span>Book Your Stay</span>
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <FaEnvelope />
            <span>Contact Us</span>
          </a>
        </div>

        <p className="mt-10 text-white/80 text-sm">
          Have questions? Call us at{" "}
          <a href="tel:+38520123456" className="underline hover:text-white">
            +385 20 123 456
          </a>{" "}
          or email{" "}
          <a href="mailto:info@apartment-nina.com" className="underline hover:text-white">
            info@apartment-nina.com
          </a>
        </p>
      </div>
    </section>
  )
}

export default CTASection
