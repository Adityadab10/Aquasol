import React, { useState } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setSubmitStatus({
          loading: false,
          success: true,
          error: null
        });
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(response.data.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || error.message
      });
    }
  };

  // Add this form section before the footer in your existing AboutUs component
  const contactForm = (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1e3a8a]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1e3a8a]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1e3a8a]"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1e3a8a] h-32"
              required
            />
          </div>
          <button
            type="submit"
            disabled={submitStatus.loading}
            className="w-full bg-[#1e3a8a] text-white py-2 rounded hover:bg-[#2a4caf] transition-colors"
          >
            {submitStatus.loading ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus.success && (
            <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
          )}
          {submitStatus.error && (
            <p className="text-red-600 text-center mt-4">Error: {submitStatus.error}</p>
          )}
        </form>
      </div>
    </section>
  );

  return (
    <div className="bg-[#f0f8ff] text-gray-800 font-sans pt-24">
      {/* About Us Section */}
      <section className="bg-[#e6f0ff] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1e3a8a]">About AQUASOL</h1>
          <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
            AQUASOL provides reliable, cost-effective solutions for water access and quality, tailored for farmers and local communities. By connecting you with top brands, we offer solar-powered water purification systems and water pumps that enhance crop yields, livestock health, and provide safe drinking water. Our goal is to make these essential resources affordable and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">The Problem We Solve</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Farmers and rural communities often face challenges with water quality and availability, impacting health, agriculture, and daily life. We provide access to solar-powered purification systems and pumps that reduce operational costs and environmental impact by harnessing renewable energy.
          </p>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="bg-[#e6f0ff] py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">Our Solution</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We source and distribute solar-powered water purification systems and water pumps designed to meet the demands of rural communities. By working with top manufacturers, we ensure reliable solutions for clean drinking water and efficient irrigation.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Solar-Powered Products</h3>
              <p className="mt-2 text-gray-600">Lower costs through renewable energy, making them suitable for areas without reliable electricity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Purification & Pumping</h3>
              <p className="mt-2 text-gray-600">Available for both drinking water and agricultural irrigation needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Versatile Options</h3>
              <p className="mt-2 text-gray-600">We offer a range of models to meet different capacity needs and budgets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Innovation Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">Technology and Innovation</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Through partnerships with industry leaders, we bring innovative water solutions to farmers and local communities.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#e6f0ff] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Solar Water Purification</h3>
              <p className="mt-2 text-gray-600">Uses advanced filtration from reputable brands to provide clean drinking water for households and livestock.</p>
            </div>
            <div className="bg-[#e6f0ff] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Solar Water Pumps</h3>
              <p className="mt-2 text-gray-600">Provides consistent water access for crops, ensuring sustainability and productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental and Community Impact Section */}
      <section className="bg-[#e6f0ff] py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">Environmental and Community Impact</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            By connecting farmers and local communities with solar-powered water systems, we support healthier environments, sustainable agriculture, and cleaner water.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Environmental Benefits</h3>
              <p className="mt-2 text-gray-600">Solar-powered systems reduce reliance on non-renewable energy, lowering emissions and environmental footprint.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Community Health</h3>
              <p className="mt-2 text-gray-600">Clean water improves health outcomes and agricultural productivity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1e3a8a]">Sustainable Growth</h3>
              <p className="mt-2 text-gray-600">Accessible, efficient water solutions promote long-term agricultural and community sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {contactForm}

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 AQUASOL. All Rights Reserved.</p>
          <p className="mt-2">Contact: 7498444571 | Email: aquasol@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;