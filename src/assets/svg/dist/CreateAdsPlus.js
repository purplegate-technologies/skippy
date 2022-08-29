"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var CreateAdsPlus = function (props) { return (React.createElement("svg", __assign({ width: 16, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.388 4v3.612H12v.776H8.387V12h-.775V8.387H4v-.775h3.612V4h.776Z", fill: "#fff" }),
    React.createElement("circle", { cx: 8, cy: 8, r: 7.5, fill: "#D8D8D8", fillOpacity: 0.01, stroke: "#fff" }))); };
exports["default"] = CreateAdsPlus;
