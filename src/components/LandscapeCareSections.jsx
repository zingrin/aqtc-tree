import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sections = [
  {
    title: "Tree Services",
    description:
      "Enhance your landscape with expert tree care, from proper planting to safe removal and stump grinding.",
    points: [
      "Tree Planting – Expert selection and planting for optimal growth and aesthetics.",
      "Tree Removal – Safe and efficient removal of dead, diseased, or hazardous trees.",
      "Stump Grinding – Eliminates stumps to improve the appearance and safety of your landscape.",
    ],
    images: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/5ef31577595f05764b93f48f/1623147938847-CM3EZY11N1OQDU081RDR/Example%2Bof%2Bour%2BNorth%2BWales%2B%2526%2BCheshire%2Btree%2Bservices.jpg",
        alt: "Tree Planting",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNIFFBPLGwv6J4-PTH7emPqhIOVYRR-gUCwzyLiTPXO9U-JDD_f31b7cyLk-g4D4cGoE&usqp=CAU",
        alt: "Tree Removal",
      },
    ],
    imgRight: true,
  },
  {
    title: "Lawn & Landscape Care",
    description:
      "Keep your lawn and garden healthy, vibrant, and thriving with expert fertilization and aeration.",
    points: [
      "Lawn Fertilization – Provides balanced nutrients to maintain lush, green grass.",
      "Flower Fertilization – Keeps garden beds vibrant and thriving.",
      "Lawn Aeration – Enhances soil oxygenation and improves water absorption for healthier turf.",
    ],
    images: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0xll3wYW3Yg3c5MCuAShb9tskttmL3B6_Q&s",
        alt: "Lawn Fertilization",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_KSBZITvzMTRke_ElnUt1B3wSU6CLR7KKyvqbxYk-Diea216AdYQ1VDXxUOB_i_ibsM&usqp=CAU",
        alt: "Flower Fertilization",
      },
    ],
    imgRight: false,
  },
  {
    title: "Weed & Fire Mitigation Services",
    description:
      "Protect your landscape with effective weed control and fire risk reduction strategies.",
    points: [
      "Weed Control – Effective treatments to keep invasive weeds out of your landscape.",
      "Fire Mitigation – Reduces fire risk by clearing deadwood and creating defensible space.",
    ],
    images: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4q8qwrHc1uOIVL4srhls4Pl3IczK5cxugg&s",
        alt: "Weed Control",
      },
      {
        src: "https://www.doi.gov/sites/default/files/styles/large_16_9/public/site-page/primary-images/blm-ak-06272019-1.jpg?itok=li23DcSu",
        alt: "Fire Mitigation",
      },
    ],
    imgRight: true,
  },
];

const TwoImageSwiper = ({ images }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true} 
      autoplay={{
        delay: 3500,
        disableOnInteraction: false, 
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="rounded-lg shadow-lg"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-gray-50 p-2 rounded-lg flex justify-center">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const LandscapeCareSections = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {sections.map(({ title, description, points, images, imgRight }, idx) => (
          <section
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto rounded-lg ${
              imgRight ? "md:flex-row-reverse" : ""
            } ${idx === 0 ? "bg-gray-100 p-6" : ""}`}
          >
            {/* Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                {title}
              </h3>
              <p className="text-gray-700 mb-3 text-lg">{description}</p>

              <ul className="space-y-2 text-gray-700 text-lg">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Swiper */}
            <div className="md:w-1/2 w-full">
              <TwoImageSwiper images={images} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default LandscapeCareSections;
