import React from "react";
import Text from "../../Components/Text";
import Common_Image from "../../Components/Common_Image";
import map from "../../assets/Icon-Images/448.png";
import { FaMapLocation } from "react-icons/fa6";

export default function Contuct_Us() {
  const locations = [
    {
      title: "Office",
      address: "265 North Michigan Avenue, Suite 810",
      city: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@skysea.com",
    },
    {
      title: "Studio",
      address: "265 North Michigan Avenue, Suite 810",
      city: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@skysea.com",
    },
    {
      title: "Shop",
      address: "265 North Michigan Avenue, Suite 810",
      city: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@skysea.com",
    },
  ];

  return (
    <section className="lg:my-20 my-10 px-3 sm:px-5 md:px-10">
      {/* ----------- Top Section ------------- */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-8">
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <div className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-[17px] w-full sm:w-[95%] mx-auto quicksand-regular">
            <p className="primary-text-color lg:text-2xl text-base font-bold my-3">
              How can help you ?
            </p>
            <p className="text-lg sm:text-[13px] md:text-[15px] lg:text-5xl font-bold leading-snug">
              Your Partner for e-commerce grocery solution
            </p>
            <p className="pt-2 sm:pt-4 md:pt-6 text-[10px] sm:text-[13px] md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <p className="text-[10px] sm:text-[13px] md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Right Side Text Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2 quicksand-regular">
          {[
            { title: "01. Visit Feedback" },
            { title: "02. Employer Services" },
            { title: "03. Billing Inquiries" },
            { title: "04. General Inquiries" },
          ].map((item, i) => (
            <div key={i}>
              <Text
                text={item.title}
                className="pb-2 text-[10px] sm:text-[13px] md:text-[15px] lg:text-3xl quicksand-regular font-bold menu-text-color"
              />
              <Text
                text={
                  "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in."
                }
                className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-base quicksand-regular font-medium secondary-text-color"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ----------- Map Section ------------- */}
      <div className="my-10">
        <Common_Image img={map} className="w-full" />
      </div>

      {/* ----------- Location Cards ------------- */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 md:gap-10 my-10">
        {locations.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl p-5 sm:p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-[13px] sm:text-[15px] md:text-[15px] lg:text-2xl font-semibold primary-text-color mb-4">
              {item.title}
            </h3>
            <p className="secondary-text-color text-[10px] sm:text-[13px] md:text-[15px]">
              {item.address}
            </p>
            <p className="secondary-text-color text-[10px] sm:text-[13px] md:text-[15px]">
              {item.city}
            </p>
            <p className="secondary-text-color mt-2 text-[10px] sm:text-[13px] md:text-[15px]">
              Phone: <span className="font-medium">{item.phone}</span>
            </p>
            <p className="secondary-text-color text-[10px] sm:text-[13px] md:text-[15px]">
              Email: <span className="font-medium">{item.email}</span>
            </p>

            <button className="mt-5 primary-bg-color text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition w-fit text-[10px] sm:text-[13px] md:text-[15px]">
              <FaMapLocation /> View map
            </button>
          </div>
        ))}
      </div>

      {/* ----------- Contact Form ------------- */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* Left Side - Form */}
        <div>
          <p className="text-green-600 font-semibold text-[10px] sm:text-[13px] md:text-[15px]">
            Contact form
          </p>
          <h2 className="text-[15px] sm:text-[17px] md:text-[17px] lg:text-3xl font-bold text-gray-800 mt-1">
            Drop Us a Line
          </h2>
          <p className="text-gray-500 text-[10px] sm:text-[13px] md:text-[15px] mt-1">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-[10px] sm:text-[13px] md:text-[15px]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-[10px] sm:text-[13px] md:text-[15px]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-[10px] sm:text-[13px] md:text-[15px]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-[10px] sm:text-[13px] md:text-[15px]"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-[10px] sm:text-[13px] md:text-[15px]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#0b2447] hover:bg-[#19376d] text-white font-semibold py-3 px-6 rounded-lg transition text-[10px] sm:text-[13px] md:text-[15px]"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg"
            alt="Contact"
            className="rounded-2xl w-full max-w-sm object-cover shadow-lg"
          />
        </div>
      </section>
    </section>
  );
}
