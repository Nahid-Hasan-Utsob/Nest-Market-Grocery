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
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  console.log(products);

  return (
    
    <section className="max-w-[1400px] mx-auto py-8 px-4">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          All
        </button>

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-4 py-2 rounded-md border capitalize ${
              selectedCategory === cat.slug
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
        {products.slice(0, 8).map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
}
