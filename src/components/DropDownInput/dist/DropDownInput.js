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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var useClickOutside_1 = require("../../app/useClickOutside");
var InputN_1 = require("./InputN");
function DropDownInout(_a) {
    var label = _a.label, filter = _a.filter, 
    // innerRef,
    onChange = _a.onChange, getValue = _a.getValue, className = _a.className, _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.defaultValue, defaultValue = _d === void 0 ? '' : _d, _e = _a.searchable, searchable = _e === void 0 ? false : _e, rest = __rest(_a, ["label", "filter", "onChange", "getValue", "className", "data", "disabled", "defaultValue", "searchable"]);
    var _f = react_1.useState(false), open = _f[0], setOpen = _f[1];
    var _g = react_1.useState(data), options = _g[0], setOptions = _g[1];
    var _h = react_1.useState(defaultValue), value = _h[0], setValue = _h[1];
    react_1.useEffect(function () {
        setValue(defaultValue);
    }, [defaultValue]);
    react_1.useEffect(function () {
        if (open) {
            setOptions(data);
        }
    }, [open]);
    react_1.useEffect(function () {
        setOptions(data);
    }, [data]);
    var search = function (e) {
        if (filter) {
            setOptions(__spreadArrays(data.filter(function (o) { return filter(o, e.target.value); })));
            return;
        }
        setOptions(__spreadArrays(data.filter(function (o) {
            return o.value.toLowerCase().includes(e.target.value.toLowerCase());
        })));
    };
    return (React.createElement(useClickOutside_1.ClickOutside, { onclickoutside: function () { return setOpen(false); }, className: "relative " + className + " no-scrollbar" },
        React.createElement("div", null),
        React.createElement(InputN_1["default"], __assign({}, rest, (disabled && { disabled: disabled }), { label: label, value: value, 
            // ref={innerRef}
            onChange: onChange, onClick: function () { return setOpen(!open); }, className: "pointer-events-[initial] ", TrailingIcon: function () { return (React.createElement("span", { className: "cursor-pointer rotate-180", onClick: function () { return !disabled && setOpen(!open); } },
                React.createElement("span", null),
                React.createElement("span", { className: "rotate-180 scale-75" }, ">"))); } })),
        open && (React.createElement("div", { className: 'shadow-[0_1px_4px_rgba(0,0,0,0.16)] absolute z-10 bg-white my-2 w-full rounded-2xl p-4' },
            React.createElement("div", { className: "relative " + (searchable ? 'h-72' : 'h-auto') },
                searchable && (React.createElement("input", { className: "top-0 h-10 text-base mb-3 w-full px-4 bg-transparent outline-none text-black-jungle border border-grey-platinum rounded-sm", onChange: search, placeholder: "Search" })),
                React.createElement("div", { className: "max-h-60 overflow-y-scroll" }, !data.length ? ('No items available') : (React.createElement("ul", null, options.length
                    ? options.map(function (e, i) { return (React.createElement("li", { key: i, onClick: function () {
                            //@ts-ignore
                            onChange && onChange(e.value);
                            if (getValue) {
                                setValue(getValue(e));
                            }
                            else {
                                setValue(e.value);
                            }
                            setOpen(false);
                        }, className: "hover:bg-grey-cultured active:bg-green active:text-white rounded-lg px-2 py-2 text-black" }, e.label ? e.label : e.value)); })
                    : 'No results found'))))))));
}
exports["default"] = DropDownInout;
