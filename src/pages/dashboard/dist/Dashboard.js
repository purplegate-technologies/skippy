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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var data = statsApis_1.useGetDashboardStatsQuery().data;
    var _q = react_1.useState(""), iconState = _q[0], setIconState = _q[1];
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
    var _r = react_1.useState(userData), dataSet = _r[0], setDataSet = _r[1];
    var _s = react_1.useState(userData), dataMonth = _s[0], setDataMonth = _s[1];
    var _t = react_1.useState(userData), dataWeek = _t[0], setDataWeek = _t[1];
    var _u = react_1.useState(userData), totalAdvertTrend = _u[0], setAdvertTrend = _u[1];
    var _v = react_1.useState(lineData), totalPayoutTrend = _v[0], setPayoutTrend = _v[1];
    var _w = react_1.useState('year'), chartDate = _w[0], setChartDate = _w[1];
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
                    !((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.endDate) === null || _b === void 0 ? void 0 : _b.totalAdverts),
                    React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_c = ("Overall Users")) === null || _c === void 0 ? void 0 : _c.toString().toUpperCase()),
                                    React.createElement("h4", null, ((_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.endDate) === null || _e === void 0 ? void 0 : _e.totalUsers)),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                        " ",
                                        React.createElement("span", null, "from -"))),
                                React.createElement("div", { className: "status-card__icon" },
                                    React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_f = ("Overall Ads")) === null || _f === void 0 ? void 0 : _f.toString().toUpperCase()),
                                    React.createElement("h4", null, ((_h = (_g = data === null || data === void 0 ? void 0 : data.data) === null || _g === void 0 ? void 0 : _g.endDate) === null || _h === void 0 ? void 0 : _h.totalAdverts)),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                        " ",
                                        React.createElement("span", null, "from -"))),
                                React.createElement("div", { className: "status-card__icon" },
                                    React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_j = ("Total Payout")) === null || _j === void 0 ? void 0 : _j.toString().toUpperCase()),
                                    React.createElement("h4", null, ((_l = (_k = data === null || data === void 0 ? void 0 : data.data) === null || _k === void 0 ? void 0 : _k.endDate) === null || _l === void 0 ? void 0 : _l.totalPayout)),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                        " ",
                                        React.createElement("span", null, "from -"))),
                                React.createElement("div", { className: "status-card__icon" },
                                    React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                        React.createElement("div", { className: "col-3" },
                            React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                                React.createElement("div", { className: "status-card__info" },
                                    React.createElement("span", null, (_m = ("Vouchers Redeemed")) === null || _m === void 0 ? void 0 : _m.toString().toUpperCase()),
                                    React.createElement("h4", null, ((_p = (_o = data === null || data === void 0 ? void 0 : data.data) === null || _o === void 0 ? void 0 : _o.endDate) === null || _p === void 0 ? void 0 : _p.voucherUsage)),
                                    React.createElement("div", { className: "status-card__info__percent" },
                                        React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                        " ",
                                        React.createElement("span", null, "from -"))),
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
