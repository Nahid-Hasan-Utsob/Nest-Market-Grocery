import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Caro_Search from "../../../Components/Caro_Search";

export default function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      img: "https://cdn.pixabay.com/photo/2021/07/29/01/33/chocolates-6506021_1280.jpg",
      title: `Fresh Vegetables Big discount`,
      subtitle: `Save up to 50% off on your first order`,
      btnText: "Learn More",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
      title: "Adventure Awaits You",
      subtitle: `Save up to 50% off on your first order`,
      btnText: "Start Now",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/04/20/08/43/cornfield-5067210_1280.jpg",
      title: "Good food, good mood.",
      subtitle: `Save up to 10% off on your first order`,
      btnText: "Start Now",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/19/14/18/oatmeal-1839515_1280.jpg",
      title: "Fuel your day with flavor.",
      subtitle: `Save up to 80% off on your first order`,
      btnText: "Start Now",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/07/01/12/47/food-7295560_1280.jpg",
      title: "Crispy. Juicy. Perfect.",
      subtitle: `Save up to 30% off on your first order`,
      btnText: "Start Now",
    },
  ];

  return (
    <div className="relative mx-auto md:py-8 py-4">
      {/* Navigation buttons */}
      <button
        ref={prevRef}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-black/40 md:p-3 text-xs p-2 rounded-full text-white hover:bg-black/70"
      >
        <FaArrowLeft className="" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-black/40 md:p-3 rounded-full text-white hover:bg-black/70  text-xs p-2"
      >
        <FaArrowRight />
      </button>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img
                src={slide.img}
                alt={`Slide ${i + 1}`}
                className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl"
              />
              {/* overlay text + button */}
              <div className="absolute inset-0 bg-black/40  rounded-2xl  text-white">
                <div className="flex flex-col justify-center items-start h-full left-1/12 md:gap-10 gap-3 absolute">
                  <div>
                    <h2 className="md:text-7xl text-3xl font-semibold md:mb-4 text-white quicksand-regular w-3/5">
                      {slide.title}
                    </h2>
                    <div>
                      <h1 className="text-gray-300 md:mt-8 md:text-base text-xs md:pt-0 pt-2 ">{slide.subtitle}</h1>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
