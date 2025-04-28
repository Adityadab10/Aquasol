"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import Earth from './Earth'

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: 250, label: "Solar Farms", suffix: "+" },
    { value: 500, label: "Megawatts", suffix: "MW" },
    { value: 15, label: "Years Experience", suffix: "" },
    { value: 100, label: "Communities Served", suffix: "K+" },
  ]

  const avatars = Array(5).fill(null)

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/engineer-electric-woman-checking-maintenance-solar-cells_1150-4279.jpg?uid=R168957691&ga=GA1.1.1277227032.1729172929&semt=ais_incoming')", // Replace with actual solar farm image
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-2xl">AquaSol</div>
          <div className="hidden md:flex items-center space-x-8">
            {["Solutions", "Resources", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white/90 hover:text-white transition-colors">
                {item}
              </a>
              
            ))}
            <button className="bg-white text-blue-900 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content with Earth */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl w-full md:w-1/2"
          >
            {/* Member Count */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex -space-x-2">
                {avatars.map((_, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border-2 border-white bg-blue-500" />
                ))}
              </div>
              <span className="text-white/90 ml-2">1000+ farms powered by solar energy</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Solar.
              <br />
              Sustainable.
              <br />
              Success.
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Transform your agricultural operations with our innovative solar-powered irrigation solutions. Sustainable
              farming starts here.
            </p>
            <button
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors"
              onClick={() => console.log("Membership button clicked")}
            >
              Become a Member
            </button>
          </motion.div>

          {/* Right side Earth with Single Button - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block md:w-1/2 h-[500px] mt-8 md:mt-0 relative"
          >
            {/* Single Overlapping Button */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-[88%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3 border border-white/20">
                <span className="text-xl">🚀</span>
                Explore More
                <span className="text-xl">→</span>
              </button>
            </motion.div>

            {/* Earth Component */}
            <Earth />
          </motion.div>
        </div>
      </div>

      {/* Stats - Made more responsive */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-white"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection

