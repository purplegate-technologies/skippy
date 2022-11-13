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
var SearchBar_1 = require("../../components/support/SearchBar");
var Table_1 = require("../../components/Table/Table");
var react_router_dom_1 = require("react-router-dom");
var User_ManagementApiSlcie_1 = require("../../features/UserManagement/User ManagementApiSlcie");
var column = [
    {
        name: 'App (ID)',
        key: 'id'
    },
    {
        name: 'User TYPE',
        key: 'email'
    },
    {
        name: 'Registration  Date',
        key: 'date'
    },
    {
        name: 'Last Active time',
        key: 'location'
    },
    {
        name: 'Status',
        key: 'five'
    },
    {
        name: 'Action',
        key: 'six'
    }
];
var data = [
    {
        one: 'data1',
        two: 'data2',
        three: 'data',
        four: 'data4'
    },
    {
        one: 'data1',
        two: 'data2',
        // three: 'data3',
        four: 'data4'
    },
    {
        one: 'data1',
        two: 'data2',
        three: 'data3',
        four: 'data4'
    }
];
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
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item._id),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.type),
    React.createElement("td", null, item.email),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.createdAt),
    React.createElement("td", null,
        React.createElement("span", { className: "py-1 px-4 " + ((item === null || item === void 0 ? void 0 : item.status) === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full') }, item === null || item === void 0 ? void 0 : item.status)),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.total_orders),
    React.createElement("td", null,
        React.createElement(react_router_dom_1.Link, { to: "/user-details", className: 'underline text-blue-600' }, item.location)))); };
var Administrators = function () {
    var _a;
    var _b = User_ManagementApiSlcie_1.useGetAdministratorsQuery(), data = _b.data, isLoading = _b.isLoading, isFetching = _b.isFetching;
    // console.log(data?.data?.docs, 'useGetAdministratorsQuery')
    var navigate = react_router_dom_1.useNavigate();
    return (React.createElement("div", null,
        React.createElement("div", { className: "card" },
            React.createElement(SearchBar_1["default"], { HeaderTitle: 'Administrators', text: "Create Admin", onClick: function () { return navigate('/settings'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "" },
                        React.createElement("div", { className: "card__body" },
                            React.createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isLoading ? [] : (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.docs, renderBody: function (item, index) { return renderBody(item, index); } }, { isFetching: isFetching }, { isLoading: isLoading })),
                            React.createElement("div", { className: "p-8 bg-other-ghost" }))))))));
};
exports["default"] = Administrators;
