"use strict";
exports.__esModule = true;
exports.initInput = void 0;
var react_1 = require("react");
exports.initInput = { input: "", error: "" };
var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.label, label = _c === void 0 ? "" : _c, _d = _a.value, value = _d === void 0 ? "" : _d, _e = _a.placeholder, placeholder = _e === void 0 ? "Placeholder" : _e, _f = _a.name, name = _f === void 0 ? "name" : _f, children = _a.children, _g = _a.onChange, onChange = _g === void 0 ? function () { } : _g, _h = _a.onBlur, onBlur = _h === void 0 ? function () { } : _h, _j = _a.onClick, onClick = _j === void 0 ? function () { } : _j, _k = _a.onKeyPress, onKeyPress = _k === void 0 ? function () { } : _k, _l = _a.onKeyDown, onKeyDown = _l === void 0 ? function () { } : _l, _m = _a.required, required = _m === void 0 ? true : _m, _o = _a.requiredMsg, requiredMsg = _o === void 0 ? "" : _o, _p = _a.error, error = _p === void 0 ? "" : _p, _q = _a.disabled, disabled = _q === void 0 ? false : _q, _r = _a.className, className = _r === void 0 ? "" : _r, _s = _a.checked, checked = _s === void 0 ? false : _s, _t = _a.divStyel, divStyel = _t === void 0 ? "" : _t, _u = _a.labelStyle, labelStyle = _u === void 0 ? "" : _u, maxLength = _a.maxLength, minLength = _a.minLength, _v = _a.TrailingIcon, TrailingIcon = _v === void 0 ? null : _v;
    var input = (react_1["default"].createElement("input", { className: className, type: type, value: value, placeholder: placeholder, name: name, required: required, onChange: function (e) { return onChange(e); }, onBlur: function (e) { return onBlur(e); }, onClick: function (e) { return onClick(e); }, onKeyDown: function (e) { return onClick(e); }, onKeyPress: function (e) { return onClick(e); }, disabled: disabled, checked: checked, maxLength: maxLength, minLength: minLength }));
    // function changeGender(e: MouseEvent<HTMLDivElement>) {
    //   const inputElemet = (e.target as HTMLElement).parentElement?.children[0];
    //   inputElemet?.setAttribute("checked", "");
    // }
    if (type === "radio") {
        return (react_1["default"].createElement("div", { className: "inline-block mr-5 select-none" + (error && "error") },
            input,
            react_1["default"].createElement("label", { htmlFor: name, className: labelStyle }, "" + label),
            react_1["default"].createElement("span", null, error)));
    }
    return (react_1["default"].createElement("div", { className: "form-input  " + divStyel + " " + (error && "error") },
        react_1["default"].createElement("label", { htmlFor: name, className: "block text-xs text-[#516CF5]  " + labelStyle },
            label,
            " ",
            react_1["default"].createElement("p", { className: "text-[#EB0000] inline" }, "" + requiredMsg)),
        input,
        react_1["default"].createElement("span", null, error)));
};
exports["default"] = Input;
