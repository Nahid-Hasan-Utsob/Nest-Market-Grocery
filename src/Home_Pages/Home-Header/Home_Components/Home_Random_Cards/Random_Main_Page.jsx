import React, { useEffect, useState } from "react";
import RandomProductsSection from "./RandomProductsSection/RandomProductsSection";


export default function Random_Main_Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <RandomProductsSection products={products} />
    </div>
  );
}
