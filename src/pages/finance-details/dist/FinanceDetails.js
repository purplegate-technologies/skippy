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
var Button_1 = require("../../components/button/Button");
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
    var navigate = react_router_dom_1.useNavigate();
    react_1.useEffect(function () {
        console.log(id, "Params for voucher");
    }, [id]);
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
                            react_1["default"].createElement("span", { className: 'text-[#00D48A]' }, "Available")),
                        react_1["default"].createElement("span", { className: 'font-bold text-[#171837]' }, "N1500.00 Voucher"),
                        react_1["default"].createElement("p", { className: 'text-xs my-1' }, "Expiry Date: 15/09/2022"))),
                react_1["default"].createElement("div", { className: "flex items-center justify-between md:gap-x-3 lg:mt-auto mt-10 md:mt-0  md:ml-auto" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/create-voucher", className: "flex flex-col items-center cursor-pointer w-1/2 p-1" },
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
                            react_1["default"].createElement("p", { className: 'pb-5 text-[#404040] text-lg font-bold text-center' }, "This voucher holds a value of N1,500.00 only, and can be redeemed for cash"),
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
                            react_1["default"].createElement(Button_1["default"], { className: "border rounded-full bg-[#516CF5]", onClick: function () { return navigate('create-voucher'); }, prefixIcon: react_1["default"].createElement(CoinDetailIcon_1["default"], null) }, "1500"))))),
            react_1["default"].createElement("div", { className: "md:basis-1/2 flex flex-col bg-white mb-10" },
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
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Category"),
                                react_1["default"].createElement("p", { className: "text-[#516CF5] text-xs text-right" }, "Netflix Price Slash Promo")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Brand Name/Ad Title"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "Netflix Price Slash Promo")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Action Link"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "https://netflix.com/")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Duration"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "01:30 mins")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Point per Play"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "100")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Created By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "Imani Johnson")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Add Date"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "01/05/2021")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Last Modified"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "01/05/2021")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Modified By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "Imani Johnson")))))),
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
