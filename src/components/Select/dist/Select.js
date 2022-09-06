"use strict";
exports.__esModule = true;
exports.Select = void 0;
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
exports.Select = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "" : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "Select" : _c, value = _a.value, _d = _a.required, required = _d === void 0 ? true : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, _f = _a.options, options = _f === void 0 ? [] : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.canNotEdit, canNotEdit = _h === void 0 ? false : _h, selectedOption = _a.selectedOption;
    return (react_1["default"].createElement("div", { className: "space-y-2 flex flex-col " + (disabled && "opacity-60") },
        react_1["default"].createElement("label", { className: "text-sm font-medium uppercase mb-[0.625rem] text-[#0F3057]" }, label),
        react_1["default"].createElement("div", { onClick: disabled && canNotEdit
                // ? () => toastMessage("contact support@ezeevoucher.com", "error")
                ? function () { return react_toastify_1.toast.error("error"); }
                : function () { }, className: "border-2  border-[#DDDDDD] px-3 rounded  text-sm md:text-base" },
            react_1["default"].createElement("select", { value: value, defaultValue: value, 
                //   id={id}
                disabled: disabled, onChange: function (e) { return onChange(e.target.value); }, className: "h-14  lg:h-12 border-none focus:outline-none w-full md:auto bg-white", required: required },
                react_1["default"].createElement("option", { value: "", disabled: true }, placeholder || "Select"),
                options.map(function (option, optionIndex) { return (react_1["default"].createElement("option", { 
                    // key={`${id}-option_${optionIndex}`}
                    key: "-option_" + optionIndex, value: typeof option === "string" ? option : option.value }, typeof option === "string" ? option : option.name)); })))));
};
// export default Select;
