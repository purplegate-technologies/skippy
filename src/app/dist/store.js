"use strict";
var _a;
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var query_1 = require("@reduxjs/toolkit/dist/query");
var counterSlice_1 = require("../features/counter/counterSlice");
var apiSlice_1 = require("../services/api/apiSlice");
var authSlice_1 = require("../features/auth/authSlice");
exports.store = toolkit_1.configureStore({
    reducer: (_a = {
            counter: counterSlice_1["default"],
            auth: authSlice_1["default"]
        },
        // [authApi.reducerPath]: authApi.reducer,
        // dave
        _a[apiSlice_1.apiSlice.reducerPath] = apiSlice_1.apiSlice.reducer,
        _a),
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({ serializableCheck: false }).concat(
    // authApi.middleware,
    apiSlice_1.apiSlice.middleware); },
    devTools: true
});
query_1.setupListeners(exports.store.dispatch);
