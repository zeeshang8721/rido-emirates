"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import {
  FaCarAlt,
  FaMoneyCheckAlt,
  FaRocket,
  FaSmileBeam,
} from "react-icons/fa";

const features = [
  {
    title: "Extensive Vehicle Selection",
    icon: <FaCarAlt className="text-2xl text-white" />,
    description:
      "We provide a wide range of well-maintained vehicles to ensure a comfortable journey for any occasion.",
  },
  {
    title: "Transparent & Competitive Pricing",
    icon: <FaMoneyCheckAlt className="text-2xl text-white" />,
    description:
      "Our pricing model is clear and competitive — offering exceptional value without hidden costs.",
  },
  {
    title: "Faster Booking Experience",
    icon: <FaRocket className="text-2xl text-white" />,
    description:
      "Our booking system is fast, user-friendly, and takes only a few clicks to confirm your ride.",
  },
  {
    title: "90% Customer Satisfaction",
    icon: <FaSmileBeam className="text-2xl text-white" />,
    description:
      "We’re proud to have 90%+ satisfaction from our riders, built on consistent quality and comfort.",
  },
];

const CarLift = () => {
  return (
    <section className="bg-[#f9fbfd] py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#07aae7] mb-4">
            Dubai to Abu Dhabi Car Lift Effortless Travel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#07aae7] p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#07aae7] p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#07aae7]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 relative"
        >
          <div className="relative w-full h-[400px] overflow-hidden ">
            <Image
              src="/data/DubaitoAbuDhabi.png"
              alt="Car Lift between Dubai and Abu Dhabi"
              fill
              className="object-cover"
            />
            <Image
              src="/data/Arrow.png"
              alt="Direction Arrow"
              width={100}
              height={100}
              className="absolute top-[42%] left-[35%] max-w-[180px] animate-bounce rotate-[20deg]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarLift;
