"use strict";
exports.__esModule = true;
var react_1 = require("react");
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
var renderHead = function (item, index) { return react_1["default"].createElement("th", { key: index }, item); };
var renderBody = function (item, index) { return (react_1["default"].createElement("tr", { key: index },
    react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.appId),
    react_1["default"].createElement("td", null, item.name),
    react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.createdAt),
    react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.updatedAt),
    react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.status),
    react_1["default"].createElement("td", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/manage-users/" + (item === null || item === void 0 ? void 0 : item._id), className: 'underline text-blue-600' }, "View Details")))); };
var AppUsers = function () {
    var _a, _b;
    var navigate = react_router_dom_1.useNavigate();
    var _c = User_ManagementApiSlcie_1.useGetAppUsersQuery(), data = _c.data, isFetching = _c.isFetching, isLoading = _c.isLoading;
    console.log((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.docs, "App Users");
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "card" },
            react_1["default"].createElement(SearchBar_1["default"], { HeaderTitle: 'App Users', text: "Invite User", onClick: function () { return navigate('/invite-users'); }, prefixIcon: react_1["default"].createElement(CreateAdsPlus_1["default"], null) }),
            react_1["default"].createElement(CategoryFilter_1["default"], null),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-12" },
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement("div", { className: "card__body" },
                            react_1["default"].createElement(Table_1["default"], { limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, 
                                // bodyData={advertlist}
                                bodyData: isLoading ? [] : (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.docs, renderBody: function (item, index) { return renderBody(item, index); } }))))))));
};
exports["default"] = AppUsers;
