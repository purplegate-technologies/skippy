import {useState, useRef, useEffect, ReactNode} from "react";
import "./style.scss";

interface DropDownWrapperTypes {
    action: ReactNode | string,
    children: ReactNode,
    className: string
}

const DropDownWrapper = ({action, children, className}: DropDownWrapperTypes) => {
  const [showDropDown, setshowDropDown] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setshowDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <div ref={ref} className={`drop-down-wrapper ${className || ""}`}>
      <div
        onClick={() => setshowDropDown(!showDropDown)}
        className="drop-down-action"
      >
        {action}
      </div>
      <div
        className={`drop-down-content ${showDropDown ? "show-drop-down" : ""} `}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownWrapper;
