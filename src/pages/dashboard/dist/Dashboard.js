"use strict";
exports.__esModule = true;
/* eslint-disable no-labels */
require("./dashboard.css");
var LinearGradientChart_1 = require("../../components/charts/LinearGradientChart");
var react_1 = require("react");
var data_1 = require("../../assets/data/data");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var BarChart_1 = require("../../components/charts/BarChart");
var statsApis_1 = require("../../features/stats/statsApis");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
var Dashboard = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19;
    var data = statsApis_1.useGetDashboardStatsQuery().data;
    var _20 = react_1.useState(""), iconState = _20[0], setIconState = _20[1];
    // console.log(data, "data dashboard")
    var lineData = react_1.useState({
        // labels: Object.values(data?.data).map((data) => data.month.toUpperCase()),
        labels: data_1.datasetDash.map(function (data) { return data.month.toUpperCase(); }),
        datasets: [
            {
                label: "internal Ads Watched",
                data: data_1.datasetDash.map(function (data) { return data.adsWatched; }),
                backgroundColor: "#B150F9",
                borderColor: "#B150F9",
                borderWidth: 1,
                borderRadius: 5
            },
        ]
    })[0];
    var userData = react_1.useState({
        labels: data_1.datasetDash.map(function (data) { return data.month.toUpperCase(); }),
        datasets: [
            {
                label: "internal Ads Watched",
                data: data_1.datasetDash.map(function (data) { return data.adsWatched; }),
                backgroundColor: "#2a71d0",
                borderColor: "#2a71d0",
                borderWidth: 1,
                borderRadius: 5
            },
            {
                label: "External Ads Watched",
                data: data_1.datasetDash.map(function (data) { return data.adsWatched; }),
                backgroundColor: "#A3B1FA",
                borderColor: "#A3B1FA",
                borderWidth: 1,
                borderRadius: 5
            },
        ]
    })[0];
    var _21 = react_1.useState(userData), dataSet = _21[0], setDataSet = _21[1];
    var _22 = react_1.useState(userData), dataMonth = _22[0], setDataMonth = _22[1];
    var _23 = react_1.useState(userData), dataWeek = _23[0], setDataWeek = _23[1];
    var _24 = react_1.useState(userData), totalAdvertTrend = _24[0], setAdvertTrend = _24[1];
    var _25 = react_1.useState(lineData), totalPayoutTrend = _25[0], setPayoutTrend = _25[1];
    var _26 = react_1.useState('year'), chartDate = _26[0], setChartDate = _26[1];
    //  Month
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        if (data && (data === null || data === void 0 ? void 0 : data.data)) {
            var Internalmonths_1 = [];
            var Externalmonths_1 = [];
            var InternalMonthsValue_1 = [];
            var ExternalMonthsValue_1 = [];
            Object.entries((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.dayOfMonthGraph) === null || _b === void 0 ? void 0 : _b.internal).map(function (val) {
                Internalmonths_1.push(val[0]);
                //@ts-ignore
                InternalMonthsValue_1.push(val[1]);
            });
            Object.entries((_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.dayOfMonthGraph) === null || _d === void 0 ? void 0 : _d.external).map(function (val) {
                Externalmonths_1.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue_1.push(val[1]);
            });
            setDataMonth({
                labels: Internalmonths_1.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Internal Ads Watched",
                        data: InternalMonthsValue_1.map(function (data) { return data; }),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5
                    },
                    {
                        label: "External Ads Watched",
                        data: ExternalMonthsValue_1.map(function (data) { return data; }),
                        backgroundColor: "#A3B1FA",
                        borderColor: "#A3B1FA",
                        borderWidth: 1,
                        borderRadius: 5
                    }
                ]
            });
        }
    }, [data]);
    // Bar Chart js
    //  Year
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        if (data && (data === null || data === void 0 ? void 0 : data.data)) {
            var Internalmonths_2 = [];
            var Externalmonths_2 = [];
            var InternalMonthsValue_2 = [];
            var ExternalMonthsValue_2 = [];
            Object.entries((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.monthOfYearGraph) === null || _b === void 0 ? void 0 : _b.internal).map(function (val) {
                Internalmonths_2.push(val[0]);
                //@ts-ignore
                InternalMonthsValue_2.push(val[1]);
            });
            Object.entries((_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.monthOfYearGraph) === null || _d === void 0 ? void 0 : _d.external).map(function (val) {
                Externalmonths_2.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue_2.push(val[1]);
            });
            setDataSet({
                labels: Internalmonths_2.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Internal Ads Watched",
                        data: InternalMonthsValue_2.map(function (data) { return data; }),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5
                    },
                    {
                        label: "External Ads Watched",
                        data: ExternalMonthsValue_2.map(function (data) { return data; }),
                        backgroundColor: "#A3B1FA",
                        borderColor: "#A3B1FA",
                        borderWidth: 1,
                        borderRadius: 5
                    }
                ]
            });
        }
    }, [data]);
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        // weekly stats
        if (data && (data === null || data === void 0 ? void 0 : data.data)) {
            var Internalmonths_3 = [];
            var Externalmonths_3 = [];
            var InternalMonthsValue_3 = [];
            var ExternalMonthsValue_3 = [];
            Object.entries((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.dayOfWeekGraph) === null || _b === void 0 ? void 0 : _b.internal).map(function (val) {
                Internalmonths_3.push(val[0]);
                //@ts-ignore
                InternalMonthsValue_3.push(val[1]);
            });
            Object.entries((_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.dayOfWeekGraph) === null || _d === void 0 ? void 0 : _d.external).map(function (val) {
                Externalmonths_3.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue_3.push(val[1]);
            });
            setDataWeek({
                labels: Internalmonths_3.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Internal Ads Watched",
                        data: InternalMonthsValue_3.map(function (data) { return data; }),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5
                    },
                    {
                        label: "External Ads Watched",
                        data: ExternalMonthsValue_3.map(function (data) { return data; }),
                        backgroundColor: "#A3B1FA",
                        borderColor: "#A3B1FA",
                        borderWidth: 1,
                        borderRadius: 5
                    }
                ]
            });
        }
    }, [data]);
    // end of bar chart
    // Line Chart
    // Total Advert Watch Trend
    react_1.useEffect(function () {
        var _a;
        // weekly stats
        if (data && (data === null || data === void 0 ? void 0 : data.data)) {
            var totalAdsGraph_1 = [];
            var totalVoucherUsageGraphValue_1 = [];
            Object.entries((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.totalAdsGraph).map(function (val) {
                totalAdsGraph_1.push(val[0]);
                //@ts-ignore
                totalVoucherUsageGraphValue_1.push(val[1]);
            });
            setAdvertTrend({
                labels: totalAdsGraph_1.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Ads Watched",
                        data: totalVoucherUsageGraphValue_1.map(function (data) { return data; }),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5
                    },
                ]
            });
        }
    }, [data]);
    //  Total Payout Trend
    react_1.useEffect(function () {
        var _a;
        // weekly stats
        if (data && (data === null || data === void 0 ? void 0 : data.data)) {
            var totalVoucherUsageGraph_1 = [];
            var totalVoucherUsageGraphValue_2 = [];
            Object.entries((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.totalVoucherUsageGraph).map(function (val) {
                totalVoucherUsageGraph_1.push(val[0]);
                //@ts-ignore
                totalVoucherUsageGraphValue_2.push(val[1]);
            });
            setPayoutTrend({
                labels: totalVoucherUsageGraph_1.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Ads Watched",
                        data: totalVoucherUsageGraphValue_2.map(function (data) { return data; }),
                        backgroundColor: "#B150F9",
                        borderColor: "#B150F9",
                        borderWidth: 1,
                        borderRadius: 5
                    },
                ]
            });
        }
    }, [data]);
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'mb-10' },
            (data && (data === null || data === void 0 ? void 0 : data.data)) ?
                React.createElement("div", null,
                    React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_a = ("Overall Users")) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase()),
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
                                    React.createElement("span", null, (_m = ("Overall Ads")) === null || _m === void 0 ? void 0 : _m.toString().toUpperCase()),
                                    React.createElement("h4", null, data ? (_p = (_o = data === null || data === void 0 ? void 0 : data.data) === null || _o === void 0 ? void 0 : _o.endDate) === null || _p === void 0 ? void 0 : _p.totalAdverts : "-"),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, data ? ((((_r = (_q = data === null || data === void 0 ? void 0 : data.data) === null || _q === void 0 ? void 0 : _q.endDate) === null || _r === void 0 ? void 0 : _r.totalAdverts) - ((_t = (_s = data === null || data === void 0 ? void 0 : data.data) === null || _s === void 0 ? void 0 : _s.startDate) === null || _t === void 0 ? void 0 : _t.totalAdverts)) / ((_v = (_u = data === null || data === void 0 ? void 0 : data.data) === null || _u === void 0 ? void 0 : _u.endDate) === null || _v === void 0 ? void 0 : _v.totalAdverts) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                        " ",
                                        React.createElement("span", null, data ? "from " + ((_x = (_w = data === null || data === void 0 ? void 0 : data.data) === null || _w === void 0 ? void 0 : _w.startDate) === null || _x === void 0 ? void 0 : _x.totalAdverts) : "from -"))),
                                React.createElement("div", { className: "status-card__icon" },
                                    React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_y = ("Total Payout")) === null || _y === void 0 ? void 0 : _y.toString().toUpperCase()),
                                    React.createElement("h4", null, data ? (_0 = (_z = data === null || data === void 0 ? void 0 : data.data) === null || _z === void 0 ? void 0 : _z.endDate) === null || _0 === void 0 ? void 0 : _0.totalPayout : "-"),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, data ? ((((_2 = (_1 = data === null || data === void 0 ? void 0 : data.data) === null || _1 === void 0 ? void 0 : _1.endDate) === null || _2 === void 0 ? void 0 : _2.totalPayout) - ((_4 = (_3 = data === null || data === void 0 ? void 0 : data.data) === null || _3 === void 0 ? void 0 : _3.startDate) === null || _4 === void 0 ? void 0 : _4.totalPayout)) / ((_6 = (_5 = data === null || data === void 0 ? void 0 : data.data) === null || _5 === void 0 ? void 0 : _5.endDate) === null || _6 === void 0 ? void 0 : _6.totalPayout) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                        " ",
                                        React.createElement("span", null, data ? "from " + ((_8 = (_7 = data === null || data === void 0 ? void 0 : data.data) === null || _7 === void 0 ? void 0 : _7.startDate) === null || _8 === void 0 ? void 0 : _8.totalPayout) : "from -"))),
                                React.createElement("div", { className: "status-card__icon" },
                                    React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_9 = ("Vouchers Redeemed")) === null || _9 === void 0 ? void 0 : _9.toString().toUpperCase()),
                                    React.createElement("h4", null, data ? (_11 = (_10 = data === null || data === void 0 ? void 0 : data.data) === null || _10 === void 0 ? void 0 : _10.endDate) === null || _11 === void 0 ? void 0 : _11.voucherUsage : "-"),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, data ? ((((_13 = (_12 = data === null || data === void 0 ? void 0 : data.data) === null || _12 === void 0 ? void 0 : _12.endDate) === null || _13 === void 0 ? void 0 : _13.voucherUsage) - ((_15 = (_14 = data === null || data === void 0 ? void 0 : data.data) === null || _14 === void 0 ? void 0 : _14.startDate) === null || _15 === void 0 ? void 0 : _15.voucherUsage)) / ((_17 = (_16 = data === null || data === void 0 ? void 0 : data.data) === null || _16 === void 0 ? void 0 : _16.endDate) === null || _17 === void 0 ? void 0 : _17.voucherUsage) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                        " ",
                                        React.createElement("span", null, data ? "from " + ((_19 = (_18 = data === null || data === void 0 ? void 0 : data.data) === null || _18 === void 0 ? void 0 : _18.startDate) === null || _19 === void 0 ? void 0 : _19.voucherUsage) : "from -"))),
                                React.createElement("div", { className: "status-card__icon" },
                                    React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" }))))))
                :
                    React.createElement(StatusCards_1["default"], null),
            React.createElement("h4", { className: 'dashheade' }, "Ads  Statistics"),
            React.createElement("div", { className: 'grid lg:grid-cols-7' },
                React.createElement("div", { className: "lg:col-span-2 flex flex-1 flex-col justify-evenly py-10" },
                    React.createElement("div", null,
                        React.createElement("p", { className: 'text-[#949AB1 text-xs' }, "Active Daily Players"),
                        React.createElement("h1", { className: "font-bold text-[#171837] text-2xl" }, "980")),
                    React.createElement("div", { className: "my-3" },
                        React.createElement("div", { className: "bg-[#516CF5] w-5 h-2 my-2 rounded-full" },
                            React.createElement("div", { className: "h-2" })),
                        React.createElement("p", { className: 'text-[#949AB1 text-xs' }, "Total Internal Ad\u2019s"),
                        React.createElement("h1", { className: "font-bold text-[#171837] text-md" }, "800")),
                    React.createElement("div", { className: "my-3" },
                        React.createElement("div", { className: "bg-[#A3B1FA] w-5 h-2 my-2 rounded-full" },
                            React.createElement("div", { className: "h-2" })),
                        React.createElement("p", { className: 'text-[#949AB1 text-xs' }, "Total Internal Ad's"),
                        React.createElement("h1", { className: "font-bold text-[#171837] text-2xl" }, "980"))),
                React.createElement("div", { className: "lg:col-span-5 text-[#949AB1] text-sm" },
                    React.createElement("div", { className: 'mx-4' },
                        React.createElement("div", { className: "gap-10 flex- items-center" },
                            React.createElement("span", { className: "cursor-pointer mr-2 " + (chartDate === "year" && 'text-[#516CF5] font-bold'), onClick: function () { return setChartDate('year'); } }, "YEAR"),
                            React.createElement("span", { className: "cursor-pointer mr-2 " + (chartDate === "month" && 'text-[#516CF5] font-bold'), onClick: function () { return setChartDate('month'); } }, "MONTH"),
                            React.createElement("span", { className: "cursor-pointer mr-2 " + (chartDate === "week" && 'text-[#516CF5] font-bold'), onClick: function () { return setChartDate('week'); } }, "WEEK")),
                        React.createElement(BarChart_1["default"], { chartData: (chartDate === 'year' && dataSet) || (chartDate === 'month' && dataMonth) || (chartDate === 'week' && dataWeek) })))),
            React.createElement("div", { className: 'row justify-center my-10 gap-x-3' },
                React.createElement("div", { className: 'col-6 card' },
                    React.createElement("div", { className: 'basis-1/2' },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("h6", { className: 'text-[#171837] text-sm' }, "Total Advert Watch Trend"),
                            React.createElement(ThreeVdots_1["default"], null)),
                        React.createElement(LinearGradientChart_1["default"], { chartData: totalAdvertTrend }))),
                React.createElement("div", { className: 'col-6 card' },
                    React.createElement("div", { className: 'basis-1/2' },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("h6", { className: 'text-[#171837] text-sm' }, "Total Payout Trend"),
                            React.createElement(ThreeVdots_1["default"], null)),
                        React.createElement(LinearGradientChart_1["default"], { chartData: totalPayoutTrend })))))));
};
exports["default"] = Dashboard;
// creating ssh key
// ssh-keygen -t ed25519 -C fitzgeraldkachi@gmail.com
// eval "$(ssh-agent -s)""
// to check if the file exist
// ssh-add ~/.ssh/config
