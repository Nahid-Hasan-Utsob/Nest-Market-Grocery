import React from "react";
import Home_header from "./Home-Header/Home_hearder";
import NavBar from "./Home-Header/Navbar/NavBar";
import Sesrch_Fileds from "./Home-Header/Navbar/Sesrch_Fileds";
import Logo from "./Home-Header/Navbar/Logo";
import Categories_Nav from "../Components/Categories_Nav";
import { Outlet } from "react-router-dom";

export default function Home() {
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

      </div>
    </div>
  );
}
