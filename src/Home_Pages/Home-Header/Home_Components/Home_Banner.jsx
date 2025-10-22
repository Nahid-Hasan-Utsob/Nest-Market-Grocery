import React, { useEffect, useState } from "react";
import cardImage1 from "../../../assets/Icon-Images/alt (10).png";
import cardImage2 from "../../../assets/Icon-Images/alt (11).png";
import cardImage3 from "../../../assets/Icon-Images/alt (12).png";
import Card_Button from "../../../Components/Card_Button";

export default function Home_Banner() {
  const banners = [
    {
      img: cardImage1,
      title: `Everyday Fresh & Clean with Our Products`,
      button: "Shop Now",
    },
    {
      img: cardImage2,
      title: `Make your Breakfast Healthy and Easy`,
      button: "Shop Now",
    },
    {
      img: cardImage3,
      title: `The best Organic Products Online`,
      button: "Shop Now",
    },
  ];

  const [visibleBanners, setVisibleBanners] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg or larger
        setVisibleBanners(banners.slice(0, 3));
      } else {
        // sm or md
        setVisibleBanners(banners.slice(0, 2));
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="grid lg:grid-cols-3 grid-cols-2 gap-2 mt-4">
      {visibleBanners.map((item, index) => (
        <div
          key={index}
          className="relative md:h-[300px] h-[120px] md:rounded-2xl rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full md:object-fill object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 group-hover:bg-black/50 transition-all duration-300"></div>

          {/* Text + Button */}
          <div className="quicksand-regular text-2xl w-4/5 font-bold absolute inset-0 flex flex-col justify-center items-start md:px-8 px-3 z-10">
            <h2 className="md:text-2xl text-xs font-bold md:mb-3 menu-text-color leading-snug">
              {item.title}
            </h2>
            <Card_Button text="Shop Now" className={"md:mt-3 mt-1"} />
          </div>
        </div>
      ))}
    </section>
  );
}
