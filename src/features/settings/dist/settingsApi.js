"use strict";
var _a;
exports.__esModule = true;
exports.settingApiSlice = void 0;
var apiSlice_1 = require("./../../services/api/apiSlice");
exports.settingApiSlice = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        settings: builder.mutation({
            query: function (body) { return ({
                url: "settings",
                method: 'POST',
                body: body
            }); },
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Settings']
        })
    }); }
});
exports._b = _a = exports.settingApiSlice;
