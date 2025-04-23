import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Naziv */}
          <Link to="/" className="text-2xl font-serif text-primary font-semibold tracking-wide">
            Apartment Nina
          </Link>

          {/* Desktop meni */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Home", path: "/" },
              { label: "Apartment", path: "/apartment" },
              { label: "Gallery", path: "/gallery" },
              { label: "Rates", path: "/rates" },
              { label: "Reviews", path: "/reviews" },
              { label: "Location", path: "/location" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-dark font-medium hover:text-gold transition duration-200"
              >
                {label}
              </Link>
            ))}

            {/* Language toggle */}
            <div className="text-sm text-dark/70">🇭🇷 | 🇬🇧</div>

            {/* Book now dugme */}
            <a
              href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-full font-medium shadow-sm hover:bg-gold transition"
            >
              Book Now
            </a>
          </div>

          {/* Mobilni hamburger meni */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobilni meni */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md space-y-3 transition-all duration-300">
          {[
            { label: "Home", path: "/" },
            { label: "Apartment", path: "/apartment" },
            { label: "Gallery", path: "/gallery" },
            { label: "Rates", path: "/rates" },
            { label: "Reviews", path: "/reviews" },
            { label: "Location", path: "/location" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="block text-dark font-medium hover:text-gold transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="text-sm text-dark/70">🇭🇷 | 🇬🇧</div>
          <a
            href="https://airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-4 py-2 rounded-full font-medium shadow hover:bg-gold transition"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
