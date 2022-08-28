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
function Input(props) {
    var id = props.id, label = props.label, tooltip = props.tooltip, disabled = props.disabled, readOnly = props.readOnly, helptext = props.helptext, innerRef = props.innerRef, className = props.className, LeadingIcon = props.LeadingIcon, TrailingIcon = props.TrailingIcon, inputClassName = props.inputClassName, _a = props.inputType, inputType = _a === void 0 ? 'default' : _a;
    var col = function () {
        var color = 'grey-beau';
        if (inputType === 'success') {
            color = 'meador';
        }
        else if (inputType === 'warning') {
            color = 'yellow';
        }
        else if (inputType === 'error') {
            color = 'orange';
        }
        return color;
    };
    return (React.createElement("div", { className: "bg- " + className },
        label && (React.createElement("label", { className: "my-1 text-black flex items-center text-left text-sm font-semibold", htmlFor: id },
            label,
            tooltip && (React.createElement(React.Fragment, null)))),
        React.createElement("div", { className: "\n                border-[#949AB1] outline-none border-2\n               bg-white flex items-center w-full rounded-lg overflow-hidden focus-within:border-bluetiful disabled:bg-grey read-only:bg-grey\n                " + inputClassName + " border-" + col() + " " + ((disabled || readOnly) && 'bg-grey border-none') },
            LeadingIcon && (React.createElement("span", { className: "mx-2" },
                React.createElement(LeadingIcon, null))),
            React.createElement("input", __assign({}, innerRef, props, { className: "text-base p-2 flex-grow min-w-64" })),
            TrailingIcon && (React.createElement("span", { className: "mx-2" },
                React.createElement(TrailingIcon, null)))),
        helptext && (React.createElement("small", { className: "text-xs my-2 text-" + col() }, helptext))));
}
exports["default"] = Input;
