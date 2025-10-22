import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Text from "../../Components/Text";
import img1 from "../../assets/Icon-Images/icon.png";
import img2 from "../../assets/Icon-Images/hand.png";
import img3 from "../../assets/Icon-Images/tag.png";
import img4 from "../../assets/Icon-Images/parcel.png";
import org from "../../assets/Icon-Images/Organic Cage Grade A Large  Eggs (1).png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../public/style.css";
import Provaid_Card from "../../Components/Provaid_Card";

export default function About_us() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10">
      {/* === About section === */}
      <section className="flex flex-col lg:flex-row quicksand-regular my-10 lg:my-20 items-center justify-center gap-6 lg:gap-10">
        <div className="w-full lg:w-1/2 lg:flex items-center justify-center hidden">
          <img
            className="rounded-2xl w-[90%] sm:w-[80%] object-cover"
            src="https://cdn.pixabay.com/photo/2024/07/04/08/48/swing-8872109_1280.jpg"
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="text-[10px] sm:text-[15px] md:text-[17px] lg:text-[17px] w-full sm:w-[90%] mx-auto">
            <p className="text-lg sm:text-[15px] md:text-[17px] lg:text-4xl font-bold">
              Welcome to Nests
            </p>
            <p className="pt-2 sm:pt-4 md:pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="py-5">
            <Swiper
              modules={[Virtual, Navigation, Pagination]}
              onSwiper={setSwiperRef}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              centeredSlides={true}
              spaceBetween={20}
              pagination={{ type: "fraction" }}
              navigation={true}
              virtual
            >
              {slides.map((slideContent, index) => (
                <SwiperSlide key={slideContent} virtualIndex={index}>
                  <img
                    src={org}
                    className="rounded-2xl w-full sm:w-32 sm:h-32 md:h-40 md:w-40 lg:w-full lg:h-40 object-cover"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* === Provide Section === */}
      <div>
        <Text
          text="What We Provide?"
          className="menu-text-main text-2xl sm:text-[15px] md:text-4xl lg:text-5xl quicksand-regular font-bold text-center my-8 lg:my-15"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:overflow-x-auto lg:grid lg:grid-cols-3 gap-4 lg:gap-10 my-6">
        {[img1, img2, img2, img3, img4, img1].map((img, i) => (
          <Provaid_Card
            key={i}
            img={img}
            title={"Best Prices & Offers"}
            des={
              "There are many variations of passages of Lorem Ipsum available, but the majority ave suffered alteration in some form"
            }
            TclassName="menu-text-color quicksand-regular text-[12px] sm:text-[15px] md:text-2xl lg:text-2xl font-bold py-2 lg:py-3"
            PclassName="px-3 sm:px-5 quicksand-regular secondary-text-color text-[10px] sm:text-[13px] md:text-[17px]"
          />
        ))}
      </div>

      {/* === Partner Section === */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 my-10 lg:my-20">
        <div className="w-full lg:w-1/2 flex gap-2 sm:gap-3 sm:items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2024/07/04/08/48/swing-8872109_1280.jpg"
            className="w-1/2 sm:w-1/3 rounded-2xl object-cover h-[150px] sm:h-[250px] md:h-[380px]"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2024/07/04/08/48/swing-8872109_1280.jpg"
            className="w-1/2 sm:w-2/5 object-cover min-h-[200px] sm:min-h-[300px] md:min-h-[480px] rounded-2xl"
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <div className="text-[10px] sm:text-[15px] md:text-[17px] lg:text-[17px] w-full sm:w-[90%] mx-auto">
            <p className="text-lg sm:text-[15px] md:text-[17px] lg:text-2xl font-bold">
              Your Partner for e-commerce grocery solution
            </p>
            <p className="pt-2 sm:pt-4 md:pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* === Bottom Text Section === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 my-10">
        {[
          { title: "Who we are" },
          { title: "Our history" },
          { title: "Our mission" },
        ].map((item, i) => (
          <div key={i}>
            <Text
              text={item.title}
              className="pb-2 text-[12px] sm:text-[15px] md:text-3xl lg:text-3xl quicksand-regular font-bold menu-text-color"
            />
            <Text
              text={
                "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros onec ac odio orci ultrices in.ellus eros donec ac odio orci ultrices in."
              }
              className="text-[10px] sm:text-[13px] md:text-base lg:text-base quicksand-regular font-medium secondary-text-color"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
