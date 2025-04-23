// src/components/Highlights.tsx
import React from "react";
import { FaMapMarkerAlt, FaUmbrellaBeach, FaWifi } from "react-icons/fa";

const Highlights: React.FC = () => {
  return (
    <section className="bg-white py-16 text-center font-body text-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <FaMapMarkerAlt className="mx-auto text-[#023e8a] text-4xl" />
          <h3 className="text-xl font-semibold font-heading">Prime Location</h3>
          <p>
            Nestled in the heart of the coast, just steps from the sea and local attractions.
          </p>
        </div>
        <div className="space-y-4">
          <FaUmbrellaBeach className="mx-auto text-[#023e8a] text-4xl" />
          <h3 className="text-xl font-semibold font-heading">Beach Access</h3>
          <p>
            Enjoy quick access to pristine beaches — relax, swim, and soak in the sun.
          </p>
        </div>
        <div className="space-y-4">
          <FaWifi className="mx-auto text-[#023e8a] text-4xl" />
          <h3 className="text-xl font-semibold font-heading">Free Wi-Fi</h3>
          <p>
            Stay connected with high-speed internet in every corner of your apartment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
