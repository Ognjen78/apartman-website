import type React from "react"
import { FaMapMarkerAlt, FaWalking, FaUtensils, FaUmbrellaBeach, FaShoppingBag, FaBus } from "react-icons/fa"

const LocationSection: React.FC = () => {
  const nearbyAttractions = [
    {
      icon: <FaUmbrellaBeach />,
      name: "Banje Beach",
      distance: "5 min walk",
    },
    {
      icon: <FaMapMarkerAlt />,
      name: "Old Town",
      distance: "10 min walk",
    },
    {
      icon: <FaUtensils />,
      name: "Local Restaurants",
      distance: "2-5 min walk",
    },
    {
      icon: <FaShoppingBag />,
      name: "Shopping Center",
      distance: "15 min walk",
    },
    {
      icon: <FaBus />,
      name: "Bus Station",
      distance: "5 min walk",
    },
    {
      icon: <FaWalking />,
      name: "Scenic Walking Path",
      distance: "3 min walk",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent inline-block">
            Prime Location
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Perfectly situated to experience the best of Dubrovnik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            {/* Replace with your actual map or use an iframe for Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.2427640889694!2d18.0723!3d42.6568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b8a5c5e4c6e21%3A0x1f3147d79e6a618e!2sDubrovačkog%20odreda%2014%2C%2020000%2C%20Dubrovnik%2C%20Croatia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apartment Nina Location"
            ></iframe>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Nearby Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearbyAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-rose-100 text-rose-600 p-3 rounded-full">{attraction.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{attraction.name}</h4>
                    <p className="text-gray-500 text-sm">{attraction.distance}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100">
              <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
              <p className="text-gray-700">
                Apartment Nina is easily accessible from Dubrovnik Airport (25 min drive). We can arrange airport
                transfers upon request, or you can take a taxi or public transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
