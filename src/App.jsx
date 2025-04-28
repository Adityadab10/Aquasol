import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import HowWeWorkHome from "./components/HowWeWorkHome";
import HowWeWork from "./components/HowWeWork"; 
import AboutUs from "./components/AboutUs";
import AIRecommendation from "./components/AIRecommendation";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SignUpPage from "./components/SignUpPage";
import Bookingform from "./components/Bookingform";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import ChatBox from './components/ChatBox';
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 ml-16"> {/* Removed mt-20 and p-4 padding */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <Products />
                    <HowWeWorkHome />
                    <AIRecommendation />
                  </>
                }
              />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/HowWeWork" element={<HowWeWork />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/bookingform" element={<Bookingform />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </div>
        <ChatBox />
      </div>
    </BrowserRouter>
  );
}

export default App;
