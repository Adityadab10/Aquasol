import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const HowWeWork = () => {
  const [hoveredStep, setHoveredStep] = useState(null)

  const steps = [
    {
      title: "Identifying Needs",
      description:
        "We conduct on-site assessments and consultations to identify water-related issues and understand the unique requirements of each community.",
      icon: "🔍",
    },
    {
      title: "Product Sourcing",
      description:
        "Through our partnerships with leading manufacturers, we source advanced, reliable, and durable solar-powered water systems tailored to diverse needs.",
      icon: "🏭",
    },
    {
      title: "Customization",
      description:
        "We offer a range of flexible models to ensure every customer finds the right fit for their requirements.",
      icon: "🛠️",
    },
    {
      title: "Installation and Training",
      description:
        "Our team handles seamless installation and provides hands-on training, ensuring users can operate and maintain their systems effectively.",
      icon: "📚",
    },
    {
      title: "Post-Sales Support",
      description:
        "We offer ongoing support, including maintenance and troubleshooting, to ensure the systems continue to deliver value over time.",
      icon: "🛟",
    },
  ]

  const values = [
    {
      title: "Sustainability",
      description: "We aim to reduce environmental impact by leveraging renewable solar energy.",
      icon: "🌱",
    },
    {
      title: "Community Empowerment",
      description:
        "We empower rural communities by improving access to clean water and boosting agricultural productivity.",
      icon: "🤝",
    },
    {
      title: "Reliability",
      description: "Our products are sourced from trusted manufacturers, ensuring top-tier quality and durability.",
      icon: "🔒",
    },
  ]

  const benefits = [
    {
      title: "Cost Savings",
      description: "Solar-powered solutions lower operational costs by reducing electricity usage.",
      icon: "💰",
    },
    {
      title: "Environmental Impact",
      description: "Our systems help reduce carbon footprints and support a healthier planet.",
      icon: "🌍",
    },
    {
      title: "Improved Livelihoods",
      description: "Clean water access and irrigation systems improve community health and agricultural yields.",
      icon: "🌾",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-[#E6EEF2] pt-24 to-white min-h-screen font-sans">
      <header className="bg-[#064469] text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">How We Work</h1>
        <p className="text-xl max-w-3xl mx-auto px-4">
          At AquaSol, we are dedicated to transforming lives through innovative, solar-powered solutions for clean water
          access. Our streamlined process ensures that we deliver reliable, cost-effective, and environmentally friendly
          products to rural communities.
        </p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#064469]">Our Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#A3C1D1] transform -translate-x-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                      hoveredStep === index ? "border-2 border-[#064469]" : ""
                    }`}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 bg-[#E6EEF2] p-2 rounded-full">{step.icon}</div>
                      <h3 className="text-2xl font-semibold text-[#064469]">{step.title}</h3>
                    </div>
                    <AnimatePresence>
                      {hoveredStep === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#3A5A6D]"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 md:mr-[-1.5rem] w-12 h-12 bg-[#064469] rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#064469]">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(6, 68, 105, 0.1)" }}
              >
                <div className="text-5xl mb-4 bg-[#E6EEF2] inline-block p-4 rounded-full">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#064469]">{value.title}</h3>
                <p className="text-[#3A5A6D]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#064469]">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(6, 68, 105, 0.1)" }}
              >
                <div className="text-5xl mb-4 bg-[#E6EEF2] inline-block p-4 rounded-full">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#064469]">{benefit.title}</h3>
                <p className="text-[#3A5A6D]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#064469]">Customer Testimonials</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <blockquote className="italic text-xl text-[#3A5A6D] mb-4">
              "AquaSol's solar-powered water pump has transformed my farm! My yields have doubled, and I no longer worry
              about water shortages."
            </blockquote>
            <p className="font-semibold text-right text-[#064469]">- John Doe, Local Farmer</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#064469]">Get Started with AquaSol</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-[#3A5A6D]">
            Ready to bring solar-powered solutions to your community? Contact us today to learn how AquaSol can help you
            access clean water and sustainable resources.
          </p>
          <motion.button
            className="bg-[#064469] text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-[#0A5B8A] transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </section>
      </main>

      <footer className="bg-[#064469] text-white py-8 text-center">
        <p>&copy; 2023 AquaSol. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HowWeWork

