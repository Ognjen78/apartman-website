import React from "react";
import balkonImage from "../assets/balkon.avif";

const HeroSection: React.FC = () => {
  return (
    <section
  className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
  style={{ backgroundImage: `url(${balkonImage})` }}
>
  <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0" />
  <div className="relative z-10 text-center max-w-2xl px-6">
    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg mb-4">
      Welcome to Apartment Nina
    </h1>
    <p className="text-lg text-beige mt-20 mb-6 font-sans">
    Your luxurious corner on the coast – elegance, comfort and a dreamy view.
    </p>
    <a
      href="https://www.airbnb.com/rooms/50532497?_set_bev_on_new_domain=1745236777_EAMjkyMmNlNGVhYT&source_impression_id=p3_1745422175_P36nrcJ82tyM0GFz&locale=en"
      target="_blank"
      className="bg-primary text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-gold hover:text-white transition"
    >
      Book Now
    </a>
  </div>
</section>


  );
};

export default HeroSection;
