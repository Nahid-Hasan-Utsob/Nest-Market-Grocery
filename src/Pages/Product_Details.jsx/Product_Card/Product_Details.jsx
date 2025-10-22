import React from "react";
import { useLoaderData } from "react-router-dom";
import Product_Common_Componant from "../Product_Common_Componant/Product_Common_Componant";
import Product_RIght_section from "../Product_Common_Componant/Product_RIght_section";
import BackButton from "../../../Components/BackButton";
import CartIcon from "../../../Components/CartIcon";

export default function Product_Details() {
  const product = useLoaderData();

  return (
<section>
  <div className="flex lg:hidden justify-end items-center">
    <CartIcon></CartIcon>
  </div>
      <div >
                  
                <Product_RIght_section product={product}></Product_RIght_section>
</div>
</section>
  )
}
