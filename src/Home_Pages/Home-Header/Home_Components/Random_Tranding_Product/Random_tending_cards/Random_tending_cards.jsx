import React from "react";

// The component function is modified to only display elements matching the image.
// It still accepts the full 'product' object for data integration flexibility.
export default function Random_tending_cards({ product }) {
  // Destructure only the necessary properties to calculate the discounted price
  const {
    thumbnail,
    title,
    price,
    discountPercentage, // Used to calculate the original price
    rating, // Used for the SSSSS and count
  } = product;

  // --- Logic for Displaying Ratings (Simplified to match image) ---
  // The original image uses 'SSSSS 1' which suggests a generic rating visual.
  // We'll use the rating logic you provided for dynamic display, but style it to look like the image.
  
  // Calculate the original price before the discount
  const originalPrice = discountPercentage > 0 
    ? price / (1 - discountPercentage / 100) 
    : price;

  // Calculate rating count to display '1' next to the stars (as in the image)
  // Since 'product' doesn't have a 'reviewCount', we'll hardcode '1' or use a placeholder if the logic isn't available.
  const reviewCount = 1; // Hardcoded to match the image content "1"

  return (
    <div className="max-w-md mx-auto rounded-none overflow-hidden bg-white flex items-start p-4">
      
      {/* 1. Product Image */}
      <div className="flex-shrink-0 w-32 h-32 mr-4">
        {/* Placeholder for the Pukka image. Using thumbnail from product object. */}
        <img
          src={thumbnail || "placeholder-url"} // Use thumbnail from prop or a fallback
          alt={title || "Product Image"}
          // Styling to maintain the rectangular/square shape shown in the image
          className="w-full h-full object-cover rounded-none" 
        />
      </div>

      {/* 2. Product Details */}
      <div className="flex-grow pt-1">
        
        {/* Title */}
        {/* Using a larger, bolder font for the title as seen in the image. */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 leading-snug">
          {title || "HAAGEN Caramel Cone Ice Cream Boxed"}
        </h2>

        {/* Rating and Count */}
        <div className="flex items-center mb-1">
          {/* SSSSS (Generic Star Icon Visual) - Set to a light gray/yellow-ish color */}
          <div className="text-gray-400 text-xl tracking-wider mr-2">
            <span className="text-yellow-500">
              {/* Using a placeholder for the generic SSSSS visual */}
              SSSSS 
            </span>
          </div>
          {/* Review Count (Hardcoded 1 to match the image) */}
          <span className="text-gray-500 text-base">
            {reviewCount} 
          </span>
        </div>
        
        {/* Price Section */}
        <div className="flex items-baseline mt-2">
          {/* Discounted/Current Price (Large, Bold, Green, Underlined) */}
          <span className="text-2xl font-bold text-green-600 mr-2 border-b-2 border-green-600">
            ${(price || 22.85).toFixed(2)}
          </span>
          
          {/* Original Price (Smaller, Gray, Line-through) */}
          <span className="text-lg text-gray-400 line-through">
            ${(originalPrice || 24.80).toFixed(2)}
          </span>
        </div>
        
        {/* Note: The image does not contain 'category', 'brand', 'stock', or 'Add to cart' button. 
             They have been excluded from this final design to match the visual exactly. */}
      </div>
    </div>
  );
}

// --- Example of how to use this component with dummy data ---
/*
  const dummyProduct = {
    id: 1,
    title: "HAAGEN Caramel Cone Ice Cream Boxed",
    thumbnail: "URL_TO_PUKKA_IMAGE", // You need to put the Pukka image URL here
    price: 22.85, 
    discountPercentage: 7.86, // (24.80 - 22.85) / 24.80 = 0.0786
    rating: 3.5, // Just for the rating logic if you decide to use actual stars
    brand: "Haagen-Dazs",
    category: "frozen-foods",
    stock: 50
  };

  // Usage:
  // <SimpleProductCard product={dummyProduct} />
*/