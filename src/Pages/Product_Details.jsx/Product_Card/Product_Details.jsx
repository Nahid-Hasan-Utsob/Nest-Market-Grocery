import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Product_Details() {
  const product = useLoaderData();

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold">Price: ${product.price}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
