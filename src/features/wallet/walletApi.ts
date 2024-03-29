import { apiSlice } from "../../services/api/apiSlice";

export const walletApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWalletByAdmin: builder.query({ // get wallet
            query: () => `wallet/admin`,
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Wallet'],
        }),
        getWalletHistory: builder.query({ // get wallet history
            query: (id) => `wallet/admin/${id}/history`,
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Wallet'],
        }),
        getRedeemPoints: builder.query({ // get edeem points
            query: (id: number) => `wallet/${id}/redeem`,
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Wallet'],
        }),
    })
})

export const {
    useGetWalletByAdminQuery,
    useGetWalletHistoryQuery,
    useGetRedeemPointsQuery,

} = walletApiSlice
