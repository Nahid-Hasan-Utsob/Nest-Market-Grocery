import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaShoppingBag, FaBlog, FaPhone, FaUser } from "react-icons/fa";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* 🔘 Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white primary-bg-color rounded-md shadow-md"
      >
        <FaBars className="text-base" />
      </button>

      {/* 🌑 Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 🧭 Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 primary-bg-color shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4 p-4 text-white lato-regular">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/shops"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 "
          >
            <FaShoppingBag /> Shop
          </Link>

          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 "
          >
            <FaBlog /> Blog
          </Link>

          <Link
            to="/contacts"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 "
          >
            <FaPhone /> Contact
          </Link>
          <Link
            to="/about_us"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 "
          >
            <FaPhone /> About Us
          </Link>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 "
          >
            <FaUser /> Login
          </Link>
        </nav>
      </div>
    </div>
  );
}
