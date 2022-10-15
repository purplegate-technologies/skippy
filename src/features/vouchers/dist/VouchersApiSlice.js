"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.useGetVouchersUsersQuery = exports.useUpdateVoucherMutation = exports.useDeleteVoucherMutation = exports.useGetVoucherByIdQuery = exports.useGetVouchersQuery = exports.useCreateVouchersMutation = exports.VouchersApiSlice = void 0;
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
            transformResponse: function (response) { return response.data; },
            providesTags: ['Vouchers']
        }),
        getVouchersUsers: builder.query({
            query: function () { return "vouchers/users"; },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response) { return response.data; },
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
        }),
        updateVoucher: builder.mutation({
            query: function (_a) {
                var id = _a.id, body = __rest(_a, ["id"]);
                return ({
                    url: "/vouchers/" + id,
                    method: "PUT",
                    body: body
                });
            },
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: function (response) { return response.data; },
            invalidatesTags: ['Vouchers']
        })
    }); }
});
exports.useCreateVouchersMutation = exports.VouchersApiSlice.useCreateVouchersMutation, exports.useGetVouchersQuery = exports.VouchersApiSlice.useGetVouchersQuery, exports.useGetVoucherByIdQuery = exports.VouchersApiSlice.useGetVoucherByIdQuery, exports.useDeleteVoucherMutation = exports.VouchersApiSlice.useDeleteVoucherMutation, exports.useUpdateVoucherMutation = exports.VouchersApiSlice.useUpdateVoucherMutation, exports.useGetVouchersUsersQuery = exports.VouchersApiSlice.useGetVouchersUsersQuery;
