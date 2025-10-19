import React from "react";
import Home_header from "./Home-Header/Home_hearder";
import NavBar from "./Home-Header/Navbar/NavBar";
import Sesrch_Fileds from "./Home-Header/Navbar/Sesrch_Fileds";
import Logo from "./Home-Header/Navbar/Logo";
import Categories_Nav from "../Components/Categories_Nav";
import { Outlet, useLoaderData } from "react-router-dom";
import Autoplay_Carousel from "./Home-Header/Home_Components/Carousel";
import Home_Featured from "./Home-Header/Home_Components/Home_Featured";
import Category_Product_Cards from "./Home-Header/Home_Components/Category_Product_Cards/Category_Product_Cards";


export default function Home() {
  const products = useLoaderData();
  const categories = [...new Set(products.products.map((p) => p.category))];


  return (
    <div>
      <Home_header></Home_header>
      <div className="flex items-center justify-between mt-8">
        <Logo></Logo>
        <Sesrch_Fileds></Sesrch_Fileds>
        <NavBar></NavBar>
      </div>
      <div className="mt-8">
        <Categories_Nav></Categories_Nav>
        <Autoplay_Carousel></Autoplay_Carousel>
    <div className="">
      
          <Home_Featured categories={categories} ></Home_Featured>
          <Category_Product_Cards></Category_Product_Cards>
    </div>
      </div>
    </div>
  );
}
