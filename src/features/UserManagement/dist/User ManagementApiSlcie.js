"use strict";
exports.__esModule = true;
exports.useGetAppUserQuery = exports.useGetAppUsersQuery = exports.useCreateAdminMutation = exports.UserManagermentApiSlice = void 0;
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
        }),
        getAppUsers: builder.query({
            query: function () { return "users/app-users"; },
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['UserManagerment']
        }),
        getAppUser: builder.query({
            query: function (id) { return "users/app-users/" + id; },
            transformResponse: function (response) { return response.data; },
            providesTags: ['UserManagerment']
        })
    }); }
});
exports.useCreateAdminMutation = exports.UserManagermentApiSlice.useCreateAdminMutation, exports.useGetAppUsersQuery = exports.UserManagermentApiSlice.useGetAppUsersQuery, exports.useGetAppUserQuery = exports.UserManagermentApiSlice.useGetAppUserQuery;
