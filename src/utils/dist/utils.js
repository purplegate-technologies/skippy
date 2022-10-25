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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getBase64 = exports.downloader = exports.stableSort = exports.getComparator = exports.descendingComparator = exports.isValidURL = exports.titleCase = exports.moneyFormatter = exports.makeArr = exports.removeObj = exports.copyTextToClipboard = exports.getYtId = exports.groupBy = exports.truncateString = exports.formatCurrency = exports.generateId = exports.getError = void 0;
/* eslint-disable no-useless-escape */
// import { toastr } from "react-redux-toastr";
// import CheckIcon from "@mui/icons-material/Check";
// import ErrorIcon from "@mui/icons-material/Error";
// import WarningIcon from "@mui/icons-material/Warning";
// get error messages for react hook form inputs
exports.getError = function (errors, name) {
    var result = name.split(".").reduce(function (prev, cur) { return prev === null || prev === void 0 ? void 0 : prev[cur]; }, errors);
    console.log(errors.scheme[0].schemeTitle);
    return result;
};
exports.generateId = function () { return Math.random().toString(36).substr(2, 9); };
//Format value with comma and add Naira sign
exports.formatCurrency = function (number, currency) {
    if (currency === void 0) { currency = "NGN"; }
    if (number === undefined)
        return 0;
    number = Number(number);
    return Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: currency
    }).format(number);
};
// export const toCurrency = (amount: any) => {
//   return formatCurrency(parseFloat(amount)).split(".00")[0];
// };
// truncate string
exports.truncateString = function (str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
};
exports.groupBy = function (items, key) {
    return items.reduce(function (result, item) {
        var _a;
        return (__assign(__assign({}, result), (_a = {}, _a[item[key]] = __spreadArrays((result[item[key]] || []), [item]), _a)));
    }, {});
};
// remove empty objects and array from the obj
// export const removeEmpty = (obj: any) => {
//   return Object.fromEntries(
//     Object.entries(obj).filter(([_, v]) => {
//       if (typeof v === "number") return true;
//       else return v !== "" && v && v?.length > 0;
//     })
//   );
// };
function getYtId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}
exports.getYtId = getYtId;
// copy to clipboard
function copyTextToClipboard(text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!("clipboard" in navigator)) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.clipboard.writeText(text)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [2 /*return*/, document.execCommand("copy", true, text)];
            }
        });
    });
}
exports.copyTextToClipboard = copyTextToClipboard;
exports.removeObj = function (arr) { return arr.map(function (el) { return Object.values(el); }); };
// convert react hook form arr of objects to arr of strings
exports.makeArr = function (arr, name) { return arr.map(function (el) { return el[name]; }); };
exports.moneyFormatter = function (val, amount) {
    // Nine Zeroes for Billions
    return Math.abs(Number(val)) >= 1.0e9
        ? (Math.abs(Number(val)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
            Math.abs(Number(val)) >= 1.0e6
                ? (Math.abs(Number(val)) / 1.0e6).toFixed(2) + "M"
                : // Three Zeroes for Thousands
                    Math.abs(Number(val)) >= 1.0e3
                        ? (Math.abs(Number(val)) / 1.0e3).toFixed(2) + "K"
                        : Math.abs(Number(val))
                            ? Math.abs(Number(val) / 1.0)
                            : Math.abs(Number(val)) >= 1.0
                                ? isNaN(val)
                                : "";
    // ? ({ val = Math.sign(val) * Math.abs(val) })
};
// capitalize first letter of each word in a sentence
function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
}
exports.titleCase = titleCase;
// Check if url is valid
function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res !== null)
        return true;
}
exports.isValidURL = isValidURL;
// export const toaster = (type, msg) => {
//   switch (type) {
//     case "success":
//       toastr.success("", msg, {
//         icon: <CheckIcon color="white" />,
//       });
//       break;
//     case "error":
//       toastr.error("", msg, {
//         icon: <ErrorIcon color="white" />,
//       });
//       break;
//     case "warn":
//       toastr.warning("", msg, {
//         icon: <WarningIcon color="white" />,
//       });
//       break;
//     default:
//       break;
//   }
// };
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
exports.descendingComparator = descendingComparator;
function getComparator(order, orderBy) {
    return order === "desc"
        ? function (a, b) { return descendingComparator(a, b, orderBy); }
        : function (a, b) { return -descendingComparator(a, b, orderBy); };
}
exports.getComparator = getComparator;
// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    if (array === void 0) { array = []; }
    var stabilizedThis = array.map(function (el, index) { return [el, index]; });
    stabilizedThis.sort(function (a, b) {
        var order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map(function (el) { return el[0]; });
}
exports.stableSort = stableSort;
exports.downloader = function (url, fileName) {
    var a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    // the filename you want
    a.download = fileName + ".xlsx";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
};
exports.getBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (error) { return reject(error); };
    });
};
