// src/.../Product_RIght_section.jsx
import React, { useContext, useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { CartContext } from "../../../Context/CartContext";

export default function Product_RIght_section({ product }) {
  const {
    images,
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
    reviews,
    tags,
    stock,
    discountPercentage,
    category,
  } = product || {};

  const { addToCart } = useContext(CartContext);

  // ===== active tab state =====
  const [activeTab, setActiveTab] = useState("description"); // "description" or "reviews"

  // safety for reviews
  const reviewsSafe = Array.isArray(reviews) ? reviews : [];

  return (
    <section className="w-full">
    <div className="grid grid-cols-2">
        <div>
          <div className='w-full p-3 flex justify-center items-center'>
        {/* responsive image */}
        <img
          className='w-full max-w-[560px] h-auto object-contain'
          src={images}
          alt={product?.title || 'product image'}
        />
      </div>
      </div>
      <div>
        <div>
          <p className="text-[14px] text-red-500 border-2 border-red-500 p-1 rounded-xs quicksand-regular font-bold w-fit">
            Sale Off
          </p>
        </div>

        {/* Title + rating */}
        <div>
          <p className="quicksand-regular text-[40px]  font-bold menu-text-color">
            {title}
          </p>

          <div className="flex items-center my-3">
            <RiStarFill className="text-orange-500 text-xl mr-5" />
            <p className="font-[14px] secondary-text-color">
              ({reviewsSafe.length} reviews)
            </p>
          </div>

          <div className="flex items-baseline">
            <span className="lg:text-6xl text-[12px] font-bold text-green-600 lg:mr-2 mr-1">
              ${Number(price || 0).toFixed(2)}
            </span>
            <div>
              {discountPercentage > 0 && (
                <span className="lg:text-2xl text-[10px] text-gray-400 line-through">
                  ${(Number(price || 0) / (1 - (discountPercentage || 0) / 100)).toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* short description preview */}
        <div className="w-full py-3">
          <p className="secondary-text-color text-base lato-regular">
            {description}
          </p>
        </div>

        {/* size/weight + add to cart */}
        <div className="flex gap-2 items-center text-md quicksand-regular font-bold">
          <p>Size / Weight:</p>
          <p className="px-2 text-white rounded-md primary-bg-color">
            {weight} G
          </p>
        </div>

        <div
          onClick={() => addToCart && addToCart(product)}
          className="w-fit min-w-76 items-center pb-3 border-t border-gray-100 mt-5"
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
              />
            </svg>
            Add to cart
          </button>
        </div>

        {/* ===== Info grid (brand, stock, etc) ===== */}
        <div className="flex w-4/6 justify-between my-4">
          <div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">Brand:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{brand}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">Stock:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{stock} Items Left</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">Tags:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{Array.isArray(tags) ? tags.join(", ") : tags}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">Height:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{height}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">Width:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{width}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">SKU:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{sku}</span>
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[110px]">Availability:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{availabilityStatus}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[110px]">Warranty:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{warrantyInformation || "—"}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[110px]">Shipping:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{shippingInformation || "—"}</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[110px]">Discount:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{discountPercentage} %</span>
            </div>
            <div className="flex gap-2">
              <p className="menu-text-color quicksand-regular font-bold text-[13px] w-[50px]">Depth:</p>
              <span className="primary-text-color text-[13px] font-bold quicksand-regular">{depth}</span>
            </div>
          </div>
        </div>

      
      </div>
    </div>
        {/* ===== Tabs area ===== */}
        <div className="mt-8 border-t border-gray-200 pt-4">

          {/* Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 rounded-md font-semibold quicksand-regular transition duration-150 ${
                activeTab === "description" ? "primary-bg-color text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 rounded-md font-semibold quicksand-regular transition duration-150 ${
                activeTab === "reviews" ? "primary-bg-color text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Reviews ({reviewsSafe.length})
            </button>
          </div>

          {/* Content */}
          <div className="bg-white p-4 rounded-md shadow-sm min-h-[120px] transition-all duration-200">
            {activeTab === "description" && (
              <div>
                <h3 className="text-2xl  font-bold mb-2 menu-text-color quicksand-regular">Product Description</h3>
                <p className="text-gray-700">{ 
                  
                  
                  <section className="my-5">
                    <div>
                                  <p className="secondary-text-color text-base lato-regular">
            {description}
          </p>
                    </div>
                </section> 
                
                
                || "No description available."}</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-lg font-bold mb-3">Customer Reviews</h3>

                {reviewsSafe.length === 0 ? (
                  <p className="italic text-gray-500">No reviews yet.</p>
                ) : (
                  <ul className="space-y-3">
                    {reviewsSafe.map((r, i) => {
                      // support both string reviews and object reviews
                      const reviewerName = r?.reviewerName || r?.name || `User ${i + 1}`;
                      const comment = r?.comment || r?.text || (typeof r === "string" ? r : "");
                      const ratingValue = r?.rating || (typeof r === "number" ? r : null);

                      return (
                        <li key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-gray-800">{reviewerName}</div>
                            {ratingValue && <div className="text-sm text-yellow-500">⭐ {ratingValue}</div>}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{comment || "No comment provided."}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
    </section>
  );
}
