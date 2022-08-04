import { apiSlice } from "../../services/api/apiSlice";

export const activityLogs = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLogs: builder.query({
            query: () => `` // it would show here soon from the endpoint by backend dev seyi
        })
    })
})
