import React, { useContext } from "react";
import { RiStarFill } from "react-icons/ri";
import { CartContext } from "../../../Context/CartContext";

export default function Product_RIght_section({ product }) {
  const {
    thumbnail,
    title,
    price,

    rating,
    id,
    description,
    weight,
    shippingInformation,
    availabilityStatus,
    warrantyInformation,
    depth,
    height,
    width,
    sku,
    brand,
    tags,
    stock,
    discountPercentage,
    category,
  } = product;

  const { addToCart } = useContext(CartContext);
  return (
    <section>
      <div>
        <div>
          <p className="text-[14px] text-red-500 border-2 border-red-500 p-1 rounded-xs quicksand-regular  font-bold w-fit">
            Sale Off
          </p>
        </div>
        <div>
          <p className="quicksand-regular text-[40px] w-3/4 font-bold menu-text-color  ">
            Seeds of Change Organic Quinoa, Brown
          </p>
          <div className="flex items-center my-3">
            <RiStarFill className="text-orange-500 text-xl mr-5"></RiStarFill>
            <p className="font-[14px] secondary-text-color ">(32 reviews)</p>
          </div>

          <div className="flex items-baseline">
            <span className="lg:text-6xl text-[12px] font-bold text-green-600 lg:mr-2 mr-1">
              ${price.toFixed(2)}
            </span>
            <div>
              <div></div>
              <div>
                {discountPercentage > 0 && (
                  <span className="lg:text-2xl text-[10px] text-gray-400 line-through">
                    ${(price / (1 - discountPercentage / 100)).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/6 py-3">
          <p className="secondary-text-color text-base lato-regular">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-center text-md quicksand-regular font-bold">
          <p>Size / Weight:</p>
          <p className="px-2 text-white rounded-md primary-bg-color">
            {weight} G
          </p>
        </div>
        <div
          onClick={() => addToCart(product)}
          className="w-fit min-w-76 items-center  pb-3 border-t border-gray-100 mt-5"
        >
          <button className="flex items-center justify-center lg:px-4 lg:py-2 px-2 py-1 lg:text-base text-[13px] primary-bg-color text-white font-semibold rounded-lg hover:bg-green-200 transition duration-150 quicksand-regular w-full">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0z"
              ></path>
            </svg>
            Add to cart
          </button>
        </div>
      
        <div>
            <div className="flex flex-col text-start">
                  <p className="menu-text-color quicksand-regular font-bold   ">Brand: <span className="primary-text-color text-base font-bold quicksand-regular pl-4">{brand}</span></p>
                  <p className="menu-text-color quicksand-regular font-bold   ">Stock: <span className="text-red-500 text-base font-bold quicksand-regular pl-4">{stock} Items</span></p>
                  <p className="menu-text-color quicksand-regular font-bold   ">Tags: <span className="primary-text-color text-base font-bold quicksand-regular pl-4">{tags}</span></p>
            </div>
            <div></div>
        </div>
      </div>
    </section>
  );
}
