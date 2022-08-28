import { Link } from "react-router-dom";
import "./styles.css"
interface IProps {
  prefixIcon?: React.ReactNode;
  text?: string;
  className?: string;
  children?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  size?: "small" | "medium" | "large" | "full";
  theme?: "primary" | "alternate" | "outline";
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string
}

  // const btnEnableDisable = !props.disabled ? "btn-enable" : "btn-disabled";

const Button = ({
    className = "",
    prefixIcon = null,
    text = "",
    children = null,
    suffixIcon = null,
    size = "medium",
    theme = "primary",
    loading = false,
    disabled = false,
    type = "button",
    onClick = () => {},
  }: IProps) => {

  //   const getBgColor = () => {
  //     if (disabled) {
  //         // return colors.grey
  //         return {color: 'grey'}
  //     }
  //     if (primary) {
  //         // return colors.primary
  //         return {color: 'blue'}
  //     }
  //     if (danger) {
  //         // return colors.danger
  //         return { color: 'red'}
  //     }
  //     if(secondary) {
  //         // return colors.secondary
  //         return { color: 'graylight'}
  //     }
  // }

  // const computedClasses = ["Button rounded-lg bg-[#516CF5] text-white py-[10px] px-5 rounded-[3px]"]
  const computedClasses = ["Button rounded-lg  text-white py-[10px] px-5 rounded-[3px]"]

  if (size === "full") {
      computedClasses.push("font-semibold h-10 lg:h-16 w-full px-10")
  } else if (size === "large") {
      computedClasses.push("font-semibold h-10 lg:h-16 min-w-[10rem] md:min-w-[15rem] px-10")
  } else if (size === "small") {
      computedClasses.push("h-8 lg:h-10")
  } else {
      computedClasses.push("h-10 px-[1.1875rem] min-w-[8.75rem]")
  }
  if (disabled)
      computedClasses.push("opacity-50 cursor-not-allowed bg-[#434343]")

  if (theme === "primary") {
      computedClasses.push("bg-primary text-white dark:bg-dark_light_blue")
  } else if (theme === "alternate") {
      computedClasses.push("bg-primary-light text-primary")
  } else if (theme === "outline") {
      computedClasses.push("border-primary border-2 text-primary")
  }
  if (disabled || loading) {
      computedClasses.push("bg-opacity-50 ")
  }
  computedClasses.push(className)


  const SIZES = {
    small: 'p-1 min-w-120',
    medium: 'p-2 min-w-152',
    large: 'p-3 min-w-196',
    full: 'p-3 min-w-196 w-full'
  }


    return (
      <button
        type={type}
        disabled={disabled || loading}
        // className={`${className} flex  py-[10px] px-5 rounded-[3px] bg-[#516CF5] text-white hover:text-grey`}
        className={`text-white ${computedClasses.join(" ")}`}
        onClick={onClick}
      >
        {loading ? "..." : prefixIcon}
        {text}
        {" "}{children}{ " "}
        {suffixIcon}
      </button>
    );
  };

  export default Button;
