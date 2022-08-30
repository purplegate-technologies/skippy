"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var Table_1 = require("../../components/Table/Table");
var advert_list_json_1 = require("../../assets/jsonData/advert-list.json");
var SearchBar_1 = require("../../components/support/SearchBar");
var react_router_dom_1 = require("react-router-dom");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var Finance = function () {
    var navigate = react_router_dom_1.useNavigate();
    var customerTableHead = [
        '',
        'name',
        'email',
        'phone',
        'total orders',
        'total spend',
        'location'
    ];
    var renderHead = function (item, index) { return react_1["default"].createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (react_1["default"].createElement("tr", { key: index },
        react_1["default"].createElement("td", null, item.id),
        react_1["default"].createElement("td", null, item.name),
        react_1["default"].createElement("td", null, item.email),
        react_1["default"].createElement("td", null, item.phone),
        react_1["default"].createElement("td", null, item.total_orders),
        react_1["default"].createElement("td", null, item.total_spend),
        react_1["default"].createElement("td", null, item.location))); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(StatusCards_1["default"], null),
        react_1["default"].createElement("div", { className: "card" },
            react_1["default"].createElement(SearchBar_1["default"], { className: '', HeaderTitle: 'All Vouchers', placeholder: 'Enter Brand/Voucher Name', text: "Create\u00A0Voucher", onClick: function () { return navigate('/finance-details'); }, prefixIcon: react_1["default"].createElement(CreateAdsPlus_1["default"], null) }),
            react_1["default"].createElement(CategoryFilter_1["default"], null),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-12" },
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement("div", { className: "card__body" },
                            react_1["default"].createElement(Table_1["default"], { limit: '10', headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: advert_list_json_1["default"], renderBody: function (item, index) { return renderBody(item, index); } }))))))));
};
exports["default"] = Finance;
