"use strict";
exports.__esModule = true;
exports.barChartData = void 0;
var react_1 = require("react");
var BarChart_1 = require("../../components/charts/BarChart");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var data_1 = require("../../assets/data/data");
var Button_1 = require("../../components/button/Button");
// import DoughnutChart from '../../components/charts/DoughnutChart';
// import { AntPieChart } from '../../components/charts/AntPieChart';
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var statsApis_1 = require("../../features/stats/statsApis");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
var react_circular_progressbar_1 = require("react-circular-progressbar");
require("react-circular-progressbar/dist/styles.css");
exports.barChartData = [
    {
        type: "Success",
        value: 575
    },
    {
        type: "Declined",
        value: 175
    },
];
var Traffic = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var _o = react_1.useState(""), iconState = _o[0], setIconState = _o[1];
    var data = statsApis_1.useGetTrafficStatsQuery().data;
    console.log(data === null || data === void 0 ? void 0 : data.data, "data data data");
    var _p = react_1.useState({
        labels: data_1.UserData.map(function (data) { return data.day.toUpperCase(); }),
        datasets: [
            {
                label: "Ads Watched",
                data: data_1.UserData.map(function (data) { return data.adsWatched; }),
                backgroundColor: "#2a71d0",
                borderColor: "#2a71d0",
                borderWidth: 2,
                borderRadius: 5
            },
        ]
    }), userData = _p[0], setUserrData = _p[1];
    var _q = react_1.useState(userData), dataSet = _q[0], setDataSet = _q[1];
    // const options = {
    //   responsive: true,
    //   interaction: {
    //     mode: 'index' as const,
    //     intersect: false,
    //   },
    //   stacked: false,
    //   plugins: {
    //     title: {
    //       display: true,
    //       text: 'Chart.js Line Chart - Multi Axis',
    //     },
    //   },
    //   scales: {
    //     y: {
    //       type: 'linear' as const,
    //       display: true,
    //       position: 'left' as const,
    //     },
    //     y1: {
    //       type: 'linear' as const,
    //       display: true,
    //       position: 'right' as const,
    //       grid: {
    //         drawOnChartArea: false,
    //       },
    //     },
    //   },
    // };
    //   useEffect(() => {
    //     if(data && data?.data) {
    //      const Internalmonths: string[] = [];
    //      const Externalmonths: string[] = [];
    //      const InternalMonthsValue: number[] = [];
    //      const ExternalMonthsValue: number[] = [];
    //      Object.entries(data?.data?.monthOfYearGraph?.internal).map(val => {
    //          Internalmonths.push(val[0]);
    //          //@ts-ignore
    //          InternalMonthsValue.push(val[1]);
    //      });
    //      Object.entries(data?.data?.monthOfYearGraph?.external).map(val => {
    //          Externalmonths.push(val[0]);
    //          //@ts-ignore
    //          ExternalMonthsValue.push(val[1]);
    //      });
    //      setDataSet({
    //          labels: Internalmonths.map(data => data.toUpperCase()),
    //          datasets: [
    //              {
    //                  label: "Internal Ads Watched",
    //                  data: InternalMonthsValue.map((data) => data),
    //                  backgroundColor: "#2a71d0",
    //                  borderColor: "#2a71d0",
    //                  borderWidth: 1,
    //                  borderRadius: 5,
    //              },
    //              {
    //                  label: "External Ads Watched",
    //                  data: ExternalMonthsValue.map((data) => data),
    //                  backgroundColor: "#A3B1FA",
    //                  borderColor: "#A3B1FA",
    //                  borderWidth: 1,
    //                  borderRadius: 5,
    //              }
    //          ]
    //      });
    //     }
    //  },[data]);
    return (react_1["default"].createElement("section", { className: 'mb-10' },
        (data && (data === null || data === void 0 ? void 0 : data.data)) ?
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "row" },
                    react_1["default"].createElement("div", { className: "col-3" },
                        react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            react_1["default"].createElement("div", { className: "status-card__info" },
                                react_1["default"].createElement("span", null, (_a = ("total Active users")) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase()),
                                react_1["default"].createElement("h4", null, ((_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.endDate) === null || _c === void 0 ? void 0 : _c.totalActiveUsers)),
                                react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                    react_1["default"].createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    react_1["default"].createElement("span", null, "from -"))),
                            react_1["default"].createElement("div", { className: "status-card__icon" },
                                react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    react_1["default"].createElement("div", { className: "col-3" },
                        react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            react_1["default"].createElement("div", { className: "status-card__info" },
                                react_1["default"].createElement("span", null, (_d = ("Completed streams")) === null || _d === void 0 ? void 0 : _d.toString().toUpperCase()),
                                react_1["default"].createElement("h4", null, ((_f = (_e = data === null || data === void 0 ? void 0 : data.data) === null || _e === void 0 ? void 0 : _e.endDate) === null || _f === void 0 ? void 0 : _f.totalCompletedStreams)),
                                react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                    react_1["default"].createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    react_1["default"].createElement("span", null, "from -"))),
                            react_1["default"].createElement("div", { className: "status-card__icon" },
                                react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    react_1["default"].createElement("div", { className: "col-3" },
                        react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            react_1["default"].createElement("div", { className: "status-card__info" },
                                react_1["default"].createElement("span", null, (_g = ("Overall impressions")) === null || _g === void 0 ? void 0 : _g.toString().toUpperCase()),
                                react_1["default"].createElement("h4", null, ((_j = (_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.endDate) === null || _j === void 0 ? void 0 : _j.totalStreams)),
                                react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                    react_1["default"].createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    react_1["default"].createElement("span", null, "from -"))),
                            react_1["default"].createElement("div", { className: "status-card__icon" },
                                react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    react_1["default"].createElement("div", { className: "col-3" },
                        react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            react_1["default"].createElement("div", { className: "status-card__info" },
                                react_1["default"].createElement("span", null, (_k = ("Overall Engagements")) === null || _k === void 0 ? void 0 : _k.toString().toUpperCase()),
                                react_1["default"].createElement("h4", null, ((_m = (_l = data === null || data === void 0 ? void 0 : data.data) === null || _l === void 0 ? void 0 : _l.endDate) === null || _m === void 0 ? void 0 : _m.totalCompletedStreams)),
                                react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                    react_1["default"].createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    react_1["default"].createElement("span", null, "from -"))),
                            react_1["default"].createElement("div", { className: "status-card__icon" },
                                react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" }))))))
            :
                react_1["default"].createElement(StatusCards_1["default"], null),
        react_1["default"].createElement("div", { className: 'traffic-flex' },
            react_1["default"].createElement("h1", { className: 'my-6 mr-4 font-bold text-[#171837]' }, "Traffic  Statistics"),
            react_1["default"].createElement("div", { className: " mx-auto grid lg:grid-cols-3 gap-8 flex-" },
                react_1["default"].createElement("div", { className: "py-6 card" },
                    react_1["default"].createElement("div", { className: "min-w-[355]" },
                        react_1["default"].createElement("p", { className: 'text-sm my-3' }, "Overall impressions"),
                        react_1["default"].createElement("p", { className: "text-[#171837] text-2xl" }, "150,000"),
                        react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                            react_1["default"].createElement("span", { className: 'text-xs text-[#516CF5]' }, "12% \u2191"),
                            " ",
                            react_1["default"].createElement("p", { className: 'text-black' }, "from 80,000")),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between gap-8 mt-4" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: 'my-3' },
                                    react_1["default"].createElement("div", { className: 'p-[2px] rounded-full w-5 bg-[#516CF5]' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000")),
                                react_1["default"].createElement("div", { className: 'mt-2' },
                                    react_1["default"].createElement("div", { className: 'p-[2px] rounded-full w-5  bg-[#A3B1FA]' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000"))),
                            react_1["default"].createElement(react_circular_progressbar_1.CircularProgressbar, { value: 100, text: "70%", strokeWidth: 10, className: "w-[150px] h-[150px] mb-5 justify-self-center flex-1", styles: {
                                    path: {
                                        transform: "rotate(180deg)",
                                        transformOrigin: "center center",
                                        strokeLinecap: "butt",
                                        stroke: "#9E44F8"
                                    },
                                    trail: {
                                    // strokeWidth: 0
                                    },
                                    text: {
                                        fontSize: 22,
                                        fontWeight: 800,
                                        animation: "fadein 2s",
                                        fill: "#9E44F8"
                                    }
                                } })))),
                react_1["default"].createElement("div", { className: "py-6 card" },
                    react_1["default"].createElement("p", { className: 'text-sm my-3' }, "Overall Streams"),
                    react_1["default"].createElement("div", { className: "flex flex-col justify-between items-center" },
                        react_1["default"].createElement("p", { className: "text-[#171837] text-center text-[34px] mb-5" }, "183,927"),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between w-3/4 mb-10" },
                            react_1["default"].createElement("div", { className: 'flex flex-col items-center' },
                                react_1["default"].createElement("span", { className: "text-[#949AB1] text-xs my-1" }, "Last Month"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-2xl" }, "120,124")),
                            "|",
                            react_1["default"].createElement("div", { className: 'flex flex-col items-center' },
                                react_1["default"].createElement("span", { className: "text-[#949AB1] text-xs my-1" }, "Last Month"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-2xl" }, "120,124"))),
                        react_1["default"].createElement(Button_1["default"], { className: "rounded-2xl text-center bg-[#516CF5]" }, "+ 23,91%"))),
                react_1["default"].createElement("div", { className: "py-6 card" },
                    react_1["default"].createElement("div", { className: "min-w-[355]" },
                        react_1["default"].createElement("p", { className: 'text-sm my-3' }, "Overall Engagements"),
                        react_1["default"].createElement("p", { className: "text-[#171837] text-2xl" }, "150,000"),
                        react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                            react_1["default"].createElement("span", { className: 'text-xs text-[#516CF5]' }, "12% \u2191"),
                            " ",
                            react_1["default"].createElement("p", { className: 'text-black' }, "from 80,000")),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between  gap-8 mt-4" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: 'my-3' },
                                    react_1["default"].createElement("div", { className: 'p-[2px] rounded-full w-5 bg-[#516CF5]' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000")),
                                react_1["default"].createElement("div", { className: 'mt-2' },
                                    react_1["default"].createElement("div", { className: 'p-[2px] rounded-full w-5  bg-[#A3B1FA]' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000"))),
                            react_1["default"].createElement(react_circular_progressbar_1.CircularProgressbar, { value: 100, text: "70%", strokeWidth: 10, className: "w-[150px] h-[150px] mb-5 justify-self-center flex-1", styles: {
                                    path: {
                                        transform: "rotate(180deg)",
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
                                } }))))),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2" },
                react_1["default"].createElement("div", { className: "card" },
                    react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                        react_1["default"].createElement("h6", { className: 'text-[#171837] text-sm' }, "Active Daily Users"),
                        react_1["default"].createElement(ThreeVdots_1["default"], null)),
                    react_1["default"].createElement(BarChart_1["default"], { chartData: dataSet }))))));
};
exports["default"] = Traffic;
