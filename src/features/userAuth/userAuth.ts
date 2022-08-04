import { apiSlice } from "../../services/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createAdvert: builder.mutation({
            query: body => ({
                url: `users`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            invalidatesTags: ['UserAuth'],
        }),
        AuthenticateUser: builder.mutation({
            query: body => ({
                url: `users/auth`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            invalidatesTags: ['UserAuth'],
        })
    })
})

export const {
    useCreateAdvertMutation,
    useAuthenticateUserMutation,
} = userApiSlice
