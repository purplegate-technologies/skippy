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
var react_1 = require("react");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var MyDetails = function () {
    var initialValues = {
        firstName: '',
        surname: '',
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
    var firstName = formValues.firstName, surname = formValues.surname, email = formValues.email, phoneNumber = formValues.phoneNumber, confirmPassword = formValues.confirmPassword, password = formValues.password;
    var handleChange = function (e) {
        var _a;
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[e.target.values] = e.target.name, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return (react_1["default"].createElement("div", { className: "max-w-3xl" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "card -mb-5" },
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-x-4 " },
                react_1["default"].createElement(Input_1["default"]
                // divStyel="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyel="w-[19rem]contactUs-form-lable"
                    labelStyle: "", divStyel: "lable w-full", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "FIRST NAME", name: "Firstname", placeholder: "First Name", value: firstName, onChange: handleChange }),
                react_1["default"].createElement(Input_1["default"]
                // divStyel="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyel="w-[19rem]contactUs-form-lable"
                    divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "SURNAME", name: "surname", placeholder: "SURNAME", value: surname, onChange: handleChange })),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-x-4" },
                react_1["default"].createElement(Input_1["default"]
                // divStyel="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyel="w-[19rem]contactUs-form-lable"
                    divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "EMAIL", name: "email", placeholder: "admin@skippy.com", type: "email", value: email, onChange: handleChange }),
                react_1["default"].createElement(Input_1["default"]
                // divStyel="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyel="w-[19rem]contactUs-form-lable"
                    divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "MOBILE NUMBER", name: "phoneNumber", placeholder: "09039278115", type: "tel", value: phoneNumber, onChange: handleChange })),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-x-4" },
                react_1["default"].createElement(Input_1["default"]
                // divStyel="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyel="w-[19rem]contactUs-form-lable"
                    divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "PASSWORD", name: "password", placeholder: "Password", type: "password", value: password, onChange: handleChange }),
                react_1["default"].createElement(Input_1["default"]
                // divStyel="w-[19rem]contactUs-form-lable"
                , { 
                    // divStyel="w-[19rem]contactUs-form-lable"
                    divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: "cONFRIM PASSWORD", name: "confirmPassword", placeholder: "Confrim Password", type: "password", value: confirmPassword, onChange: handleChange })),
            react_1["default"].createElement(Button_1["default"], { className: "mt-[2.5rem] mb-[2.36rem] capitalize bg-[#516CF5] ", text: "Save Changes", type: "submit" }))));
};
exports["default"] = MyDetails;
