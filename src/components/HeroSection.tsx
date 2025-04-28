import React from "react";
import balkonImage from "../assets/dubrovnik.jpg"; // Ensure this path is correct

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative h-[85vh] md:h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${balkonImage})` }}
        >
            {/* Darker, more subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-0" />
            <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
                {/* Larger, bolder, and slightly more refined title */}
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-8">
                    Your Dream Adriatic Escape at Apartment Nina
                </h1>
                {/* More engaging and benefit-driven subheading */}
                <p className="text-lg md:text-2xl text-beige mt-4 mb-10 font-sans leading-relaxed drop-shadow-md">
                    Indulge in luxurious comfort and wake up to breathtaking coastal views. Your unforgettable Dubrovnik experience starts here.
                </p>
                {/* More prominent and visually appealing Call to Action buttons */}
                <div className="flex justify-center gap-4">
                    <a
                        href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
                        target="_blank"
                        className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gold hover:text-white transition duration-300 shadow-lg"
                    >
                        Book Your Stay
                    </a>
                    {/* Example of a secondary Call to Action */}
                    {/* <Link
                        to="/gallery"
                        className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-white hover:text-primary transition duration-300"
                    >
                        View Gallery
                    </Link> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;