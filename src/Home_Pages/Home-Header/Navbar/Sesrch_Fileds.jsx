import React from "react";

export default function Sesrch_Fileds() {
  return (
    <section className="min-w-1/2">
      <div className="w-full">
        <div className="flex  border-2 border-green-300 rounded-lg overflow-hidden shadow-sm max-w-xl mx-auto p-[2px] h-12 w-full">
          <input
            type="text" 
            placeholder="Search for products..."
            className="flex-grow px-4 text-black focus:outline-none secondary-text-color text-[14px] placeholder:text-[14px] placeholder:italic lato-regular w-full"
            style={{ border: "none" }}
          />
          <button className="primary-bg-color text-white font-semibold quicksand-regular text-[14px] py-3 px-5 focus:outline-none rounded-md flex items-center">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
