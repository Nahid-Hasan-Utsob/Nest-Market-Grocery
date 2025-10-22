import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../../Home_Pages/Home-Header/Home_Components/Home_Popular/ProductCard/ProductCard";

export default function Shops() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get category from URL
  const selectedCategory = searchParams.get("category") || "all";

  // Fetch categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Fetch products when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    } else if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }
  }, [selectedCategory]);

  // Change category
  const handleCategoryClick = (catSlug) => {
    setSearchParams({ category: catSlug });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] my-20">
      {/* Left Sidebar */}
      <aside className="w-[20%]  p-4 border-b md:border-b-0 md:border-r border-gray-400 quicksand-regular">
        <h2 className="text-xl font-bold mb-4">
          Categories ({categories.length})
        </h2>
        <ul className="space-y-2 font-semibold">
          <li
            className={`lg:px-4 px-2 lg:py-2 py-1 lg:text-base text-[13px] rounded-md ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-white menu-text-color"
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            All Products
          </li>

          {categories.map((cat) => (
            <li
              key={cat.slug}
             className={` lg:px-4 p-1 rounded-md capitalize  lg:text-base text-[12px]     ${
              selectedCategory === (cat.slug || cat)
                ? "primary-text-color text-white"
                : "bg-white menu-text-color "
              }`}
              onClick={() => handleCategoryClick(cat.slug)}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Products Section */}
      <main className="w-full  lg:p-4 grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2 md:gap-5 gap-2">
        {products.length === 0 ? (
          <p className="secondary-text-color col-span-full">No products found.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </main>
    </div>
  );
}
