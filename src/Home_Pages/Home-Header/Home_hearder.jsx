import React from "react";
import { Link } from "react-router-dom";

export default function Home_header() {
  const header_links = (
    <>
      <li className="flex items-center secondary-text-color text-[13px] border-r-2 border-gray-300 pr-3 h-3">
        <Link to="/about_us">About Us</Link>
      </li>
      <li className="flex items-center secondary-text-color text-[13px] border-r-2 border-gray-300 pr-3 h-3">
        <Link to="/account">My Account</Link>
      </li>
      <li className="flex items-center secondary-text-color text-[13px] border-r-2 border-gray-300 pr-3 h-3">
        <Link to="/wishlist">Wishlist</Link>
      </li>
      <li className="flex items-center secondary-text-color text-[13px] pr-4">
        <Link to="/tracking">Order Tracking</Link>
      </li>
    </>
  );

  const call_us = (
    <>
      <li className="flex items-center secondary-text-color text-[13px] border-r-2 border-gray-300 pr-3 h-3">
        Need help? Call Us:
        <span className="primary-text-color">+880-1518989870</span>
      </li>

      <li className="flex items-center secondary-text-color text-[13px] border-r-2 border-gray-300  h-3">
        <div className="w-[100px]">
          <select defaultValue="Pick a font" className="select select-ghost ">
            <option className="text-black" selected>
              English
            </option>
            <option className="text-black">Bangla</option>
          </select>
        </div>
      </li>

      <li className="flex items-center secondary-text-color text-[13px] ">
        <div className="w-[80px]">
          <select defaultValue="Pick a font" className="select select-ghost ">
            <option className="text-black" selected>
              BDT
            </option>
            <option className="text-black">INR</option>
          </select>
        </div>
      </li>

    </>
  );

  return (
    <section>
      <div className="navbar bg-base-100 pt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul className="flex gap-3 items-center">{header_links}</ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <p className="text-[14px] primary-text-color font-bold">
            100% Secure delivery without contacting the courier
          </p>
        </div>
        <div className="navbar-end">{call_us}</div>
      </div>
    </section>
  );
}
