import { Outlet, useLocation } from "react-router-dom";
import Category_Nav from "../Components/Categories_Nav";
import Search_Cart_Nav from "../Components/Search_Cart_Nav";
import Footer_Banner from "../Components/Footer_Banner";
import Footer_Bottom from "../Components/Footer_Bottom";
import Footer_Best_card from "../Components/Footer_Best_card";
import ScrollToTop from "./ScrollToTop";
import BackButton from "../Components/BackButton";
import DrawerSsidebar from "../Components/MobileDrawer";
import MobileDrawer from "../Components/MobileDrawer";
import Search_Fields from "../Home_Pages/Home-Header/Navbar/Sesrch_Fileds";


export default function Main_Layout() {
  //hide component from pages
  const location = useLocation();

  // যেসব রুটে Category_Nav দেখাবে না
  const hideNav = ["/", ].includes(location.pathname);
   
  // /bashborad mane oi path er vitore jto path ache segulo thekeo hide kora
  // const hideNav = location.pathname.startsWith("/dashboard");


  return (
 
    <div className="lato-regular max-w-[1550px] mx-auto lg:px-0 px-[7px]">
      
   <div className="hidden lg:block">
      {!hideNav && <Category_Nav></Category_Nav>}

     {!hideNav &&  <Search_Cart_Nav></Search_Cart_Nav>}

      
     
     </div>
     <div className="flex items-center justify-between lg:hidden my-5">
      <MobileDrawer></MobileDrawer>
      <Search_Fields></Search_Fields>
     </div>
<div>

         <ScrollToTop></ScrollToTop>
        <Outlet></Outlet>
</div>
    <div>
       <Footer_Banner></Footer_Banner>
       <Footer_Best_card></Footer_Best_card>
     <Footer_Bottom></Footer_Bottom>
    </div>
    </div>
  );
}
