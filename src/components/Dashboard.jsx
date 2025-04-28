import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { auth, subscribeToAuthChanges } from './firebase';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiClock, FiShield, FiCalendar, FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        setUser(user);
      } else {
        // If no user is logged in, redirect to signup page instead of login
        navigate('/signup');
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/signup');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E6EEF2] to-white flex items-center justify-center">
        <div className="text-[#064469] text-xl flex items-center gap-2">
          <div className="w-6 h-6 border-4 border-[#064469] border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6EEF2] via-white to-[#E6EEF2] pt-28 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Welcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#064469] to-[#0A5B8A] rounded-xl shadow-lg p-8 mb-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/100'}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.displayName?.split(' ')[0]}!</h1>
                <p className="text-gray-200 flex items-center gap-2">
                  <FiMail className="inline" />
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#064469] rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              <FiLogOut /> Sign Out
            </button>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-b from-white to-[#f8fafc] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-[#f0f7ff] group"
          >
            <div className="bg-[#064469] bg-opacity-10 px-6 py-4 group-hover:bg-opacity-20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#064469] flex items-center gap-2">
                <FiUser className="inline group-hover:scale-110 transition-transform duration-300" /> 
                Account Information
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-300">
                <FiShield className="text-[#064469] text-xl group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <label className="text-sm text-gray-500">Account Status</label>
                  <p className="text-[#3A5A6D] font-medium">
                    {user.emailVerified ? (
                      <span className="text-green-600 flex items-center gap-1">
                        Verified <span className="text-lg">✓</span>
                      </span>
                    ) : (
                      <span className="text-amber-600 flex items-center gap-1">
                        Pending Verification
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-300">
                <FiCalendar className="text-[#064469] text-xl group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <label className="text-sm text-gray-500">Member Since</label>
                  <p className="text-[#3A5A6D] font-medium">
                    {user.metadata.creationTime ? 
                      new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-b from-white to-[#f8fafc] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-[#f0f7ff] group"
          >
            <div className="bg-[#064469] bg-opacity-10 px-6 py-4 group-hover:bg-opacity-20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#064469] flex items-center gap-2">
                <FiClock className="inline group-hover:scale-110 transition-transform duration-300" /> 
                Recent Activity
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-300">
                <FiClock className="text-[#064469] text-xl group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <label className="text-sm text-gray-500">Last Sign In</label>
                  <p className="text-[#3A5A6D] font-medium">
                    {user.metadata.lastSignInTime ? 
                      new Date(user.metadata.lastSignInTime).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'N/A'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-300">
                <img 
                  src={user.providerData[0].providerId.includes('google') ? 
                    'https://www.google.com/favicon.ico' : 
                    'https://via.placeholder.com/20'
                  } 
                  alt="Provider"
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <label className="text-sm text-gray-500">Sign-in Method</label>
                  <p className="text-[#3A5A6D] font-medium capitalize">
                    {user.providerData[0].providerId.replace('.com', '')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 