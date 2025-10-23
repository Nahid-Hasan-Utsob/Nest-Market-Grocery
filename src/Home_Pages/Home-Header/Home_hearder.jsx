import React from "react";
import { Link } from "react-router-dom";

export default function Home_header() {
  const header_links = (
    <>
      <li className="flex items-center secondary-text-color text-[13px] pr-3 h-3">
        <Link to="/">About Us</Link>
      </li>
      <li className="flex items-center secondary-text-color text-[13px] pr-3 h-3">
        <Link to="/">My Account</Link>
      </li>
      <li className="flex items-center secondary-text-color text-[13px] pr-3 h-3">
        <Link to="/">Wishlist</Link>
      </li>
      <li className="flex items-center secondary-text-color text-[13px] pr-4">
        <Link to="/">Order Tracking</Link>
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
    <section className="hidden lg:block">
      <div className=" lg:pt-5 justify-around flex">
          <div className="navbar-start ju  hidden lg:flex">{header_links}</div>
        <div className="navbar-center hidden lg:flex">
          <p className="text-[14px] primary-text-color font-bold">
            100% Secure delivery without contacting the courier
          </p>
        </div>
        <div className="navbar-end  hidden lg:flex">{call_us}</div>
      </div>
    </section>
  );
}
