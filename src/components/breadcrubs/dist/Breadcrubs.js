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
var react_router_dom_1 = require("react-router-dom");
// interface BreadcrumsbProps {
//   url?: string
//   name?: string
// }
// interface BreadcrumsbItemsProps {
//   breadcrumbsItems: Array<BreadcrumsbProps>
// }
// const bread: BreadcrumsbProps[] = [
//   {
//     name: 'Dashboard',
//     url: ''
//   },
//   {
//     name: 'Manage Users',
//     url: "manage-users"
//   },
//   {
//     name: 'User Detail',
//     url: "user-detail"
//   }
// ]
var BreadcrumbItems = function (_a) {
    var bread = _a.bread;
    var isLast = function (index) { return index === bread.length - 1; };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, bread.map(function (item, index) {
        var disabled = isLast(index);
        var name = item.name, url = item.url;
        return (react_1["default"].createElement("li", { key: index, className: "text-sm" },
            react_1["default"].createElement(react_router_dom_1.Link, { to: disabled ? '#' : "/" + url, className: "" + (disabled ? 'text-gray-600' : ' text-blue-600 hover:text-blue-700') }, name),
            react_1["default"].createElement("li", { className: 'inline' },
                react_1["default"].createElement("span", { className: (disabled && 'hidden invisible') + "text-gray-500 mx-2" }, ">"))));
    })));
};
var Breadcrubs = function (_a) {
    // https://heroicons.com/
    var bread = _a.bread;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", { className: "bg-grey-light rounded-md w-full" },
            react_1["default"].createElement("ol", { className: "list-reset flex text-sm" },
                react_1["default"].createElement(BreadcrumbItems, __assign({}, { bread: bread }))))));
};
exports["default"] = Breadcrubs;
