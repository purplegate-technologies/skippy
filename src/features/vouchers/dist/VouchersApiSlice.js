"use strict";
exports.__esModule = true;
exports.useGetVoucherByIdQuery = exports.useGetVouchersQuery = exports.useCreateVouchersMutation = exports.VouchersApiSlice = void 0;
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
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            invalidatesTags: ['Vouchers']
        }),
        getVouchers: builder.query({
            query: function () { return "vouchers"; },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response, meta, arg) { return response.data; },
            providesTags: ['Vouchers']
        }),
        getVoucherById: builder.query({
            query: function (id) { return "vouchers/" + id; },
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
exports.useCreateVouchersMutation = exports.VouchersApiSlice.useCreateVouchersMutation, exports.useGetVouchersQuery = exports.VouchersApiSlice.useGetVouchersQuery, exports.useGetVoucherByIdQuery = exports.VouchersApiSlice.useGetVoucherByIdQuery;
