import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Home_Popular_main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Get selectedCategory from URL query param, default 'all'
  const selectedCategory = searchParams.get("category") || "all";

  // Load categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  // Load products based on selectedCategory
  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data?.products || []))
      .catch(console.error);
  }, [selectedCategory]);

  // Handle category button click
  const handleCategoryChange = (catSlug) => {
    if (catSlug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: catSlug });
    }
  };

  return (
    <section className="py-8">
      {/* Heading */}
      <div className="pb-4">
        <p className="menu-text-color text-3xl font-bold quicksand-regular">
          Shop By Categories ({categories.length})
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6 quicksand-regular font-semibold">
  <button
    onClick={() => handleCategoryChange("all")}
    className={`px-4 py-2 rounded-md ${
      selectedCategory === "all"
        ? "bg-blue-600 text-white"
        : "bg-white menu-text-color"
    }`}
  >
    All
  </button>

  {categories.map((cat, i) => (
    <button
      key={i}
      onClick={() => handleCategoryChange(cat.slug)}
      className={`p-1 rounded-md capitalize ${
        selectedCategory === cat.slug
          ? "primary-text-color text-white"
          : "bg-white menu-text-color"
      }`}
    >
      {cat.name}
    </button>
  ))}
</div>


      {/* Products */}
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
