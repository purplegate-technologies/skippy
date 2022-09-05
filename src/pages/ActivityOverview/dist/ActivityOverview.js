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
var hooks_1 = require("../../app/hooks");
var Breadcrubs_1 = require("../../components/breadcrubs/Breadcrubs");
var authSlice_1 = require("../../features/auth/authSlice");
var EarningHistory_1 = require("./EarningHistory");
var VoucherDetails_1 = require("./VoucherDetails");
var bread = [
    {
        name: 'Dashboard',
        url: ''
    },
    {
        name: 'Manage Users',
        url: "manage-users"
    },
    {
        name: 'User Detail',
        url: "user-detail"
    }
];
var ActivityOverview = function () {
    var _a = react_1.useState("Earning History"), tabIndex = _a[0], setTabIndex = _a[1];
    var user = hooks_1.useAppSelector(authSlice_1.selectCurrentUser);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Breadcrubs_1["default"], __assign({}, { bread: bread })),
        react_1["default"].createElement("div", { className: "userdetails my-5 border rounded-xl shadow-sm p-4" },
            react_1["default"].createElement("div", { className: "grid lg:grid-flow-col" },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("img", { src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp", alt: "Avatar", className: "rounded-full w-14 shadow-lg" }),
                    react_1["default"].createElement("div", { className: 'ml-3' },
                        react_1["default"].createElement("p", { className: 'text-[20px] my-2' }, user === null || user === void 0 ? void 0 :
                            user.lastName,
                            " ", user === null || user === void 0 ? void 0 :
                            user.firstName,
                            " "),
                        react_1["default"].createElement("span", { className: 'flex items-center gap-5' },
                            react_1["default"].createElement("p", { className: 'text-sm' },
                                react_1["default"].createElement("span", { className: 'text-[#516CF5]' }, "Email:"),
                                " ", user === null || user === void 0 ? void 0 :
                                user.email),
                            react_1["default"].createElement("p", { className: 'text-sm' },
                                react_1["default"].createElement("span", { className: 'text-[#516CF5]' }, "Mobile Number:"),
                                " ", user === null || user === void 0 ? void 0 :
                                user.phone)))),
                react_1["default"].createElement("div", { className: "flex items-center justify-between border flex-1 lg:mt-auto mt-10" },
                    react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2" },
                        react_1["default"].createElement("p", { className: 'text-[#171837] text-[28px]' }, "3,000"),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, " Points Earned")),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2" },
                        react_1["default"].createElement("p", { className: 'text-[#171837] text-[28px]' }, "2,500"),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, " Points Redeemed")),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2" },
                        react_1["default"].createElement("p", { className: 'text-[#171837] text-[28px]' }, "N1,500"),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Valid Voucher Value"))))),
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("div", { className: " flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] cursor-pointer relative" },
                react_1["default"].createElement("p", { className: "tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Earning History" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]"), onClick: function () { return setTabIndex("Earning History"); } },
                    "Earning History",
                    " "),
                react_1["default"].createElement("p", { className: "tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Voucher Details" && "text-[#516CF5] border-b-2 border-b-[#516CF5]"), onClick: function () { return setTabIndex("Voucher Details"); } }, "Voucher Details"))),
        tabIndex === "Earning History" && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(EarningHistory_1["default"], null))),
        tabIndex !== "Earning History" && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(VoucherDetails_1["default"], null)))));
};
exports["default"] = ActivityOverview;
