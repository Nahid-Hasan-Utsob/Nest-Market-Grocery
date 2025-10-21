import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500 text-base sm:text-lg">
        🛒 Your cart is empty!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left">
        Your Cart
      </h2>

      {/* Cart Container */}
      <div className="flex flex-col gap-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="w-full sm:w-40 flex-shrink-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-36 sm:h-40 object-cover rounded-xl"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Price: <span className="font-medium">${item.price}</span>
              </p>

              {/* Quantity Control */}
              <div className="flex justify-center sm:justify-start items-center gap-4 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition"
                >
                  −
                </button>
                <span className="text-base sm:text-lg font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition"
                >
                  +
                </button>
              </div>

              {/* Total & Remove */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">
                <p className="text-green-600 font-semibold text-base sm:text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-xs sm:text-sm underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Checkout */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-10">
        <p className="text-base sm:text-lg font-semibold">
          Total:{" "}
          <span className="text-green-600">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"
            />
          </svg>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
