import React from "react";
import { useLoaderData } from "react-router-dom";
import Product_Common_Componant from "../Product_Common_Componant/Product_Common_Componant";
import Product_RIght_section from "../Product_Common_Componant/Product_RIght_section";

export default function Product_Details() {
  const product = useLoaderData();

  return (
    <div >
            <div className="flex my-3 justify-between">
          <div>
                <Product_RIght_section product={product}></Product_RIght_section>
          </div>
            </div>
              {/* <div>
                <Project_Des_Viewer_Main></Project_Des_Viewer_Main>
              </div> */}
    </div>
  );
}
