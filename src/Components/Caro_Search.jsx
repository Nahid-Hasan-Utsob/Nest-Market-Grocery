import React from "react";

export default function Caro_Search() {
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="flex  border-2 rounded-4xl overflow-hidden shadow-sm max-w-xl mx-auto p-[2px] h-14 w-full bg-white">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-10 text-black focus:outline-none text-[14px] placeholder:text-[14px] placeholder:italic lato-regular w-full "
            style={{ border: "none" }}
          />
          <button className="primary-bg-color text-white font-semibold quicksand-regular text-[14px] py-3 px-5 focus:outline-none rounded-4xl flex items-center">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
