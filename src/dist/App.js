"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./components/layout/Layout");
var ScrollTop_1 = require("./components/scrollTop/ScrollTop");
var RequiredAuth_1 = require("./features/auth/RequiredAuth");
var ActivityLog_1 = require("./pages/ActivityLog/ActivityLog");
var Advertisements_1 = require("./pages/Advertisements/Advertisements");
var Dashboard_1 = require("./pages/dashboard/Dashboard");
var Finance_1 = require("./pages/Finance/Finance");
var LogIn_1 = require("./pages/login/LogIn");
var ManageUsers_1 = require("./pages/ManageUsers/ManageUsers");
var Traffic_1 = require("./pages/Traffic/Traffic");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var UserDetails_1 = require("./pages/Userdetails/UserDetails");
var Settings_1 = require("./pages/Settings/Settings");
var CreateAderts_1 = require("./pages/createAderts/CreateAderts");
var CreateVoucher_1 = require("./pages/create-voucher/CreateVoucher");
var FinanceDetails_1 = require("./pages/finance-details/FinanceDetails");
var AdvertisementDetails_1 = require("./pages/advertisements-details/AdvertisementDetails");
var InviteUser_1 = require("./pages/InviteUser/InviteUser");
var ResetPassword_1 = require("./pages/login/ResetPassword");
var ActivityOverview_1 = require("./pages/ActivityOverview/ActivityOverview");
function App() {
    // const  token  = useAppSelector(selectCurrentToken)
    return (React.createElement(React.Fragment, null,
        React.createElement(react_toastify_1.ToastContainer, null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "reset", element: React.createElement(ResetPassword_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "login", element: React.createElement(LogIn_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(react_router_dom_1.Navigate, { to: '/' }) }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(RequiredAuth_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { path: "create-adverts", element: React.createElement(CreateAderts_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "edit-advert/:id", element: React.createElement(CreateAderts_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "create-vouchers", element: React.createElement(CreateVoucher_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "edit-voucher/:id", element: React.createElement(CreateVoucher_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Layout_1["default"], null) },
                    React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Dashboard_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "advertisements", element: React.createElement(Advertisements_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "advertisements/:id", element: React.createElement(AdvertisementDetails_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "traffic", element: React.createElement(Traffic_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "finance", element: React.createElement(Finance_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "finance/:id", element: React.createElement(FinanceDetails_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "manage-users", element: React.createElement(ManageUsers_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "invite-users", element: React.createElement(InviteUser_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "activity-log", element: React.createElement(ActivityLog_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "user-details", element: React.createElement(UserDetails_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "activity-overview", element: React.createElement(ActivityOverview_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: "settings", element: React.createElement(Settings_1["default"], null) })))),
        React.createElement(ScrollTop_1["default"], null)));
}
exports["default"] = App;
