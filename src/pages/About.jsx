import React from "react";
import { useNavigate } from "react-router";

// Leaf underline component
const LeafUnderline = () => (
  <div className="flex justify-start mt-2 mb-4 gap-[6px]">
    {[...Array(20)].map((_, i) => (
      <svg
        key={i}
        className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 transform rotate-[15deg]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7 7 2 20 12 22 22 20 17 7 12 2z" />
      </svg>
    ))}
  </div>
);

const About = () => {
    const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Left: Text content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl sm:text-4xl font-bold mb-1">About Us</h3>

        <h2 className="text-green-700 mb-6 text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          Dedicated to Preserving Colorado’s <br className="block md:hidden" /> Natural Beauty
        </h2>

        <LeafUnderline />

        <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          At American Quality Tree Care LLC, we specialize in expert tree and
          landscape care tailored for Colorado’s mountain communities. With over
          25 years of horticulture experience, we provide sustainable solutions
          that keep your trees, lawns, and landscapes thriving.
        </p>

        <button
              onClick={() => navigate("/aboutDetails")}

          className="btn bg-green-700 text-white border-none px-6 py-2 text-sm sm:text-base
          hover:bg-amber-900 hover:-translate-y-1 transition-all duration-300 ease-in-out transform"
        >
          LEARN MORE
        </button>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://i.ibb.co/vx4fTfY4/pexels-photo-6231700.jpg"
          alt="About Us"
          className="rounded-lg shadow-lg w-full object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px]"
        />
      </div>
    </section>
  );
};

export default About;
