import { FaArrowRightLong } from "react-icons/fa6";


// src/components/Button.jsx
export default function Card_Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`md:px-5 md:py-2 px-2 py-1  text-white font-semibold rounded-md hover:bg-red-600 transition-all md:text-xs text-[8px] primary-bg-color quicksand-regular duration-300 ${className} flex items-center md:gap-2 gap-1`}
    >
      {text}
      <FaArrowRightLong></FaArrowRightLong>
    </button>
  );
}
