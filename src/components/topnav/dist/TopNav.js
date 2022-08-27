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
var BellIcon_1 = require("../../assets/svg/BellIcon");
var NavImgIcon_1 = require("../../assets/svg/NavImgIcon");
var SearchIcon_1 = require("../../assets/svg/SearchIcon");
var SettingIcon_1 = require("../../assets/svg/SettingIcon");
var Dropdown_1 = require("../dropdown/Dropdown");
// import Input from '../input/Input'
require("./topnav.css");
var renderNotificationItem = function (item, index) { return (react_1["default"].createElement("div", { className: "notification-item", key: index },
    react_1["default"].createElement("i", { className: item.icon }),
    react_1["default"].createElement("span", null, item.heading),
    react_1["default"].createElement("span", null, item.content))); };
var notification = [
    {
        headding: "Notification",
        content: "my name os lala and i notify you"
    },
    {
        headding: "Notification",
        content: "my name os lala and i notify you"
    },
    {
        headding: "Notification",
        content: "my name os lala and i notify you"
    },
];
var current_user = {
    display_name: "Gerald Kachi",
    image: ""
    // image: user_image
};
var renderUserToggle = function (user) { return (react_1["default"].createElement("div", { className: "topnav__right-user" },
    react_1["default"].createElement("div", { className: "topnav__right-user__image" },
        react_1["default"].createElement("img", { src: user.image, alt: "users" })),
    react_1["default"].createElement("div", { className: "topnav__right-user__name" }, user.display_name))); };
var TopNav = function () {
    var location = react_router_dom_1.useLocation();
    var activepath = location.pathname;
    var _a = react_1.useState(''), query = _a[0], setQuery = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "topnav" },
            react_1["default"].createElement("div", { className: "topnav__search text-2xl" },
                react_1["default"].createElement("input", { type: "text", name: "search", placeholder: "Search...", value: query, onChange: function (e) { return setQuery(e.target.value); } }),
                react_1["default"].createElement("i", null,
                    react_1["default"].createElement(SearchIcon_1["default"], null))),
            react_1["default"].createElement("div", { className: "topnav__right" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "#", className: "topnav__right-item" },
                    react_1["default"].createElement(Dropdown_1["default"], { icon: "bx bx-bell", badge: "12", contentData: notification, renderItems: function (item, index) { return renderNotificationItem(item, index); }, renderFooter: function () { return react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "View All"); } },
                        react_1["default"].createElement(BellIcon_1["default"], null))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/settings", className: "topnav__right-item " + (activepath === "/settings" && "bg-[#516CF5]") },
                    react_1["default"].createElement(SettingIcon_1["default"], __assign({}, { activepath: activepath }))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/user-details", className: "topnav__right-item " },
                    react_1["default"].createElement(NavImgIcon_1["default"], null))))));
};
exports["default"] = TopNav;
