"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
require("./statuscard.css");
var StatusCard = function (_a) {
    var title = _a.title, icon = _a.icon, count = _a.count, percent = _a.percent, from = _a.from;
    var _b = react_1.useState(""), iconState = _b[0], setIconState = _b[1];
    return (React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
        React.createElement("div", { className: "status-card__info" },
            React.createElement("span", null, title === null || title === void 0 ? void 0 : title.toString().toUpperCase().slice(0, 10)),
            React.createElement("h4", null, count),
            React.createElement("div", { className: "status-card__info__percent" },
                React.createElement("span", { className: 'percentUp' }, percent),
                " ",
                React.createElement("span", null, from))),
        React.createElement("div", { className: "status-card__icon" },
            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" }))));
};
exports["default"] = StatusCard;
