import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Home_Pages/Home-Header/Navbar/Logo";
import NavBar from "../Home_Pages/Home-Header/Navbar/NavBar";

export default function Search_Cart_Nav() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search navigation
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const queryString = new URLSearchParams({ search: searchQuery.trim() }).toString();
      navigate(`/shops?${queryString}`);
      setSearchQuery(""); // Search করার পর input খালি হবে
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section>
      <div className="flex items-center justify-between mt-8">
        <Logo />
        <div className="min-w-1/2">
          <div className="lg:flex border-2 border-green-300 rounded-lg overflow-hidden shadow-sm max-w-xl mx-auto p-[2px] h-12 hidden w-full">
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleEnter}
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
        <NavBar />
      </div>
    </section>
  );
}
