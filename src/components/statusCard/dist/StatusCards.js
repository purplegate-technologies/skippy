"use strict";
exports.__esModule = true;
require("./statuscard.css");
var StatusCard_1 = require("./StatusCard");
var statusData = [
    {
        "icon": "bx bx-shopping-bag",
        "count": "-",
        "title": "overall users",
        "percent": "-% ↑",
        "from": "from 880"
    },
    {
        "icon": "bx bx-cart",
        "count": "-",
        "title": "overllads",
        "percent": "-% ↑",
        "from": "from -"
    },
    {
        "icon": "bx bx-dollar-circle",
        "count": "-",
        "title": "total payout",
        "percent": "-% ↑",
        "from": "from -"
    },
    {
        "icon": "bx bx-receipt",
        "count": "-",
        "title": "Vouchers redeemed",
        "percent": "-% ↑",
        "from": "from -"
    }
];
var StatusCards = function () {
    return (React.createElement("div", null,
        React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
        React.createElement("div", { className: "row" }, statusData.map(function (item) { return (React.createElement("div", { className: "col-3", key: item.title },
            React.createElement(StatusCard_1["default"], { icon: item.icon, count: item.count, title: item.title, percent: item.percent, from: item.from }))); }))));
};
exports["default"] = StatusCards;
