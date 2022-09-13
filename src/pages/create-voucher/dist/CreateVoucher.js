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
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var Switch_1 = require("../../components/switch/Switch");
var TopNav_1 = require("../../components/topnav/TopNav");
var VouchersApiSlice_1 = require("../../features/vouchers/VouchersApiSlice");
var react_toastify_1 = require("react-toastify");
var react_1 = require("react");
var Select_1 = require("../../components/Select/Select");
var CreateVoucher = function () {
    var id = react_router_dom_1.useParams().id;
    var initialState = {
        title: "",
        description: "",
        terms: "",
        price: "",
        value: "",
        userQuantity: "",
        totalQuantity: "",
        startDate: "",
        endDate: "",
        status: ""
    };
    var _a = react_1.useState(initialState), formValue = _a[0], setFormValue = _a[1];
    var title = formValue.title, description = formValue.description, terms = formValue.terms, price = formValue.price, value = formValue.value, userQuantity = formValue.userQuantity, totalQuantity = formValue.totalQuantity, startDate = formValue.startDate, endDate = formValue.endDate, status = formValue.status;
    var updateVoucher = VouchersApiSlice_1.useUpdateVoucherMutation()[0];
    var deleteVoucher = VouchersApiSlice_1.useDeleteVoucherMutation()[0];
    var createVouchers = VouchersApiSlice_1.useCreateVouchersMutation()[0];
    var navigate = react_router_dom_1.useNavigate();
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteVoucher(id)];
                case 1:
                    _a.sent();
                    react_toastify_1.toast.success("Voucher Deleted Successfully");
                    navigate('/finance');
                    return [2 /*return*/];
            }
        });
    }); };
    var setField = function (field, value) {
        var _a;
        setFormValue(__assign(__assign({}, formValue), (_a = {}, _a[field] = value, _a)));
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateVoucher(__assign({ id: id }, formValue)).unwrap()];
                case 1:
                    _a.sent();
                    setFormValue({
                        title: "",
                        description: "",
                        terms: "",
                        price: "",
                        value: "",
                        userQuantity: "",
                        totalQuantity: "",
                        startDate: "",
                        endDate: "",
                        status: ""
                    });
                    react_toastify_1.toast.success("Successfully Edited a Voucher");
                    navigate("/finance");
                    return [3 /*break*/, 7];
                case 2:
                    _a.trys.push([2, 6, , 7]);
                    if (!(title && description && terms && price && value && userQuantity && totalQuantity && startDate && endDate && status && !id)) return [3 /*break*/, 4];
                    return [4 /*yield*/, createVouchers(formValue).unwrap()];
                case 3:
                    _a.sent();
                    setFormValue({
                        title: "",
                        description: "",
                        terms: "",
                        price: "",
                        value: "",
                        userQuantity: "",
                        totalQuantity: "",
                        startDate: "",
                        endDate: "",
                        status: ""
                    });
                    react_toastify_1.toast.success("Successfully Create a Voucher");
                    navigate("/finance");
                    return [3 /*break*/, 5];
                case 4:
                    react_toastify_1.toast.error("Please fill all Input field");
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    react_toastify_1.toast.error(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("section", { className: "bg-[#FCFCFF]" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("div", { className: 'flex' },
                react_1["default"].createElement("div", { className: "sidebar__logo" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                        react_1["default"].createElement(CompanyLogo_1["default"], null)),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/", style: { textDecoration: 'none', color: 'black', marginLeft: '8px' } }, "Admin@skippy.com"),
                    react_1["default"].createElement("div", { className: 'h-10' })),
                react_1["default"].createElement("div", { className: "flex-1" },
                    react_1["default"].createElement(TopNav_1["default"], null))),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-12 gap-10 m-5" },
                react_1["default"].createElement("div", { className: 'md:col-span-7 flex flex-col bg-white p-4' },
                    react_1["default"].createElement("div", { className: "p-2 items-center flex justify-between" },
                        " ",
                        react_1["default"].createElement("span", null, "Voucher  Deal "),
                        " ",
                        react_1["default"].createElement("span", { className: "text-[#949AB1]" }, "e.g. 30% off / Buy 1 get 1 free")),
                    react_1["default"].createElement(Input_1["default"], { type: 'number', value: formValue.value, onChange: function (e) { return setField('value', e.target.value); }, className: 'flex-1 w-full flex border border-[#CFD1D5] p-2 mb-5 rounded-lg', placeholder: 'N1500.00 Voucher' }),
                    react_1["default"].createElement("div", { className: "flex items-center gap-x-5 justify-between mb-5" },
                        react_1["default"].createElement(Input_1["default"], { type: 'date', value: formValue.startDate, onChange: function (e) { return setField('startDate', e.target.value); }, divStyle: "lable w-full", className: 'flex-1 w-full flex border border-[#CFD1D5] p-2 rounded-lg', label: 'Start Date', labelStyle: 'text-sm' }),
                        react_1["default"].createElement(Input_1["default"], { type: 'date', value: formValue.endDate, onChange: function (e) { return setField('endDate', e.target.value); }, divStyle: "lable w-full", className: 'flex-1 w-full flex border border-[#CFD1D5] p-2 rounded-lg', label: 'Expiry Date', labelStyle: 'text-sm' })),
                    react_1["default"].createElement("form", { className: "mb-5 " },
                        react_1["default"].createElement("div", { className: "mb-1 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600" },
                            react_1["default"].createElement("div", { className: "flex justify-between items-center flex-row-reverse py-2 px-3 border-b dark:border-gray-600" },
                                react_1["default"].createElement("div", { className: "flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600" },
                                    react_1["default"].createElement("div", { className: "flex items-center space-x-1 sm:pr-4" },
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Attach file")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Embed map")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Upload image")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Format code")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Add emoji"))),
                                    react_1["default"].createElement("div", { className: "flex flex-wrap items-center space-x-1 sm:pl-4" },
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Add list")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Settings")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Timeline")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Download")))),
                                react_1["default"].createElement("span", { className: "" }, "Voucher Description")),
                            react_1["default"].createElement("div", { className: "py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800" },
                                react_1["default"].createElement("label", { className: "sr-only" }, "Publish post"),
                                react_1["default"].createElement("textarea", { id: "editor", value: formValue.description, onChange: function (e) { return setField("description", e.target.value); }, className: "focus:ring-blue-500 focus:border-blue-500 block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400", placeholder: "Write an article...", required: true }))),
                        react_1["default"].createElement("p", { className: "text-[#516CF5] text-sm" }, "A brief Description about the voucher")),
                    react_1["default"].createElement("form", { className: "mb-5 " },
                        react_1["default"].createElement("div", { className: "mb-1 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600" },
                            react_1["default"].createElement("div", { className: "flex justify-between items-center py-2 px-3 border-b dark:border-gray-600" },
                                react_1["default"].createElement("div", { className: "" }, "Voucher Terms"),
                                react_1["default"].createElement("div", { className: "flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600" },
                                    react_1["default"].createElement("div", { className: "flex items-center space-x-1 sm:pr-4" },
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Attach file")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Embed map")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Upload image")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Format code")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Add emoji"))),
                                    react_1["default"].createElement("div", { className: "flex flex-wrap items-center space-x-1 sm:pl-4" },
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Add list")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Settings")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Timeline")),
                                        react_1["default"].createElement("button", { type: "button", className: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" },
                                            react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                                react_1["default"].createElement("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z", clipRule: "evenodd" })),
                                            react_1["default"].createElement("span", { className: "sr-only" }, "Download"))))),
                            react_1["default"].createElement("div", { className: "py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800" },
                                react_1["default"].createElement("label", { className: "sr-only" }, "Publish post"),
                                react_1["default"].createElement("textarea", { id: "editor", value: formValue.terms, onChange: function (e) { return setField('terms', e.target.value); }, className: "block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400", placeholder: "Write an article...", required: true }))),
                        react_1["default"].createElement("p", { className: "text-[#516CF5] text-sm" }, "Enter the Terms  of the Voucher, press the enter key to go to next line"))),
                react_1["default"].createElement("div", { className: 'md:col-span-5 flex flex-col bg-white' },
                    react_1["default"].createElement("div", { className: "border p-4 mb-6" },
                        react_1["default"].createElement("div", { className: "flex-items-center flex-row justify-between my-2", style: { display: 'flex', justifyContent: 'space-between' } },
                            react_1["default"].createElement("p", null, "Vendor Details"),
                            react_1["default"].createElement("p", null)),
                        react_1["default"].createElement("div", { className: "flex items-center gap-x-5 mb-2" },
                            react_1["default"].createElement("svg", { className: "w-20 h-20 text-gray-200 border p-2", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 640 512" },
                                react_1["default"].createElement("path", { d: "M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" })),
                            react_1["default"].createElement("div", { className: "flex flex-1 w-full" },
                                react_1["default"].createElement("div", { className: "w-full" },
                                    react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "Brand name/Ad Title "),
                                    react_1["default"].createElement(Input_1["default"], { type: 'text', name: '', value: formValue.title, onChange: function (e) { return setField("title", e.target.value); }, divStyle: "w-full", className: ' w-full p-2 border border-[#CFD1D5] rounded', placeholder: 'Skippy Voucher' }))))),
                    react_1["default"].createElement("div", { className: "border pb-4" },
                        react_1["default"].createElement("div", { className: "p-4 border-b" },
                            react_1["default"].createElement("p", { className: "text-[#516CF5]" }, "Voucher Settings")),
                        react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-10 p-4" },
                            react_1["default"].createElement("div", { className: "w-full" },
                                react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "  Total Quantity "),
                                react_1["default"].createElement(Input_1["default"], { type: 'number', value: formValue.totalQuantity, onChange: function (e) { return setField('totalQuantity', e.target.value); }, name: '', divStyle: "w-full", className: 'rounded-lg w-full p-2 border border-[#CFD1D5]' })),
                            react_1["default"].createElement("div", { className: "w-full" },
                                react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "Quantity per User "),
                                react_1["default"].createElement(Input_1["default"], { type: 'number', value: formValue.userQuantity, onChange: function (e) { return setField('userQuantity', e.target.value); }, name: '', divStyle: "w-full", className: ' w-full p-2 border border-[#CFD1D5] rounded-lg' }))),
                        react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-10 p-4" },
                            react_1["default"].createElement("div", { className: "w-full" },
                                react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "  Voucher Value "),
                                react_1["default"].createElement(Input_1["default"], { type: 'number', name: '', value: formValue.value, onChange: function (e) { return setField('value', e.target.value); }, divStyle: "w-full", className: 'rounded-lg w-full p-2 border border-[#CFD1D5]' })),
                            react_1["default"].createElement("div", { className: "w-full" },
                                react_1["default"].createElement("label", { className: 'my-1 text-[#171837] whitespace-nowrap' }, "Voucher Cost (Skippy Points) "),
                                react_1["default"].createElement(Input_1["default"], { type: 'number', value: formValue.price, onChange: function (e) { return setField('price', e.target.value); }, name: '', divStyle: "w-full", className: ' w-full p-2 border border-[#CFD1D5] rounded-lg' }))),
                        react_1["default"].createElement("div", { className: "w-full  p-4" },
                            react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "Embed Code"),
                            react_1["default"].createElement(Input_1["default"], { type: 'number', name: '', divStyle: "w-full", className: ' w-full p-2 border border-[#CFD1D5] rounded-lg', placeholder: "Enter action link here" })),
                        react_1["default"].createElement("div", { className: 'my-2 mx-4' },
                            react_1["default"].createElement("label", { htmlFor: "" }, "status"),
                            react_1["default"].createElement(Select_1.Select
                            // label="Your role in the chair"
                            , { 
                                // label="Your role in the chair"
                                className: "w-full p-2 border border-[#CFD1D5] rounded-lg", options: ["active", "inactive"], required: true, value: formValue.status, onChange: function (value) { return setField("status", value); } })),
                        react_1["default"].createElement(Switch_1["default"], { label: "Turn on notifications for voucher validity", className: 'p-4' })))),
            react_1["default"].createElement("div", { className: "flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5  w-[100%]" },
                react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                    react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Undo Changes"),
                    react_1["default"].createElement(Button_1["default"], { className: "bg-[#FF5660]", onClick: function () { return handleDelete(id); } }, "Delete Advert")),
                react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                    react_1["default"].createElement(Button_1["default"], { className: 'bg-[#868BA1]', onClick: function () { return navigate(-1); } }, "Cancel"),
                    react_1["default"].createElement(Button_1["default"], { className: 'bg-[#19C165]', onClick: handleSubmit }, "Save Changes"))))));
};
exports["default"] = CreateVoucher;
