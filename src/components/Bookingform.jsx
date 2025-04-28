import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, User, Users, MessageSquare, Building2, X } from 'lucide-react';
import { db } from './firebase'; // Import Firestore instance
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // Import Firestore functions

function Bookingform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    date: '',
    time: '',
    people: '1',
    serviceType: 'installation',
    message: ''
  });

  const [showSummary, setShowSummary] = useState(false);
  const [message, setMessage] = useState(''); // State for success/error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true); // Show summary popup on submit
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to submit booking data to Firestore
  const confirmBooking = async () => {
    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        createdAt: Timestamp.now()
      });
      setMessage('Booking submitted successfully!');
      setShowSummary(false); // Close the summary popup
      setFormData({ // Reset the form
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        date: '',
        time: '',
        people: '1',
        serviceType: 'installation',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document:', error);
      setMessage('Failed to submit booking. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b pt-24 from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Schedule a Consultation</h1>
          <p className="text-blue-600">Book an appointment with our water solution experts</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Company Name (Optional)"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-4">
              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Number of People</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition appearance-none bg-white"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium text-blue-900 block mb-2">Service Type</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition appearance-none bg-white"
                  >
                    <option value="installation">System Installation</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="consultation">Water Quality Consultation</option>
                    <option value="upgrade">System Upgrade</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="mt-6">
            <label className="text-sm font-medium text-blue-900 block mb-2">Additional Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-blue-400 h-5 w-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="Tell us more about your requirements..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Schedule Appointment
            </button>
          </div>
        </form>

        {/* Summary Popup */}
        {showSummary && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
              <button
                onClick={() => setShowSummary(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Booking Summary</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{formData.phone}</p>
                </div>
                
                {formData.company && (
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-medium">{formData.company}</p>
                  </div>
                )}
                
                <div>
                  <p className="text-sm text-gray-500">Appointment</p>
                  <p className="font-medium">
                    {formatDate(formData.date)} at {formData.time}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="font-medium capitalize">{formData.serviceType.replace('-', ' ')}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Number of People</p>
                  <p className="font-medium">{formData.people} {formData.people === '1' ? 'person' : 'people'}</p>
                </div>
                
                {formData.message && (
                  <div>
                    <p className="text-sm text-gray-500">Additional Message</p>
                    <p className="font-medium">{formData.message}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setShowSummary(false)}
                  className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={confirmBooking} // Call confirmBooking function
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success/Error Message */}
        {message && (
          <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <p className={message.includes('success') ? 'text-green-500' : 'text-red-500'}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookingform;