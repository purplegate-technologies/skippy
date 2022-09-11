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
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var Table_1 = require("../../components/Table/Table");
var SearchBar_1 = require("../../components/support/SearchBar");
var react_router_dom_1 = require("react-router-dom");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var VouchersApiSlice_1 = require("../../features/vouchers/VouchersApiSlice");
var Finance = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = VouchersApiSlice_1.useGetVouchersQuery({}), data = _a.data, isLoading = _a.isLoading, isFetching = _a.isFetching;
    var customerTableHead = [
        'Brand Name',
        'Status',
        'QTY',
        'NGN Value',
        'Start Date',
        'Expiry Date',
        'Action'
    ];
    var renderHead = function (item, index) { return react_1["default"].createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (react_1["default"].createElement("tr", { key: item === null || item === void 0 ? void 0 : item._id },
        react_1["default"].createElement("td", { className: "flex items-center py-4 px-6 text-gray-900 whitespace-pre-line dark:text-white ", style: { textOverflow: 'ellipsis' } },
            react_1["default"].createElement("img", { className: "w-10 h-10 rounded-full", src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp", alt: "svgFace" }),
            react_1["default"].createElement("div", { className: "pl-3" },
                react_1["default"].createElement("div", { className: "text-base font-semibold" }, item === null || item === void 0 ? void 0 : item.title),
                react_1["default"].createElement("div", { className: "font-normal text-gray-500 text-xs", style: { overflow: 'hidden', textOverflow: 'ellipsis' } }, item === null || item === void 0 ? void 0 : item.terms))),
        react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.status),
        react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.userQuantity),
        react_1["default"].createElement("td", null, item === null || item === void 0 ? void 0 : item.value),
        react_1["default"].createElement("td", { className: "whitespace-nowrap" }, item === null || item === void 0 ? void 0 : item.startDate),
        react_1["default"].createElement("td", { className: "whitespace-nowrap" }, item === null || item === void 0 ? void 0 : item.endDate),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/finance/" + (item === null || item === void 0 ? void 0 : item._id), className: "underline text-[#516CF5] whitespace-nowrap" }, "View Details")))); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(StatusCards_1["default"], null),
        react_1["default"].createElement("div", { className: "card" },
            react_1["default"].createElement(SearchBar_1["default"], { className: '', HeaderTitle: 'All Vouchers', placeholder: 'Enter Brand/Voucher Name', text: "Create\u00A0Voucher", onClick: function () { return navigate('/create-vouchers'); }, prefixIcon: react_1["default"].createElement(CreateAdsPlus_1["default"], null) }),
            react_1["default"].createElement(CategoryFilter_1["default"], null),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-12" },
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement("div", { className: "card__body" },
                            react_1["default"].createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isFetching ? [] : data === null || data === void 0 ? void 0 : data.docs, renderBody: function (item, index) { return renderBody(item, index); } }, { isLoading: isLoading }, { isFetching: isFetching })))))))));
};
exports["default"] = Finance;
