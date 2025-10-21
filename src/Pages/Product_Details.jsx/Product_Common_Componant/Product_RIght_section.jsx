// src/.../Product_RIght_section.jsx
import React, { useContext, useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { CartContext } from "../../../Context/CartContext";
import { MdDeliveryDining } from "react-icons/md";

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
    name,
    email,
    comment,
    date,
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
    <section className="w-full my-4 lg:my-10">
      <div className="grid md:grid-cols-2  ">
        <div>
          <div className="w-full p-3 flex justify-center items-center">
            {/* responsive image */}
            <img
              className="w-full max-w-[560px] h-auto object-contain"
              src={images}
              alt={product?.title || "product image"}
            />
          </div>
        </div>
        <div>
          <div>
            <p className="md:text-[14px] text-[8px] text-red-500 border-2 border-red-500 p-1 rounded-ms my-2 quicksand-regular font-bold w-fit">
              Sale Off
            </p>
          </div>

          {/* Title + rating */}
          <div>
            <p className="quicksand-regular lg:text-[40px] text-xl md:text-2xl  font-bold menu-text-color">
              {title}
            </p>

            <div className="flex items-center md:my-3 my-1">
              <RiStarFill className="text-orange-500 md:text-xl text-[14px] md:mr-5 mr-2" />
              <p className="md:font-[14px] text-xs secondary-text-color">
                ({reviewsSafe.length} reviews)
              </p>
            </div>

            <div className="flex items-baseline md:m-0 mt-3">
              <span className="lg:text-4xl text-[18px] font-bold text-green-600 lg:mr-2 mr-1">
                ${Number(price || 0).toFixed(2)}
              </span>
              <div>
                {discountPercentage > 0 && (
                  <span className="lg:text-xl text-[10px] text-gray-400 line-through">
                    $
                    {(
                      Number(price || 0) /
                      (1 - (discountPercentage || 0) / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* short description preview */}
          <div className="w-full lg:py-3 py-2">
            <p className="secondary-text-color text-base lato-regular md:text-base text-[14px]">
              {description}
            </p>
          </div>

          {/* size/weight + add to cart */}
          <div className="flex gap-2 items-center md:text-md  text-[12px] quicksand-regular font-bold">
            <p>Size / Weight:</p>
            <p className="px-2 text-white md:text-base text-xs rounded-xs primary-bg-color">
              {weight} G
            </p>
          </div>

          {/* ===== Info grid (brand, stock, etc) ===== */}
          <div className="flex md:w-4/6 justify-between md:my-4 my-2">
            <div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  Brand:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {brand}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  Stock:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {stock} Items Left
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  Tags:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {Array.isArray(tags) ? tags.join(", ") : tags}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  Height:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {height}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  Width:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {width}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  SKU:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {sku}
                </span>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[110px] w-[60px]">
                  Availability:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {availabilityStatus}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[110px] w-[60px]">
                  Warranty:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {warrantyInformation || "—"}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[110px] w-[60px]">
                  Shipping:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {shippingInformation || "—"}
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[110px] w-[60px]">
                  Discount:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {discountPercentage} %
                </span>
              </div>
              <div className="flex gap-2">
                <p className="menu-text-color quicksand-regular font-bold text-[10px] md:text-[13px] md:w-[50px] w-[30px]">
                  Depth:
                </p>
                <span className="primary-text-color  md:text-[13px] text-[10px] font-bold quicksand-regular">
                  {depth}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div
              onClick={() => addToCart && addToCart(product)}
              className="lg:w-fit w-full lg:min-w-76 items-center pb-3 border-t border-gray-100 mt-5"
            >
              <button className="flex items-center justify-center lg:px-4 lg:py-3 px-2 py-2 lg:text-base text-[13px] primary-bg-color text-white font-semibold rounded-lg hover:bg-green-200 transition duration-150 quicksand-regular w-full">
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
            <div
              // onClick={() => addToCart && addToCart(product)}
              className="lg:w-fit w-full lg:min-w-76 items-center pb-3 border-t border-gray-100 mt-5"
            >
              <button className="flex items-center justify-center lg:px-4 lg:py-3 px-2 py-2 lg:text-base text-[13px] bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-150 quicksand-regular w-full">
                <MdDeliveryDining className="lg:w-6 lg:h-6 w-4 h-4 mr-1"></MdDeliveryDining>
                Buy Now
              </button>
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
            className={`md:px-4 px-2 py-2 rounded-md font-semibold quicksand-regular transition duration-150 ${
              activeTab === "description"
                ? "primary-bg-color text-white text-[10px] md:text-[15px]"
                : "bg-gray-100 text-gray-700 text-[10px] md:text-[15px]"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-2 py-2 rounded-md font-semibold quicksand-regular transition duration-150 ${
              activeTab === "reviews"
                ? "primary-bg-color  text-[10px] md:text-[15px] text-white"
                : "bg-gray-100 text-gray-700  text-[10px] md:text-[15px]"
            }`}
          >
            Reviews ({reviewsSafe.length})
          </button>
        </div>

        {/* Content */}
        <div className="bg-white p-4 rounded-md shadow-sm min-h-[120px] transition-all duration-200">
          {activeTab === "description" && (
            <div>
              <h3 className="md:text-2xl text-base font-bold md:mb-2 mb-1 menu-text-color quicksand-regular ">
                Product Description
              </h3>
              <div className="text-gray-700">
                {(
                  <section className="md:my-5 my-2">
                    <div>
                      <p className="secondary-text-color md:text-base text-[14px] lato-regular">
                        {description}
                      </p>
                    </div>
                  </section>
                ) || "No description available."}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h3 className="md:text-lg text-base font-bold md:mb-3 mb-2">
                Customer Reviews
              </h3>

              {reviewsSafe.length === 0 ? (
                <p className="italic text-gray-500">No reviews yet.</p>
              ) : (
                <ul className="grid md:grid-cols-4 gap-2 grid-cols-1">
                  {reviewsSafe.map((r, i) => {
                    const reviewerName =
                      r?.reviewerName || r?.name || `NotFound`;
                    const reviewDate = new Date(r.date).toLocaleString(
                      "en-BD",
                      {
                        timeZone: "Asia/Dhaka",
                      }
                    );
                    const reviewEmail = r?.reviewerEmail || `Not Found`;
                    const comment =
                      r?.comment || r?.text || (typeof r === "string" ? r : "");
                    const ratingValue =
                      r?.rating || (typeof r === "number" ? r : null);

                    return (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-2xl md:p-5 p-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 quicksand-regular"
                      >
                        {/* Reviewer Info */}
                        <div className="mb-2">
                          <p className="md:text-lg text-[14px]  font-bold text-gray-800">
                            {reviewerName}
                          </p>
                          <p className="md:text-[13px] text-[10px]  text-gray-500">
                            {reviewEmail}
                          </p>
                          <p className="md:text-[12px] text-[9px]  text-gray-400">
                            {reviewDate}
                          </p>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex text-yellow-400 my-2 md:text-sm text-[10px]">
                          {Array.from({ length: 5 }, (_, i) => {
                            const starValue = i + 1;
                            if (ratingValue >= starValue) {
                              return (
                                <i key={i} className="fa-solid fa-star"></i>
                              );
                            } else if (ratingValue >= starValue - 0.5) {
                              return (
                                <i
                                  key={i}
                                  className="fa-solid fa-star-half-stroke"
                                ></i>
                              );
                            } else {
                              return (
                                <i key={i} className="fa-regular fa-star"></i>
                              );
                            }
                          })}
                        </div>

                        {/* Review Comment */}
                        <p className="text-gray-700 md:text-[15px] text-[12px] leading-relaxed mt-2 border-t md:pt-3 pt-1">
                          {comment}
                        </p>
                      </div>
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
