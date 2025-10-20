import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef({}); // প্রতিটি route-এর scroll position save করতে

  // scroll position save করা
  useEffect(() => {
    return () => {
      positions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  useEffect(() => {
    if (navigationType === "PUSH") {
      // নতুন page এ top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (navigationType === "POP") {
      // back/forward → আগের scroll position restore
      const prevY = positions.current[pathname] || 0;
      window.scrollTo({ top: prevY, left: 0, behavior: "smooth" });
    }
  }, [pathname, navigationType]);

  return null;
}
