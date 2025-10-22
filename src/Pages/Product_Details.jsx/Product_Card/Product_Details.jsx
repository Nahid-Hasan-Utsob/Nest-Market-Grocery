import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Product_Common_Componant from "../Product_Common_Componant/Product_Common_Componant";
import Product_RIght_section from "../Product_Common_Componant/Product_RIght_section";
import BackButton from "../../../Components/BackButton";
import CartIcon from "../../../Components/CartIcon";
import { Bars } from "react-loader-spinner";

export default function Product_Details() {
  const loaderData = useLoaderData();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // যদি useLoaderData async data return করে
    setLoading(true);
    setTimeout(() => { // simulate loading, fetch korte hole timeout na, fetch use korbe
      setProduct(loaderData);
      setLoading(false);
    }, 500); // 0.5s delay just for loader effect
  }, [loaderData]);

  return (
    <section>
      <div className="flex lg:hidden justify-end items-center mb-4">
        <CartIcon />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[400px]">
          <Bars
            height="30"
            width="30"
            color="#3bb77e"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Product_RIght_section product={product} />
        </div>
      )}
    </section>
  );
}
