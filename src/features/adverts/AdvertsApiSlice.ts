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
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        getAdvertAdmin: builder.query<any, any>({ // get advert admin for table
            query: () => `adverts`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: {} | undefined | any }) => response.data,
            providesTags: ["Advert"]
        }),
        getAdvertUser: builder.query({ // get advert user
            query: () => `adverts/user`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ['Advert']
        }),
        getAdvertById: builder.query({ // get advert for tables by id for each user
            query: ({ id }) => `adverts/${id}`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: {} | undefined | any }, meta, arg) => response.data,
            providesTags: ['Advert'],
        }),
        updateAdvert: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}`,
                method: 'PUT',
                body
            }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        deleteAdvert: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}`,
                method: 'DELETE',
                body
            }),
            // Pick out data and prevent nested properties in a hook or selector
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
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        completeStreams: builder.mutation({ // get advert by id
            query: ({ body, id }) => ({
                url: `adverts/${id}/end-stream`,
                method: 'POST',
                body
            }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        getStreamAdmin: builder.query({ // get advert admin
            query: () => `adverts/streams`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ["Advert"]
        }),
        getStreamUser: builder.query({ // get advert admin
            query: () => `adverts/streams/user`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ["Advert"]
        }),
    })
})

export const {
    useCreateAdvertMutation,
    useGetAdvertAdminQuery,
    useGetAdvertUserQuery,
    useGetAdvertByIdQuery,
    useUpdateAdvertMutation,
    useDeleteAdvertMutation,

    useStartStreamsMutation,
    useCompleteStreamsMutation,
    useGetStreamAdminQuery,
    useGetStreamUserQuery
} = advertsApiSlice;
