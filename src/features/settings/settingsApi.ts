import { apiSlice } from './../../services/api/apiSlice';
export const settingApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        settings: builder.mutation({
            query: body => ({
                url: `settings`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: {} }, meta, arg) => response.data,
            invalidatesTags: ['Settings'],
        }),
    })
})
export const {  } = settingApiSlice
