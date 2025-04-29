// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footbar";
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";
import Rates from "./pages/Rates";
import ReviewsPage from "./pages/Reviews";
import LocationPage from "./pages/Location";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen overscroll-none">
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartment" element={<Apartment />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
