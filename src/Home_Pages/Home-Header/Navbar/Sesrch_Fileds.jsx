// Search_Fields.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search_Fields() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/shops?search=${encodeURIComponent(query.trim())}`);
      setQuery(""); // ✅ search-এর পরে input খালি করে দিচ্ছে
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section className="lg:w-full">
      <div className="w-full">
        <div className="flex lg:border-2 border-green-300 rounded-lg overflow-hidden lg:shadow-sm max-w-xl mx-auto lg:p-[2px] p-[1px] lg:h-12 h-8 w-full">
          {/* Search input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Search for products..."
            className="flex-grow lg:px-4 px-1 text-black focus:outline-none secondary-text-color text-[12px] w-[100px] placeholder:text-[10px] lg:text-[14px] lg:placeholder:text-[14px] placeholder:italic lato-regular lg:w-full"
            style={{ border: "none" }}
          />

          <button
            onClick={handleSearch}
            className="primary-bg-color text-white font-semibold quicksand-regular lg:text-[14px] text-[12px] lg:py-3 py-1 lg:px-5 px-2 focus:outline-none rounded-md flex items-center"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
