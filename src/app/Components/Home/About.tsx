import Image from 'next/image';
import React from 'react';
import { FiAward, FiTarget, FiEye, FiClock, FiShield, FiDollarSign, FiCompass } from 'react-icons/fi';
import { GiRoad } from 'react-icons/gi';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            About Rido Emirates
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for seamless commuting between Dubai and Abu Dhabi
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section with decorative elements */}
          <div className="relative lg:w-1/2">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-cyan-300 opacity-30 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-blue-300 opacity-30 rounded-lg"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500">
              <Image
                src="/data/Post3.jpg"
                width={600}
                height={600}
                alt="Rido Emirates Service"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 mb-6">
                At Rido Emirates, we take pride in being your trusted partner for commuting between Dubai and Abu Dhabi. 
                We are committed to providing safe, affordable, and comfortable transportation services that meet the 
                diverse needs of our customers.
              </p>
              
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <GiRoad className="text-blue-600 text-2xl" />
                </div>
                <p className="text-gray-700">
                  Whether you're traveling for business, leisure, or daily commuting, we ensure a seamless, reliable, 
                  and pleasant journey every time.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 transform hover:-translate-y-2 transition duration-300">
                <div className="flex items-center mb-4">
                  <FiTarget className="text-blue-500 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To provide exceptional car lift services that offer both comfort and convenience while maintaining 
                  high standards of safety, affordability, and sustainability.
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-500">
                  <FiClock className="mr-1" />
                  <span>Punctuality guaranteed</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-400 transform hover:-translate-y-2 transition duration-300">
                <div className="flex items-center mb-4">
                  <FiEye className="text-cyan-500 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To become the leading car lift service provider in the UAE, connecting Dubai and Abu Dhabi with 
                  reliable and affordable transportation solutions.
                </p>
                <div className="mt-4 flex items-center text-sm text-cyan-500">
                  <FiCompass className="mr-1" />
                  <span>Innovative solutions</span>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiAward className="mr-2" /> Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FiShield className="mr-2" /> Safety First
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="mr-2" /> Affordable Pricing
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" /> Punctuality
                </div>
                <div className="flex items-center">
                  <FiCompass className="mr-2" /> Customer Focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;