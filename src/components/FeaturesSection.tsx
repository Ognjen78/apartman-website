// src/components/FeaturesSection.tsx
import React from "react";
import apartmentImage from "../assets/soba1.avif";
import viewImage from "../assets/nightview.avif";

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* Feature 1 - Apartment Overview */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={apartmentImage}
              alt="Elegant apartment interior"
              className="rounded-xl shadow-xl w-full h-[350px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Elegant Comfort</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Step into a bright and welcoming space designed for rest and relaxation. Our apartment features hand-picked furnishings,
              soft ambient lighting, and a layout that offers both privacy and comfort — perfect for couples, families, or friends.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The fully equipped kitchen allows you to prepare meals at home, while the serene bedrooms with premium mattresses
              ensure restful nights. Whether you're starting your day with a coffee on the balcony or winding down after exploring Dubrovnik,
              this space will feel like your personal retreat.
            </p>
          </div>
        </div>

        {/* Feature 2 - Scenic Views */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={viewImage}
              alt="Balcony view of the Adriatic and Dubrovnik"
              className="rounded-xl shadow-xl w-full h-[350px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Breathtaking Views</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              From sunrise to sunset, take in uninterrupted views of Dubrovnik’s ancient city walls, the shimmering sea, and nearby islands.
              Whether you're enjoying breakfast on the terrace or sipping wine as the sun sets, the view is always the main attraction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With two private balconies and a peaceful stone-paved terrace, the apartment offers a front-row seat to one of the most
              beautiful coastlines in Europe. Let the calming sea breeze and Mediterranean scents elevate your stay.
            </p>
            <p className="text-sm text-gray-500 mt-4 italic">
              *Due to its unique location, some walking and stairs are required — but the views are worth every step.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
