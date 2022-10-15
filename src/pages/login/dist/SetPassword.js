"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Input_1 = require("../../components/input/Input");
var SetPassword = function () {
    var _a = react_1.useState(false), isLoadng = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(false), modal = _b[0], setModal = _b[1];
    var closeModal = function () {
        setModal(false);
    };
    var onSubmit = function (vals) {
        setIsLoading(false);
    };
    return (React.createElement("div", { className: "login" },
        React.createElement("form", { className: "loginBox" },
            React.createElement(Input_1["default"], { type: "password", name: "password", label: "Password", placeholder: "Password" }),
            React.createElement(Input_1["default"], { type: "password", name: "confirm_password", label: "Confirm Password", placeholder: "Password" }))));
};
exports["default"] = SetPassword;
