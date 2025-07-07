import React from "react";
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <section className="bg-green-700 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-10">

        {/* Left: Image motion from left */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://i.ibb.co/5g8Nbkcr/images-q-tbn-ANd9-Gc-Q4u5-Cs-BIfu-ZAv7b2-P5-Ne-ILey-Z1ibw-PUOS8-VOmq-Ns-VWe75zpx8-I2p-Fz7c5tj-S7y7-G.jpg"
            alt="Why Choose Us"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right: Text motion from right */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose American Quality Tree Care?
          </h3>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>Over 25 years of experience in horticulture</li>
            <li>Master Gardener Certified by Colorado State University</li>
            <li>
              Licensed by Colorado agriculture & insured for tree care and
              pesticide application
            </li>
            <li>
              Serving Colorado’s mountain communities with trusted, expert care
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChoose;
