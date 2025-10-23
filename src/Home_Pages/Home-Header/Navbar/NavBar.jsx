import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { CartContext } from "../../../Context/CartContext";
import CartIcon from "../../../Components/CartIcon";

export default function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <section>
      <div className="flex items-center gap-5">
        {/* Become Vendor */}
        <div className="md:flex hidden items-center gap-3 primary-text-color quicksand-regular font-bold text-[14px]">
          <p>Became Vendor</p>
          <FaArrowRightLong />
        </div>

        {/* Wishlist */}
        {/* <div className="flex items-center gap-3 secondary-text-color ato-regular text-base">
          <div className="relative lg:inline-block hidden">
            <FiHeart className="lg:w-7 lg:h-7 w-6 h-6 text-black" />
            <span className="absolute lg:-top-1 -top-2 -right-1 primary-bg-color text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <p className="hidden md:block">Wishlist</p>
        </div> */}

        {/* ✅ Common Cart Component */}
        <CartIcon />

        {/* Account */}
        <div className="md:flex items-center gap-3 secondary-text-color ato-regular text-base">
          <VscAccount className="lg:w-7 lg:h-7 w-6 h-6 text-black" />
          <p className="hidden md:block">Accounts</p>
        </div>
      </div>
    </section>
  );
}
