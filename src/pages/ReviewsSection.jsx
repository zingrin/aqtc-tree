import React from "react";
import { FaGoogle, FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "LLL",
    date: "2024-06-09",
    img: "https://i.ibb.co/d4t54dQ4/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-street-downtown-ci.jpg",
    text: `Tom from American Quality Tree Care did the trees at my parents house and we are really happy with his work. Nearby trees had Japanese beetle infestation, so we had him apply systemic pesticides and fertilizer to keep....`,
  },
  {
    id: 2,
    name: "LLL",
    date: "2024-06-09",
    img: "https://i.ibb.co/F46tkKDH/pexels-photo-1121796.webp",
    text: `Tom from American Quality Tree Care did the trees at my parents house and we are really happy with his work. Nearby trees had Japanese beetle infestation, so we had him apply systemic pesticides and fertilizer....`,
  },
];

const ReviewCard = ({ review }) => (
  <div className="relative bg-white text-black rounded-lg shadow-md p-4 w-full md:w-[320px] cursor-pointer transition-transform duration-300 hover:-translate-y-1">
    {/* Google icon top-right */}
    <FaGoogle
      className="absolute top-3 right-3 text-red-500 text-xl"
      title="Verified Google Review"
    />

    {/* Profile picture + Name & Date */}
    <div className="flex items-center gap-4 mb-2">
      <img
        src={review.img}
        alt={`${review.name} profile`}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h4 className="font-semibold text-base">{review.name}</h4>
        <p className="text-xs text-gray-500">{review.date}</p>
      </div>
    </div>

    {/* Stars + verified icon */}
    <div className="flex items-center gap-1 mb-3">
      <div className="flex text-yellow-400 text-sm">
        {[...Array(6)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <FaCheckCircle className="text-blue-500 text-sm" title="Verified Reviewer" />
    </div>

    {/* Review Text */}
    <p className="text-gray-800 text-sm mb-2">{review.text}</p>

    {/* Read more */}
    <span className="text-gray-500 text-sm font-semibold hover:underline">
      Read more
    </span>
  </div>
);

const ReviewsSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/Pv5CcLCr/images-q-tbn-ANd9-Gc-Sh-Wf-Tk-OVTm-WKJh-Uxzlib-DNYXJVGuon-Vknx-F5-FQ8-PA1ql0-Xy-Ox-UUTFb7-HT1v-Ha-L3.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center text-white">
        {/* Heading */}
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            EXCELLENT
          </h2>
          <div className="flex justify-center gap-1 text-yellow-400 text-xl">
            {[...Array(6)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-base font-semibold text-gray-300">
            Based on 2 reviews
          </p>
          <div className="flex justify-center items-center gap-2 text-base font-semibold text-white">
            <FaGoogle className="text-red-500" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
              Google
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex flex-col md:flex-row gap-6 justify-center overflow-y-auto max-h-[360px] pr-2">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
