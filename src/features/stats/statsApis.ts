import { apiSlice } from "../../services/api/apiSlice";

export const statsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFinanceStats: builder.query({ // get Finance stats
            query: () => `stats/finance?startDate=&endDate=`,
    }),
        getDashboardStats: builder.query({ // get dashboard stats
            query: () => `stats/dashboard`,
    }),
        getAdvertStats: builder.query({ // get advert stats
            query: () => `stats/adverts`,
    }),
        getATrafficStats: builder.query({ // get traffic stats
            query: () => `stats/traffic?startDate=2022-07-30&endDate=2022-08-01`,
    }),
        getAUserStats: builder.query({ // get traffic stats
            query: () => `stats/user`,
    })
    })
});
