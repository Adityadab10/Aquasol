import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import product1 from "./product1.jpeg";

function Products() {
  const navigate = useNavigate();

  const handleViewOptions = () => {
    navigate('/cart');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 py-10 bg-gradient-to-b from-[#f3f8fd] via-[#d8e6f5] to-[#b0cde8] px-4">
      {/* Section Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center">
        Explore Our Products
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Discover eco-friendly solutions for clean water and sustainable farming. Designed to meet your needs with advanced technology and renewable energy.
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Product 1 */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start justify-between p-6 hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="flex-1 md:pr-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Solar Water Purification System
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Experience clean, sustainable water like never before! Our solar-powered purification system combines advanced technology and green energy to ensure safe drinking water for all.
            </p>
            <button 
              onClick={handleViewOptions}
              className="relative px-5 py-3 bg-[#064469] text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl focus:outline-none hover:bg-[#0A5B8A]"
            >
              View Options
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={product1}
              alt="Solar Water Purification System"
              className="w-64 h-64 object-contain rounded-lg border-4 border-[#d8e6f5] shadow-md"
            />
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start justify-between p-6 hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="flex-1 md:pr-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Solar Water Pump
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Empower your fields with eco-friendly energy! Our solar water pump offers efficient irrigation and reduces dependency on traditional power sources.
            </p>
            <button 
              onClick={handleViewOptions}
              className="relative px-5 py-3 bg-[#064469] text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl focus:outline-none hover:bg-[#0A5B8A]"
            >
              View Options
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/10/RB/OF/MS/138865819/agriculture-solar-water-pump.png"
              alt="Solar Water Pump"
              className="w-64 h-64 object-contain rounded-lg border-4 border-[#d8e6f5] shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
