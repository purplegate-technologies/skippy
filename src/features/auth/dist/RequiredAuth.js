"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../app/hooks");
var authSlice_1 = require("./authSlice");
var RequiredAuth = function () {
    // const token = localStorage.getItem("user" )
    var token = hooks_1.useAppSelector(authSlice_1.selectCurrentToken);
    var location = react_router_dom_1.useLocation();
    return token ? React.createElement(react_router_dom_1.Outlet, null) : React.createElement(react_router_dom_1.Navigate, { to: "/login", state: { from: location }, replace: true });
};
exports["default"] = RequiredAuth;
