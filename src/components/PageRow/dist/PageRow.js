"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useClickOutside_1 = require("../../app/useClickOutside");
var PageRow = function (_a) {
    var rowSize = _a.rowSize, rowSizeChange = _a.rowSizeChange, reset = _a.reset;
    var size = [5, 10, 20];
    var _b = react_1.useState(false), dropdown = _b[0], setDropdown = _b[1];
    return (React.createElement(useClickOutside_1.ClickOutside, { onclickoutside: function () { return setDropdown(false); } },
        React.createElement("div", { className: "relative" },
            React.createElement("div", { className: "flex gap-2 items-center cursor-pointer" },
                React.createElement("div", { onClick: function () { return setDropdown(!dropdown); }, className: "rounded border border-grey-beau px-2 py-1 flex items-center gap-1 cursor-pointer" },
                    React.createElement("p", null, rowSize),
                    React.createElement("p", { className: "text-black" }, dropdown ? (
                    // <AIarrowup1Bol width={18} height={18} />
                    React.createElement(React.Fragment, null, "up")) : (
                    // <AIarrowdownbol width={18} height={18} />
                    React.createElement(React.Fragment, null, "down")))),
                React.createElement("p", { className: "text-md" }, "Rows/page")),
            React.createElement("div", { className: "\n\t\t\t\tw-12\n\t\t\t\tflex\n\t\t\t\tflex-col\n\t\t\t\tgap-4\n\t\t\t\titems-center\n\t\t\t\tabsolute\n\t\t\t\tz-10\n\t\t\t\tbg-white\n\t\t\t\tpy-2\n\t\t\t\tmt-1\n\t\t\t\tbottom-10\n\t\t\t\trounded\n\t\t\t\tborder\n\t\t\t\tborder-grey-beau\n\t\t\t\t" + (dropdown ? 'block' : 'hidden') }, size &&
                size.map(function (item) { return (React.createElement("p", { key: item, onClick: function () {
                        rowSizeChange && rowSizeChange(item);
                        setDropdown(false);
                        reset();
                    }, className: "hover:bg-white-azure rounded-lg cursor-pointer py-1 px-4" }, item)); })))));
};
exports["default"] = PageRow;
