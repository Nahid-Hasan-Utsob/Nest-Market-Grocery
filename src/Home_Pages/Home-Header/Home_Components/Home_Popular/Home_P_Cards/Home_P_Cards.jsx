import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function Home_Popular_main({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Load categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories") // categories API
      .then((res) => res.json())
      .then((data) => {
        console.log("Categories:", data);
        setCategories(data); // data is array of objects {slug, name, url}
      })
      .catch((err) => console.error(err));
  }, []);

  // Load products
  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products || []);
      })
      .catch((err) => console.error(err))
     
  }, [selectedCategory]);

  console.log(products);

  return (
    <section className=" py-8 ">
      <div className="pb-4">
         <p className="menu-text-color text-3xl font-bold quicksand-regular">
         Shop By Categories ({categories.length})
        </p>
      </div>
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6 quicksand-regular  font-semibold">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-md  ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-white menu-text-color "
          }`}
        >
          All
        </button>

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat.slug)}
            className={` p-1 rounded-md  capitalize ${
              selectedCategory === cat.slug
                ? "primary-text-color text-white"
                : "bg-white menu-text-color "
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
        {(selectedCategory === "all" ? products.slice(0, 8) : products).map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
    </section>
  );
}
