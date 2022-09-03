"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.scss");
var DropDownWrapper = function (_a) {
    var action = _a.action, children = _a.children, className = _a.className;
    var _b = react_1.useState(false), showDropDown = _b[0], setshowDropDown = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        var checkIfClickedOutside = function (e) {
            if (showDropDown && ref.current && !ref.current.contains(e.target)) {
                setshowDropDown(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return function () {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [showDropDown]);
    return (React.createElement("div", { ref: ref, className: "drop-down-wrapper " + (className || "") },
        React.createElement("div", { onClick: function () { return setshowDropDown(!showDropDown); }, className: "drop-down-action" }, action),
        React.createElement("div", { className: "drop-down-content " + (showDropDown ? "show-drop-down" : "") + " " }, children)));
};
exports["default"] = DropDownWrapper;
