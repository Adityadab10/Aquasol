import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { signInWithGoogle } from "./signInWithGoogle";  // Adjust path if needed
import { Link, useNavigate } from "react-router-dom";  // Replacing incorrect <link> with <Link>
import { auth, subscribeToAuthChanges } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        setUser(user);
        // Optionally redirect to dashboard or home page
        navigate("/dashboard"); // Make sure you have this route set up
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Create user with Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        
        // Update the user's display name
        await updateProfile(userCredential.user, {
          displayName: `${formData.firstName} ${formData.lastName}`
        });
        
        console.log('User signed up:', userCredential.user);
        alert(`Welcome, ${formData.firstName} ${formData.lastName}`);

        // Clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        
        // Note: The useEffect hook will handle navigation after successful signup
        
      } catch (err) {
        console.error('Signup error:', err);
        setErrors(prev => ({
          ...prev,
          submit: err.message
        }));
      }
    }
  };

  // If user is already logged in, show their info instead of the form
  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E6EEF2] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#064469]">Welcome!</h2>
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="w-20 h-20 rounded-full mx-auto mt-4"
            />
            <p className="mt-4 text-lg text-[#3A5A6D]">{user.displayName}</p>
            <p className="text-sm text-[#3A5A6D]">{user.email}</p>
            <button
              onClick={() => auth.signOut()}
              className="mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#064469] hover:bg-[#0A5B8A]"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6EEF2] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#064469]">Create your account</h2>
          <p className="mt-2 text-center text-sm text-[#3A5A6D]">
            Join AquaSol and be part of the sustainable water solution
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Show general error message if exists */}
          {errors.submit && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    {errors.submit}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#064469] focus:border-[#064469] sm:text-sm"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#064469] focus:border-[#064469] sm:text-sm"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#064469] focus:border-[#064469] sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#064469] focus:border-[#064469] sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#064469] focus:border-[#064469] sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div>
            <motion.button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#064469] hover:bg-[#0A5B8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064469]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
            </motion.button>
          </div>
        </form>

        {/* Google Sign-In Button */}
        <div className="text-center mt-4">
          <button
            onClick={signInWithGoogle}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-[#064469] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064469]"
          >
            Sign in with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-[#3A5A6D]">
            Already have an account?{" "}
            <Link 
              to="/login" 
              className="font-medium text-[#064469] hover:text-[#0A5B8A] transition-colors duration-300"
            >
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
