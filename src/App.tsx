// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footbar";
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";

function App() {
  return (
    <div className="flex flex-col min-h-screen overscroll-none">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartment" element={<Apartment />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
