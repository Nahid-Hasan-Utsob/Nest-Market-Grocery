import React, { useEffect, useState } from "react";
import Random_Tending_section from "./Random_Tending_section";

export default function Random_Tending_Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="flex  lg:justify-around mt-10 lg:gap-6 gap-2">
      {/* Top Selling */}
      <div className="py-5 flex-1 md:min-w-[280px]">
       <div className="lg:py-4">
        <p className="menu-text-color border-gray-300 border-b-2 w-fit pb-2 lg:text-3xl text-xl font-bold quicksand-regular">
          Top Selling
        </p>
      </div>
        <div className="mt-5">
          <Random_Tending_section products={products} type="topSelling" />
        </div>
      </div>

      {/* Top Rated */}
      <div className="py-5 flex-1 md:min-w-[280px]">
        <div className="lg:py-4">
        <p className="menu-text-color border-gray-300 border-b-2 w-fit pb-2 lg:text-3xl text-xl font-bold quicksand-regular">
          Top Review
        </p>
      </div>
        <div className="mt-5">
          <Random_Tending_section products={products} type="topRated" />
        </div>
      </div>

      {/* Trending Products — শুধু md থেকে দেখা যাবে */}
      <div className="py-5 flex-1 md:min-w-[280px] hidden md:block">
       <div className="lg:py-4">
        <p className="menu-text-color border-gray-300 border-b-2 w-fit pb-2 lg:text-3xl text-xl font-bold quicksand-regular">
          Tending Products
        </p>
      </div>
        <div className="mt-5" >
          <Random_Tending_section products={products} type="trending" />
        </div>
      </div>
    </div>
  );
}
