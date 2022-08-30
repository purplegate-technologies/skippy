"use strict";
exports.__esModule = true;
require("./styles.css");
// const btnEnableDisable = !props.disabled ? "btn-enable" : "btn-disabled";
var Button = function (_a) {
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
    var _b = _a.className, className = _b === void 0 ? "bg-[#516CF5]" : _b, _c = _a.prefixIcon, prefixIcon = _c === void 0 ? null : _c, _d = _a.text, text = _d === void 0 ? "" : _d, _e = _a.children, children = _e === void 0 ? null : _e, _f = _a.suffixIcon, suffixIcon = _f === void 0 ? null : _f, _g = _a.size, size = _g === void 0 ? "medium" : _g, _h = _a.theme, theme = _h === void 0 ? "primary" : _h, _j = _a.loading, loading = _j === void 0 ? false : _j, _k = _a.disabled, disabled = _k === void 0 ? false : _k, _l = _a.type, type = _l === void 0 ? "button" : _l, _m = _a.onClick, onClick = _m === void 0 ? function () { } : _m;
    // const computedClasses = ["Button rounded-lg bg-[#516CF5] text-white py-[10px] px-5 rounded-[3px]"]
    var computedClasses = ["Button rounded-lg  text-white py-[10px] rounded-[3px]"];
    if (size === "full") {
        computedClasses.push("font-semibold h-10 lg:h-16 w-full px-10");
    }
    else if (size === "large") {
        computedClasses.push("font-semibold h-10 lg:h-16 min-w-[10rem] md:min-w-[15rem] px-10");
    }
    else if (size === "small") {
        computedClasses.push("h-8 lg:h-10");
    }
    else {
        computedClasses.push("h-10 px-[1.1875rem] min-w-[8.75rem]");
    }
    if (disabled)
        computedClasses.push("opacity-50 cursor-not-allowed bg-[#434343]");
    if (theme === "primary") {
        computedClasses.push("bg-primary text-white dark:bg-dark_light_blue");
    }
    else if (theme === "alternate") {
        computedClasses.push("bg-primary-light text-primary");
    }
    else if (theme === "outline") {
        computedClasses.push("border-primary border-2 text-primary");
    }
    if (disabled || loading) {
        computedClasses.push("bg-opacity-50 ");
    }
    computedClasses.push(className);
    return (React.createElement("button", { type: type, disabled: disabled || loading, 
        // className={`${className} flex  py-[10px] px-5 rounded-[3px]  text-white hover:text-grey`}
        className: "text-white " + computedClasses.join(" "), onClick: onClick },
        prefixIcon && (React.createElement(React.Fragment, null,
            " ",
            prefixIcon,
            "\u00A0\u00A0\u00A0")),
        loading && "...",
        text,
        " ",
        children,
        " ",
        suffixIcon));
};
exports["default"] = Button;
