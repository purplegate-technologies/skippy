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
var Table_1 = require("../../components/Table/Table");
// import advertlist from "../../assets/jsonData/advert-list.json"
require("./activity.css");
var SearchBar_1 = require("../../components/support/SearchBar");
var react_router_dom_1 = require("react-router-dom");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var User_ManagementApiSlcie_1 = require("../../features/UserManagement/User ManagementApiSlcie");
var ActivityLog = function () {
    var id = react_router_dom_1.useParams();
    var navigate = react_router_dom_1.useNavigate();
    var _a = User_ManagementApiSlcie_1.useGetAppUserQuery(id), data = _a.data, isFetching = _a.isFetching, isLoading = _a.isLoading;
    var customerTableHead = [
        'User',
        'User TYPE',
        'Activity',
        'Date & Time',
        'Action',
    ];
    var renderHead = function (item, index) { return react_1["default"].createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (react_1["default"].createElement("tr", { key: index },
        react_1["default"].createElement("td", null, item.id),
        react_1["default"].createElement("td", null, item.name),
        react_1["default"].createElement("td", null, item.email),
        react_1["default"].createElement("td", null, item.phone),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/activity-overview", className: "underline text-blue-600" }, item.location)))); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "card" },
            react_1["default"].createElement(SearchBar_1["default"], { HeaderTitle: 'Activity Log', placeholder: 'Search Activity', text: "Invite User", onClick: function () { return navigate('/invite-users'); }, prefixIcon: react_1["default"].createElement(CreateAdsPlus_1["default"], null) }),
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement("div", { className: "card__body" },
                            react_1["default"].createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isLoading ? [] : [], renderBody: function (item, index) { return renderBody(item, index); } }, { isFetching: isFetching }, { isLoading: isLoading })))))))));
};
exports["default"] = ActivityLog;
