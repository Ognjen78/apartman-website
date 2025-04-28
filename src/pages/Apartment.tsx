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
import heroImage from "../assets/dubrovnik.jpg"; // Replace with your image

const Apartment: React.FC = () => {
    return (
        <main className="bg-white text-gray-800 font-sans">

            {/* Hero section */}
            <div
                className="h-[600px] w-full bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="z-10 text-white text-center px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg font-serif">
                        Experience Dubrovnik in Style
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
                        Your exquisite retreat offering stunning views and unparalleled comfort for an unforgettable stay.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-white">
                        <div className="flex flex-col items-center">
                            <FaUserFriends className="text-4xl mb-2 " />
                            <span className="text-sm font-medium">Up to 4 Guests</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaDoorOpen className="text-4xl mb-2" />
                            <span className="text-sm font-medium">2 Bedrooms</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaBed className="text-4xl mb-2" />
                            <span className="text-sm font-medium">2 Queen Beds</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaBath className="text-4xl mb-2" />
                            <span className="text-sm font-medium">1 Modern Bathroom</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8 space-y-20">

                {/* About */}
                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                    <h2 className="text-3xl font-bold text-black font-serif">About Your Coastal Haven</h2>
                    <p>
                        Nestled in a prime location, our recently renovated apartment is the perfect sanctuary for your Dubrovnik getaway. Enjoy a seamless blend of modern luxury and home-like comfort, just moments away from the vibrant city center and beautiful beaches.
                    </p>
                    <p>
                        The apartment features two beautifully appointed bedrooms with plush queen-size beds, ensuring restful nights. The contemporary bathroom boasts a spacious walk-in shower. Prepare delicious meals in the fully equipped, modern kitchen and unwind in the bright and airy living room. Step out onto the terrace to soak in the breathtaking views that will make your stay truly special.
                    </p>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-primary">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-2 mt-8">
                            <li>State-of-the-art kitchen with all essentials</li>
                            <li>Elegant bathroom with a walk-in shower</li>
                            <li>Comfortable air conditioning and efficient heating</li>
                            <li>High-speed Wi-Fi and a Smart TV for entertainment</li>
                            <li>Convenient private parking</li>
                            <li>In-unit washing machine and ironing facilities</li>
                        </ul>
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <h3 className="text-2xl font-bold text-black font-serif mb-6">Modern Amenities for Your Comfort</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-primary">
                        <div className="flex items-center gap-3 text-lg">
                            <FaWifi className="text-xl" /> <span className="font-medium">Free High-Speed Wi-Fi</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaParking className="text-xl" /> <span className="font-medium">Secured Private Parking</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaSnowflake className="text-xl" /> <span className="font-medium">Air Conditioning & Heating</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaTv className="text-xl" /> <span className="font-medium">Smart TV with Streaming</span>
                        </div>
                    </div>
                </div>

                {/* Sleeping Arrangements */}
                <div>
                    <h3 className="text-2xl font-bold text-black font-serif mb-6">Relaxing Sleeping Arrangements</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Two well-appointed bedrooms, each featuring a comfortable queen-size bed with premium linens. A baby crib is available upon request for families with young children.
                    </p>
                </div>

                {/* House Rules */}
                <div>
                    <h3 className="text-2xl font-bold text-black font-serif mb-6">Our Simple House Rules</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-primary">
                        <div className="flex items-center gap-3 text-lg">
                            <FaSmokingBan className="text-xl" /> <span className="font-medium">No Smoking Allowed</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaDog className="text-xl" /> <span className="font-medium">Pets Allowed (Upon Prior Arrangement)</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaClock className="text-xl" /> <span className="font-medium">Check-in: After 3:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaClock className="text-xl" /> <span className="font-medium">Check-out: Before 11:00 AM</span>
                        </div>
                    </div>
                </div>

                {/* Payment & Cancellation */}
                <div>
                    <h3 className="text-2xl font-bold text-black font-serif mb-6">Payment & Cancellation Policies</h3>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <div className="flex items-start gap-4">
                            <FaMoneyBillAlt className="text-primary text-xl mt-1" />
                            <p><span className="font-semibold">Payment:</span> A 10% deposit is required at the time of booking. The remaining balance is due 30 days prior to your arrival.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaCalendarTimes className="text-primary text-xl mt-1" />
                            <p><span className="font-semibold">Cancellation:</span> Enjoy free cancellation if you cancel up to 30 days before your check-in date. Cancellations made between 10 and 30 days before arrival will receive a 50% refund.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Booking Bar */}
            <div className="sticky bottom-0 bg-white shadow-xl border-t border-gray-200 z-50">
                <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Left: Price */}
                    <div className="text-left">
                        <span className="text-lg font-semibold text-black">
                            Starting from <span className="text-primary text-xl">€99</span> per night
                        </span>
                    </div>

                    {/* Center: Location */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>Dubrovnik, Croatia</span>
                    </div>

                    {/* Right: Booking Button */}
                    <a
                        href="https://www.airbnb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition duration-300 shadow-md"
                    >
                        Book Your Stay
                    </a>
                </div>
            </div>

        </main>
    );
};

export default Apartment;