import { createBrowserRouter } from "react-router";
import About_us from "../Pages/About_Us/About_us";
import Home from "../Home_Pages/Home";

import Wishlist from "../Pages/Wishlist/Wishlist";
import OrderTracking from "../Pages/Order_Tracking/OrderTracking";
import Account from "../Pages/My_Account/Account.JSX";
import Contuct_Us from "../Pages/Contuct_Us/Contuct_Us";
import Shops from "../Pages/Shops/Shops";
import Blogs from "../Pages/Blogs/Blogs";
import Main_Layout from "../Layout/Main_Layout";
import Cart from "../Pages/Cart/Cart";
import Product_Details from "../Pages/Product_Details.jsx/Product_Card/Product_Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    handle: { scroll: false } ,
    children: [
      {
        path: "/",
        loader: async () => {
          const res = await fetch("https://dummyjson.com/products");
          const data = await res.json();
          
          return data;
          
        },
        handle: { scroll: false } ,
        element: <Home></Home>,
      },
      
      {
        path: "/product/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://dummyjson.com/products/${params.id}`
          );
          const data = await res.json();
          return data;
        },
        handle: { scroll: false } ,
        element: <Product_Details></Product_Details>,
        
      },
      {
        path: "/about_us",
        element: <About_us></About_us>,
      },

      {
        path: "/contacts",
        element: <Contuct_Us></Contuct_Us>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/Shops",
        element: <Shops></Shops>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
        
    ],
  },
]);

export default router;
