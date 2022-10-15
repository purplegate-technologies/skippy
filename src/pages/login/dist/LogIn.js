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
require("./login.css");
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../app/hooks");
var react_1 = require("react");
var authSlice_1 = require("../../features/auth/authSlice");
var react_toastify_1 = require("react-toastify");
var Button_1 = require("../../components/button/Button");
var LoginBackGIcons_1 = require("../../assets/svg/LoginBackGIcons");
var Input_1 = require("../../components/input/Input");
var authApiSplice_1 = require("../../features/auth/authApiSplice");
var initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};
var LogIn = function () {
    var _a = react_1.useState(initialState), formValue = _a[0], setFormValue = _a[1];
    var email = formValue.email, password = formValue.password;
    var _b = react_1.useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var tokenForUser = hooks_1.useAppSelector(authSlice_1.selectCurrentToken);
    var _c = authApiSplice_1.useLoginMutation(), loginUser = _c[0], _d = _c[1], loginData = _d.data, isLoginSuccess = _d.isSuccess, isLoginError = _d.isError, isLoading = _d.isLoading;
    var handleChange = function (e) {
        var _a;
        return setFormValue(__assign(__assign({}, formValue), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, admin, token, err_1;
        var _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    e.preventDefault();
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 6, , 7]);
                    if (!(email && password)) return [3 /*break*/, 4];
                    // await loginUser({ email, password })
                    // console.log(await loginUser({ email, password })).unwrap();
                    // call login trigger from rtk query
                    return [4 /*yield*/, loginUser({ email: email, password: password }).unwrap()];
                case 2:
                    // await loginUser({ email, password })
                    // console.log(await loginUser({ email, password })).unwrap();
                    // call login trigger from rtk query
                    _f.sent();
                    return [4 /*yield*/, loginData
                        // set user data and token in redux store
                        // dispatch(setUser({ user: admin.firstName, token }))
                    ];
                case 3:
                    _a = _f.sent(), admin = _a.admin, token = _a.token;
                    // set user data and token in redux store
                    // dispatch(setUser({ user: admin.firstName, token }))
                    dispatch(authSlice_1.setUser({ user: admin, token: token }));
                    if (isLoginSuccess) {
                        navigate('/', { replace: true });
                        react_toastify_1.toast.success("Login successful");
                    }
                    setFormValue({ email: '', password: '' });
                    return [3 /*break*/, 5];
                case 4:
                    react_toastify_1.toast.error("Please fill all Input field");
                    _f.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _f.sent();
                    if (!(err_1 === null || err_1 === void 0 ? void 0 : err_1.response)) {
                        react_toastify_1.toast.error(!(err_1 === null || err_1 === void 0 ? void 0 : err_1.response_message));
                        setErrMsg("No Server Response");
                    }
                    else if (((_b = err_1.response) === null || _b === void 0 ? void 0 : _b.status) === 400) {
                        react_toastify_1.toast.error((_c = err_1.response) === null || _c === void 0 ? void 0 : _c.status);
                        setErrMsg("Missing Email or Password");
                    }
                    else if (((_d = err_1 === null || err_1 === void 0 ? void 0 : err_1.response) === null || _d === void 0 ? void 0 : _d.status) === 401) {
                        react_toastify_1.toast.error((_e = err_1 === null || err_1 === void 0 ? void 0 : err_1.response) === null || _e === void 0 ? void 0 : _e.message);
                        // toast.error(err.data._meta.error.message);
                        setErrMsg("Unauthorized");
                    }
                    else {
                        setErrMsg("Login Failed");
                    }
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (isLoginSuccess) {
            var token = loginData.token, admin = loginData.admin;
            dispatch(authSlice_1.setUser({ user: admin, token: token }));
            navigate('/', { replace: true });
            react_toastify_1.toast.success("User Login Successfully");
        }
    }, [isLoginSuccess, navigate, dispatch, loginData]);
    return (react_1["default"].createElement("div", { className: "h-screen" },
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
                    react_1["default"].createElement("span", { className: 'text-[#949AB1] text-sm' }, "Welcome Back,"),
                    react_1["default"].createElement("h1", { className: 'font-bold' }, "Admin")),
                react_1["default"].createElement("form", { className: 'userInput', action: "", onSubmit: handleLogin },
                    react_1["default"].createElement("p", { className: errMsg ? "errmsg ml-2 font-semibold" : "offscreen" }, isLoginError && react_1["default"].createElement(react_1["default"].Fragment, null, errMsg)),
                    react_1["default"].createElement("div", { className: "userInput" },
                        react_1["default"].createElement(Input_1["default"], { className: "childinput", label: "Email", type: "email", name: "email", value: email, placeholder: 'Email', onChange: handleChange })),
                    react_1["default"].createElement("div", { className: "userInput" },
                        react_1["default"].createElement(Input_1["default"], { className: "childinput", label: "Password", type: "password", name: 'password', value: password, placeholder: 'Password', onChange: handleChange })),
                    react_1["default"].createElement("div", { className: 'mb-3 userInput' },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/reset", className: "text-[#FF5A5A] font-bold text-sm" }, "Reset Passsword")),
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement(Button_1["default"], { loading: isLoading, className: 'w-full bg-[#516CF5]', size: 'medium', type: 'submit' }, "Sign In")))))));
};
exports["default"] = LogIn;
