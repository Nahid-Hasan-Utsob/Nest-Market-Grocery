import React, { useContext, useEffect, useState } from "react";
import Random_tending_cards from "./Random_tending_cards/Random_tending_cards";


export default function Random_Tending_section({ products = [], type }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    let result = [];

    switch (type) {
      case "topRated":
        result = [...products]
          .filter((p) => p.rating >= 4)
          .sort((a, b) => b.rating - a.rating);
        break;

      case "topSelling":
        result = [...products]
          .filter((p) => p.discountPercentage > 0)
          .sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;

      case "recent":
        result = [...products].sort((a, b) => b.id - a.id);
        break;

      case "trending":
        result = [...products].sort(() => 0.5 - Math.random());
        break;

      default:
        result = [...products];
        break;
    }

    // শুধু প্রথম ৪টা দেখাবে
    setFilteredProducts(result.slice(0, 4));
  }, [products, type]);

  return (
    <div className="flex flex-col gap-3">
      {filteredProducts.map((product) => (
        <Random_tending_cards key={product.id} product={product} />
      ))}
    </div>
  );
}
