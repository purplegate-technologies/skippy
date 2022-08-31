"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var react_1 = require("react");
var Button_1 = require("../button/Button");
var react_date_range_1 = require("react-date-range");
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var Dropdown_1 = require("../dropdown/Dropdown");
var ApplyFilterCheckIcon_1 = require("../../assets/svg/ApplyFilterCheckIcon");
var ClearFilter_1 = require("../../assets/svg/ClearFilter");
var CategoryFilter = function () {
    var _a = react_1.useState(false), fromState = _a[0], setFromState = _a[1];
    var _b = react_1.useState(false), toState = _b[0], setToRange = _b[1];
    var _c = react_1.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]), date = _c[0], setDate = _c[1];
    return (react_1["default"].createElement("div", { className: 'flex items-center flex-wrap justify-between gap-1 bg-[#F6F6F6] p-4' },
        react_1["default"].createElement(Dropdown_1["default"], { className: "p-4 border bg-red" }, " Select Category"),
        react_1["default"].createElement(Dropdown_1["default"], { className: "p-4 border" }, " Select Status"),
        react_1["default"].createElement("div", { className: "flex items-center border-[#949AB1] border rounded-md p-2 relative" },
            react_1["default"].createElement("p", null, "to"),
            react_1["default"].createElement("span", { className: 'cursor-pointer', onClick: function () { return setFromState(function (prev) { return !prev; }); } }, "-" + date_fns_1.format(date[0].startDate, 'MM/dd/yyyy')),
            fromState && (react_1["default"].createElement(react_date_range_1.DateRange, { editableDateInputs: true, moveRangeOnFirstSelection: false, onChange: function (i) { return setDate([i.selection]); }, ranges: date, className: "date absolute top-10 right-1 z-10" }))),
        react_1["default"].createElement("div", { className: "flex items-center border-[#949AB1] border rounded-md p-2 relative" },
            react_1["default"].createElement("p", null, "from"),
            react_1["default"].createElement("span", { className: 'cursor-pointer', onClick: function () { return setToRange(function (prev) { return !prev; }); } }, "-" + date_fns_1.format(date[0].endDate, 'MM/dd/yyyy')),
            toState && (react_1["default"].createElement(react_date_range_1.DateRange, { editableDateInputs: true, moveRangeOnFirstSelection: false, onChange: function (i) { return setDate([i.selection]); }, ranges: date, className: "date absolute top-10 z-10" }))),
        react_1["default"].createElement(Button_1["default"], { className: 'border-[#949AB1] bg-[#949AB1] text-white flex items-center', prefixIcon: react_1["default"].createElement(ApplyFilterCheckIcon_1["default"], null) }, "Apply Filter"),
        react_1["default"].createElement("div", { className: "border[#949AB1] border-2 rounded-[3px]" },
            react_1["default"].createElement(Button_1["default"], { className: 'border-[#949AB1] border rouned text-[#949AB1] bg-[#ffffff] flex items-center', prefixIcon: react_1["default"].createElement(ClearFilter_1["default"], null) }, "Clear Filter"))));
};
exports["default"] = CategoryFilter;
