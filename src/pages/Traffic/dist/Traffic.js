"use strict";
exports.__esModule = true;
exports.barChartData = void 0;
var react_1 = require("react");
var BarChart_1 = require("../../components/charts/BarChart");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var DoughnutChart_1 = require("../../components/charts/DoughnutChart");
var data_1 = require("../../assets/data/data");
var Button_1 = require("../../components/button/Button");
var AntPieChart_1 = require("../../components/charts/AntPieChart");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var statsApis_1 = require("../../features/stats/statsApis");
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
    var data = statsApis_1.useGetTrafficStatsQuery().data;
    console.log(data, "data data data");
    var _a = react_1.useState({
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
    }), userData = _a[0], setUserrData = _a[1];
    var _b = react_1.useState(userData), dataSet = _b[0], setDataSet = _b[1];
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
                        react_1["default"].createElement("div", { className: "flex items-center justify-between gap-8" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: '' },
                                    react_1["default"].createElement("div", { className: 'p-1 rounded w-1' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000")),
                                react_1["default"].createElement("div", { className: '' },
                                    react_1["default"].createElement("div", { className: 'p-1 rounded w-3 bg-[]' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000"))),
                            react_1["default"].createElement("div", { className: "h-36 flex items-start justify-center" },
                                react_1["default"].createElement(AntPieChart_1.AntPieChart, { data: exports.barChartData, color: ["#9E44F8", "#9E44F8"] }))))),
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
                        react_1["default"].createElement(Button_1["default"], { className: "rounded-2xl text-center" }, "+ 23,91%"))),
                react_1["default"].createElement("div", { className: "py-6 card" },
                    react_1["default"].createElement("div", { className: "min-w-[355]" },
                        react_1["default"].createElement("p", { className: 'text-sm my-3' }, "Overall Engagements"),
                        react_1["default"].createElement("p", { className: "text-[#171837] text-2xl" }, "150,000"),
                        react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                            react_1["default"].createElement("span", { className: 'text-xs text-[#516CF5]' }, "12% \u2191"),
                            " ",
                            react_1["default"].createElement("p", { className: 'text-black' }, "from 80,000")),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between gap-8" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: '' },
                                    react_1["default"].createElement("div", { className: 'p-1 rounded w-1' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000")),
                                react_1["default"].createElement("div", { className: '' },
                                    react_1["default"].createElement("div", { className: 'p-1 rounded w-3 bg-[]' }),
                                    react_1["default"].createElement("p", { className: 'text-[#949AB1] text-xs my-1' }, "Internal Ads"),
                                    react_1["default"].createElement("p", { className: 'text-lg text-[#171837]' }, "75,000"))),
                            react_1["default"].createElement(DoughnutChart_1["default"], { className: 'flex items-center justify-center' }))))),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2" },
                react_1["default"].createElement("div", { className: "card" },
                    react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                        react_1["default"].createElement("h6", { className: 'text-[#171837] text-sm' }, "Active Daily Users"),
                        react_1["default"].createElement(ThreeVdots_1["default"], null)),
                    react_1["default"].createElement(BarChart_1["default"], { chartData: dataSet }))))));
};
exports["default"] = Traffic;
