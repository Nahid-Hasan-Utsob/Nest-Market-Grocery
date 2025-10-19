import React from "react";

export default function Random_tending_cards({ product }) {
  const {
    thumbnail,
    title,
    price,
    discountPercentage,
    category,
    brand,
    rating,
    stock,
  } = product;

  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const halfStar = roundedRating % 1 === 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  let discountColor = "bg-red-500";
  if (discountPercentage >= 5 && discountPercentage < 10)
    discountColor = "bg-blue-500";
  else if (discountPercentage >= 10 && discountPercentage < 15)
    discountColor = "bg-orange-500";
  else if (discountPercentage >= 18) discountColor = "bg-emerald-500";
  else if (discountPercentage >= 20) discountColor = "bg-green-500";

  return (
    <div className="flex items-start bg-white rounded-xl shadow-md overflow-hidden w-full max-w-3xl px-4 my-3">
      {/* Image Section */}
      <div className="relative w-25 m-1 h-25 flex-shrink-0">
        {discountPercentage > 0 && (
          <div
            className={`absolute top-0 left-0 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-xl z-10 ${discountColor}`}
          >
            {discountPercentage.toFixed(0)}%
          </div>
        )}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between flex-grow py-2">
        <div>
          <h2 className="menu-text-color text-base font-semibold mb-1 quicksand-regular">
            {title}
          </h2>

          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500 text-base mr-2">
              {Array(fullStars)
                .fill(0)
                .map((_, i) => (
                  <span key={`full-${i}`}>&#9733;</span>
                ))}
              {halfStar === 1 && <span>&#189;</span>}
              {Array(emptyStars)
                .fill(0)
                .map((_, i) => (
                  <span key={`empty-${i}`} className="text-gray-300">
                    &#9733;
                  </span>
                ))}
            </div>
            <span className="secondary-text-color text-sm">
              {rating.toFixed(1)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            {brand && (
              <p className="secondary-text-color font-bold text-sm quicksand-regular">
                By{" "}
                <span className="primary-text-color font-bold">
                  {brand}
                </span>
              </p>
            )}
            <p className="text-sm font-bold">
              {stock > 0 ? (
                <>
                  <span className="secondary-text-color">In Stock </span>
                  <span className="text-red-500">{stock}</span>
                </>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-baseline">
            <span className="text-base font-bold text-red-500 mr-2">
              ${price.toFixed(2)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${(price / (1 - discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>

        
        </div>
      </div>
    </div>
  );
}
