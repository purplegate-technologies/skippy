"use strict";
exports.__esModule = true;
exports.useCreateAdminMutation = exports.UserManagermentApiSlice = void 0;
var apiSlice_1 = require("../../services/api/apiSlice");
exports.UserManagermentApiSlice = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        createAdmin: builder.mutation({
            query: function (body) { return ({
                url: "admin",
                method: 'POST',
                body: body
            }); },
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['UserManagerment']
        })
    }); }
});
exports.useCreateAdminMutation = exports.UserManagermentApiSlice.useCreateAdminMutation;
