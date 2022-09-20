import { apiSlice } from "../../services/api/apiSlice";

type Internal = {
    internal: { key: number }
    external: { key: number }
}
type External = {
    internal: { key: number }
    external: { key: number }
}
interface getDashbbordStatsTypes {
    dayOfMonthGraph: {
        internal: Internal,
        external: External
    }
    dayOfWeekGraph: {
        internal: Internal,
        external: External
    }
    endDate: {
        totalAdverts: number
        totalPayout: number
        totalUsers: number
        voucherUsage: number
    }
    monthOfYearGraph: {
        internal: Internal,
        external: External
    }
    startDate: {
        totalAdverts: number
        totalPayout: number
        totalUsers: number
        voucherUsage: number
    }
    totalAdsGraph: {
        Friday: number
        Monday: number
        Saturday: number
        Sunday: number
        Thursday: number
        Tuesday: number
        Wednesday: number
    }
    totalVoucherUsageGraph: {
        Friday: number
        Monday: number
        Saturday: number
        Sunday: number
        Thursday: number
        Tuesday: number
        Wednesday: number
    }
}

export const statsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFinanceStats: builder.query<{} | undefined | any, void>({ // get Finance stats
            query: () => `stats/finance?startDate=&endDate=`,
            // transformResponse: (response: { data: getDashbbordStatsTypes }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        // getDashboardStats: builder.query<getDashbbordStatsTypes, void>({ // get dashboard stats
        getDashboardStats: builder.query<{} | undefined | any, void>({ // get dashboard stats
            query: () => `stats/dashboard`,
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getAdvertStats: builder.query<{} | undefined | any, void>({ // get advert stats
            query: () => `stats/adverts`,
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getTrafficStats: builder.query<{} | undefined | any, void>({ // get traffic stats
            query: () => `stats/traffic?startDate=2022-07-30&endDate=2022-08-01`,
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats'],
        }),
        getUserStats: builder.query<any, void>({ // get traffic stats
            query: () => `stats/user`,
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['Stats'],
        })
    })
});

export const {
    useGetFinanceStatsQuery,
    useGetTrafficStatsQuery,
    useGetAdvertStatsQuery,
    useGetDashboardStatsQuery,
    useGetUserStatsQuery,
} = statsApiSlice
