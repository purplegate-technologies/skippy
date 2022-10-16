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
var Table_1 = require("../../components/Table/Table");
var VouchersApiSlice_1 = require("../../features/vouchers/VouchersApiSlice");
var ValidVoucherIcon_1 = require("./ValidVoucherIcon");
var customerTableHead = [
    'Voucher Brand',
    'GENERATED ON',
    'EXPIRY DATE',
    'Status',
];
var renderHead = function (item, index) { return React.createElement("th", { key: index }, item); };
var renderBody = function (item, index) { return (React.createElement("tr", { key: item === null || item === void 0 ? void 0 : item._id },
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.title),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.createdAt),
    React.createElement("td", null, item === null || item === void 0 ? void 0 : item.updatedAt),
    React.createElement("td", null,
        React.createElement("span", { className: "py-1 px-4 " + ((item === null || item === void 0 ? void 0 : item.status) === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full') }, item === null || item === void 0 ? void 0 : item.status)))); };
var VoucherDetails = function () {
    var _a = VouchersApiSlice_1.useGetVouchersUsersQuery({}), data = _a.data, isLoading = _a.isLoading, isFetching = _a.isFetching;
    console.log(data, '----sjsjhs');
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid lg:grid-cols-7 bg-[#FCFCFF] lg:gap-x-10" },
            React.createElement("div", { className: "card__body lg:col-span-5" },
                React.createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isLoading ? [] : data === null || data === void 0 ? void 0 : data.docs, renderBody: function (item, index) { return renderBody(item, index); } }, { isLoading: isLoading }, { isFetching: isFetching }))),
            React.createElement("div", { className: "md:col-span-2 flex flex-col bg-white  items-center justify-between gap-8" },
                React.createElement("div", { className: ' rounded-lg flex p-2 items-center  bg-[#F1F3FF]' },
                    React.createElement(ValidVoucherIcon_1["default"], null),
                    React.createElement("div", { className: 'p-3' },
                        React.createElement("p", { className: 'text-[#404040]] text-md' }, "N1,500.00 Voucher"),
                        React.createElement("p", { className: 'text-xs my-1 text-[#949AB1]' }, "Valid till: 11/10/2023, 10:00am"))),
                React.createElement("div", { className: ' rounded-lg flex p-2 items-center  bg-[#F1F3FF]' },
                    React.createElement(ValidVoucherIcon_1["default"], null),
                    React.createElement("div", { className: 'p-3' },
                        React.createElement("p", { className: 'text-[#404040] text-md' }, "N1,000.00 Voucher"),
                        React.createElement("p", { className: 'text-xs my-1 text-[#949AB1]' }, "Valid till: 11/10/2023, 10:00am")))))));
};
exports["default"] = VoucherDetails;
