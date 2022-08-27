"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("../../components/Table/Table");
var ValidVoucherIcon_1 = require("./ValidVoucherIcon");
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
var VoucherDetails = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-7 bg-[#FCFCFF] lg:gap-x-10" },
            react_1["default"].createElement("div", { className: "card__body lg:col-span-5" },
                react_1["default"].createElement(Table_1["default"], { limit: '10', headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: [], renderBody: function (item, index) { return renderBody(item, index); } })),
            react_1["default"].createElement("div", { className: "md:col-span-2 flex flex-col bg-white  items-center justify-between gap-8" },
                react_1["default"].createElement("div", { className: ' rounded-lg flex p-2 items-center  bg-[#F1F3FF]' },
                    react_1["default"].createElement(ValidVoucherIcon_1["default"], null),
                    react_1["default"].createElement("div", { className: 'p-3' },
                        react_1["default"].createElement("p", { className: 'text-[#404040]] text-md' }, "N1,500.00 Voucher"),
                        react_1["default"].createElement("p", { className: 'text-xs my-1 text-[#949AB1]' }, "Valid till: 11/10/2023, 10:00am"))),
                react_1["default"].createElement("div", { className: ' rounded-lg flex p-2 items-center  bg-[#F1F3FF]' },
                    react_1["default"].createElement(ValidVoucherIcon_1["default"], null),
                    react_1["default"].createElement("div", { className: 'p-3' },
                        react_1["default"].createElement("p", { className: 'text-[#404040] text-md' }, "N1,000.00 Voucher"),
                        react_1["default"].createElement("p", { className: 'text-xs my-1 text-[#949AB1]' }, "Valid till: 11/10/2023, 10:00am")))))));
};
exports["default"] = VoucherDetails;
