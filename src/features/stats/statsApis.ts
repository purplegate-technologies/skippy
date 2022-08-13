import { apiSlice } from "../../services/api/apiSlice";

export const statsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFinanceStats: builder.query({ // get Finance stats
            query: () => `stats/finance?startDate=&endDate=`,
            transformResponse: (response: { data: "" }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getDashboardStats: builder.query({ // get dashboard stats
            query: () => `stats/dashboard`,
            transformResponse: (response: { data: "" }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getAdvertStats: builder.query({ // get advert stats
            query: () => `stats/adverts`,
            transformResponse: (response: { data: "" }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getTrafficStats: builder.query({ // get traffic stats
            query: () => `stats/traffic?startDate=2022-07-30&endDate=2022-08-01`,
            transformResponse: (response: { data: "" }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getUserStats: builder.query({ // get traffic stats
            query: () => `stats/user`,
            transformResponse: (response: { data: "" }, meta, arg) => response.data,
            providesTags: ['Stats'],
        })
    })
});

const { useGetFinanceStatsQuery,
    useGetTrafficStatsQuery,
    useGetAdvertStatsQuery,
    useGetDashboardStatsQuery,
    useGetUserStatsQuery
} = statsApiSlice
