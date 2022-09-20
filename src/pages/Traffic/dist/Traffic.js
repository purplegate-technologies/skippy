"use strict";
exports.__esModule = true;
exports.barChartData = void 0;
var react_1 = require("react");
var BarChart_1 = require("../../components/charts/BarChart");
var data_1 = require("../../assets/data/data");
var Button_1 = require("../../components/button/Button");
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
    var _17 = react_1.useState(""), iconState = _17[0], setIconState = _17[1];
    var data = statsApis_1.useGetTrafficStatsQuery().data;
    // console.log(data?.data, "data data data")
    var userData = react_1.useState({
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
    })[0];
    var _18 = react_1.useState(userData), dataSet = _18[0], setDataSet = _18[1];
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
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-3" },
                    react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        react_1["default"].createElement("div", { className: "status-card__info" },
                            react_1["default"].createElement("span", null, (_a = ("total Active users")) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase()),
                            react_1["default"].createElement("h4", null, data ? (_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.endDate) === null || _c === void 0 ? void 0 : _c.totalActiveUsers : "-"),
                            react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                react_1["default"].createElement("span", { className: 'percentUp' }, data ? ((((_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.endDate) === null || _e === void 0 ? void 0 : _e.totalActiveUsers) - ((_g = (_f = data === null || data === void 0 ? void 0 : data.data) === null || _f === void 0 ? void 0 : _f.startDate) === null || _g === void 0 ? void 0 : _g.totalActiveUsers)) / ((_j = (_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.endDate) === null || _j === void 0 ? void 0 : _j.totalActiveUsers) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                react_1["default"].createElement("span", null, data ? "from " + ((_l = (_k = data === null || data === void 0 ? void 0 : data.data) === null || _k === void 0 ? void 0 : _k.startDate) === null || _l === void 0 ? void 0 : _l.totalActiveUsers) : "from -"))),
                        react_1["default"].createElement("div", { className: "status-card__icon" },
                            react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                react_1["default"].createElement("div", { className: "col-3" },
                    react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        react_1["default"].createElement("div", { className: "status-card__info" },
                            react_1["default"].createElement("span", null, (_m = ("Completed streams")) === null || _m === void 0 ? void 0 : _m.toString().toUpperCase()),
                            react_1["default"].createElement("h4", null, data ? (_p = (_o = data === null || data === void 0 ? void 0 : data.data) === null || _o === void 0 ? void 0 : _o.endDate) === null || _p === void 0 ? void 0 : _p.totalCompletedStreams : "-"),
                            react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                react_1["default"].createElement("span", { className: 'percentUp' }, data ? ((((_r = (_q = data === null || data === void 0 ? void 0 : data.data) === null || _q === void 0 ? void 0 : _q.endDate) === null || _r === void 0 ? void 0 : _r.totalCompletedStreams) - ((_t = (_s = data === null || data === void 0 ? void 0 : data.data) === null || _s === void 0 ? void 0 : _s.startDate) === null || _t === void 0 ? void 0 : _t.totalCompletedStreams)) / ((_v = (_u = data === null || data === void 0 ? void 0 : data.data) === null || _u === void 0 ? void 0 : _u.endDate) === null || _v === void 0 ? void 0 : _v.totalCompletedStreams) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                react_1["default"].createElement("span", null, data ? "from " + ((_x = (_w = data === null || data === void 0 ? void 0 : data.data) === null || _w === void 0 ? void 0 : _w.startDate) === null || _x === void 0 ? void 0 : _x.totalCompletedStreams) : "from -"))),
                        react_1["default"].createElement("div", { className: "status-card__icon" },
                            react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                react_1["default"].createElement("div", { className: "col-3" },
                    react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        react_1["default"].createElement("div", { className: "status-card__info" },
                            react_1["default"].createElement("span", null, (_y = ("Overall impressions")) === null || _y === void 0 ? void 0 : _y.toString().toUpperCase()),
                            react_1["default"].createElement("h4", null, data ? (_0 = (_z = data === null || data === void 0 ? void 0 : data.data) === null || _z === void 0 ? void 0 : _z.endDate) === null || _0 === void 0 ? void 0 : _0.totalStreams : "-"),
                            react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                react_1["default"].createElement("span", { className: 'percentUp' }, data ? ((((_2 = (_1 = data === null || data === void 0 ? void 0 : data.data) === null || _1 === void 0 ? void 0 : _1.endDate) === null || _2 === void 0 ? void 0 : _2.totalStreams) - ((_4 = (_3 = data === null || data === void 0 ? void 0 : data.data) === null || _3 === void 0 ? void 0 : _3.startDate) === null || _4 === void 0 ? void 0 : _4.totalStreams)) / ((_6 = (_5 = data === null || data === void 0 ? void 0 : data.data) === null || _5 === void 0 ? void 0 : _5.endDate) === null || _6 === void 0 ? void 0 : _6.totalStreams) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                react_1["default"].createElement("span", null, data ? "from " + ((_8 = (_7 = data === null || data === void 0 ? void 0 : data.data) === null || _7 === void 0 ? void 0 : _7.startDate) === null || _8 === void 0 ? void 0 : _8.totalStreams) : "from -"))),
                        react_1["default"].createElement("div", { className: "status-card__icon" },
                            react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                react_1["default"].createElement("div", { className: "col-3" },
                    react_1["default"].createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        react_1["default"].createElement("div", { className: "status-card__info" },
                            react_1["default"].createElement("span", null, (_9 = ("Overall Engagements")) === null || _9 === void 0 ? void 0 : _9.toString().toUpperCase()),
                            react_1["default"].createElement("h4", null, data ? (_11 = (_10 = data === null || data === void 0 ? void 0 : data.data) === null || _10 === void 0 ? void 0 : _10.endDate) === null || _11 === void 0 ? void 0 : _11.percentageEngagedAdverts : "-"),
                            react_1["default"].createElement("div", { className: "status-card__info__percent" },
                                react_1["default"].createElement("span", { className: 'percentUp' }, data ? ((((_12 = data === null || data === void 0 ? void 0 : data.endDate) === null || _12 === void 0 ? void 0 : _12.percentageEngagedAdverts) - ((_13 = data === null || data === void 0 ? void 0 : data.startDate) === null || _13 === void 0 ? void 0 : _13.percentageEngagedAdverts)) / ((_14 = data === null || data === void 0 ? void 0 : data.endDate) === null || _14 === void 0 ? void 0 : _14.percentageEngagedAdverts) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                react_1["default"].createElement("span", null, data ? "from " + ((_16 = (_15 = data === null || data === void 0 ? void 0 : data.data) === null || _15 === void 0 ? void 0 : _15.startDate) === null || _16 === void 0 ? void 0 : _16.percentageEngagedAdverts) : "from -"))),
                        react_1["default"].createElement("div", { className: "status-card__icon" },
                            react_1["default"].createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))))),
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
