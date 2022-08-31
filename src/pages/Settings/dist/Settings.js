"use strict";
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
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var Switch_1 = require("../../components/switch/Switch");
var User_ManagementApiSlcie_1 = require("../../features/UserManagement/User ManagementApiSlcie");
require("./settings.css");
var options = [
    { value: '', text: 'Select Role', disabled: true },
    { value: 'admin', text: 'admin' },
    { value: 'regular', text: 'Regular 🍌' },
    { value: 'normal', text: 'Normal Admin 🥝' },
    { value: 'others', text: 'Others 🥝' },
];
var initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    type: ""
};
var Settings = function () {
    var _a = User_ManagementApiSlcie_1.useCreateAdminMutation(), createAdmin = _a[0], _b = _a[1], isSuccess = _b.isSuccess, isLoading = _b.isLoading;
    // const [formValue, setFormValue] = useState<initialStateType>(initialState)
    var _c = react_1.useState(""), firstName = _c[0], setFirstName = _c[1];
    var _d = react_1.useState(""), lastName = _d[0], setLastName = _d[1];
    var _e = react_1.useState(""), email = _e[0], setEmail = _e[1];
    var _f = react_1.useState(""), mobile = _f[0], setMobile = _f[1];
    var _g = react_1.useState(""), type = _g[0], setRoles = _g[1];
    react_1.useEffect(function () {
        if (isSuccess) {
            react_toastify_1.toast.success("Created an Administrator successfully");
        }
    }, [isSuccess]);
    // const handleChange = (e: any) => setFormValue({ ...formValue, [e.target.name]: e.target.value })
    var selectSTyle = {
        display: "block",
        width: "100%",
        borderRadius: "0.25rem",
        borderWidth: "2px",
        borderOpacity: 1,
        borderColor: "#949AB1",
        // --tw-bg-opacity: 1,
        backgroundColor: "white",
        padding: "0.5rem",
        outlineOffset: "2px",
        outlineWidth: 1,
        outlineColor: "transparent",
        outlineStyle: "solid",
        marginBottom: "8px"
    };
    var navigate = react_router_dom_1.useNavigate();
    var HandleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    if (!(firstName && lastName && email && mobile && type)) return [3 /*break*/, 3];
                    return [4 /*yield*/, createAdmin({
                            firstName: firstName, lastName: lastName, email: email, mobile: mobile, type: type
                        }).unwrap()];
                case 2:
                    _b.sent();
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setMobile('');
                    setRoles('');
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    react_toastify_1.toast.error("Failed Please Try again");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "h-full px-10 mx-auto flex justify-center items-center max-w-[1000px]", onSubmit: HandleSubmit },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center justify-between my-5 " },
                    React.createElement("h1", { className: "text-[#282828] text-3xl text-semibold" }, "Create Administrator"),
                    React.createElement(react_router_dom_1.Link, { to: "", onClick: function () { return navigate(-1); }, className: "text-[#516CF5]" }, "< < Back")),
                React.createElement("div", { className: "card-settings" },
                    React.createElement("div", { className: "contactUs-form-lable" },
                        React.createElement("label", { htmlFor: "", className: "text-xs text-[#516CF5]" }, ("ROLE")),
                        React.createElement("select", { placeholder: "Select Role", style: selectSTyle, name: type, onChange: function (e) {
                                var _a;
                                var select = e.target;
                                setRoles((_a = select.options.item(select.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText);
                            } }, options.map(function (option) { return (React.createElement("option", { disabled: option.disabled, key: option.value, value: option.value }, option.text)); }))),
                    React.createElement("div", { className: "grid md:grid-cols-2 gap-x-4 " },
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            labelStyle: "", divStyel: "lable w-full", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("FIRST NAME"), name: "Firstname", placeholder: ("First Name"), value: firstName, onChange: function (e) { return setFirstName(e.target.value); } }),
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("SURNAME"), name: "surname", placeholder: ("Surname"), value: lastName, onChange: function (e) { return setLastName(e.target.value); } })),
                    React.createElement("div", { className: "" },
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("EMAIL"), name: "email", placeholder: ("admin@skippy.com"), type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); } }),
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("MOBILE NUMBER"), name: "mobile", placeholder: ("09039278115"), type: "tel", value: mobile, onChange: function (e) { return setMobile(e.target.value); } }),
                        React.createElement(Switch_1["default"], { label: "Activate Account" }),
                        React.createElement(Button_1["default"], { loading: isLoading, className: "mt-[2.5rem] mb-[2.36rem] capitalize bg-[#516CF5] ", text: "Save Changes", type: "submit" })))))));
};
exports["default"] = Settings;
