"use strict";
exports.__esModule = true;
exports.useGetRedeemPointsQuery = exports.useGetWalletHistoryQuery = exports.useGetWalletByAdminQuery = exports.walletApiSlice = void 0;
var apiSlice_1 = require("../../services/api/apiSlice");
exports.walletApiSlice = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        getWalletByAdmin: builder.query({
            query: function () { return "wallet/admin"; },
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Wallet']
        }),
        getWalletHistory: builder.query({
            query: function (id) { return "wallet/admin/" + id + "/history"; },
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Wallet']
        }),
        getRedeemPoints: builder.query({
            query: function (id) { return "wallet/" + id + "/redeem"; },
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Wallet']
        })
    }); }
});
exports.useGetWalletByAdminQuery = exports.walletApiSlice.useGetWalletByAdminQuery, exports.useGetWalletHistoryQuery = exports.walletApiSlice.useGetWalletHistoryQuery, exports.useGetRedeemPointsQuery = exports.walletApiSlice.useGetRedeemPointsQuery;
