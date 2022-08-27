"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
// import { useAppSelector } from '../../app/hooks'
// import { selectCurrentToken } from './authSlice'
var RequiredAuth = function () {
    var token = localStorage.getItem("user");
    // const  token  = useAppSelector(selectCurrentToken)
    var location = react_router_dom_1.useLocation();
    return token ? React.createElement(react_router_dom_1.Outlet, null) : React.createElement(react_router_dom_1.Navigate, { to: "/login", state: { from: location }, replace: true });
};
exports["default"] = RequiredAuth;
