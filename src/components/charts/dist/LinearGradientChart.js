"use strict";
exports.__esModule = true;
exports.options = void 0;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
var chart_js_1 = require("chart.js");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.PointElement, chart_js_1.LineElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend);
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
var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'July'];
var data = {
    labels: labels,
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "#742774",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
};
var LinearGradientChart = function (_a) {
    var chartData = _a.chartData, backgroundColor = _a.backgroundColor;
    var chartRef = react_1.useRef();
    var onClick = function (event) {
        console.log(react_chartjs_2_1.getElementAtEvent(chartRef.current, event));
    };
    return (React.createElement("div", null,
        React.createElement(react_chartjs_2_1.Line, { ref: chartRef, data: chartData, options: exports.options, onClick: onClick, datasetIdKey: "id" })));
};
exports["default"] = LinearGradientChart;
