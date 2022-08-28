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
    })
})


export const { useCreateAdminMutation } = UserManagermentApiSlice
