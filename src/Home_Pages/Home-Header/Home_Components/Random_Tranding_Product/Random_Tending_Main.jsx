import React, { useEffect, useState } from "react";
import RandomProductsSection from "../Home_Random_Cards/RandomProductsSection/RandomProductsSection";
import Random_Tending_section from "./Random_Tending_section";


export default function Random_Tending_Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="flex justify-around mt-10">
  <div className="py-5">
    <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black ">Top Selling</p>
     <div className="mt-5">
        <Random_Tending_section products={products} />
     </div>
   </div>
  <div className="py-5">
    <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black ">Top Rated</p>
     <div className="mt-5">
        <Random_Tending_section products={products} />
     </div>
   </div>
  <div className="py-5">
    <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black ">Recently added</p>
     <div className="mt-5">
        <Random_Tending_section products={products} />
     </div>
   </div>
  <div className="py-5">
    <p className="text-2xl font-bold quicksand-regular border-b w-fit pb-2 border-black ">Trending Products</p>
     <div className="mt-5">
        <Random_Tending_section products={products} />
     </div>
   </div>
    
    </div>
  );
}
