// src/Components/Common/CartIcon.jsx
import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../src/Context/CartContext";
import { Link } from "react-router-dom";

export default function CartIcon({ showLabel = true, className = "" }) {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div
        className={`flex items-center gap-3 secondary-text-color ato-regular ${className}`}
      >
        <div className="relative inline-block">
          <BsCart3 className="lg:w-7 lg:h-7 w-6 h-6 text-black" />
          <span className="absolute lg:-top-1 -top-2 -right-1 primary-bg-color text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {cart.length}
          </span>
        </div>
        {showLabel && <p className="hidden md:block">Cart</p>}
      </div>
    </Link>
  );
}
