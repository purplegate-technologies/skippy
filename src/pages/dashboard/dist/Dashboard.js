"use strict";
exports.__esModule = true;
/* eslint-disable no-labels */
require("./dashboard.css");
var LinearGradientChart_1 = require("../../components/charts/LinearGradientChart");
var react_1 = require("react");
var data_1 = require("./data");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var BarChart_1 = require("../../components/charts/BarChart");
var statsApis_1 = require("../../features/stats/statsApis");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var Dashboard = function () {
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
    var data = statsApis_1.useGetDashboardStatsQuery().data;
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        if (data && (data === null || data === void 0 ? void 0 : data.data)) {
            var Internalmonths_1 = [];
            var Externalmonths_1 = [];
            var InternalMonthsValue_1 = [];
            var ExternalMonthsValue_1 = [];
            Object.entries((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.monthOfYearGraph) === null || _b === void 0 ? void 0 : _b.internal).map(function (val) {
                Internalmonths_1.push(val[0]);
                //@ts-ignore
                InternalMonthsValue_1.push(val[1]);
            });
            Object.entries((_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.monthOfYearGraph) === null || _d === void 0 ? void 0 : _d.external).map(function (val) {
                Externalmonths_1.push(val[0]);
                //@ts-ignore
                ExternalMonthsValue_1.push(val[1]);
            });
            setDataSet({
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
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1,
                        borderRadius: 5
                    }
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
                React.createElement("div", { className: "lg:col-span-2" },
                    React.createElement("div", { className: 'mx-4' },
                        React.createElement(BarChart_1["default"], { chartData: dataSet })))),
            React.createElement("div", { className: 'row justify-center my-10 gap-x-3' },
                React.createElement("div", { className: 'col-6 card' },
                    React.createElement("div", { className: 'basis-1/2' },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("h6", { className: 'text-[#171837] text-sm' }, "Total advert Watch Trend"),
                            React.createElement(ThreeVdots_1["default"], null)),
                        React.createElement(LinearGradientChart_1["default"], { chartData: userData }))),
                React.createElement("div", { className: 'col-6 card' },
                    React.createElement("div", { className: 'basis-1/2' },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("h6", { className: 'text-[#171837] text-sm' }, "Total Payout Trend"),
                            React.createElement(ThreeVdots_1["default"], null)),
                        React.createElement(LinearGradientChart_1["default"], { chartData: userData })))))));
};
exports["default"] = Dashboard;
// creating ssh key
// ssh-keygen -t ed25519 -C fitzgeraldkachi@gmail.com
// eval "$(ssh-agent -s)""
// to check if the file exist
// ssh-add ~/.ssh/config
