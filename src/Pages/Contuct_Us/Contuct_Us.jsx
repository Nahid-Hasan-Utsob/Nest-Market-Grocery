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
    <section className="lg:my-20 my-10">
      <div className="flex w-full items-center">
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <div className="text-[10px] sm:text-[15px] md:text-[17px] lg:text-[17px] w-full sm:w-[90%] mx-auto quicksand-regular">
            <p className="primary-text-color lg:text-2xl text-base font-bold my-3">
              How can help you ?
            </p>
            <p className="text-lg sm:text-[15px] md:text-[17px] lg:text-5xl font-bold">
              Your Partner for e-commerce grocery solution
            </p>
            <p className="pt-2 sm:pt-4 md:pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 my-10 w-1/2 quicksand-regular">
          {[
            { title: "01. Visit Feedback" },
            { title: "02. Employer Services" },
            { title: "03. Billing Inquiries" },
            { title: "04.General Inquiries" },
          ].map((item, i) => (
            <div key={i}>
              <Text
                text={item.title}
                className="pb-2 text-[12px] sm:text-[15px] md:text-3xl lg:text-3xl quicksand-regular font-bold menu-text-color"
              />
              <Text
                text={
                  "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros onec ac odio orci ultrices in.ellus eros donec ac odio orci ultrices in."
                }
                className="text-[10px] sm:text-[13px] md:text-base lg:text-base quicksand-regular font-medium secondary-text-color"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Common_Image img={map} className="w-full"></Common_Image>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          {locations.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl p-8 flex flex-col "
            >
              <h3 className="lg:text-2xl  font-semibold primary-text-color mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.address}</p>
              <p className="text-gray-600">{item.city}</p>
              <p className="text-gray-600 mt-2">
                Phone: <span className="font-medium">{item.phone}</span>
              </p>
              <p className="text-gray-600">
                Email: <span className="font-medium">{item.email}</span>
              </p>

              <button className="mt-5 primary-bg-color text-white px-10 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition w-fit">
                <FaMapLocation></FaMapLocation> View map
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
