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
import { MdOutgoingMail, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

import Logo from "../Home_Pages/Home-Header/Navbar/Logo";

export default function Footer_Bottom() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className=" mx-auto px-6 py-10 grid md:grid-cols-6 sm:grid-cols-2 gap-8 ">
        {/* Logo & Info */}
        <div>
          <div className="flex items-center gap-2 mb-8">
           <Logo></Logo>
          </div>
          <p className="text-base mb-4 menu-text-color  lato-regular">
            Make your Breakfast Healthy and Easy
          </p>

          <ul className="text-[15px] lato-regular flex menu-text-color  flex-col gap-4">
            <li className="flex items-start gap-2  ">
              <MdOutlineLocationOn className="primary-text-color mt-1 text-xl " />
            Rangpur-5450, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineLocalPhone className="primary-text-color" />
              <a href="tel:+91540025124553" className="hover:primary-text-color">
                (+91)-540-025-124553
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMail className="primary-text-color" />
              <a href="mailto:sale@Nest.com" className="hover:primary-text-color">
               Mdnahidhassan@Gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="primary-text-color" />
              Hours 10:00 - 18:00, Mon - Sat
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Company</h3>
          <ul className="text-[15px] lato-regular flex menu-text-color  flex-col gap-4">
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
          <h3 className="font-semibold mb-3 text-lg">Account</h3>
          <ul className="text-[15px] lato-regular flex menu-text-color  flex-col gap-4 ">
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
          <h3 className="font-semibold mb-3 text-lg">Corporate</h3>
          <ul className="text-[15px] lato-regular flex menu-text-color  flex-col gap-4">
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
          <h3 className="font-semibold mb-3 text-lg">Popular</h3>
          <ul className="text-[15px] lato-regular flex menu-text-color  flex-col gap-4">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t py-6 mt-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-base lato-regular font-bold secondary-text-color mt-2">
              © 2025, Nest – WordPress Ecommerce Template. <br />
              All rights reserved
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-3 items-center">
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
            <div className="flex gap-5 items-center">
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
              <p>Follow Us </p>
              <div className="flex gap-3 primary-text-color text-lg">
                <FaFacebookF className="cursor-pointer hover:text-green-800  text-white primary-bg-color p-1 text-2xl rounded-full" />
                <FaTwitter className="cursor-pointer hover:text-green-800 text-white primary-bg-color p-1 text-2xl rounded-full" />
                <FaWhatsapp className="cursor-pointer hover:text-green-800 text-white primary-bg-color p-1 text-2xl rounded-full" />
                <FaInstagram className="cursor-pointer hover:text-green-800 text-white primary-bg-color p-1 text-2xl rounded-full" />
              </div>
            </div>
            <div>
              <p className="font-base lato-regular font-bold secondary-text-color mt-2">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
