
import { Link } from "react-router-dom";

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
  else if (discountPercentage >= 16) discountColor = "bg-emerald-500";
  else if (discountPercentage >= 20) discountColor = "bg-green-500";

  return (
    <Link to={`/product/${product.id}`} scroll={`false`}>
      <div className="flex items-start bg-white rounded-xl shadow-md overflow-hidden w-full  lg:px-4 lg:my-3">
        {/* Image Section */}
        <div className="relative lg:w-25 m-1 lg:h-25 w-12 flex-shrink-0">
          {discountPercentage > 0 && (
            <div
              className={`absolute top-0 left-0 text-white md:text-xs text-[10px] font-bold md:px-3 px-1 py-1 rounded-br-lg rounded-tl-xl z-10 ${discountColor}`}
            >
              {discountPercentage.toFixed(0)}%
            </div>
          )}
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain lg:p-2 pt-5"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
       
          <h2 className="menu-text-color  lg:text-lg font-semibold text-[13px] mb-1  lg:mb-3 quicksand-regular">
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
          <div className="md:flex justify-between items-center hidden">
            <div>
              {brand && (
                <p className="secondary-text-color font-bold lg:text-base text-[10px]  quicksand-regular ">
                  By{" "}
                  <span className="primary-text-color font-bold quicksand-regular ">
                    {brand}
                  </span>
                </p>
              )}
            </div>
            <div>
              {stock ? (
                <p className="secondary-text-color font-bold quicksand-regular lg:text-base text-[10px]">
                  In-Stock{" "}
                  <span className="primary-text-color font-bold quicksand-regular ">
                    {stock}
                  </span>
                </p>
              ) : (
                <p className="text-red-500 font-bold text-base  quicksand-regular lg:text-base text-[10px]">
                  Out Of Stock
                </p>
              )}
            </div>
          </div>
          </div>

          {/* Price and Button */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-baseline">
              <span className="lg:text-base text-xs font-bold text-red-500 mr-2">
                ${price.toFixed(2)}
              </span>
              {discountPercentage > 0 && (
                <span className="lg:text-sm text-[10px] text-gray-400 line-through">
                  ${(price / (1 - discountPercentage / 100)).toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
