
import { useState } from "react";
import { Link } from "react-router-dom";

// import { FaChevronUp } from "react-icons/fa";
function ScrollTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="scrolltop" style={{background:'blue'}}>
      <Link to="#" className={`${visible ? "scroll-block" : "scroll-none"}`}>
        {/* <FaChevronUp /> */}
        <i className="bx bx-chevron-up"></i>
      </Link>
    </div>
  );
}

export default ScrollTop;