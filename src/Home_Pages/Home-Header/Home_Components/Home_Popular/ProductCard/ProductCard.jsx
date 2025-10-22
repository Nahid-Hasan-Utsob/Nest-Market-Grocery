import React, { useContext } from "react";
import { CartContext } from "../../../../../Context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const {
    thumbnail,
    title,
    price,
    discountPercentage,
    category,
    brand,
    rating,
    id,
    stock,
  } = product;

  const { addToCart } = useContext(CartContext);

  // Rating stars logic (round to nearest half)
  const roundedRating = Math.round(rating * 2) / 2; // nearest 0.5
  const fullStars = Math.floor(roundedRating);
  const halfStar = roundedRating % 1 === 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  // Discount badge color logic
  let discountColor = "bg-red-500";
  if (discountPercentage >= 5 && discountPercentage < 10)
    discountColor = "bg-blue-500";
  else if (discountPercentage >= 10 && discountPercentage < 15)
    discountColor = "bg-orange-500";
  else if (discountPercentage >= 18) discountColor = "bg-emerald-500";
  else if (discountPercentage >= 20) discountColor = "bg-green-500";

  return (
    // 👈 subtle hover animation added
    <div className="rounded-xl shadow-xl overflow-hidden bg-white h-fit transition-transform duration-300 hover:-translate-y-1">
      {/* Product Image and Discount */}
      <Link to={`/product/${id}`} scroll={"false"}>
        <div className="relative lg:p-6 p-3 pb-0">
          {discountPercentage > 0 && (
            <div
              className={`absolute top-0 left-0 text-white lg:text-xs text-[9px] font-bold px-3 py-1 rounded-br-lg rounded-tl-xl z-10 ${discountColor}`}
            >
              {discountPercentage.toFixed(0)}%
            </div>
          )}

          <div className="flex justify-center items-center lg:h-52 h-[110px]">
            <img
              src={thumbnail}
              alt={title}
              className="h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:p-4 p-2 lg:pt-6 pt-3">
          <p className="secondary-text-color lg:text-sm text-[9px] mb-1 capitalize lato-regular ">
            {category}
          </p>

          <h2 className="menu-text-color lg:text-lg font-semibold text-[13px] lg:h-[45px] h-[25px] mb-2 quicksand-regular flex items-center">
            {title}
          </h2>

          {/* Rating */}
          <div className="flex items-center lg:mb-2 mb-1">
            <div className="flex text-yellow-500 text-base mr-2 text-[10px] lg:text-base ">
              {Array(fullStars)
                .fill(0)
                .map((_, i) => (
                  <span key={`full-${i}`}>&#9733;</span>
                ))}
              {halfStar === 1 && <span>&#189;</span>} {/* half star */}
              {Array(emptyStars)
                .fill(0)
                .map((_, i) => (
                  <span key={`empty-${i}`} className="text-gray-300">
                    &#9733;
                  </span>
                ))}
            </div>
            <span className="secondary-text-color lg:text-sm text-[10px]">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Brand */}
          <div className="flex justify-between items-center">
            {brand && (
              <p className="secondary-text-color font-bold lg:text-base text-[10px] quicksand-regular ">
                By{" "}
                <span className="primary-text-color font-bold quicksand-regular ">
                  {brand}
                </span>
              </p>
            )}
            {stock ? (
              <p className="secondary-text-color font-bold quicksand-regular lg:text-base text-[10px]">
                In-Stock{" "}
                <span className="primary-text-color font-bold quicksand-regular ">
                  {stock}
                </span>
              </p>
            ) : (
              <p className="text-red-500 font-bold text-base quicksand-regular lg:text-base text-[10px]">
                Out Of Stock
              </p>
            )}
          </div>
        </div>
      </Link>

      {/* Price & Add Button */}
      <div className="flex justify-between items-center lg:py-3 lg:px-3 py-1 px-2 border-t border-gray-200">
        <div className="flex items-baseline">
          <span className="lg:text-lg text-[12px] font-bold text-green-600 lg:mr-2 mr-1">
            ${price.toFixed(2)}
          </span>
          {discountPercentage > 0 && (
            <span className="lg:text-sm text-[10px] text-gray-400 line-through">
              ${(price / (1 - discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="flex items-center justify-center lg:px-4 lg:py-2 px-2 py-1 bg-green-100 text-green-600 font-semibold lg:text-base text-[13px] rounded-lg hover:bg-green-200 transition duration-150 quicksand-regular "
        >
          <svg
            className="lg:w-5 lg:h-5 w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          Add
        </button>
      </div>
    </div>
  );
}
