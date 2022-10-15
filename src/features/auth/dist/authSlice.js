"use strict";
var _a;
exports.__esModule = true;
exports.selectCurrentToken = exports.selectCurrentUser = exports.selectAuth = exports.setUserToken = exports.setUserDetails = exports.setCredentials = exports.logout = exports.setUser = exports.authSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    user: {},
    token: null
};
exports.authSlice = toolkit_1.createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUserDetail: function (state, _a) {
            var payload = _a.payload;
            state.user = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                phone: payload.phone,
                email: payload.email,
                isAdmin: payload.isAdmin,
                status: payload.status,
                type: payload.type,
                role: payload.role,
                id: payload._id
            };
        },
        setUserDetails: function (state, _a) {
            var user = _a.payload.user;
            state.user = user;
        },
        setUserToken: function (state, _a) {
            var token = _a.payload.token;
            state.token = token;
        },
        setUser: function (state, action) {
            var _a = action.payload, user = _a.user, token = _a.token;
            localStorage.setItem("user", JSON.stringify({ user: user, token: token }));
            // localStorage.setItem(
            //     "user", JSON.stringify({
            //         user: action.payload.user,
            //         token: action.payload.token
            //     })
            // )
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        // Dave authentication
        setCredentials: function (state, action) {
            var _a = action.payload, user = _a.user, accessToken = _a.accessToken;
            state.user = user;
            state.token = accessToken;
        },
        logout: function (state) {
            localStorage.clear();
            state.user = null;
            state.token = null;
            // learn later
            // let redirectTo = window.location.pathname;
            window.localStorage.clear();
            // window.location.href = `/login?redirectTo=${redirectTo}`;
        }
    }
});
exports.setUser = (_a = exports.authSlice.actions, _a.setUser), exports.logout = _a.logout, exports.setCredentials = _a.setCredentials, exports.setUserDetails = _a.setUserDetails, exports.setUserToken = _a.setUserToken;
exports.selectAuth = function (state) { return state.auth; };
// selector to select use and token details from the store
exports.selectCurrentUser = function (state) { return state.auth.user; };
exports.selectCurrentToken = function (state) { return state.auth.token; };
exports["default"] = exports.authSlice.reducer;
