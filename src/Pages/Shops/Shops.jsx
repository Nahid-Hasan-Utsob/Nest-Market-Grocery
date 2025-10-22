// Shops.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";
import ProductCard from "../../Home_Pages/Home-Header/Home_Components/Home_Popular/ProductCard/ProductCard";
import BackButton from "../../Components/BackButton";

export default function Shops() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  // Fetch categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((cat) =>
          typeof cat === "string" ? { slug: cat, name: cat } : cat
        );
        setCategories(formatted);
      });
  }, []);

  // Fetch products
  useEffect(() => {
    let url = "";

    if (searchQuery) {
      // 1. If 'searchQuery' is present, the search API runs.
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
        searchQuery
      )}`;
    } else if (selectedCategory === "all") {
      // 2. If 'searchQuery' is NOT present, we check for 'all' products.
      url = `https://dummyjson.com/products`;
    } else {
      // 3. If 'searchQuery' is NOT present, we use the selected category.
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (catSlug) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());

      // Update the category
      if (catSlug !== "all") {
        params.set("category", catSlug);
      } else {
        params.delete("category");
      }

      // 💡 FIX: When a category is clicked, remove the 'search' parameter
      // so the useEffect logic can switch from 'search' to 'category' filtering.
      params.delete("search");

      return params;
    });
  };

  return (
    <section>
      <div></div>
      <div className="flex flex-col md:flex-row min-h-[100vh] lg:my-10 ">
        {/* Mobile dropdown */}
        <div className="md:hidden w-2/3  mb-4 ">
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

        {/* Desktop sidebar */}
        <aside className="hidden md:block w-[20%] p-4 border-r border-gray-400 quicksand-regular">
          <h2 className="text-xl font-bold mb-4">
            Categories ({categories.length})
          </h2>
          <ul className="space-y-2 font-semibold">
            <li
              className={`lg:px-4 px-2 lg:py-2 py-1 lg:text-base text-[13px] rounded-md cursor-pointer ${
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
                className={`lg:px-4 p-1 rounded-md capitalize lg:text-base text-[12px] cursor-pointer ${
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

        {/* Products section */}
        <main className="w-full md:w-4/5 lg:pl-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 my-5">
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
    </section>
  );
}
