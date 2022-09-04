"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var advert_list_json_1 = require("../../assets/jsonData/advert-list.json");
var Table_1 = require("../../components/Table/Table");
var SearchBar_1 = require("../../components/support/SearchBar");
// import Input from '../../components/input/Input'
require("./styles.css");
var react_router_dom_1 = require("react-router-dom");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var ManageUsers = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState("Administrators"), tabIndex = _a[0], setTabIndex = _a[1];
    var customerTableHead = [
        '',
        'name',
        'email',
        'phone',
        'total orders',
        'total spend',
        'location'
    ];
    var renderHead = function (item, index) { return React.createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (React.createElement("tr", { key: index },
        React.createElement("td", null, item.id),
        React.createElement("td", null, item.name),
        React.createElement("td", null, item.email),
        React.createElement("td", null, item.phone),
        React.createElement("td", null, item.total_orders),
        React.createElement("td", null, item.total_spend),
        React.createElement("td", null, item.location))); };
    return (React.createElement("div", null,
        React.createElement(StatusCards_1["default"], null),
        React.createElement("div", { className: "" },
            React.createElement("div", { className: " flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] relative" },
                React.createElement("p", { className: "tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Administrators" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]"), onClick: function () { return setTabIndex("Administrators"); } },
                    "Administrators",
                    " "),
                React.createElement("p", { className: "tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "App Users" && " text-[#516CF5] border-b-2 border-b-[#516CF5]"), onClick: function () { return setTabIndex("App Users"); } }, "App Users")),
            tabIndex !== "Administrators" && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "card" },
                    React.createElement(SearchBar_1["default"], { HeaderTitle: 'App Users', text: "Invite User", onClick: function () { return navigate('/invite-users'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
                    React.createElement(CategoryFilter_1["default"], null),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12" },
                            React.createElement("div", { className: "" },
                                React.createElement("div", { className: "card__body" },
                                    React.createElement(Table_1["default"], { limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: advert_list_json_1["default"], renderBody: function (item, index) { return renderBody(item, index); } })))))))),
            tabIndex === "Administrators" && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "card" },
                    React.createElement(SearchBar_1["default"], { HeaderTitle: 'Administrators', text: "Create Admin", onClick: function () { return navigate('/settings'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12" },
                            React.createElement("div", { className: "" },
                                React.createElement("div", { className: "card__body" },
                                    React.createElement(Table_1["default"], { limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: advert_list_json_1["default"], renderBody: function (item, index) { return renderBody(item, index); } })))))))))));
};
exports["default"] = ManageUsers;
