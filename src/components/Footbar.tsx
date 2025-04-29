import type React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaAirbnb,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-rose-700 to-rose-600 text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-white">Apartment Nina</h2>
            <p className="text-rose-100 text-sm leading-relaxed">
              Experience the beauty of Dubrovnik in our luxurious apartment, offering stunning views and unparalleled
              comfort for an unforgettable stay in Croatia's most beautiful coastal city.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              
              <a
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
                aria-label="Airbnb"
              >
                <FaAirbnb size={20} />
              </a>
            </div>
          </div>

          
          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white border-b border-rose-400/30 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-300 flex-shrink-0" />
                <span className="text-rose-100">Ul. Dubrovačkog odreda 14, 20000 Dubrovnik, Croatia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-amber-300 flex-shrink-0" />
                <a href="tel:+38520123456" className="text-rose-100 hover:text-white transition-colors">
                  +385 20 123 456
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-300 flex-shrink-0" />
                <a href="mailto:info@apartment-nina.com" className="text-rose-100 hover:text-white transition-colors">
                  info@apartment-nina.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white border-b border-rose-400/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Apartment", path: "/apartment" },
                { name: "Gallery", path: "/gallery" },
                { name: "Rates & Availability", path: "/rates" },
                { name: "Guest Reviews", path: "/reviews" },
                { name: "Location", path: "/location" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-rose-100 hover:text-white transition-colors flex items-center group"
                  >
                    <FaChevronRight className="mr-2 h-3 w-3 text-amber-300 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rose-500/30 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-rose-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Apartment Nina. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/terms" className="text-rose-200 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-rose-200 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-rose-200 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
