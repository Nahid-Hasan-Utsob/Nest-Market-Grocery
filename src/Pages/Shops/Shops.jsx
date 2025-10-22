import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";
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

  // Mobile dropdown toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedCategoryName =
    selectedCategory === "all"
      ? "All Products"
      : categories.find((cat) => cat.slug === selectedCategory)?.name ||
        selectedCategory;

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] my-10">

      {/* Mobile Dropdown for categories */}
      <div className="md:hidden w-2/3 px-4 mb-4 z-50">
        <div className="category-class w-full">
          <li className="flex items-center text-white text-[13px] list-none">
            <div className="primary-bg-color rounded-md flex items-center pl-3 w-full">
              <TbCategory2 className="text-xl mr-2" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryClick(e.target.value)}
                className="select select-ghost w-full bg-transparent text-white"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </li>
        </div>
      </div>

      {/* Left Sidebar for desktop */}
      <aside className="hidden md:block w-[20%] p-4 border-r border-gray-400 quicksand-regular">
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
              className={`lg:px-4 p-1 rounded-md capitalize lg:text-base text-[12px] ${
                selectedCategory === cat.slug
                  ? "primary-text-color text-white"
                  : "bg-white menu-text-color"
              }`}
              onClick={() => handleCategoryClick(cat.slug)}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Products Section */}
      <main className="w-full md:w-4/5 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2">
        {products.length === 0 ? (
          <p className="secondary-text-color col-span-full">
            No products found.
          </p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </main>
    </div>
  );
}
