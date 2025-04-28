import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [bookings, setBookings] = useState([]);

  // Fetch existing bookings
  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newBooking = await response.json();
        setBookings([...bookings, newBooking]); // Update list with new booking
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: [
        "+91 74984 44571",
        "+91 90047 50924"
      ],
      action: "tel:+91 74984 44571"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "aquasol@gmail.com",
        "support@aquasol.com"
      ],
      action: "mailto:aquasol@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: [
        "Vasai, Maharashtra 401201"
      ],
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b pt-24 from-blue-50 to-white flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Have questions about our water solutions? We're here to help you find the perfect solution for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {info.action ? (
                      <a href={info.action} className="hover:text-blue-600 transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Send Us a Message</h2>
              <p className="text-blue-600">We'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-blue-900 block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-900 block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-blue-900 block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-blue-900 block mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-blue-400 h-5 w-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Display Submitted Bookings */}
          <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Submitted Bookings</h2>
            <ul className="space-y-4">
              {bookings.map((booking) => (
                <li key={booking._id} className="border-b border-blue-100 pb-4">
                  <strong className="text-blue-900">{booking.name}</strong> - {booking.subject}
                  <p className="text-gray-600">{booking.message}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Section */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60301.3654278926!2d72.7911547!3d19.3911434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac18113c8eeb%3A0x3f03137cfc4d6f1e!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709824008051!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Contact;