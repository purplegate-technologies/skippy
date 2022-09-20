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
var statsApis_1 = require("../../features/stats/statsApis");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
var coin_svg_1 = require("./coin.svg");
var Finance = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19;
    var _20 = react_1.useState(""), iconState = _20[0], setIconState = _20[1];
    var navigate = react_router_dom_1.useNavigate();
    var _21 = VouchersApiSlice_1.useGetVouchersQuery({}), data = _21.data, isLoading = _21.isLoading, isFetching = _21.isFetching;
    var stats = statsApis_1.useGetFinanceStatsQuery().data;
    // console.log(data, 'sss')
    console.log(stats === null || stats === void 0 ? void 0 : stats.data, 'sss');
    var customerTableHead = [
        'Brand Name',
        'Status',
        'QTY',
        'NGN Value',
        'Start Date',
        'Expiry Date',
        'Action'
    ];
    var renderHead = function (item, index) { return React.createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (React.createElement("tr", { key: item === null || item === void 0 ? void 0 : item._id },
        React.createElement("td", { className: "flex items-center py-4 px-6 text-gray-900 whitespace-pre-line dark:text-white ", style: { textOverflow: 'ellipsis' } },
            React.createElement("img", { className: "w-10 h-10 rounded-full", src: coin_svg_1["default"], alt: "svgcoin" }),
            React.createElement("div", { className: "pl-3" },
                React.createElement("div", { className: "text-base font-semibold" }, item === null || item === void 0 ? void 0 : item.title),
                React.createElement("div", { className: "font-normal text-gray-500 text-xs", style: { overflow: 'hidden', textOverflow: 'ellipsis' } }, item === null || item === void 0 ? void 0 : item.terms))),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.status),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.userQuantity),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.value),
        React.createElement("td", { className: "whitespace-nowrap" }, item === null || item === void 0 ? void 0 : item.startDate),
        React.createElement("td", { className: "whitespace-nowrap" }, item === null || item === void 0 ? void 0 : item.endDate),
        React.createElement("td", null,
            React.createElement(react_router_dom_1.Link, { to: "/finance/" + (item === null || item === void 0 ? void 0 : item._id), className: "underline text-[#516CF5] whitespace-nowrap" }, "View Details")))); };
    return (React.createElement("div", null,
        (stats && (stats === null || stats === void 0 ? void 0 : stats.data)) ?
            React.createElement("div", null,
                React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_a = ("total Payout Points")) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase()),
                                React.createElement("h4", null, data ? (_c = (_b = stats === null || stats === void 0 ? void 0 : stats.data) === null || _b === void 0 ? void 0 : _b.endDate) === null || _c === void 0 ? void 0 : _c.totalVoucherPoints : "-"),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, data ? ((((_e = (_d = stats === null || stats === void 0 ? void 0 : stats.data) === null || _d === void 0 ? void 0 : _d.endDate) === null || _e === void 0 ? void 0 : _e.totalVoucherPoints) - ((_g = (_f = stats === null || stats === void 0 ? void 0 : stats.data) === null || _f === void 0 ? void 0 : _f.startDate) === null || _g === void 0 ? void 0 : _g.totalVoucherPoints)) / ((_j = (_h = stats === null || stats === void 0 ? void 0 : stats.data) === null || _h === void 0 ? void 0 : _h.endDate) === null || _j === void 0 ? void 0 : _j.totalVoucherPoints) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                    " ",
                                    React.createElement("span", null, data ? "from " + ((_l = (_k = stats === null || stats === void 0 ? void 0 : stats.data) === null || _k === void 0 ? void 0 : _k.startDate) === null || _l === void 0 ? void 0 : _l.totalVoucherPoints) : "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_m = ("Overall Redeemed Vouchers")) === null || _m === void 0 ? void 0 : _m.toString().toUpperCase()),
                                React.createElement("h4", null, data ? (_p = (_o = stats === null || stats === void 0 ? void 0 : stats.data) === null || _o === void 0 ? void 0 : _o.endDate) === null || _p === void 0 ? void 0 : _p.totalRedeemedVouchers : "-"),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, data ? ((((_r = (_q = stats === null || stats === void 0 ? void 0 : stats.data) === null || _q === void 0 ? void 0 : _q.endDate) === null || _r === void 0 ? void 0 : _r.totalRedeemedVouchers) - ((_t = (_s = stats === null || stats === void 0 ? void 0 : stats.data) === null || _s === void 0 ? void 0 : _s.startDate) === null || _t === void 0 ? void 0 : _t.totalRedeemedVouchers)) / ((_v = (_u = stats === null || stats === void 0 ? void 0 : stats.data) === null || _u === void 0 ? void 0 : _u.endDate) === null || _v === void 0 ? void 0 : _v.totalRedeemedVouchers) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                    " ",
                                    React.createElement("span", null, data ? "from " + ((_x = (_w = stats === null || stats === void 0 ? void 0 : stats.data) === null || _w === void 0 ? void 0 : _w.startDate) === null || _x === void 0 ? void 0 : _x.totalRedeemedVouchers) : "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_y = ("Redeemed Voucher Volume")) === null || _y === void 0 ? void 0 : _y.toString().toUpperCase()),
                                React.createElement("h4", null, data ? (_0 = (_z = stats === null || stats === void 0 ? void 0 : stats.data) === null || _z === void 0 ? void 0 : _z.endDate) === null || _0 === void 0 ? void 0 : _0.totalRedeemedVoucherVolume : "-"),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, data ? ((((_2 = (_1 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _1 === void 0 ? void 0 : _1.endDate) === null || _2 === void 0 ? void 0 : _2.totalRedeemedVoucherVolume) - ((_4 = (_3 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _3 === void 0 ? void 0 : _3.startDate) === null || _4 === void 0 ? void 0 : _4.totalRedeemedVoucherVolume)) / ((_6 = (_5 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _5 === void 0 ? void 0 : _5.endDate) === null || _6 === void 0 ? void 0 : _6.totalRedeemedVoucherVolume) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                    " ",
                                    React.createElement("span", null, data ? "from " + ((_8 = (_7 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _7 === void 0 ? void 0 : _7.startDate) === null || _8 === void 0 ? void 0 : _8.totalRedeemedVoucherVolume) : "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_9 = ("Overall Points Spent")) === null || _9 === void 0 ? void 0 : _9.toString().toUpperCase()),
                                React.createElement("h4", null, data ? (_11 = (_10 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _10 === void 0 ? void 0 : _10.endDate) === null || _11 === void 0 ? void 0 : _11.totalPointsRedeemed : "-"),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, data ? ((((_13 = (_12 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _12 === void 0 ? void 0 : _12.endDate) === null || _13 === void 0 ? void 0 : _13.totalPointsRedeemed) - ((_15 = (_14 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _14 === void 0 ? void 0 : _14.startDate) === null || _15 === void 0 ? void 0 : _15.totalPointsRedeemed)) / ((_17 = (_16 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _16 === void 0 ? void 0 : _16.endDate) === null || _17 === void 0 ? void 0 : _17.totalPointsRedeemed) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                    " ",
                                    React.createElement("span", null, data ? "from " + ((_19 = (_18 = stats === null || stats === void 0 ? void 0 : stats.data) === null || _18 === void 0 ? void 0 : _18.startDate) === null || _19 === void 0 ? void 0 : _19.totalPointsRedeemed) : "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" }))))))
            :
                React.createElement(StatusCards_1["default"], null),
        React.createElement("div", { className: "card" },
            React.createElement(SearchBar_1["default"], { className: '', HeaderTitle: 'All Vouchers', placeholder: 'Enter Brand/Voucher Name', text: "Create\u00A0Voucher", onClick: function () { return navigate('/create-vouchers'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
            React.createElement(CategoryFilter_1["default"], null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "" },
                        React.createElement("div", { className: "card__body" },
                            React.createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isFetching ? [] : data === null || data === void 0 ? void 0 : data.docs, renderBody: function (item, index) { return renderBody(item, index); } }, { isLoading: isLoading }, { isFetching: isFetching })))))))));
};
exports["default"] = Finance;
