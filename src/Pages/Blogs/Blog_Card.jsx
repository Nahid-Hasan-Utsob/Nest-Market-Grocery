import React from "react";
import Text from "../../Components/Text";

export default function Blog_Card({ cardData }) {
  const { img, title, des, date } = cardData;

  return (
    <section className="quicksand-regular flex flex-col items-center lg:p-2 p-1 bg-gray-200  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="w-full">
        <img
          className="rounded-2xl lg:h-[300px] h-[150px] md:h-[200px] w-full object-cover lg:my-6 lg:px-5 "
          src={img}
          alt='Not Found'
        />
      </div>

      <div className="text-center lg:my-3 md:my-1 my-1 flex flex-col justify-center lg:w-5/6 w-[90%]">
        <p className="secondary-text-color font-bold lg:text-base text-xs">{des}</p>
        <Text
          className={"lg:text-2xl text-[14px] md:text-base menu-text-color font-bold text-center lg:my-3 my-1 md:my-2"}
          text={title}
        />
        <Text
          className={"lg:text-sm text-[8px] secondary-text-color text-center my-3"}
          text={date}
        />
      </div>
    </section>
  );
}
