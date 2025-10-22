// Cart.jsx
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        {/* SVG Empty Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-32 h-32 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
        >
          <path
            d="M160 400a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm224 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32ZM64 64h48l48 256h256l32-160H128"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="text-gray-600 text-lg md:text-xl font-semibold mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-4">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <button
          onClick={() => (window.location.href = "/shops")}
          className="primary-bg-color hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm md:text-base transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto lg:mt-10 lg:p-4">
      <h2 className="lg:text-2xl text-[16px] md:text-[17px] font-semibold lg:mb-4 mb-2">
        Your Cart
      </h2>

      <div className="rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 menu-text-color">
            <tr>
              <th className="p-3 text-[12px] lg:text-[18px]">Product</th>
              <th className="p-3 text-[12px] lg:text-[18px] text-center">
                Price
              </th>
              <th className="p-3 text-[12px] lg:text-[18px] text-center">
                Quantity
              </th>
              <th className="p-3 text-[12px] lg:text-[18px] text-center">
                Total
              </th>
              <th className="p-3 text-[12px] lg:text-[18px] text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b  menu-text-color">
                <td className="lg:p-3 flex items-center lg:gap-3 gap-1">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <span className="text-xs lg:text-base">{item.title}</span>
                </td>
                <td className="lg:p-3 text-center text-[12px] lg:text-base">
                  ${item.price}
                </td>
                <td className="lg:p-3 text-center text-xs lg:text-base">
                  <div className="flex items-center justify-center lg:gap-2 gap-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 lg:px-3 bg-red-500 rounded text-white lg:text-lg text-[15px]"
                    >
                      -
                    </button>
                    <span className="border p-1 rounded-xs m-1 w-6 lg:w-8">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 lg:px-3 primary-bg-color rounded text-white lg:text-lg text-[15px]"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="lg:p-3 text-center text-[12px] lg:text-base">
                  <span className="primary-text-color font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </td>
                <td className="lg:p-3 text-center text-[12px] lg:text-base">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <MdDelete className="text-[24px] lg:text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* total price */}
      <div className="flex justify-end mt-6">
        <div className="text-right  menu-text-color">
          <p className="lg:text-lg text-[15px] font-semibold">
            Total:{" "}
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </p>
          <button className="primary-bg-color text-white lg:px-5 px-3 lg:py-2 py-1 my-3 text-[13px] rounded mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
