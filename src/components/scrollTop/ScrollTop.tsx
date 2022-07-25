
// import { useState } from "react";
// import { Link } from "react-router-dom";

// // import { FaChevronUp } from "react-icons/fa";
// function ScrollTop() {
//   const [visible, setVisible] = useState(false);
//   window.addEventListener("scroll", () => {
//     window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
//   });
//   return (
//     <div className="scrolltop bg-red-600" style={{background:''}}>
//       <Link to="#" className={`${visible ? "scroll" : "scroll-none"}`}>
//         {/* <FaChevronUp /> */}
//         <i className="bx bx-chevron-up bg-red-600">Go Up</i>
//       </Link>
//     </div>
//   );
// }

// export default ScrollTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;