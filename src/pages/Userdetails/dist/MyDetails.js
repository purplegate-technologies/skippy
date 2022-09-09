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
var react_1 = require("react");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var MyDetails = function () {
    var initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: "",
        password: '',
        confirmPassword: ''
    };
    var _a = react_1.useState(initialValues), formValues = _a[0], setFormValues = _a[1];
    // const [firstName, setFirstName] = useState("")
    // const [surname, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    // const [roles, setRoles] = useState("Finances and billing")
    var firstName = formValues.firstName, lastName = formValues.lastName, email = formValues.email, phoneNumber = formValues.phoneNumber, confirmPassword = formValues.confirmPassword, password = formValues.password;
    var handleChange = function (e) {
        var _a;
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[e.target.values] = e.target.name, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            console.log(formValues);
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement("div", { className: "max-w-3xl" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "card -mb-5" },
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-x-4 " },
                react_1["default"].createElement(Input_1["default"]
                // divStyle="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyle="w-[19rem]contactUs-form-lable"
                    labelStyle: "", divStyle: "lable w-full", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "FIRST NAME", name: "firstName", placeholder: "First Name", value: firstName, onChange: handleChange }),
                react_1["default"].createElement(Input_1["default"]
                // divStyle="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyle="w-[19rem]contactUs-form-lable"
                    divStyle: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "SURNAME", name: "lastName", placeholder: "SURNAME", value: lastName, onChange: handleChange })),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-x-4" },
                react_1["default"].createElement(Input_1["default"]
                // divStyle="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyle="w-[19rem]contactUs-form-lable"
                    divStyle: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "EMAIL", name: "email", placeholder: "admin@skippy.com", type: "email", value: email, onChange: handleChange }),
                react_1["default"].createElement(Input_1["default"]
                // divStyle="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyle="w-[19rem]contactUs-form-lable"
                    divStyle: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "MOBILE NUMBER", name: "phoneNumber", placeholder: "09039278115", type: "tel", value: phoneNumber, onChange: handleChange })),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-x-4" },
                react_1["default"].createElement(Input_1["default"]
                // divStyle="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyle="w-[19rem]contactUs-form-lable"
                    divStyle: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "PASSWORD", name: "password", placeholder: "Password", type: "password", value: password, onChange: handleChange }),
                react_1["default"].createElement(Input_1["default"]
                // divStyle="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyle="w-[19rem]contactUs-form-lable"
                    divStyle: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "cONFRIM PASSWORD", name: "confirmPassword", placeholder: "Confrim Password", type: "password", value: confirmPassword, onChange: handleChange })),
            react_1["default"].createElement(Button_1["default"], { className: "mt-[2.5rem] mb-[2.36rem] capitalize bg-[#516CF5] ", text: "Save Changes", type: "submit" }))));
};
exports["default"] = MyDetails;