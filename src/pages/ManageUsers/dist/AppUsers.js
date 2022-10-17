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
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var SearchBar_1 = require("../../components/support/SearchBar");
var Table_1 = require("../../components/Table/Table");
var react_router_dom_1 = require("react-router-dom");
var User_ManagementApiSlcie_1 = require("../../features/UserManagement/User ManagementApiSlcie");
var customerTableHead = [
    'App (ID)',
    'User TYPE',
    'Registration  Date',
    'Last Active time',
    'Status',
    'Action',
];
var renderHead = function (item, index) { return React.createElement("th", { key: index }, item); };
var renderBody = function (item, index) { return (React.createElement("tr", { key: index },
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.appId),
    React.createElement("td", null, item.name),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.createdAt),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.updatedAt),
    React.createElement("td", null,
        React.createElement("span", { className: "py-1 px-4 " + ((item === null || item === void 0 ? void 0 : item.status) === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full') }, item === null || item === void 0 ? void 0 : item.status)),
    React.createElement("td", null,
        React.createElement(react_router_dom_1.Link, { to: "/manage-users/" + (item === null || item === void 0 ? void 0 : item._id), className: 'underline text-blue-600 whitespace-nowrap' }, "View Details")))); };
var AppUsers = function () {
    var _a;
    var navigate = react_router_dom_1.useNavigate();
    var _b = User_ManagementApiSlcie_1.useGetAppUsersQuery(), data = _b.data, isFetching = _b.isFetching, isLoading = _b.isLoading;
    return (React.createElement("div", null,
        React.createElement("div", { className: "card" },
            React.createElement(SearchBar_1["default"], { HeaderTitle: 'App Users', text: "Invite User", onClick: function () { return navigate('/invite-users'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
            React.createElement(CategoryFilter_1["default"], null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "" },
                        React.createElement("div", { className: "card__body" },
                            React.createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isLoading ? [] : (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.docs, renderBody: function (item, index) { return renderBody(item, index); } }, { isFetching: isFetching }, { isLoading: isLoading })))))))));
};
exports["default"] = AppUsers;
