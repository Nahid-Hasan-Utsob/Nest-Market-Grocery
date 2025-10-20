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
    <div className="flex justify-around mt-10 gap-6">
      {/* Top Selling */}
      <div className="py-5 flex-1 min-w-[280px]">
        <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black">
          Top Selling
        </p>
        <div className="mt-5">
          <Random_Tending_section products={products} type="topSelling" />
        </div>
      </div>

      {/* Top Rated */}
      <div className="py-5 flex-1 min-w-[280px]">
        <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black">
          Top Rated
        </p>
        <div className="mt-5">
          <Random_Tending_section products={products} type="topRated" />
        </div>
      </div>

      {/* Trending Products — শুধু md থেকে দেখা যাবে */}
      <div className="py-5 flex-1 min-w-[280px] hidden md:block">
        <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black">
          Trending Products
        </p>
        <div className="mt-5">
          <Random_Tending_section products={products} type="trending" />
        </div>
      </div>
    </div>
  );
}
