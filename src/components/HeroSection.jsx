import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const images = [
    "https://i.ibb.co/VcmKbxpn/pexels-photo-32875429.jpg",
    "https://i.ibb.co/RTqHzTpD/pexels-photo-32869747.jpg",
    "https://i.ibb.co/39y9NLsh/pexels-photo-5231053.jpg",
    "https://i.ibb.co/gL514TbX/pexels-photo-4162016.jpg",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        speed={2000}
        loop
        className="absolute inset-0 z-0"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 md:px-20 text-white text-center">
        <div className="max-w-7xl">
          <h2
            className="
    w-full                
    bg-green-700
    py-2 md:py-1
    text-center          
    text-lg sm:text-xl md:text-5xl
    font-extrabold
    mb-6
    leading-tight
    shadow
  "
          >
            <span className="inline-block max-w-5xl mx-auto break-words">
              Expert Tree & Landscape Care
              <br className="block md:hidden" />
              for Colorado’s Mountain Communities
            </span>
          </h2>

          <p className="text-gray-100 text-xs sm:text-sm md:text-lg mb-6 leading-relaxed drop-shadow max-w-3xl mx-auto">
            At American Quality Tree Care LLC, we are dedicated to providing
            expert tree and landscape care to Colorado’s mountain communities.
            With a deep-rooted passion for plant health and over 25 years of
            experience in horticulture, we specialize in keeping your trees,
            lawns, and landscapes thriving.
          </p>

          <div className="flex justify-center gap-20 flex-wrap">
            <button
              className="
                btn 
                bg-green-700 
                text-white 
                border-none 
                px-6 sm:px-5 
                py-2
                hover:bg-amber-900 
                hover:-translate-y-1 
                transition-all 
                duration-300 
                ease-in-out 
                transform 
                text-xs sm:text-sm md:text-base
              "
            >
              LEARN MORE
            </button>
            <button
              className="
                btn 
                bg-green-700 
                text-white 
                border-none 
                px-6 sm:px-5 
                py-2
                hover:bg-amber-900 
                hover:-translate-y-1 
                transition-all 
                duration-300 
                ease-in-out 
                transform 
                text-xs sm:text-sm md:text-base
              "
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
