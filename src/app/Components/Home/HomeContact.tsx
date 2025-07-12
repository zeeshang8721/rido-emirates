"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTaxi,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";

const ContactForm = () => {
  interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    rideFrom: string;
    rideTo: string;
    time: string;
  }

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    rideFrom: "",
    rideTo: "",
    time: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rideFrom: "",
    rideTo: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors: Partial<FormData> = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.rideFrom) formErrors.rideFrom = "Pickup location required";
    if (!formData.rideTo) formErrors.rideTo = "Drop-off location required";
    if (!formData.time) formErrors.time = "Time is required";

    setErrors(formErrors as any);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/xanenyrb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            rideFrom: "",
            rideTo: "",
            time: "",
          });
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl shadow-xl bg-white">
        {/* Left Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/taxi-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-600/60 flex flex-col justify-end p-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pb-52"
            >
              <div className="flex items-center mb-4">
                <FaTaxi className="text-4xl mr-3" />
                <h2 className="text-4xl font-bold">Rido Emirates</h2>
              </div>
              <p className="text-xl mb-6">
                Premium transportation between Dubai and Abu Dhabi
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-500/30 rounded-full mr-3">
                    <FaMapMarkerAlt className="text-blue-300" />
                  </div>
                  <span>Door-to-door service</span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-500/30 rounded-full mr-3">
                    <FaClock className="text-blue-300" />
                  </div>
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-blue-500/30 rounded-full mr-3">
                    <GiPathDistance className="text-blue-300 text-xl" />
                  </div>
                  <span>140km comfortable journey</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Book Your Ride
                </h2>
                <p className="text-gray-600 mt-2">
                  Fill the form and we'll contact you shortly
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaUser className="mr-2 text-blue-500" /> Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaEnvelope className="mr-2 text-blue-500" /> Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className={`w-full border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaPhone className="mr-2 text-blue-500" /> Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      className={`w-full border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaClock className="mr-2 text-blue-500" /> Pickup Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.time ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    <FaClock className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>

                {/* From */}
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" /> Pickup
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="rideFrom"
                      value={formData.rideFrom}
                      onChange={handleChange}
                      placeholder="Where should we pick you up?"
                      className={`w-full border ${
                        errors.rideFrom ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.rideFrom && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.rideFrom}
                    </p>
                  )}
                </div>

                {/* To */}
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" /> Drop-off
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="rideTo"
                      value={formData.rideTo}
                      onChange={handleChange}
                      placeholder="Where are you going?"
                      className={`w-full border ${
                        errors.rideTo ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                    <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.rideTo && (
                    <p className="text-red-500 text-sm mt-1">{errors.rideTo}</p>
                  )}
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-700 flex items-center">
                    <FaPaperPlane className="mr-2 text-blue-500" /> Additional
                    Instructions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requests?"
                    rows={3}
                    className={`w-full border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Confirm Booking
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center p-6"
            >
              <div className="mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex p-4 bg-green-100 rounded-full">
                    <svg
                      className="w-16 h-16 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </motion.div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 mb-6">
                We've received your request and will contact you shortly with
                the details.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium shadow hover:shadow-md transition"
              >
                Book Another Ride
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
