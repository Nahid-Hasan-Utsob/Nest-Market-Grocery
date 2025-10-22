import React from "react";
import Caro_Search from "./Caro_Search";
import deliveryMan from "../assets/Icon-Images/alt (13).png";

export default function Footer_Banner() {
  return (
    <section>
      <div className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 overflow-hidden rounded-2xl">
        {/* subtle texture background */}
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2017/10/05/10/37/paper-2818976_1280.jpg')",
            backgroundRepeat: "repeat",
          }}
        ></div>

        {/* overlay */}
        <div className="absolute inset-0  rounded-2xl"></div>

        {/* Text + Search */}
        <div className="relative flex flex-col justify-center items-start lg:h-[500px] h-[250px] lg:pl-16 pl-5 gap-2 lg:gap-10 z-10">
          <div>
            <h2 className="lg:text-6xl md:text-3xl text-xl font-semibold lg:mb-4 menu-text-color  quicksand-regular w-3/5 leading-snug">
              Stay home & get your daily needs from our shop
            </h2>
             <h1 className="text-white md:mt-8 md:text-base text-xs md:pt-0 pt-2 ">
             Start Your Daily Shopping with <span className="primary-text-color ">Nest Mart</span>
            </h1>
          </div>

          
        </div>

        {/* DeliveryMan Image */}
        <img
          src={deliveryMan}
          alt="Delivery Man"
          className="absolute bottom-0 right-0 w-[200px] lg:w-[450px] h-auto object-contain "
        />
      </div>
    </section>
  );
}
