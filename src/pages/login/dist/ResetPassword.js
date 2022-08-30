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
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var hooks_1 = require("../../app/hooks");
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var LoginBackGIcons_1 = require("../../assets/svg/LoginBackGIcons");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var SuccessModal_1 = require("../../components/successModal/SuccessModal");
var authApiSplice_1 = require("../../features/auth/authApiSplice");
var authSlice_1 = require("../../features/auth/authSlice");
var initialState = {
    password: "",
    confirmPassword: ""
};
var ResetPassword = function () {
    var _a = react_1.useState(initialState), formValue = _a[0], setFormValue = _a[1];
    var password = formValue.password, confirmPassword = formValue.confirmPassword;
    var _b = react_1.useState(false), modal = _b[0], setModal = _b[1];
    var closeModal = function () {
        setModal(false);
    };
    var token = hooks_1.useAppSelector(authSlice_1.selectCurrentToken);
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var _c = authApiSplice_1.useResetMutation(), reset = _c[0], _d = _c[1], resetData = _d.data, isSuccess = _d.isSuccess, 
    // isError,
    // error,
    isLoading = _d.isLoading;
    var handleChange = function (e) {
        var _a;
        return setFormValue(__assign(__assign({}, formValue), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    react_1.useEffect(function () {
    }, []);
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (password !== confirmPassword) {
                        return [2 /*return*/, react_toastify_1.toast.error("Password doesn't match")];
                    }
                    if (!(password && confirmPassword)) return [3 /*break*/, 2];
                    // const res = await reset({
                    return [4 /*yield*/, reset({
                            password: password,
                            confirmPassword: confirmPassword,
                            token: token
                        }).unwrap()];
                case 1:
                    // const res = await reset({
                    _a.sent();
                    // show toast
                    react_toastify_1.toast.success("success");
                    setFormValue({ password: '', confirmPassword: '' });
                    navigate("/login");
                    return [3 /*break*/, 3];
                case 2:
                    react_toastify_1.toast.error("Please fill all Input field");
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.warn(err_1);
                    if (err_1.status === "FETCH_ERROR") {
                        react_toastify_1.toast.error("Something went wrong, please try again...");
                    }
                    else {
                        // toast.error(err.data._meta.error.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (isSuccess) {
            var token_1 = resetData.token, admin = resetData.admin;
            // dispatch(setUser({ user: admin, token}))
            navigate('/login', { replace: true });
            react_toastify_1.toast.success("User Login Successfully");
        }
    }, [isSuccess, navigate]);
    return (react_1["default"].createElement("div", { className: "reset h-screen" },
        react_1["default"].createElement("div", { className: "absolute scale-75 top-[-98px] left-[-40px]" },
            react_1["default"].createElement(LoginBackGIcons_1["default"], null)),
        react_1["default"].createElement("div", { className: 'loginBody' },
            react_1["default"].createElement("div", { className: 'text-center logoLogin flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]' },
                react_1["default"].createElement("div", { className: 'flex items-center gap-5' },
                    react_1["default"].createElement(CompanyLogo_1["default"], { className: 'md:scale-110 my-1' }),
                    " ",
                    react_1["default"].createElement("h1", { className: 'font-bold text-lg md:text-[30px]' }, "Skippy")),
                react_1["default"].createElement("span", { className: 'text-center text-[18px] color-[#282828]' }, "Click Play & Get Paid")),
            react_1["default"].createElement("div", { className: "login z-10 p-3 w-full max-w-[23rem] md:bg-white bg-transparent" },
                react_1["default"].createElement("div", { className: 'p-[10px]' },
                    react_1["default"].createElement("span", { className: 'text-[#949AB1] text-sm' }, "Reset Password"),
                    react_1["default"].createElement("h1", { className: 'font-bold' }, "Admin")),
                react_1["default"].createElement("form", { className: 'userInput', action: "", onSubmit: onSubmit },
                    react_1["default"].createElement("div", { className: "userInput" },
                        react_1["default"].createElement(Input_1["default"], { className: "childinput", label: "Password", type: "password", name: "password", value: password, placeholder: 'Password', onChange: handleChange })),
                    react_1["default"].createElement("div", { className: "userInput" },
                        react_1["default"].createElement(Input_1["default"], { className: "childinput", label: "Confirm Password", type: "password", name: 'confirmPassword', value: confirmPassword, placeholder: 'Confirm Password', onChange: handleChange })),
                    react_1["default"].createElement("div", { className: 'mb-3 userInput' }),
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement(Button_1["default"], { loading: isLoading, className: 'w-full bg-[#516CF5] ', size: 'medium', type: 'submit' }, "Reset"))))),
        modal && (react_1["default"].createElement(SuccessModal_1["default"], { closeModal: closeModal, text: "Password set successfully!" }))));
};
exports["default"] = ResetPassword;
