"use strict";
exports.__esModule = true;
exports.useGetVouchersQuery = exports.VouchersApiSlice = void 0;
var apiSlice_1 = require("../../services/api/apiSlice");
exports.VouchersApiSlice = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        createVouchers: builder.mutation({
            query: function (body) { return ({
                url: "vouchers",
                method: 'POST',
                body: body
            }); },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Vouchers']
        }),
        getVouchers: builder.query({
            query: function () { return "vouchers"; },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Vouchers']
        }),
        getVoucher: builder.query({
            query: function (_a) {
                var id = _a.id;
                return "vouchers/" + id;
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Vouchers']
        }),
        deleteVoucher: builder.mutation({
            query: function (id) { return ({
                url: "vouchers/" + id,
                method: "DELETE"
            }); },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            invalidatesTags: ['Vouchers']
        })
    }); }
});
exports.useGetVouchersQuery = exports.VouchersApiSlice.useGetVouchersQuery;