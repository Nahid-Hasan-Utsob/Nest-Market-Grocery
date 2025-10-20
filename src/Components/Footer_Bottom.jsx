import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import {
  MdOutgoingMail,
  MdOutlineLocationOn,
  MdOutlineMail,
} from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

import Logo from "../Home_Pages/Home-Header/Navbar/Logo";
import visa from "../assets/Icon-Images/img (2).png";

export default function Footer_Bottom() {
  return (
    <footer className="bg-white">
      <div className="lg:px-6 lg:py-10 py-5 grid lg:grid-cols-6 grid-cols-3 lg:gap-8  gap-2">
        {/* Logo & Info */}
        <div>
          <div className="flex items-center lg:gap-2 lg:mb-8 mb-3">
            <Logo></Logo>
          </div>
          <p className="lg:text-base text-[13px] lg:mb-4 mb-2 menu-text-color  lato-regular">
            Make your Breakfast Healthy and Easy
          </p>

          <ul className="lg:text-[15px] text-[12px] lato-regular flex menu-text-color  flex-col lg:gap-4 gap-2">
            <li className="flex items-start lg:gap-2 gap-1 ">
              <MdOutlineLocationOn className="primary-text-color mt-1 text-xl hidden md:block " />
              Rangpur-5450, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineLocalPhone className="primary-text-color hidden md:block" />
              <a
                href="tel:+91540025124553"
                className="hover:primary-text-color"
              >
                (+91)-540-025-124553
              </a>
            </li>
            <li className="flex items-center gap-2 ">
              <MdOutlineMail className="primary-text-color hidden md:block" />
              <a
                href="mailto:sale@Nest.com"
                className="hover:primary-text-color"
              >
                nahid@Gmail
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="primary-text-color hidden md:block" />
              Hours 10:00 - 18:00, Mon - Sat
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold lg:text-2xl text-[17px] menu-text-color quicksand-regular mb-4">
            Company
          </h3>
          <ul className="lg:text-[15px]  text-[12px] lato-regular flex menu-text-color  flex-col lg:gap-4 gap-2">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold lg:text-2xl text-[17px] menu-text-color quicksand-regular mb-4">
            Account
          </h3>
          <ul className="lg:text-[15px]  text-[12px] lato-regular flex menu-text-color  flex-col lg:gap-4 gap-2 ">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare Products</li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold lg:text-2xl text-[17px] menu-text-color quicksand-regular mb-4">
            Corporate
          </h3>
          <ul className="lg:text-[15px]  text-[12px] lato-regular flex menu-text-color  flex-col lg:gap-4 gap-2">
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold lg:text-2xl text-[17px] menu-text-color quicksand-regular mb-4">
            Popular
          </h3>
          <ul className="lg:text-[15px]  text-[12px] lato-regular flex menu-text-color  flex-col lg:gap-4 gap-2">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold lg:text-2xl text-[17px] menu-text-color quicksand-regular mb-4">
            Install App
          </h3>
          <ul className="lg :text-[15px] text-[12px] lato-regular flex menu-text-color  flex-col lg:">
            gap-2 <li>From App Store or Google Play</li>
            <div>
              <img
                className="w-full mb-4"
                src="https://www.vhv.rs/dpng/d/410-4108569_get-it-on-google-play-logo-png-vector.png"
                alt=""
              />
            </div>
            <li>Secured Payment Gateways</li>
            <div>
              <img className="w-full mt-4" src={visa} alt="" />
            </div>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t py-6 mt-4 primary-text-color text-sm">
        <div className="px-6 flex flex-row justify-between items-center gap-4">
          <div>
            <p className="md:font-base text-[10px] lato-regular font-bold secondary-text-color mt-2">
              © 2025, Nest – WordPress Ecommerce Template. <br />
              All rights reserved
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="lg:flex gap-3 items-center hidden ">
              <div>
                <MdOutlineLocalPhone className="text-4xl menu-text-color"></MdOutlineLocalPhone>
              </div>
              <div className="leading-tight">
                <p className="text-[26px] font-bold primary-text-color quicksand-regular">
                  15189898790
                </p>
                <p className="text-[12px] lato-regular secondary-text-color">
                  Working 8:00 - 22:00
                </p>
              </div>
            </div>
            <div className="lg:flex gap-5 items-center hidden">
              <div>
                <MdOutlineLocalPhone className="text-4xl menu-text-color"></MdOutlineLocalPhone>
              </div>
              <div className="leading-tight">
                <p className="text-[26px] font-bold primary-text-color quicksand-regular">
                  +880-151898
                </p>
                <p className="text-[12px] lato-regular secondary-text-color">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <div className="flex items-center gap-4 quicksand-regular font-bold">
              <p className="md:text-base text-[10px]">Follow Us </p>
              <div className="flex gap-3 primary-text-color text-lg">
                <FaFacebookF className="cursor-pointer hover:text-green-800  text-white primary-bg-color p-1 lg:text-2xl text-[17px] rounded-full" />
                <FaTwitter className="cursor-pointer hover:text-greelg:n-800 text-  text-[12px]white primary-bg-color p-1 lg:text-2xl text-[lg:17px] gap-2 rounded-full" />
                <FaWhatsapp className="cursor-pointer hover:text-greelg:n-800 text-  text-[12px]white primary-bg-color p-1 lg:text-2xl text-[lg:17px] gap-2 rounded-full" />
                <FaInstagram className="cursor-pointer hover:text-greelg:n-800 text-  text-[12px]white primary-bg-color p-1 lg:text-2xl text-[lg:17px] gap-2 rounded-full" />
              </div>
            </div>
            lg:{" "}
            <di v>
              text-[12px]{" "}
              <p className="md:font-base text-[8px] lato-regulg:lar f gap-2ont-bold secondary-text-color mt-2">
                Up to 15% discount on your first subscribe
              </p>
            </di>
          </div>
        </div>
      </div>
    </footer>
  );
}
