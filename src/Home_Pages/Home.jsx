import React from "react";
import Home_header from "./Home-Header/Home_hearder";
import NavBar from "./Home-Header/Navbar/NavBar";
import Sesrch_Fileds from "./Home-Header/Navbar/Sesrch_Fileds";
import Logo from "./Home-Header/Navbar/Logo";
import Categories_Nav from "../Components/Categories_Nav";
import { Outlet, ScrollRestoration, useLoaderData } from "react-router-dom";
import Autoplay_Carousel from "./Home-Header/Home_Components/Carousel";
import Home_Featured from "./Home-Header/Home_Components/Home_Featured";
import Category_Product_Cards from "./Home-Header/Home_Components/Category_Product_Cards/Category_Product_Cards";
import Home_Banner from "./Home-Header/Home_Components/Home_Banner";
import Home_Popular_main from "./Home-Header/Home_Components/Home_Popular/Home_P_Cards/Home_P_Cards";
import Random_Main_Page from "./Home-Header/Home_Components/Home_Random_Cards/Random_Main_Page";
import Random_Tending_Main from "./Home-Header/Home_Components/Random_Tranding_Product/Random_Tending_Main";


export default function Home() {
  const products = useLoaderData();
  const categories = [...new Set(products.products.map((p) => p.category))];


  return (
    <div>
      <Home_header></Home_header>
      <div className="flex items-center justify-between mt-8">
        <Logo></Logo>
       <div className="hidden md:block">
         <Sesrch_Fileds></Sesrch_Fileds>
       </div>
        <div>
          <NavBar></NavBar>
        </div>
      </div>
      <div className="mt-8">
       <div  className="hidden md:block">
         <Categories_Nav></Categories_Nav>
       </div>
        <Autoplay_Carousel></Autoplay_Carousel>
    <div className="">

         <div className="hidden md:block">
           <Home_Featured categories={categories} ></Home_Featured>
          <Category_Product_Cards></Category_Product_Cards>
         </div>
          <Home_Banner></Home_Banner>
          <Home_Popular_main></Home_Popular_main>
          <Random_Main_Page></Random_Main_Page>
          <Random_Tending_Main></Random_Tending_Main>
    
    </div>
      </div>
    </div>
  );
}
