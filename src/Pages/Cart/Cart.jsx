import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { MdDelete } from "react-icons/md";


export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        🛒 Your cart is empty!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 lg:p-4">
      <h2 className="lg:text-2xl text-[16px] md:text-[17px] font-semibold lg:mb-4 mb-2">Your Cart</h2>

      <div className="  rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-[12px] lg:text-[18px] ">Product</th>
              <th className="p-3  text-[12px] lg:text-[18px] text-center">Price</th>
              <th className="p-3  text-[12px] lg:text-[18px] text-center ">Quantity</th>
              <th className="p-3  text-[12px] lg:text-[18px]  text-center ">Total</th>
              <th className="p-3 text-[12px] lg:text-[18px]  text-center">Action</th>
            </tr>
          </thead>

          <tbody className="">
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="lg:p-3  flex items-center lg:gap-3 ga ">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <span className="text-xs lg:text-base">{item.title}</span>
                </td>
                <td className="lg:p-3  text-center text-[12px] lg:text-base ">${item.price}</td>
                <td className="lg:p-3  text-center text-xs lg:text-base">
                  <div className="flex items-center justify-center lg:gap-2 ga">
                    <button
                      onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 lg:px-3 bg-red-500 rounded text-white lg:text-lg text-[15px]"
                    >
                      -
                    </button>
                    <span className="border p-1 rounded-xs m-1 w-6 lg:w-8">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 lg:px-3 bg-green-500 rounded text-white lg:text-lg text-[15px]"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="lg:p-3  text-center text-[12px] lg:text-base">
               <span className="primary-text-color font-bold">   ${(item.price * item.quantity).toFixed(2)}</span>
                </td>
                <td className="lg:p-3  text-center text-[12px] lg:text-base ">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
              <MdDelete className="text-[24px] lg:text-3xl"></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* total price */}
      <div className="flex justify-end mt-6">
        <div className="text-right">
          <p className="lg:text-lg text-[15px] font-semibold">
            Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </p>
          <button className="bg-green-500 text-white lg:px-5 px-3 lg:py-2 py-1 my-3 text-[13px] rounded mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
