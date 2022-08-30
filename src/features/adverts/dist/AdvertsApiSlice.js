"use strict";
exports.__esModule = true;
exports.useGetStreamUserQuery = exports.useGetStreamAdminQuery = exports.useCompleteStreamsMutation = exports.useStartStreamsMutation = exports.useDeleteAdvertMutation = exports.useUpdateAdvertMutation = exports.useGetAdvertQuery = exports.useGetAdvertUserQuery = exports.useGetAdvertAdminQuery = exports.useCreateAdvertMutation = exports.advertsApiSlice = void 0;
var apiSlice_1 = require("../../services/api/apiSlice");
exports.advertsApiSlice = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        createAdvert: builder.mutation({
            query: function (body) { return ({
                url: "adverts",
                method: 'POST',
                body: body
            }); },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Advert']
        }),
        getAdvertAdmin: builder.query({
            query: function () { return "adverts"; }
        }),
        getAdvertUser: builder.query({
            query: function () { return "adverts/user"; },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Advert']
        }),
        getAdvert: builder.query({
            query: function (_a) {
                var id = _a.id;
                return "adverts/" + id;
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Advert']
        }),
        updateAdvert: builder.mutation({
            query: function (_a) {
                var body = _a.body, id = _a.id;
                return ({
                    url: "adverts/" + id,
                    method: 'PUT',
                    body: body
                });
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Advert']
        }),
        deleteAdvert: builder.mutation({
            query: function (_a) {
                var body = _a.body, id = _a.id;
                return ({
                    url: "adverts/" + id,
                    method: 'DELETE',
                    body: body
                });
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Advert']
        }),
        // StartStream
        startStreams: builder.mutation({
            query: function (_a) {
                var body = _a.body, id = _a.id;
                return ({
                    url: "adverts/" + id + "/start-stream",
                    method: 'POST',
                    body: body
                });
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Advert']
        }),
        completeStreams: builder.mutation({
            query: function (_a) {
                var body = _a.body, id = _a.id;
                return ({
                    url: "adverts/" + id + "/end-stream",
                    method: 'POST',
                    body: body
                });
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Advert']
        }),
        getStreamAdmin: builder.query({
            query: function () { return "adverts/streams"; },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ["Advert"]
        }),
        getStreamUser: builder.query({
            query: function () { return "adverts/streams/user"; },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ["Advert"]
        })
    }); }
});
exports.useCreateAdvertMutation = exports.advertsApiSlice.useCreateAdvertMutation, exports.useGetAdvertAdminQuery = exports.advertsApiSlice.useGetAdvertAdminQuery, exports.useGetAdvertUserQuery = exports.advertsApiSlice.useGetAdvertUserQuery, exports.useGetAdvertQuery = exports.advertsApiSlice.useGetAdvertQuery, exports.useUpdateAdvertMutation = exports.advertsApiSlice.useUpdateAdvertMutation, exports.useDeleteAdvertMutation = exports.advertsApiSlice.useDeleteAdvertMutation, exports.useStartStreamsMutation = exports.advertsApiSlice.useStartStreamsMutation, exports.useCompleteStreamsMutation = exports.advertsApiSlice.useCompleteStreamsMutation, exports.useGetStreamAdminQuery = exports.advertsApiSlice.useGetStreamAdminQuery, exports.useGetStreamUserQuery = exports.advertsApiSlice.useGetStreamUserQuery;
