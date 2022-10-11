import { apiSlice } from "../../services/api/apiSlice";

export const UserManagermentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createAdmin: builder.mutation({
            query: body => ({
                url: `admin`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            invalidatesTags: ['UserManagerment'],
        }),
        getAppUsers: builder.query<{} | undefined | any, void>({ // get traffic stats
            query: () => `users/app-users`,
            // transformResponse: (response: { data: {} }, meta, arg) => response.data,
            providesTags: ['UserManagerment'],
        }),
        getAppUser: builder.query({ // get traffic stats
            query: (id) => `users/app-users/${id}`,
            transformResponse: (response: any) => response.data,
            providesTags: ['UserManagerment'],
        }),

    })
})


export const { useCreateAdminMutation, useGetAppUsersQuery, useGetAppUserQuery } = UserManagermentApiSlice
