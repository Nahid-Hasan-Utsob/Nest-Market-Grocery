import React from "react";
import NavBar from "../Home_Pages/Home-Header/Navbar/NavBar";
import Logo from "../Home_Pages/Home-Header/Navbar/Logo";

export default function Search_Cart_Nav() {
  return (
    <section>
      <div className="flex items-center justify-between mt-8">
        <Logo></Logo>
        <div className="min-w-1/2">
          <div className="w-full">
            <div className="lg:flex  border-2 border-green-300 rounded-lg overflow-hidden shadow-sm max-w-xl mx-auto p-[2px] h-12 hidden w-full">
              <div className="main-category-class  w-[250px]">
                <li className="flex items-center  menu-text-color text-[13px]  ">
                  <select defaultValue="" className="select select-ghost ">
                    <option className="" selected>
                      All Categories
                    </option>
                    <option className="">Bangla</option>
                    <option className="">Bangla</option>
                  </select>
                </li>
              </div>
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
        </div>
        <NavBar></NavBar>
      </div>
    </section>
  );
}
