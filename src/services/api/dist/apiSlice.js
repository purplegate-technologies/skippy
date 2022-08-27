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
exports.apiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
var authSlice_1 = require("../../features/auth/authSlice");
// import { AdvertsApiSlice, AuthType } from '../apiTyoe'
var react_toastify_1 = require("react-toastify");
var baseQuery = react_1.fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_KEY,
    credentials: 'include',
    prepareHeaders: function (headers, _a) {
        var getState = _a.getState;
        var token = getState().auth.token;
        if (token) {
            headers.set("authorization", "Bearer " + token);
            headers.set("Access-Control-Allow-Origin", "*");
        }
        // headers.set("x-api-key", process.env.REACT_APP_API_KEY)
        return headers;
    }
});
var baseQueryWithReauth = function (args, api, extraOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var result, refreshResult, user;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, baseQuery(args, api, extraOptions)
                // 401 (Unauthorized) and 403 (Forbidden) status codes
                // if (result?.error?.originalStatus === 403 || result.error && result.error.status === 401) {
            ];
            case 1:
                result = _b.sent();
                if (!((((_a = result === null || result === void 0 ? void 0 : result.error) === null || _a === void 0 ? void 0 : _a.status) === 403 || result.error) && result.error.status === 401)) return [3 /*break*/, 5];
                console.log('sending refresh token');
                return [4 /*yield*/, baseQuery('/refresh', api, extraOptions)];
            case 2:
                refreshResult = _b.sent();
                console.log(refreshResult, "refreshResult refreshResult refreshResult refreshResult ");
                if (!(refreshResult === null || refreshResult === void 0 ? void 0 : refreshResult.data)) return [3 /*break*/, 4];
                user = api.getState().auth.user;
                // store the new token
                api.dispatch(authSlice_1.setCredentials(__assign(__assign({}, refreshResult.data), { user: user })));
                return [4 /*yield*/, baseQuery(args, api, extraOptions)];
            case 3:
                // retry the original query with new access token
                result = _b.sent();
                return [3 /*break*/, 5];
            case 4:
                react_toastify_1.toast.error("Something went wrong, Please login again!");
                api.dispatch(authSlice_1.logout());
                _b.label = 5;
            case 5: return [2 /*return*/, result];
        }
    });
}); };
exports.apiSlice = react_1.createApi({
    baseQuery: baseQueryWithReauth,
    reducerPath: "authApi",
    tagTypes: ['Auth', 'Advert', "UserAuth", "UserAuth", "Wallet", 'Stats', "Settings"],
    endpoints: function (builder) { return ({}); }
});
// const {useCreateAdvertMutation, useGetAdvertAdminQuery} = apiSlice
// if (
//     result?.error &&
//     result?.error?.data?._meta?.error?.message.includes("logged in")
//     // result?.error?.data?._meta?.error?.code === 401 &&
//   ) {
//     // logout
//     toaster("error", "Something went wrong, Please login again.");
//     setTimeout(() => {
//       api.dispatch(logOut());
//     }, 1000);
//   }
