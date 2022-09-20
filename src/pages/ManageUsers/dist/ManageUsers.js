"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
// import Input from '../../components/input/Input'
require("./styles.css");
var Administrators_1 = require("./Administrators");
var AppUsers_1 = require("./AppUsers");
var statsApis_1 = require("../../features/stats/statsApis");
var ManageUsers = function () {
    var _a = react_1.useState("Administrators"), tabIndex = _a[0], setTabIndex = _a[1];
    var data = statsApis_1.useGetUserStatsQuery().data;
    console.log(data, "useGetUserStatsQuery");
    return (React.createElement("div", null,
        React.createElement(StatusCards_1["default"], null),
        React.createElement("div", { className: "" },
            React.createElement("div", { className: " flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] relative" },
                React.createElement("p", { className: "tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Administrators" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]"), onClick: function () { return setTabIndex("Administrators"); } },
                    "Administrators",
                    " "),
                React.createElement("p", { className: "tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "App Users" && " text-[#516CF5] border-b-2 border-b-[#516CF5]"), onClick: function () { return setTabIndex("App Users"); } }, "App Users")),
            tabIndex === "Administrators" && (React.createElement(React.Fragment, null,
                React.createElement(Administrators_1["default"], null))),
            tabIndex !== "Administrators" && (React.createElement(React.Fragment, null,
                React.createElement(AppUsers_1["default"], null))))));
};
exports["default"] = ManageUsers;
