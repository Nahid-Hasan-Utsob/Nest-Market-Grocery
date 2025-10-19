import { FaArrowRightLong } from "react-icons/fa6";


// src/components/Button.jsx
export default function Card_Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2  text-white font-semibold rounded-md hover:bg-red-600 transition-all text-xs primary-bg-color quicksand-regular duration-300 ${className} flex items-center gap-2`}
    >
      {text}
      <FaArrowRightLong></FaArrowRightLong>
    </button>
  );
}
