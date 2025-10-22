// Search_Fields.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search_Fields() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/shops?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section className="min-w-1/2">
      <div className="w-full">
        <div className="flex border-2 border-green-300 rounded-lg overflow-hidden shadow-sm max-w-xl mx-auto p-[2px] h-12 w-full">
          {/* Search input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Search for products..."
            className="flex-grow px-4 text-black focus:outline-none secondary-text-color text-[14px] placeholder:text-[14px] placeholder:italic lato-regular w-full"
            style={{ border: "none" }}
          />

          <button
            onClick={handleSearch}
            className="primary-bg-color text-white font-semibold quicksand-regular text-[14px] py-3 px-5 focus:outline-none rounded-md flex items-center"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
