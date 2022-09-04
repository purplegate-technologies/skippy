"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import DoughnutChart from '../../components/charts/DoughnutChart'
var Table_1 = require("../../components/Table/Table");
var react_circular_progressbar_1 = require("react-circular-progressbar");
require("react-circular-progressbar/dist/styles.css");
var customerTableHead = [
    'Advert',
    'Date',
    'Points',
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
var EarningHistory = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-7 lg:gqp-x-10 bg-[#FCFCFF]" },
            react_1["default"].createElement("div", { className: "card__body lg:col-span-5" },
                react_1["default"].createElement(Table_1["default"], { limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: [], renderBody: function (item, index) { return renderBody(item, index); } })),
            react_1["default"].createElement("div", { className: "md:col-span-2 " },
                react_1["default"].createElement("div", { className: "card flex items-center justify-between gap-8" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: '' },
                            react_1["default"].createElement("div", { className: 'p-1 rounded w-1' }),
                            react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Overall Streams"),
                            react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "100")),
                        react_1["default"].createElement("div", { className: '' },
                            react_1["default"].createElement("div", { className: 'p-1 rounded w-1' }),
                            react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Completed Streams"),
                            react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "97")),
                        react_1["default"].createElement("div", { className: '' },
                            react_1["default"].createElement("div", { className: 'p-1 rounded w-3 bg-[]' }),
                            react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Cancelled Streams"),
                            react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "3"))),
                    react_1["default"].createElement(react_circular_progressbar_1.CircularProgressbar, { value: 100, text: "90%", strokeWidth: 10, className: "w-[100px] h-[100px] justify-self-center flex-1", styles: {
                            path: {
                                // transform: "rotate(180deg)",
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
                react_1["default"].createElement("div", { className: "card flex items-center justify-between gap-8" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: '' },
                            react_1["default"].createElement("div", { className: 'p-1 rounded w-1' }),
                            react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Overall Earnings"),
                            react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "3000")),
                        react_1["default"].createElement("div", { className: '' },
                            react_1["default"].createElement("div", { className: 'p-1 rounded w-1' }),
                            react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Redeemed"),
                            react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "2500")),
                        react_1["default"].createElement("div", { className: '' },
                            react_1["default"].createElement("div", { className: 'p-1 rounded w-3 bg-[]' }),
                            react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Expired"),
                            react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "500"))),
                    react_1["default"].createElement(react_circular_progressbar_1.CircularProgressbar, { value: 100, text: "70%", strokeWidth: 10, className: "w-[100px] h-[100px] flex-1 justify-self-center", styles: {
                            path: {
                                // transform: "rotate(180deg)",
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
                        } }))))));
};
exports["default"] = EarningHistory;
