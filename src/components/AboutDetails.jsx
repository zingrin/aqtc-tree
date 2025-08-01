import React from "react";
import aboutImage from "../assets/tree-care.jpg";
import Footer from "./Footer";
import owner from "../assets/owner.jpg";
import { FaPhoneAlt } from "react-icons/fa";

// Leaf underline component (curved, 9 leaves)
const LeafUnderline = () => {
  const rotations = [10, 5, 0, -5, -10, -5, 0, 5, 10];
  return (
    <div className="flex justify-start mt-2 mb-4 gap-[6px]">
      {rotations.map((deg, i) => (
        <svg
          key={i}
          className="w-2 h-2 sm:w-3 sm:h-3 text-green-600"
          style={{ transform: `rotate(${deg}deg)` }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C7 7 2 20 12 22 22 20 17 7 12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default function AboutDetails() {
  return (
    <>
      {/*  Top Hero Section */}
      <section
        className="w-full h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/bgjLTfgn/bright-green-meadow-with-grass-124507-13850.jpg')`,
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          About Us
        </h1>
        <div className="flex gap-[6px]">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
        </div>
      </section>

      {/* 🔽 About Details Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-amber-700 text-sm font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            American Quality Tree Care LLC
          </h1>
          <LeafUnderline />
          <p className="text-gray-700 mb-6">
            American Quality Tree Care LLC is committed to providing expert tree
            and landscape care to Colorado’s mountain communities. With over 25
            years of experience in horticulture, we specialize in maintaining
            healthy trees, lawns, and landscapes through professional,
            sustainable practices.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Commitment
          </h3>
          <p className="text-gray-700 mb-4">
            American Quality Tree Care helps homeowners and businesses maintain
            healthy, beautiful landscapes. Our preventative tree care approach
            protects your property, prevents costly removals, and preserves the
            natural beauty of your surroundings.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Expertise
          </h3>
          <p className="text-gray-700">
            Our comprehensive services include tree fertilization, pest
            management, weed control, fire mitigation, lawn and flower
            fertilization, winter pruning, lawn aeration, tree planting, and
            removal. We prioritize preventative care to protect properties,
            enhance landscape longevity, and preserve natural beauty.
          </p>
        </div>

        {/* Right image and location info */}
        <div className="flex flex-col items-center text-center">
          <img
            src={aboutImage}
            alt="Tree planting"
            className="rounded-lg shadow-lg mb-4 w-full max-w-md"
          />
          <div className="border-l-4 border-gray-700 mr-4 h-full">
            <p className="italic text-gray-600 max-w-md leading-relaxed">
              Proudly serving mountain communities along the I-70 corridor,
              including Evergreen, Keystone, Breckenridge, Vail, Beaver Creek,
              Edwards, Glenwood Springs, Aspen, and surrounding areas.
            </p>
          </div>

          <div className="flex gap-6 mt-6">
            <a
              href="mailto:info@aqtc.co"
              aria-label="Email"
              className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full text-xl shadow-md hover:-translate-y-1 hover:bg-green-800 transition-transform duration-300 ease-in-out"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="tel:+1234567890"
              aria-label="Phone"
              className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full text-xl shadow-md hover:-translate-y-1 hover:bg-green-800 transition-transform duration-300 ease-in-out"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 👤 Meet the Owner Section */}
      <section className="bg-green-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-stretch gap-10">
          <img
            src={owner}
            alt="Tom McEniry"
            className="shadow-xl w-11/12 h-auto max-w-md mx-auto"
          />
          <div className="flex flex-col justify-center space-y-5 text-white max-h-full">
            <h3 className="uppercase text-sm tracking-widest text-gray-300">
              Meet the Owner
            </h3>
            <h2 className="bg-[#885d3c] inline-block px-5 py-2 text-2xl font-bold rounded-md shadow">
              Tom McEniry
            </h2>
            <div className="flex gap-[6px]">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                ))}
            </div>
            <p className="leading-relaxed text-white max-w-2xl text-lg">
              As a proud Colorado native, I have dedicated my entire career to
              preserving the natural beauty of our mountain landscapes. I hold a
              Master Gardener Certificate from Colorado State University and
              bring over 20 years of experience in professional pesticide
              application and landscape management. With deep knowledge in plant
              health, tree care, and sustainable practices, I strive to deliver
              high-quality service that ensures both the health and long-term
              beauty of your property.
            </p>
          </div>
        </div>
      </section>

      {/* 📞 Call to Action Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-24"
        style={{
          backgroundImage: `url('https://i.ibb.co/bgjLTfgn/bright-green-meadow-with-grass-124507-13850.jpg')`,
        }}
      >
        <div className="bg-opacity-60 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Contact us for a free consultation
            </h2>
            <button
              className="btn bg-green-700 text-white border-none px-7 py-3 flex items-center gap-3 hover:bg-amber-900 hover:-translate-y-1 transition-all duration-300 ease-in-out transform"
              aria-label="Call AQTC"
            >
              <FaPhoneAlt className="text-white text-lg" />
              <span className="text-xl">(303) 378-8273</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
