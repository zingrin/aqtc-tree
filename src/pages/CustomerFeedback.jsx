import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPhoneAlt } from "react-icons/fa";

// Leaf underline component
const LeafUnderline = () => (
  <div className="flex justify-center mt-2 mb-4 gap-[6px]">
    {[...Array(20)].map((_, i) => (
      <svg
        key={i}
        className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 transform rotate-[15deg]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7 7 2 20 12 22 22 20 17 7 12 2z" />
      </svg>
    ))}
  </div>
);

const reviews = [
  {
    id: 1,
    name: "Emily T.",
    text:
      "Exceptional tree care service that brought our yard back to life. Professional, timely, and very knowledgeable!",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Elsie Ross",
    text:
      "Quick response and great advice. They knew exactly how to treat our trees and now they look healthier than ever.",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Sarah",
    text:
      "Incredible service! Our trees were in bad shape but the AQTC team gave them new life. Highly recommend them!",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Mike H.",
    text:
      "Very skilled and friendly crew. They explained everything and left our place cleaner than before. Excellent value!",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "John D.",
    text:
      "Knowledgeable, punctual, and honest. They didn’t try to upsell and gave practical solutions to our issues.",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "Anna B.",
    text:
      "Great experience! They really cared about the health of our trees and gave us peace of mind before fire season.",
    img: "https://i.pravatar.cc/40?img=6",
  },
];

const ReviewCard = ({ name, text, img }) => (
  <div className="rounded-xl shadow-md p-6 text-white bg-green-700 flex flex-col items-center justify-center text-center h-64">
    <p className="text-sm leading-relaxed mb-4 line-clamp-3">{text}</p>
    <div className="flex items-center gap-3 mt-4">
      <img
        src={img}
        alt={name}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  </div>
);

const CustomerFeedback = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/bgjLTfgn/bright-green-meadow-with-grass-124507-13850.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black-200 bg-opacity-70 z-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 text-white z-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center">
          What Our Clients Say
          <LeafUnderline />
        </h2>

        {/* Navigation Arrows (Outside Swiper) */}
        <div
          className="swiper-button-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10 text-white text-2xl cursor-pointer"
          aria-label="Previous"
        >
        </div>
        <div
          className="swiper-button-next absolute -right-10 top-1/2 -translate-y-1/2 z-10 text-white text-2xl cursor-pointer"
          aria-label="Next"
        >
        </div>

        {/* Swiper with navigation */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={2}
          className="mt-10"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <ReviewCard name={r.name} text={r.text} img={r.img} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <h2 className="text-2xl font-semibold">
            Contact us for a free consultation
          </h2>
          <button
            className="btn bg-green-700 text-white border-none px-7 py-3 flex items-center gap-3
            hover:bg-amber-900 hover:-translate-y-1 transition-all duration-300 ease-in-out transform"
            aria-label="Call AQTC"
          >
            <FaPhoneAlt className="text-white text-lg" />
            <span className="text-xl">(303) 378-8273</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
