// src/pages/Apartment.tsx
import React from "react";
import {
  FaUserFriends,
  FaBed,
  FaDoorOpen,
  FaWifi,
  FaParking,
  FaSnowflake,
  FaTv,
  FaSmokingBan,
  FaDog,
  FaClock,
  FaMoneyBillAlt,
  FaCalendarTimes,
  FaBath,
  FaMapMarkerAlt
} from "react-icons/fa";
import heroImage from "../assets/dubrovnik.jpg"; // zamijeni sa svojom slikom

const Apartment: React.FC = () => {
  return (
    <main className="bg-white text-gray-800 font-body">

     {/* Hero section */}
     <div
        className="h-[550px] w-full bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="z-10 text-white text-center px-4">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">Your Dream Stay in Dubrovnik</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            A stylish retreat with breathtaking views and premium comfort in the heart of Dubrovnik.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-10 text-white">
            <div className="flex flex-col items-center">
              <FaUserFriends className="text-3xl mb-1" />
              <span className="text-sm">4 Guests</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDoorOpen className="text-3xl mb-1" />
              <span className="text-sm">2 Bedrooms</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBed className="text-3xl mb-1" />
              <span className="text-sm">2 Queen Beds</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBath className="text-3xl mb-1" />
              <span className="text-sm">1 Bathroom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">

        {/* About */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-black">About the Apartment</h2>
          <p>
            This newly renovated apartment offers a perfect combination of luxury, comfort, and convenience. Located just a short walk from the city center and beach, it’s ideal for your holiday.
          </p>
          <p>
            The apartment includes two cozy bedrooms with queen-size beds, a spacious bathroom with walk-in shower, a modern kitchen, and a bright living room. Enjoy a relaxing atmosphere with stunning views from the terrace.
          </p>
          <p className="font-semibold">Highlights:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fully equipped kitchen and modern bathroom</li>
            <li>Air conditioning and heating</li>
            <li>Free Wi-Fi and Smart TV</li>
            <li>Private parking</li>
            <li>Washing machine, iron, and more</li>
          </ul>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4 text-blue-800">
              <div className="flex items-center gap-2"><FaWifi /> <span>Free Wi-Fi</span></div>
              <div className="flex items-center gap-2"><FaParking /> <span>Private Parking</span></div>
              <div className="flex items-center gap-2"><FaSnowflake /> <span>A/C & Heating</span></div>
              <div className="flex items-center gap-2"><FaTv /> <span>Smart TV</span></div>
            </div>
          </div>

          {/* Sleeping Arrangements */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Sleeping Arrangements</h3>
            <p>Two separate bedrooms each with queen-size beds. Baby crib available on request.</p>
          </div>

          {/* House Rules */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">House Rules</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-800">
              <div className="flex items-center gap-2"><FaSmokingBan /> <span>No smoking</span></div>
              <div className="flex items-center gap-2"><FaDog /> <span>Pets allowed (ask first)</span></div>
              <div className="flex items-center gap-2"><FaClock /> <span>Check-in: 3 PM</span></div>
              <div className="flex items-center gap-2"><FaClock /> <span>Check-out: 11 AM</span></div>
            </div>
          </div>

          {/* Payment & Cancellation */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Payment & Cancellation</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <FaMoneyBillAlt className="text-blue-800 text-xl mt-1" />
                <p className="text-sm">10% deposit on booking. Full payment due 30 days before arrival.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCalendarTimes className="text-blue-800 text-xl mt-1" />
                <p className="text-sm">Free cancellation up to 30 days before arrival. 50% refund up to 10 days before.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking Bar */}
<div className="sticky bottom-0 bg-white shadow-xl border-t border-gray-200 z-50">
  <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between relative">
    {/* Left: Price */}
    <div className="text-left">
      <span className="text-lg font-semibold text-black">
        From <span className="text-primary">€99</span> per night
      </span>
    </div>

    {/* Center: Location */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-1 text-sm text-gray-500">
      <FaMapMarkerAlt className="text-red-500" />
      <span>Dubrovnik, Croatia</span>
    </div>

    {/* Right: Booking Button */}
    <a
      href="https://www.airbnb.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-white px-5 py-2 rounded hover:bg-primary-dark transition"
    >
      Book on Airbnb
    </a>
  </div>
</div>


    </main>
  );
};

export default Apartment;
