"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./styles.css");
var Administrators_1 = require("./Administrators");
var AppUsers_1 = require("./AppUsers");
var statsApis_1 = require("../../features/stats/statsApis");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
var ManageUsers = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
    var _9 = react_1.useState(""), iconState = _9[0], setIconState = _9[1];
    var _10 = react_1.useState("Administrators"), tabIndex = _10[0], setTabIndex = _10[1];
    var data = statsApis_1.useGetUserStatsQuery().data;
    console.log(data, "useGetUserStatsQuery");
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_a = ("total Installed Apps")) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.endDate) === null || _c === void 0 ? void 0 : _c.totalUsers : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.endDate) === null || _e === void 0 ? void 0 : _e.totalUsers) - ((_g = (_f = data === null || data === void 0 ? void 0 : data.data) === null || _f === void 0 ? void 0 : _f.startDate) === null || _g === void 0 ? void 0 : _g.totalUsers)) / ((_j = (_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.endDate) === null || _j === void 0 ? void 0 : _j.totalUsers) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_l = (_k = data === null || data === void 0 ? void 0 : data.data) === null || _k === void 0 ? void 0 : _k.startDate) === null || _l === void 0 ? void 0 : _l.totalUsers) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_m = ("Total Active Users")) === null || _m === void 0 ? void 0 : _m.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_p = (_o = data === null || data === void 0 ? void 0 : data.data) === null || _o === void 0 ? void 0 : _o.endDate) === null || _p === void 0 ? void 0 : _p.totalActiveUsers : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_r = (_q = data === null || data === void 0 ? void 0 : data.data) === null || _q === void 0 ? void 0 : _q.endDate) === null || _r === void 0 ? void 0 : _r.totalActiveUsers) - ((_t = (_s = data === null || data === void 0 ? void 0 : data.data) === null || _s === void 0 ? void 0 : _s.startDate) === null || _t === void 0 ? void 0 : _t.totalActiveUsers)) / ((_v = (_u = data === null || data === void 0 ? void 0 : data.data) === null || _u === void 0 ? void 0 : _u.endDate) === null || _v === void 0 ? void 0 : _v.totalActiveUsers) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_x = (_w = data === null || data === void 0 ? void 0 : data.data) === null || _w === void 0 ? void 0 : _w.startDate) === null || _x === void 0 ? void 0 : _x.totalActiveUsers) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_y = ("Total inactive Players")) === null || _y === void 0 ? void 0 : _y.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_0 = (_z = data === null || data === void 0 ? void 0 : data.data) === null || _z === void 0 ? void 0 : _z.endDate) === null || _0 === void 0 ? void 0 : _0.totalInactiveUsers : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_2 = (_1 = data === null || data === void 0 ? void 0 : data.data) === null || _1 === void 0 ? void 0 : _1.endDate) === null || _2 === void 0 ? void 0 : _2.totalInactiveUsers) - ((_4 = (_3 = data === null || data === void 0 ? void 0 : data.data) === null || _3 === void 0 ? void 0 : _3.startDate) === null || _4 === void 0 ? void 0 : _4.totalInactiveUsers)) / ((_6 = (_5 = data === null || data === void 0 ? void 0 : data.data) === null || _5 === void 0 ? void 0 : _5.endDate) === null || _6 === void 0 ? void 0 : _6.totalInactiveUsers) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_8 = (_7 = data === null || data === void 0 ? void 0 : data.data) === null || _7 === void 0 ? void 0 : _7.startDate) === null || _8 === void 0 ? void 0 : _8.totalInactiveUsers) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))))),
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
