import React from "react";
import { Link } from "react-router";

const services = [
  {
    title: "Tree Health & Maintenance",
    description:
      "Keep your trees healthy with expert fertilization, pest control, and root feeding. Contact Us Today!",
    img: "https://i.ibb.co/KvgdHHt/images-q-tbn-ANd9-Gc-Qqq-H0-Wuye-EI3-FPu-Hubz8-EM9kg49-H30-Swk8nw-s.jpg",
    link: "/services/tree-health",
  },
  {
    title: "Tree Services",
    description:
      "Safe and professional tree planting, removal, and stump grinding to maintain your landscape.",
    img: "https://i.ibb.co/NnnnwxN3/treecareprofessional.jpg",
    link: "/services/tree-services",
  },
  {
    title: "Lawn & Landscape Care",
    description:
      "Enhance your lawn and garden with proper fertilization, aeration, and nutrient-rich treatments.",
    img: "https://i.ibb.co/VY9YMm1M/The-Ultimate-Guide-to-Lawn-Care-for-Beginners-Blog-Featured-Image.jpg",
    link: "/services/lawn-care",
  },
  {
    title: "Fire Mitigation",
    description:
      "Protect your property with expert fire mitigation strategies and landscape management.",
    img: "https://i.ibb.co/Pv5CcLCr/images-q-tbn-ANd9-Gc-Sh-Wf-Tk-OVTm-WKJh-Uxzlib-DNYXJVGuon-Vknx-F5-FQ8-PA1ql0-Xy-Ox-UUTFb7-HT1v-Ha-L3.jpg",
    link: "/services/fire-mitigation",
  },
];

// Leaf Underline
const LeafUnderline = () => (
  <div className="flex justify-center mt-2 overflow-hidden gap-[6px]">
    {[...Array(30)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-green-600 transform rotate-[15deg]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7 7 2 20 12 22 22 20 17 7 12 2z" />
      </svg>
    ))}
  </div>
);

const ServiceCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading with LeafUnderline */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700">
          Comprehensive Tree & Landscape Care Services
        </h2>
        <LeafUnderline />
      </div>
      <p className="text-center text-2xl mx-auto text-gray-700 mb-12">
        From tree health and lawn care to fire mitigation, we offer customized
        solutions to protect and enhance your property.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ title, description, img, link }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden flex flex-col shadow-md transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
          >
            {/* Image */}
            {img && (
              <div className="w-full h-64">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">
                {title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{description}</p>
              <Link
                to="/serviceDetails"
                className="text-green-700 font-semibold hover:underline"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
