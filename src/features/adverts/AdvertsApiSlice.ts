import { apiSlice } from "../../services/api/apiSlice";

// this you would interagte crud and  start and complete stream

interface AdvertsApiSlice {
    title: string,
    points: number,
    type: string,
    file: any,
    status: string
}

export const advertsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createAdvert: builder.mutation({
            query: body => ({
                url: `adverts`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        getAdvertAdmin: builder.query({ // get advert admin
            query: () => `adverts`,
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ["Advert"]
        }),
        getAdvertUser: builder.query({ // get advert user
            query: () => `adverts/user`,
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ['Advert']
        }),
        getAdvert: builder.query({ // get advert for tables
            query: ({ id }) => `adverts/${id}`,
            transformResponse: (response: { data: {} | undefined | any }, meta, arg) => response.data,
            providesTags: ['Advert'],
        }),
        updateAdvert: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}`,
                method: 'PUT',
                body
            }),
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        deleteAdvert: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}`,
                method: 'DELETE',
                body
            }),
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),

        // StartStream
        startStreams: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}/start-stream`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        completeStreams: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}/end-stream`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        getStreamAdmin: builder.query({ // get advert admin
            query: () => `adverts/streams`,
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ["Advert"]
        }),
        getStreamUser: builder.query({ // get advert admin
            query: () => `adverts/streams/user`,
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ["Advert"]
        }),
    })
})

export const {
    useCreateAdvertMutation,
    useGetAdvertAdminQuery,
    useGetAdvertUserQuery,
    useGetAdvertQuery,
    useUpdateAdvertMutation,
    useDeleteAdvertMutation,

    useStartStreamsMutation,
    useCompleteStreamsMutation,
    useGetStreamAdminQuery,
    useGetStreamUserQuery
} = advertsApiSlice;
