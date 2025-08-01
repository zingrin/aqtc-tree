import React, { useState } from "react";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LandscapeCareSections from "../components/LandscapeCareSections";
import { FaPhoneAlt } from "react-icons/fa";

const images = [
  {
    src: "https://i.ibb.co/KvgdHHt/images-q-tbn-ANd9-Gc-Qqq-H0-Wuye-EI3-FPu-Hubz8-EM9kg49-H30-Swk8nw-s.jpg",
    alt: "Tree care 1",
  },
  {
    src: "https://i.ibb.co/NnnnwxN3/treecareprofessional.jpg",
    alt: "Tree care 2",
  },
  {
    src: "https://i.ibb.co/VY9YMm1M/The-Ultimate-Guide-to-Lawn-Care-for-Beginners-Blog-Featured-Image.jpg",
    alt: "Tree care 3",
  },
];

const ServiceDetails = () => {
  const [swiperRef, setSwiperRef] = useState(null);

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
          Our Services
        </h1>
        <div className="flex gap-[6px]">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
        </div>
      </section>

      {/* Text & Image Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
            Expert Tree & Landscape Care for Mountain Communities
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-2xl">
            Protecting the health and beauty of your landscape is our priority.
            At American Quality Tree Care LLC, we provide professional tree and
            lawn care services to keep your outdoor spaces thriving. With over
            25 years of experience, our expert team offers customized,
            sustainable solutions, including tree fertilization, pest
            management, fire mitigation, and more.
          </p>
          <p className="text-gray-700 mb-6 text-2xl">
            Let us help you preserve the natural beauty of your property.
          </p>
          <button className="btn bg-green-700 text-white border-none px-6 py-3 text-sm sm:text-base hover:bg-amber-900 hover:-translate-y-1 transition-all duration-300 ease-in-out transform">
            Request a Consultation
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://i.ibb.co/KvgdHHt/images-q-tbn-ANd9-Gc-Qqq-H0-Wuye-EI3-FPu-Hubz8-EM9kg49-H30-Swk8nw-s.jpg"
            alt="Tree care"
            className="shadow-lg w-[90%] md:w-[80%] object-cover"
          />
        </div>
      </section>

      {/* Main Services Section */}
      <div className="py-12 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
            Comprehensive Tree & Landscape Care Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Enhancing the health, beauty, and longevity of your outdoor spaces
            with expert care.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto px-4">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Tree Health & Maintenance
            </h3>
            <p className="text-gray-700 mb-3">
              Ensure the longevity and vitality of your trees with expert care.
              Our specialized services promote strong growth, protect against
              pests and diseases, and enhance overall tree health year-round.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✅</span>
                <span>
                  <span className="font-semibold">Tree Fertilization</span> –
                  Promotes healthy growth and resilience against environmental
                  stress.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✅</span>
                <span>
                  <span className="font-semibold">
                    Pest & Disease Management
                  </span>{" "}
                  – Protects trees from damaging insects and fungal infections.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✅</span>
                <span>
                  <span className="font-semibold">Winter Pruning</span> –
                  Encourages strong structure and minimizes storm damage risks.
                </span>
              </li>
            </ul>

            <p className="mt-4 italic text-green-900">
              Expert tree and landscape care in Colorado's mountain communities.
            </p>
          </div>

          {/* Right Swiper */}
          <div className="md:w-1/2 w-full">
            <Swiper
              onSwiper={setSwiperRef}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className} rounded-lg border border-gray-300 bg-white overflow-hidden mx-1" style="width: 64px; height: 40px; display: inline-block;">
                    <img src="${images[index].src}" alt="${images[index].alt}" class="w-full h-full object-cover" />
                  </span>`;
                },
              }}
              modules={[Pagination, Autoplay]}
              className="rounded-lg shadow-lg"
            >
              {images.map(({ src, alt }, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <LandscapeCareSections />

      {/* Call to Action Section */}
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

      <Footer />
    </>
  );
};

export default ServiceDetails;
