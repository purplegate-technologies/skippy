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
var Dashboard = function () {
    var data = statsApis_1.useGetDashboardStatsQuery().data;
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
    var _a = react_1.useState({
        // labels: Object.values(data?.data).map((data) => data.month.toUpperCase()),
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
                label: "Ads Watched",
                data: data_1.datasetDash.map(function (data) { return data.adsWatched; }),
                backgroundColor: "#A3B1FA",
                borderColor: "#A3B1FA",
                borderWidth: 1,
                borderRadius: 5
            },
        ]
    }), userData = _a[0], setUserrData = _a[1];
    var _b = react_1.useState(userData), dataSet = _b[0], setDataSet = _b[1];
    var _c = react_1.useState(userData), dataMonth = _c[0], setDataMonth = _c[1];
    var _d = react_1.useState(userData), dataWeek = _d[0], setDataWeek = _d[1];
    var _e = react_1.useState(userData), totalAdvertTrend = _e[0], setAdvertTrend = _e[1];
    var _f = react_1.useState(lineData), totalPayoutTrend = _f[0], setPayoutTrend = _f[1];
    var _g = react_1.useState('year'), chartDate = _g[0], setChartDate = _g[1];
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
            React.createElement(StatusCards_1["default"], null),
            React.createElement("h4", { className: 'dashheade' }, "Ads  Statistics"),
            React.createElement("div", { className: 'grid lg:grid-cols-3' },
                React.createElement("div", { className: "col-span-1  self-center" },
                    React.createElement("div", { className: 'mx-4 flex flex-col justify-between' },
                        React.createElement("div", null,
                            React.createElement("p", { className: 'text-[#949AB1 text-xs' }, "Active Daily Players"),
                            React.createElement("h1", { className: "font-bold" }, "980")),
                        React.createElement("div", { className: "my-3" },
                            React.createElement("div", { className: "bg-[#516CF5] w-5 h-2 my-2 rounded-full" },
                                React.createElement("div", { className: "h-2" })),
                            React.createElement("p", { className: 'text-[#949AB1 text-xs' }, "Total Internal Ad\u2019s"),
                            React.createElement("h1", { className: "font-bold" }, "800")),
                        React.createElement("div", { className: "my-3" },
                            React.createElement("div", { className: "bg-[#A3B1FA] w-5 h-2 my-2 rounded-full" },
                                React.createElement("div", { className: "h-2" })),
                            React.createElement("p", { className: 'text-[#949AB1 text-xs' }, "Total Internal Ad\u2019s"),
                            React.createElement("h1", { className: "font-bold" }, "980")))),
                React.createElement("div", { className: "lg:col-span-2 text-[#949AB1]" },
                    React.createElement("div", { className: 'mx-4' },
                        React.createElement("div", { className: "gap-10 flex- items-center" },
                            React.createElement("span", { className: "cursor-pointer mr-2 " + (chartDate === "year" && 'text-[#516CF5]'), onClick: function () { return setChartDate('year'); } }, "Year"),
                            React.createElement("span", { className: "cursor-pointer mr-2 " + (chartDate === "month" && 'text-[#516CF5]'), onClick: function () { return setChartDate('month'); } }, "Month"),
                            React.createElement("span", { className: "cursor-pointer mr-2 " + (chartDate === "week" && 'text-[#516CF5]'), onClick: function () { return setChartDate('week'); } }, "Week")),
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
