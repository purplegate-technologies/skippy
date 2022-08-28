import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout, setCredentials } from '../../features/auth/authSlice'
import { RootState } from '../../app/store'
// import { AdvertsApiSlice, AuthType } from '../apiTyoe'
import { toast } from 'react-toastify'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_KEY,
    credentials: 'include',
    prepareHeaders: (headers, { getState }: { getState: any }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
            headers.set("Access-Control-Allow-Origin", `*`);
        }
        // headers.set("x-api-key", process.env.REACT_APP_API_KEY)
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    // 401 (Unauthorized) and 403 (Forbidden) status codes
    // if (result?.error?.originalStatus === 403 || result.error && result.error.status === 401) {
    if ((result?.error?.status === 403 || result.error) && result.error.status === 401) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult: any = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult, "refreshResult refreshResult refreshResult refreshResult ")
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            // api.dispatch(logout())
            toast.error("Something went wrong, Please login again!")
            setTimeout(() => {
                api.dispatch(logout());
            }, 1000);
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    reducerPath: "authApi",
    tagTypes: ['Auth', 'Advert', "UserAuth", "UserAuth", "Wallet", 'Stats', "Settings", "UserManagerment"],
    endpoints: builder => ({

    })
})

// const {useCreateAdvertMutation, useGetAdvertAdminQuery} = apiSlice


  // if (
    //     result?.error &&
    //     result?.error?.data?._meta?.error?.message.includes("logged in")
    //     // result?.error?.data?._meta?.error?.code === 401 &&
    //   ) {
    //     // logout
    //     toaster("error", "Something went wrong, Please login again.");
    //     setTimeout(() => {
    //       api.dispatch(logOut());
    //     }, 1000);
    //   }
