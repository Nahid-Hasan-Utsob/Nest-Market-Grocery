import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Home_Popular_main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

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

  // Responsive logic for categories + title
  useEffect(() => {
    const handleResize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);

      if (large) {
        // lg screen ➜ show all categories
        setVisibleCategories(categories);
      } else {
        // sm / md ➜ show only top 5 (fake "popular")
        const topFive = categories.slice(0, 8);
        setVisibleCategories(topFive);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [categories]);

  const handleCategoryChange = (catSlug) => {
    if (catSlug === "all") setSearchParams({});
    else setSearchParams({ category: catSlug });
  };

  return (
    <section className="py-8">
      {/* Heading */}
      <div className="lg:pb-4 pb-2">
        <p className="menu-text-color lg:text-3xl text-xl font-bold quicksand-regular">
          {isLargeScreen
            ? `Shop By Categories (${categories.length})`
            : "Popular Products"}
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap lg:gap-3 mb-6 quicksand-regular font-semibold">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`lg:px-4 px-2 lg:py-2 py-1 lg:text-base text-[13px]              rounded-md ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-white menu-text-color"
          }`}
        >
          All
        </button>

        {visibleCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => handleCategoryChange(cat.slug || cat)}
            className={`p-1 rounded-md capitalize  lg:text-base text-[12px]     ${
              selectedCategory === (cat.slug || cat)
                ? "primary-text-color text-white"
                : "bg-white menu-text-color"
            }`}
          >
            {cat.name || cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid lg:grid-cols-4 md:gap-5 gap-2 md:grid-cols-3 grid-cols-2">
        {(selectedCategory === "all" ? products.slice(0, 8) : products).map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
    </section>
  );
}
