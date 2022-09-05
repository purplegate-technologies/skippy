"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var SearchBar_1 = require("../../components/support/SearchBar");
var Table_1 = require("../../components/Table/Table");
var react_router_dom_1 = require("react-router-dom");
var advert_list_json_1 = require("../../assets/jsonData/advert-list.json");
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
    react_1["default"].createElement("td", null, item.id),
    react_1["default"].createElement("td", null, item.name),
    react_1["default"].createElement("td", null, item.email),
    react_1["default"].createElement("td", null, item.phone),
    react_1["default"].createElement("td", null, item.total_orders),
    react_1["default"].createElement("td", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/user-details", className: 'underline text-blue-600' }, item.location)))); };
var Administrators = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "card" },
            react_1["default"].createElement(SearchBar_1["default"], { HeaderTitle: 'Administrators', text: "Create Admin", onClick: function () { return navigate('/settings'); }, prefixIcon: react_1["default"].createElement(CreateAdsPlus_1["default"], null) }),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-12" },
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement("div", { className: "card__body" },
                            react_1["default"].createElement(Table_1["default"], { limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: advert_list_json_1["default"], renderBody: function (item, index) { return renderBody(item, index); } }))))))));
};
exports["default"] = Administrators;
