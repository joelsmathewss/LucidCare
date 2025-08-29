// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 font-inter">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
