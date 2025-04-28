import type React from "react"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import Highlights from "../components/Highlights"
import TestimonialSection from "../components/TestimonialSection"
import LocationSection from "../components/LocationSection"
import CTASection from "../components/CTASection"

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Highlights />
      <FeaturesSection />
      <TestimonialSection />
      <LocationSection />
      <CTASection />
    </div>
  )
}

export default Home
