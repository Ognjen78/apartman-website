// src/components/FeaturesSection.tsx
import React from "react";

// Import images for each feature (images with lower resolution for faster loading)
import beachImage from "../assets/soba1.avif";  // smaller version
import bedImage from "../assets/soba2.avif";  // smaller version
import wifiImage from "../assets/soba22.jpeg";  // smaller version
import locationImage from "../assets/nightview.avif";  // smaller version

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-xl font-semibold font-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Key Features</h2>
        
        <div className="space-y-16">
          {/* Feature 1 - Location */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img src={locationImage} alt="Prime Location" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-medium mb-4">Prime Location</h3>
              <p className="text-lg">
                Our apartment is located just steps away from the beach, offering the perfect escape for those seeking both relaxation and adventure. Immerse yourself in the breathtaking surroundings and explore the natural beauty of the coastline. Whether you want to soak up the sun or take a stroll by the ocean, everything you need is right at your doorstep.
              </p>
            </div>
          </div>

          {/* Feature 2 - Beachfront Access */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 order-2 md:order-1">
              <img src={beachImage} alt="Beachfront Access" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-medium mb-4">Beachfront Access</h3>
              <p className="text-lg">
                Step out of your apartment and onto the beach. Enjoy the sound of the waves crashing and the beauty of the crystal-clear water. Perfect for those who love to unwind and connect with nature, our beachfront access offers the ideal spot to relax, swim, or enjoy a peaceful walk along the shore. The ultimate beach getaway awaits.
              </p>
            </div>
          </div>

          {/* Feature 3 - Free Wi-Fi */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img src={wifiImage} alt="Free Wi-Fi" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-medium mb-4">Free Wi-Fi</h3>
              <p className="text-lg">
                Stay connected during your stay with our high-speed Wi-Fi. Whether you're working remotely, streaming your favorite shows, or simply staying in touch with friends and family, our fast and reliable Wi-Fi ensures you're always connected. It’s perfect for both leisure and business travelers who need the convenience of the internet.
              </p>
            </div>
          </div>

          {/* Feature 4 - Comfortable Beds */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img src={bedImage} alt="Comfortable Beds" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-medium mb-4">Comfortable Beds</h3>
              <p className="text-lg">
                After a day of exploring, unwind in our luxurious and comfortable beds. Each bed is designed with comfort in mind, offering the perfect place to rest and recharge. With plush mattresses, soft linens, and cozy pillows, our beds ensure you wake up feeling refreshed and ready for the day ahead. Sleep has never been so good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
