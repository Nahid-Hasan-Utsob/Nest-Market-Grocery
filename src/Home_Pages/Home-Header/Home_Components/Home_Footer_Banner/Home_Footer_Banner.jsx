import React from "react";
import Caro_Search from "../../../../Components/Caro_Search";
import deliveryMan from "../../../../assets/Icon-Images/alt (13).png";

export default function Home_Footer_Banner() {
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
        <div className="relative flex flex-col justify-center items-start h-[500px] pl-16 gap-10 z-10">
          <div>
            <h2 className="text-6xl font-semibold mb-4 menu-text-color  quicksand-regular w-3/5 leading-snug">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="secondary-text-color text-lg mt-3">
             Start Your Daily Shopping with <span className="primary-text-color ">Nest Mart</span>
            </p>
          </div>

          <div>
            <Caro_Search  />
          </div>
        </div>

        {/* DeliveryMan Image */}
        <img
          src={deliveryMan}
          alt="Delivery Man"
          className="absolute bottom-0 right-0 w-[450px] h-auto object-contain z-20"
        />
      </div>
    </section>
  );
}
