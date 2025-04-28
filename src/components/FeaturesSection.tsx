import React from "react";
import apartmentImage from "../assets/soba1.avif";
import viewImage from "../assets/nightview.avif";
import soba1 from "../assets/soba1.avif"

const FeaturesSection: React.FC = () => {
    return (
      <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <h2 className="text-3xl font-serif font-bold text-primary text-center">Explore Our Exceptional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                  <img src={apartmentImage} alt="Elegant Interior" className="w-full h-64 object-cover" />
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">Stylish Interiors</h3>
                      <p className="text-gray-700">Experience elegantly furnished spaces designed for comfort and relaxation.</p>
                  </div>
              </div>
              {/* Feature Card 2 */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                  <img src={viewImage} alt="Breathtaking View" className="w-full h-64 object-cover" />
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">Panoramic Sea Views</h3>
                      <p className="text-gray-700">Wake up to stunning vistas of the Adriatic Sea and Dubrovnik's coastline.</p>
                  </div>
              </div>
              {/* Feature Card 3 */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                  <img src={soba1} alt="Modern Kitchen" className="w-full h-64 object-cover" />
                  <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">Fully Equipped Kitchen</h3>
                      <p className="text-gray-700">Prepare delicious meals with our modern, fully equipped kitchen.</p>
                  </div>
              </div>
              {/* Add more feature cards here */}
          </div>
      </div>
  </section>
    );
};

export default FeaturesSection;