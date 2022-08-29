"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var SearchIconSupport_1 = require("../../assets/svg/SearchIconSupport");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var Button_1 = require("../button/Button");
var SearchBar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "Search" : _c, HeaderTitle = _a.HeaderTitle, text = _a.text, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.to, to = _e === void 0 ? "" : _e, onClick = _a.onClick, _f = _a.prefixIcon, prefixIcon = _f === void 0 ? null : _f;
    return (react_1["default"].createElement("div", { className: 'mb-5' },
        react_1["default"].createElement("div", { className: 'flex flex-1 items-center justify-between mb-7 ml-3 mr-5' },
            react_1["default"].createElement("h2", { className: 'font-semibold' }, HeaderTitle),
            react_1["default"].createElement(ThreeVdots_1["default"], { className: 'cursor-pointer' })),
        react_1["default"].createElement("form", { className: "flex items-center gap-4 justify-between " + className },
            react_1["default"].createElement("div", { className: 'h-[45px] flex w-full items-center bg-[#f1f3fb] rounded-[10px]' },
                react_1["default"].createElement(SearchIconSupport_1["default"], { className: "ml-[.9rem] lg:ml-[1.3125rem] lg:mr-4 mr-3" }),
                react_1["default"].createElement("input", { className: "flex-1 flex text-xs w-full lg:text-lg md:text-sm", type: "text", placeholder: placeholder })),
            react_1["default"].createElement(Button_1["default"], __assign({ to: to, text: text }, { children: children }, { prefixIcon: prefixIcon }, { className: "ml-auto px-16 bg-[#516CF5] inline-flex " }, { onClick: onClick })))));
};
exports["default"] = SearchBar;
