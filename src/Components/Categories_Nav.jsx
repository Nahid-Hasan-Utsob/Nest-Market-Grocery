// Categories_Nav.jsx
import React, { useEffect, useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

export default function Categories_Nav() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center lg:py-5">
        <div className="flex items-center gap-4">
          {/* Browse All Categories Dropdown */}
          <div className="category-class w-[250px]">
            <li className="flex items-center text-white text-[13px] list-none">
              <div className="primary-bg-color rounded-md flex items-center pl-3 text-xl w-full">
                <TbCategory2 className="mr-2" />
                <select
                  defaultValue=""
                  className="select select-ghost w-full bg-transparent text-white"
                  onChange={(e) => navigate(`/shops?category=${e.target.value}`)}
                >
                  <option value="all">Browse All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          </div>

          {/* Menu */}
          <div className="menu-text-color gap-2 flex">
            <button className="flex items-center gap-1 font-extrabold quicksand-regular">
              <MdOutlineLocalFireDepartment className="text-xl primary-text-color" />
              Hot Deals
            </button>
            <NavLink className="text-base font-bold px-4 bg-red quicksand-regular" to="/">
              Home
            </NavLink>
            <NavLink className="text-base font-bold px-4 bg-red quicksand-regular" to="/about_us">
              About
            </NavLink>
            <NavLink className="text-base font-bold px-4 bg-red quicksand-regular" to="/shops">
              Shop
            </NavLink>
            <NavLink className="text-base font-bold px-4 bg-red quicksand-regular" to="/blogs">
              Blogs
            </NavLink>
            <NavLink className="text-base font-bold px-4 bg-red quicksand-regular" to="/contacts">
              Contacts
            </NavLink>
          </div>
        </div>

        {/* Support Info */}
        <div className="flex gap-3 items-center">
          <TfiHeadphoneAlt className="text-4xl menu-text-color" />
          <div className="leading-tight">
            <p className="text-[26px] font-bold primary-text-color quicksand-regular">
              +880-15189898790
            </p>
            <p className="text-[12px] lato-regular secondary-text-color">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </section>
  );
}
