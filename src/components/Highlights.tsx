import React from "react"
import { FaMapMarkerAlt, FaUmbrellaBeach, FaWifi, FaConciergeBell, FaShieldAlt, FaLeaf } from "react-icons/fa"

const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Prime Location",
      description: "Ideally situated steps from the stunning coast and local attractions.",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: <FaUmbrellaBeach className="text-3xl" />,
      title: "Exclusive Beach Access",
      description: "Enjoy effortless access to pristine beaches for ultimate relaxation and sun-soaked days.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <FaWifi className="text-3xl" />,
      title: "High-Speed Wi-Fi",
      description: "Stay seamlessly connected with our fast and reliable internet throughout the apartment.",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: <FaConciergeBell className="text-3xl" />,
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist with any requests or inquiries.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure Environment",
      description: "Rest easy with our comprehensive security measures ensuring your safety and privacy.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Eco-Friendly",
      description: "We're committed to sustainable practices that protect Dubrovnik's natural beauty.",
      color: "from-lime-500 to-lime-600",
    },
  ]

  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent inline-block">
            Experience the Difference
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes Apartment Nina the perfect choice for your Dubrovnik getaway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div
                className={`flex items-center justify-center h-16 w-16 rounded-full mb-6 bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold font-serif text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
