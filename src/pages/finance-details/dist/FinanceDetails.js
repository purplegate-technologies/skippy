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
var react_router_dom_1 = require("react-router-dom");
var Deactivite_1 = require("../../assets/svg/Deactivite");
var EditIcon_1 = require("../../assets/svg/EditIcon");
var ExportIcon_1 = require("../../assets/svg/ExportIcon");
var Breadcrubs_1 = require("../../components/breadcrubs/Breadcrubs");
// import DoughnutChart from '../../components/charts/DoughnutChart'
var react_circular_progressbar_1 = require("react-circular-progressbar");
require("react-circular-progressbar/dist/styles.css");
var DollarIcon_1 = require("./DollarIcon");
var DollarVoucher_1 = require("./DollarVoucher");
var VouchersApiSlice_1 = require("../../features/vouchers/VouchersApiSlice");
var CoinDetailIcon_1 = require("../../assets/svg/CoinDetailIcon");
var bread = [
    {
        name: 'Dashboard',
        url: ''
    },
    {
        name: 'Finance',
        url: "finance"
    },
    {
        name: 'Finance Details',
        url: "finance-details"
    }
];
var FinanceDetails = function () {
    var _a = react_1.useState("Info"), tabIndex = _a[0], setTabIndex = _a[1];
    var id = react_router_dom_1.useParams().id;
    var data = VouchersApiSlice_1.useGetVoucherByIdQuery(id).data;
    // console.log(data, "useGetVoucherByIdQuery")
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement(Breadcrubs_1["default"], __assign({}, { bread: bread })),
        react_1["default"].createElement("div", { className: "financedetails my-5 border rounded-xl shadow-sm p-4" },
            react_1["default"].createElement("div", { className: "grid lg:grid-flow-col" },
                react_1["default"].createElement("div", { className: "flex md:items-center" },
                    react_1["default"].createElement(DollarIcon_1["default"], { className: "rounded-full shadow-lg" }),
                    react_1["default"].createElement("div", { className: 'ml-3 text-[#949AB1]' },
                        react_1["default"].createElement("p", { className: 'text-md my-1' },
                            react_1["default"].createElement("span", null, "Voucher"),
                            " | ",
                            react_1["default"].createElement("span", { className: 'text-[#00D48A] capitalize' }, data ? data === null || data === void 0 ? void 0 : data.status : "-")),
                        react_1["default"].createElement("span", { className: 'font-bold text-[#171837]' }, "N1500.00 Voucher"),
                        react_1["default"].createElement("p", { className: 'text-xs my-1' },
                            "Expiry Date: ",
                            data ? data === null || data === void 0 ? void 0 : data.endDate : "-"))),
                react_1["default"].createElement("div", { className: "flex items-center justify-between md:gap-x-3 lg:mt-auto mt-10 md:mt-0  md:ml-auto" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/edit-voucher" + id, className: "flex flex-col items-center cursor-pointer w-1/2 p-1" },
                        react_1["default"].createElement(EditIcon_1["default"], null),
                        react_1["default"].createElement("span", { onClick: function () { }, className: 'text-[#949AB1] text-xs' }, "Edit")),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center cursor-pointer w-1/2 p-1" },
                        react_1["default"].createElement(Deactivite_1["default"], null),
                        react_1["default"].createElement("span", { onClick: function () { }, className: 'text-[#949AB1] text-xs' }, "Deactivite")),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center cursor-pointer w-1/2 p-1" },
                        react_1["default"].createElement(ExportIcon_1["default"], null),
                        react_1["default"].createElement("span", { onClick: function () { }, className: 'text-[#949AB1] text-xs' }, "Export"))))),
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-2 gap-10 mb-5" },
            react_1["default"].createElement("div", { className: "flex flex-col" },
                react_1["default"].createElement("div", { className: '' },
                    react_1["default"].createElement("div", { className: "pb-5" },
                        react_1["default"].createElement("h1", { className: 'font-semibold text-[20px]' }, "Voucher Preview")),
                    react_1["default"].createElement("div", { className: "bg-white" },
                        react_1["default"].createElement("div", { className: 'flex items-center border border-1 p-5' },
                            react_1["default"].createElement(DollarVoucher_1["default"], null),
                            react_1["default"].createElement("span", { className: "text-xl font-bold ml-3" }, "N1500.00 Voucher")),
                        react_1["default"].createElement("div", { className: 'p-5' },
                            react_1["default"].createElement("p", { className: 'pb-5 text-[#404040] text-lg font-bold text-center' }, data ? data === null || data === void 0 ? void 0 : data.description : "-"),
                            react_1["default"].createElement("p", { className: 'text-[#404040] text-lg' },
                                react_1["default"].createElement("p", null, "\u2022\tThis Voucher is redeemable for cash"),
                                react_1["default"].createElement("p", null, "\u2022\tThis voucher can only be used once"),
                                react_1["default"].createElement("p", null, "\u2022\tHas cash Value"),
                                react_1["default"].createElement("p", null, "\u2022\tCannot be redeemed once it expires"))),
                        react_1["default"].createElement("hr", { className: 'border-dashed  my-10 border-2' }),
                        react_1["default"].createElement("div", { className: "flex items-center gap-x-10 justify-between" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", null, "Valid till: 04 Jan, 2023 11:59pm"),
                                react_1["default"].createElement("p", { className: 'text-[#1C57AC]' }, "Terms & Conditions Apps")),
                            react_1["default"].createElement("div", { className: "flex items-center border rounded-full cursor-pointer bg-[#516CF5] text-white p-2 px-4", onClick: function () { return navigate('create-voucher'); } },
                                react_1["default"].createElement(CoinDetailIcon_1["default"], { className: "z-50" }),
                                "  ",
                                react_1["default"].createElement("p", null, "1500")))))),
            react_1["default"].createElement("div", { className: "flex flex-col bg-white mb-10" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement("div", { className: " flex h-full border items-center flex-row border-[#F1F3FF] text-[#949AB1] relative" },
                        react_1["default"].createElement("p", { className: "tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Info" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]"), onClick: function () { return setTabIndex("Info"); } },
                            "Info",
                            " "),
                        react_1["default"].createElement("p", { className: "tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Statistics" && " text-[#516CF5] border-t-2 border-t-[#516CF5]"), onClick: function () { return setTabIndex("Statistics"); } }, "Statistics"))),
                tabIndex === "Info" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h1", { className: "border-b p-6 font-bold text-[#171837] text-base" }, "Voucher Statistics"),
                        react_1["default"].createElement("div", { className: "flex flex-col px-4 mt-7" },
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Status"),
                                react_1["default"].createElement("p", { className: "text-[#516CF5] text-sm text-right capitalize" }, data ? data === null || data === void 0 ? void 0 : data.status : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Brand Name/Ad Title"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.title : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "NGN Value/Voucher"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.value : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Quantity"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.totalQuantity : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Points Equivalent"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.price : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Action Link"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.image : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Start Date"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.startDate : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Expiry Date"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.endDate : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Created By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.createdBy : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "User Quantity"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.userQuantity : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Last Modified"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.updatedAt : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Last Modified By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.updatedBy : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Modified By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.createdBy : "-")))))),
                tabIndex === "Statistics" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "con" },
                        react_1["default"].createElement("h1", { className: "m-6 font-bold text-[#171837] text-base" }, "Voucher Info"),
                        react_1["default"].createElement("div", { className: "flex flex-col border" },
                            react_1["default"].createElement("div", { className: 'p-4' },
                                react_1["default"].createElement("p", { className: 'text-sm' }, "Voucher Quantity"),
                                react_1["default"].createElement("p", { className: "text-[#516CF5] text-lg font-bold" }, "100")),
                            react_1["default"].createElement("div", { className: "mx-auto my-3" },
                                react_1["default"].createElement(react_circular_progressbar_1.CircularProgressbar, { value: 100, text: "70%", strokeWidth: 10, className: "w-[150px] h-[150px] justify-self-center flex-1", styles: {
                                        path: {
                                            transform: "rotate(180deg)",
                                            transformOrigin: "center center",
                                            strokeLinecap: "butt",
                                            stroke: "#347BF4"
                                        },
                                        trail: {
                                        // strokeWidth: 0
                                        },
                                        text: {
                                            fontSize: 22,
                                            fontWeight: 800,
                                            animation: "fadein 2s",
                                            fill: "#347BF4"
                                        }
                                    } })),
                            react_1["default"].createElement("div", { className: "grid grid-cols-2 place-items-center text-center" },
                                react_1["default"].createElement("div", { className: "p-4 border w-full" },
                                    react_1["default"].createElement("h1", { className: "font-bold text-xl" }, "30"),
                                    react_1["default"].createElement("p", { className: "" }, "Available")),
                                react_1["default"].createElement("div", { className: "p-4 border w-full" },
                                    react_1["default"].createElement("h1", { className: "font-bold text-xl" }, "30"),
                                    react_1["default"].createElement("p", { className: "" }, "Redeemed")))))))))));
};
exports["default"] = FinanceDetails;
