// BackButton.jsx
import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

export default function BackButton({ className }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // previous page
  };

  return (
    <button
      onClick={handleBack}
      className={` p-2 bg-gray-200 primary-text-color rounded-full hover:bg-[#3bb77e] transition flex items-center mt-8    justify-center ${className || ""}`}
    >
      <IoChevronBackCircleOutline className="text-2xl hover:text-white" />
    </button>
  );
}
