"use strict";
exports.__esModule = true;
exports.useGetUserStatsQuery = exports.useGetDashboardStatsQuery = exports.useGetAdvertStatsQuery = exports.useGetTrafficStatsQuery = exports.useGetFinanceStatsQuery = exports.statsApiSlice = void 0;
var apiSlice_1 = require("../../services/api/apiSlice");
exports.statsApiSlice = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        getFinanceStats: builder.query({
            query: function () { return "stats/finance?startDate=&endDate="; },
            // transformResponse: (response: { data: getDashbbordStatsTypes }, meta, arg) => response.data,
            providesTags: ['Stats']
        }),
        // getDashboardStats: builder.query<getDashbbordStatsTypes, void>({ // get dashboard stats
        getDashboardStats: builder.query({
            query: function () { return "stats/dashboard"; },
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats']
        }),
        getAdvertStats: builder.query({
            query: function () { return "stats/adverts"; },
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Stats']
        }),
        getTrafficStats: builder.query({
            query: function () { return "stats/traffic?startDate=2022-07-30&endDate=2022-08-01"; },
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats']
        }),
        getUserStats: builder.query({
            query: function () { return "stats/user"; },
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats']
        })
    }); }
});
exports.useGetFinanceStatsQuery = exports.statsApiSlice.useGetFinanceStatsQuery, exports.useGetTrafficStatsQuery = exports.statsApiSlice.useGetTrafficStatsQuery, exports.useGetAdvertStatsQuery = exports.statsApiSlice.useGetAdvertStatsQuery, exports.useGetDashboardStatsQuery = exports.statsApiSlice.useGetDashboardStatsQuery, exports.useGetUserStatsQuery = exports.statsApiSlice.useGetUserStatsQuery;
