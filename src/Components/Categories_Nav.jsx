import React from "react";
import { TbCategory2 } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Categories_Nav() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="category-class w-[250px]">
            <li className="flex items-center text-white text-[13px]  ">
              <div className="primary-bg-color rounded-md flex items-center pl-3 text-xl">
                <TbCategory2></TbCategory2>
                <select defaultValue="" className="select select-ghost ">
                  <option className="" selected>
                    Browse All Categories
                  </option>
                  <option className="">Bangla</option>
                  <option className="">Bangla</option>
                </select>
              </div>
            </li>
          </div>
          <div className="menu-text-color  gap-2 flex ">
            <button className="flex items-center gap-1  quicksand-regular font-extrabold">
              <MdOutlineLocalFireDepartment className="text-xl primary-text-color "></MdOutlineLocalFireDepartment>
              Hot Deals
            </button>

            <NavLink
              className={"text-base quicksand-regular  font-bold px-4 bg-red"}
              to={"/"}
            >
              Home
            </NavLink>

            <NavLink
              className={"text-base quicksand-regular  font-bold px-4 bg-red"}
              to={"/about_us"}
            >
              About
            </NavLink>
            <NavLink
              className={"text-base quicksand-regular  font-bold px-4 bg-red"}
              to={"/Shops"}
            >
              Shop
            </NavLink>
            <NavLink
              className={"text-base quicksand-regular  font-bold px-4 bg-red"}
              to={"/blogs"}
            >
              Blogs
            </NavLink>
            <NavLink
              className={"text-base quicksand-regular  font-bold px-4 bg-red"}
              to={"/contacts"}
            >
              Contacts
            </NavLink>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <TfiHeadphoneAlt className="text-4xl menu-text-color"></TfiHeadphoneAlt>
          </div>
          <div className="leading-tight">
            <p className="text-[26px] font-bold primary-text-color quicksand-regular">+880-15189898790</p>
            <p className="text-[12px] lato-regular secondary-text-color">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </section>
  );
}
