import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

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
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="p-3 text-center">${item.price}</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3 text-center">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
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
          <p className="text-lg font-semibold">
            Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </p>
          <button className="bg-green-500 text-white px-5 py-2 rounded mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
