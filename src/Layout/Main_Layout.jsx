import { Outlet, useLocation } from "react-router-dom";
import Category_Nav from "../Components/Categories_Nav";
import Search_Cart_Nav from "../Components/Search_Cart_Nav";

export default function Main_Layout() {
  //hide component from pages
  const location = useLocation();

  // যেসব রুটে Category_Nav দেখাবে না
  const hideNav = ["/", ].includes(location.pathname);
   
  // /bashborad mane oi path er vitore jto path ache segulo thekeo hide kora
  // const hideNav = location.pathname.startsWith("/dashboard");


  return (
    <div className="lato-regular max-w-[1500px] mx-auto">
     {!hideNav && <Category_Nav></Category_Nav>}
     {!hideNav &&  <Search_Cart_Nav></Search_Cart_Nav>}

      <Outlet></Outlet>
     
    </div>
  );
}
