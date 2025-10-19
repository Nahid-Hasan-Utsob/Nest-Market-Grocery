import React from "react";
import cardImage1 from '../../../assets/Icon-Images/alt (10).png'
import cardImage2 from '../../../assets/Icon-Images/alt (11).png'
import cardImage3 from '../../../assets/Icon-Images/alt (12).png'
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

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-4">
      {banners.map((item, index) => (
        <div
          key={index}
          className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0  group-hover:bg-black/50 transition-all duration-300"></div>

          {/* Text + Button */}
          <div className="quicksand-regular text-2xl  w-4/5 font-bold absolute inset-0 flex flex-col justify-center items-start  px-8 z-10">
            <h2 className="text-2xl font-bold mb-3 leading-snug">
              {item.title}
            </h2>
        <Card_Button text='Shop Now' className={'mt-3'}></Card_Button>
          </div>
        </div>
      ))}
    </section>
  );
}
