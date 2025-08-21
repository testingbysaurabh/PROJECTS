import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/weback.jpg";
import Footer from './Footer';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-16 bg-gradient-to-r from-gray-700 to-[#48A6A7] py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About LaVitrine</h1>
        <p className="text-lg md:text-xl opacity-90">
          Crafting exceptional shopping experiences
        </p>
      </section>

      {/* Content Wrapper */}
      <main className="max-w-7xl w-full mx-auto px-4 py-16 space-y-24">

        {/* Our Story */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="LAVITRINE office"
              className="rounded-xl shadow-xl w-full object-cover max-h-[400px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4 leading-relaxed">
              Founded in 2023, LAVITRINE began as a passion project among a small group of shopping enthusiasts who wanted to create a more personalized online retail experience.
            </p>
            <p className="mb-4 leading-relaxed">
              What started as a humble online store has now blossomed into a thriving e-commerce platform serving thousands of satisfied customers across the country.
            </p>
            <p className="leading-relaxed">
              Our journey has been fueled by our commitment to quality, innovation, and most importantly, our amazing customers who continue to inspire us every day.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg text-gray-800 text-center shadow-md hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p>We carefully curate our collection to bring you only the finest items that meet our rigorous standards.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg text-gray-800 text-center shadow-md hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p>Enjoy competitive prices without compromising on quality or service.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg text-gray-800 text-center shadow-md hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p>From order to delivery, we ensure a seamless shopping experience every time.</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-800 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <h3 className="text-purple-800 text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700">We conduct our business with honesty and transparency.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-blue-800 text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">We continuously improve to deliver better shopping experiences.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h3 className="text-green-800 text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-700">Our customers are at the heart of everything we do.</p>
            </div>

            {/* Value 4 */}
            <div className="bg-teal-100 p-6 rounded-lg text-center">
              <h3 className="text-teal-800 text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-700">We're committed to environmentally responsible practices.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-700 to-[#48A6A7] py-16 px-4 text-center rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience LAVITRINE?</h2>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
