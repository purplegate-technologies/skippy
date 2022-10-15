"use strict";
exports.__esModule = true;
require("./circle.css");
var CircularBar = function () {
    var circle = document.querySelector(".progress-circle");
    var loading = document.querySelector(".loading");
    var fakeUploadPercentage = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];
    var i = 0;
    var circumference = circle.getTotalLength();
    var interval = setInterval(function () {
        circle.style.strokeDashoffset =
            circumference - (fakeUploadPercentage[i] / 100) * circumference;
        loading.innerHTML = fakeUploadPercentage[i] + "%";
        i++;
        if (i === fakeUploadPercentage.length) {
            clearInterval(interval);
            loading.innerHTML = "Ok :)";
        }
    }, 1000);
    return (React.createElement("div", null,
        React.createElement("svg", { className: "progress", width: "100", height: "100" },
            React.createElement("circle", { className: "progress-circle", cx: "50", cy: "50", stroke: "blue", r: "30", fill: "transparent", "stroke-width": "5" }),
            React.createElement("text", { className: "loading", fill: "blue", x: "50", y: "50", "alignment-baseline": "middle", "text-anchor": "middle" })),
        React.createElement("span", { className: " loading" })));
};
exports["default"] = CircularBar;
