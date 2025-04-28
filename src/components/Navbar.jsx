import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "./logo.png";
import HoverButton from "./HoverButton";
import DemoButton from "./DemoButton";
import Signup from "./Signup";
import CountUp from 'react-countup';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#064469] text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-3 flex items-center justify-between h-24">
        {/* Left Navbar: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="AQUASOL Logo"
              className="h-52 w-56 -ml-4"
            />
          </Link>
        </div>

        {/* Center Navbar: List Items */}
        <ul className="hidden md:flex space-x-6 text-lg text-center">
          <li className="hover:underline hover:underline-offset-4 hover:underline-thickness-2">
            <HoverButton text="Sign Up" to="/signup" />
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:underline-thickness-2">
            <HoverButton text="FAQs" to="/faqs" />
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:underline-thickness-2">
            <HoverButton text="About Us" to="/about" />
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:underline-thickness-2">
            <HoverButton text="Contact" to="/contact" />
          </li>
        </ul>

        {/* Right Navbar: Buttons */}
        <div className="hidden md:flex space-x-4">
          <Signup />
          <DemoButton />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#064469]">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="hover:text-yellow-300 cursor-pointer">Sign Up</li>
            <li className="hover:text-yellow-300 cursor-pointer">Learn More</li>
            <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
            <li>
              <button className="bg-yellow-300 text-[#064469] w-full py-2 rounded-md shadow hover:bg-yellow-400 transition duration-300">
                Sign Up
              </button>
            </li>
            <li>
              <button className="bg-white text-[#064469] w-full py-2 rounded-md shadow hover:bg-gray-200 transition duration-300">
                Log In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
