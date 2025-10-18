import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

export default function NavBar() {
  return (
    <section>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 primary-text-color quicksand-regular font-bold text-[14px]">
          <p>Became Vendor </p>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
        <div className="flex items-center gap-3 secondary-text-color ato-regular   text-base]">
          <div className="relative inline-block">
            <FiHeart className="w-7 h-7  text-black" />

            <span className="absolute -top-1 -right-1 primary-bg-color  text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <p>Wishlist</p>
        </div>
        <div className="flex items-center gap-3 secondary-text-color ato-regular   text-base]">
          <div className="relative inline-block">
            <BsCart3 className="w-7 h-7  text-black" />

            <span className="absolute -top-1 -right-1 primary-bg-color  text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              6
            </span>
          </div>
          <p>Cart</p>
        </div>
        <div className="flex items-center gap-3 secondary-text-color ato-regular   text-base]">
          <VscAccount className="w-7 h-7  text-black" />
          <p>Accounts</p>
        </div>
      </div>
    </section>
  );
}
