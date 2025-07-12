"use client";
import { FaCarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const BookNow = () => {
  const handleClick = () => {
    const phoneNumber = "+971507106162"; 
    const message = "Hello! I would like to book a taxi.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className=" cursor-pointer fixed bottom-6 right-6 z-50 bg-[#07aae7] text-white py-3 px-5 rounded-full shadow-xl flex items-center gap-2 font-medium"
      aria-label="Book Now"
    >
      <FaCarAlt className="text-lg" />
      <span>BOOK NOW</span>
    </motion.button>
  );
};

export default BookNow;
