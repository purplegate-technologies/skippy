"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.options = void 0;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
var chart_js_1 = require("chart.js");
chart_js_1.Chart.register.apply(chart_js_1.Chart, __spreadArrays([chart_js_1.CategoryScale,
    chart_js_1.LinearScale,
    chart_js_1.PointElement,
    chart_js_1.LineElement,
    chart_js_1.Title,
    chart_js_1.Tooltip,
    chart_js_1.Legend], chart_js_1.registerables));
exports.options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis'
        }
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left'
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false
            }
        }
    }
};
var BarChart = function (_a) {
    var chartData = _a.chartData;
    var chartRef = react_1.useRef();
    var onClick = function (event) {
        console.log(react_chartjs_2_1.getElementAtEvent(chartRef.current, event));
    };
    return (React.createElement("div", null,
        React.createElement(react_chartjs_2_1.Bar, { ref: chartRef, data: chartData, options: exports.options, onClick: onClick, datasetIdKey: "id" })));
};
exports["default"] = BarChart;
