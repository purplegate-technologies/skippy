import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../app/store";
import { AuthType } from "./authTyoe";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://skippyapi.herokuapp.com/v1/`,  // this
        // baseUrl: `https://testtourapp.herokuapp.com/`,  // this
        // baseUrl: process.env.REACT_APP_API_URL,  // this
        credentials: 'include',
        prepareHeaders: (headers, { getState }: { getState: any }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
                headers.set("Access-Control-Allow-Origin", ``);
                // headers.set("Access-Control-Allow-Origin", `*`);
                // header in the response must not be the wildcard '*'
            }
            // headers.set("x-api-key",  process.env.REACT_APP_API_KEY);
            return headers
        }
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<{}, AuthType>({
            query: (body) => ({
                url: `/auth/login`,
                method: `POST`,
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        registerUser: builder.mutation<{}, AuthType>({
            query: (body) => ({
                url: `/auth/signup`,
                method: `POST`,
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
    })
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi

// create an apiSlice
// const baseQueryWithReauth = async (args ,api,extraOptions) => {
//     let result = await
// }
