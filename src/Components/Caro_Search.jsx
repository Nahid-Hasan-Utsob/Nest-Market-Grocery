import React from "react";

export default function Caro_Search() {
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="flex  border-2 rounded-4xl overflow-hidden shadow-sm max-w-xl mx-auto p-[2px] md:h-14 h-9 w-full bg-white">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow md:px-10 px-2 text-black focus:outline-none text-[14px] md:placeholder:text-[14px] placeholder:text-[13px] placeholder:italic lato-regular w-full "
            style={{ border: "none" }}
          />
          <button className="primary-bg-color text-white font-semibold quicksand-regular md:text-[14px] text-xs md:py-3 md:px-5 py-2 px-3 focus:outline-none rounded-4xl flex items-center">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
