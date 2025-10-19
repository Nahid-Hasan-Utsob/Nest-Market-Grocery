import React from "react";

export default function Home_Random_Cards({ product }) {
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
  // {{
  //     "id": 1,
  //     "title": "Essence Mascara Lash Princess",
  //     "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  //     "category": "beauty",
  //     "price": 9.99,
  //     "discountPercentage": 10.48,
  //     "rating": 2.56,
  //     "stock": 99,
  //     "tags": [
  //         "beauty",
  //         "mascara"
  //     ],
  //     "brand": "Essence",
  //     "sku": "BEA-ESS-ESS-001",
  //     "weight": 4,
  //     "dimensions": {
  //         "width": 15.14,
  //         "height": 13.08,
  //         "depth": 22.99
  //     },
  //     "warrantyInformation": "1 week warranty",
  //     "shippingInformation": "Ships in 3-5 business days",
  //     "availabilityStatus": "In Stock",
  //     "reviews": [
  //         {
  //             "rating": 3,
  //             "comment": "Would not recommend!",
  //             "date": "2025-04-30T09:41:02.053Z",
  //             "reviewerName": "Eleanor Collins",
  //             "reviewerEmail": "eleanor.collins@x.dummyjson.com"
  //         },
  //         {
  //             "rating": 4,
  //             "comment": "Very satisfied!",
  //             "date": "2025-04-30T09:41:02.053Z",
  //             "reviewerName": "Lucas Gordon",
  //             "reviewerEmail": "lucas.gordon@x.dummyjson.com"
  //         },
  //         {
  //             "rating": 5,
  //             "comment": "Highly impressed!",
  //             "date": "2025-04-30T09:41:02.053Z",
  //             "reviewerName": "Eleanor Collins",
  //             "reviewerEmail": "eleanor.collins@x.dummyjson.com"
  //         }
  //     ],
  //     "returnPolicy": "No return policy",
  //     "minimumOrderQuantity": 48,
  //     "meta": {
  //         "createdAt": "2025-04-30T09:41:02.053Z",
  //         "updatedAt": "2025-04-30T09:41:02.053Z",
  //         "barcode": "5784719087687",
  //         "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
  //     },
  //     "images": [
  //         "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  //     ],
  //     "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  // }}
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
    <div className="max-w-xs mx-auto rounded-xl shadow-xl overflow-hidden bg-white ">
      {/* Product Image and Discount */}
      <div className="relative p-6 pb-0">
        {discountPercentage > 0 && (
          <div
            className={`absolute top-0 left-0 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-xl z-10 ${discountColor}`}
          >
            {discountPercentage.toFixed(0)}%
          </div>
        )}

        <div className="flex justify-center items-center h-52">
          <img
            src={thumbnail}
            alt={title}
            className="h-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 pt-6">
        <h2 className="menu-text-color  text-lg font-semibold mb-3 quicksand-regular">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-500 text-base mr-2">
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
          <span className="secondary-text-color text-sm ">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Brand */}
        <div className="flex justify-between items-center ">
          <div>
            {brand && (
              <p className="secondary-text-color font-bold text-base  quicksand-regular ">
                By{" "}
                <span className="primary-text-color font-bold quicksand-regular ">
                  {brand}
                </span>
              </p>
            )}
          </div>
          <div>
            {stock ? (
              <p className="secondary-text-color font-bold text-base  quicksand-regular ">
                In-Stock{" "}
                <span className="text-red-500 font-bold quicksand-regular ">
                  {stock}
                </span>
              </p>
            ) : (
              <p className="text-red-500 font-bold text-base  quicksand-regular ">
                Out Of Stock
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline py-2">
            <span className="text-lg font-bold text-red-500 mr-2">
              ${price.toFixed(2)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${(price / (1 - discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>
          <div>
            <p className="secondary-text-color text-sm capitalize lato-regular ">
              {category}
            </p>
          </div>
        </div>
        {/* Price & Add Button */}
        <div className="flex  w-full items-center pt-3 border-t border-gray-100">
          <button className="flex items-center justify-center px-4  py-2 primary-bg-color  text-white font-semibold rounded-lg hover:bg-green-200 transition duration-150 quicksand-regular w-full">
            <svg
              className="w-5 h-5 mr-1"
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
    </div>
  );
}
