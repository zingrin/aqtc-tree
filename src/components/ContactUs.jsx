import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "./Footer";

export default function ContactUs() {
    
  return (
    <>
      {/* Top Hero Section */}
      <section
        className="w-full h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/bgjLTfgn/bright-green-meadow-with-grass-124507-13850.jpg')`,
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Contact Us
        </h1>
        <div className="flex gap-[6px]">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
        </div>
      </section>
      <div className="py-12 px-4 md:px-20 bg-white">
        {/* Title & Subtitle */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-amber-900">
          Contact Us For A Free Consultation!
        </h2>
        <p className="text-center text-gray-700 mt-2 mb-10">
          We look forward to helping you protect and enhance the health of your
          landscape.
        </p>

        {/* Info row */}
        <div className="max-w-xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            {/* Serving */}
            <div className="group transition-transform duration-300">
              <FaMapMarkerAlt className="text-green-800 text-4xl mx-auto  group-hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              <h3 className="font-bold text-lg">Serving</h3>
              <p className="text-sm">Evergreen to Aspen</p>
            </div>

            {/* Email */}
            <div className="group transition-transform duration-300">
              <FaEnvelope className="text-green-800 text-4xl mx-auto  group-hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              <h3 className="font-bold text-lg">Email:</h3>
              <p className="text-sm">Tom@aqtc.co</p>
            </div>

            {/* Phone */}
            <div className="group transition-transform duration-300">
              <FaPhoneAlt className="text-green-800 text-4xl mx-auto  group-hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              <h3 className="font-bold text-lg">Phone:</h3>
              <p className="text-sm">(970)-456-4364</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-green-800 p-8 rounded-lg">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md outline-none border-none bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md outline-none border-none bg-white text-black"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 rounded-md outline-none border-none bg-white text-black resize-none"
            ></textarea>

            {/* SEND Button */}
            <button
              type="submit"
              className="w-full bg-[#6b4226] hover:-translate-y-1 text-white font-bold py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
            >
              <FaEnvelope /> SEND
            </button>
          </form>
        </div>
      </div>
        <Footer />
    </>
  );
}
