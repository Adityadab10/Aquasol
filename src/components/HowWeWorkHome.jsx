import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const steps = [
  { icon: "🔍", title: "Assess" },
  { icon: "💡", title: "Design" },
  { icon: "🛠️", title: "Implement" },
  { icon: "🌱", title: "Sustain" },
]

const HowWeWorkHome = () => {
  return (
    <section className="bg-[#E6EEF2] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#064469] mb-6">How We Work</h2>
        <div className="flex justify-center items-center space-x-4 mb-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="bg-white p-3 rounded-full shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl" title={step.title}>
                  {step.icon}
                </div>
              </motion.div>
              {index < steps.length - 1 && <div className="h-px w-8 bg-[#A3C1D1]"></div>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-center text-[#3A5A6D] max-w-2xl mx-auto mb-6">
          From assessing community needs to providing ongoing support, we ensure sustainable water solutions for all.
        </p>
        <div className="text-center">
          <motion.div
            className="inline-block px-5 py-2 bg-[#064469] text-white font-semibold rounded-full hover:bg-[#0A5B8A] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/HowWeWork" className="text-white">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkHome

