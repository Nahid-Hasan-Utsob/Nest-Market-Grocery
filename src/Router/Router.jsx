import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import About_us from "../Pages/About_Us/About_us";
import Home from "../Home_Pages/Home";

import Wishlist from "../Pages/Wishlist/Wishlist";
import OrderTracking from "../Pages/Order_Tracking/OrderTracking";
import Account from "../Pages/My_Account/Account.JSX";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // children: [
        //   {
        
        //   }
        // ]
      },
      {
        path: "/about_us",
        element: <About_us></About_us>,
      },
      {
        path: "/account",
        element: <Account></Account>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },

      {
        path: "/tracking",
        element: <OrderTracking></OrderTracking>,
      },
    ],
  },
]);

export default router;
