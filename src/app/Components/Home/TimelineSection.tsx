'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCarSide, FaExchangeAlt, FaClock, FaCalendarCheck, FaUndo, FaRoute } from 'react-icons/fa';

const TimelineSection = () => {
  const services = [
    {
      title: 'One-Way Trips',
      icon: <FaCarSide className="text-3xl text-[#07aae7]" />,
      content:
        "Perfect for one-time commuters like business travelers or tourists needing a reliable ride between Dubai and Abu Dhabi, or vice versa.",
    },
    {
      title: 'Flexibility & Convenience',
      icon: <FaExchangeAlt className="text-3xl text-[#07aae7]" />,
      content:
        "Travel on your schedule without worrying about return timings. Total flexibility for your needs.",
    },
    {
      title: 'Simple Booking',
      icon: <FaCalendarCheck className="text-3xl text-[#07aae7]" />,
      content:
        "Choose your pickup location, time, and preferred vehicle — we’ll handle the rest with ease.",
    },
    {
      title: 'Two-Way Trips',
      icon: <FaRoute className="text-3xl text-[#07aae7]" />,
      content:
        "Our round-trip service is ideal for frequent travelers, offering the flexibility to schedule daily or weekly rides.",
    },
    {
      title: 'Guaranteed Return Ride',
      icon: <FaUndo className="text-3xl text-[#07aae7]" />,
      content:
        "Enjoy peace of mind with a confirmed return trip included in your round-trip booking.",
    },
    {
      title: 'Streamlined Scheduling',
      icon: <FaClock className="text-3xl text-[#07aae7]" />,
      content:
        "Meticulously coordinated trips to ensure timely departures and smooth arrivals both ways.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#07aae7] mb-4">
            Dubai ↔ Abu Dhabi Car Lift Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Rido Emirates, we offer customized, affordable car lift services tailored for your lifestyle. Whether you're heading one-way or require a round-trip, we’ve got flexible, safe, and seamless solutions to get you there.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#07aae7] text-white p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-md leading-relaxed">{service.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
