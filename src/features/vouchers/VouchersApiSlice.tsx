import { apiSlice } from "../../services/api/apiSlice";

export const VouchersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createVouchers: builder.mutation<{}, any>({
            query: body => ({
                url: `vouchers`,
                method: 'POST',
                body
            }),
            // Pick out data and prevent nested properties in a hook or selector
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            invalidatesTags: ['Vouchers'],
        }),
        getVouchers: builder.query<any, any>({ // get >vouchers for tables finance vouchers on the tables
            query: () => `vouchers`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: any) => response.data,
            providesTags: ['Vouchers'],
        }),
        getVoucherById: builder.query({
            query: (id) => `vouchers/${id}`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: {} | undefined | any }, meta, arg) => response.data,
            providesTags: ['Vouchers'],
        }),
        deleteVoucher: builder.mutation<void, string>({
            query: (id) => ({
                url: `vouchers/${id}`,
                method: "DELETE",
            }) ,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: {} | undefined | any }, meta, arg) => response.data,
            invalidatesTags: ['Vouchers'],
        }),
        updateVoucher: builder.mutation<void, any>({
            query: ({id, ...body}) => ({
                url: `vouchers/${id}`,
                method: "PUT",
                body
            }) ,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: any) => response.data,
            invalidatesTags: ['Vouchers'],
        }),
    })
})

export const {useCreateVouchersMutation, useGetVouchersQuery, useGetVoucherByIdQuery, useDeleteVoucherMutation, useUpdateVoucherMutation } = VouchersApiSlice
