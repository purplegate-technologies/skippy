"use strict";
exports.__esModule = true;
require("./sidebar.css");
var react_router_dom_1 = require("react-router-dom");
// import logo from "../../assets/images/logo.png"
// import sidebar_items from "../../assets/JsonData/sidebar_routes.json"
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var DashboardIcon_1 = require("../../assets/svg/DashboardIcon");
var LogoutIcon_1 = require("../../assets/svg/LogoutIcon");
var TrafficIcon_1 = require("../../assets/svg/TrafficIcon");
var AdvertisementsIcon_1 = require("../../assets/svg/AdvertisementsIcon");
var FinanceIcon_1 = require("../../assets/svg/FinanceIcon");
var ManageUsersIcon_1 = require("../../assets/svg/ManageUsersIcon");
var ActivityLogIcon_1 = require("../../assets/svg/ActivityLogIcon");
var hooks_1 = require("../../app/hooks");
var authSlice_1 = require("../../features/auth/authSlice");
var react_toastify_1 = require("react-toastify");
var sidebar_items = [
    {
        "display_name": "Dashboard",
        "route": "/"
    },
    {
        "display_name": "Advertisements",
        "route": "/advertisements"
    },
    {
        "display_name": "Traffic",
        "route": "/traffic"
    },
    {
        "display_name": "Finance",
        "route": "/finance"
    },
    {
        "display_name": "Manage Users",
        "route": "/manage-users"
    },
    {
        "display_name": "ActivityLog",
        "route": "/activity-log"
    },
];
var iconArr = [
    React.createElement(DashboardIcon_1["default"], null),
    React.createElement(AdvertisementsIcon_1["default"], null),
    React.createElement(TrafficIcon_1["default"], null),
    React.createElement(FinanceIcon_1["default"], null),
    React.createElement(ManageUsersIcon_1["default"], null),
    React.createElement(ActivityLogIcon_1["default"], null),
];
var Sidebar = function () {
    var location = react_router_dom_1.useLocation();
    var user = hooks_1.useAppSelector(authSlice_1.selectAuth).user;
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var handleLogout = function () {
        dispatch(authSlice_1.logout());
        react_toastify_1.toast.success("User Logged Out Successfully");
        navigate('/login');
    };
    return (React.createElement("div", { className: "sidebar" },
        React.createElement("div", null,
            React.createElement("div", { className: "sidebar__logo" },
                React.createElement(react_router_dom_1.Link, { to: "/" },
                    React.createElement(CompanyLogo_1["default"], null)),
                React.createElement(react_router_dom_1.Link, { to: "/", style: { textDecoration: 'none', color: 'black', marginLeft: '8px' } }, "Admin@skippy.com"),
                React.createElement("div", { className: 'h-10' })),
            React.createElement("div", { className: "btwNav" }, sidebar_items.map(function (item, i) {
                var activeItem = sidebar_items.findIndex(function (item) { return item.route === location.pathname; });
                return (React.createElement(react_router_dom_1.Link, { to: item.route, key: i },
                    React.createElement("div", { className: "sidebar__item" },
                        React.createElement("div", { className: "sidebar__item-inner " + (i === activeItem && "active") },
                            React.createElement("i", null, iconArr[i]),
                            React.createElement("span", null, item.display_name)))));
            }))),
        React.createElement("div", { className: "logout", onClick: function () { return handleLogout(); } },
            React.createElement(react_router_dom_1.Link, { to: "" },
                React.createElement(LogoutIcon_1["default"], null),
                React.createElement("span", { className: "logout" }, "Logout")))));
};
exports["default"] = Sidebar;
