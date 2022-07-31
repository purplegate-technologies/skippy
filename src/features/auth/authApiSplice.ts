import { apiSlice } from "../../services/api/apiSlice";
import { AuthType } from "../../services/apiTyoe";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: `/auth/login`,
                method: 'POST',
                // body: { ...credentials }
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        reset: builder.mutation({
            query: body => ({
                url: `/auth/reset-password`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        RecoverReset: builder.mutation({
            query: body => ({
                url: `/auth/recover-password`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
    })
})

export const {
    useLoginMutation, useResetMutation, useRecoverResetMutation
} = authApiSlice
