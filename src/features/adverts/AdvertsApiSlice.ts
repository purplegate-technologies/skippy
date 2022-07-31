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
                url: `/adverts`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        getAdvertAdmin: builder.query({ // get advert admin
            query: () => `/adverts`,
            providesTags: ["Advert"],
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data
        }),
        getAdvertUser: builder.query({ // get advert user
            query: body => `/adverts/user`,
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ['Advert'],
        }),
        getAdvert: builder.query({ // get advert by id
            query: ({ id}) => `/adverts/${id}`,
            // transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            transformResponse: (response: { data: AdvertsApiSlice }, meta, arg) => response.data,
            providesTags: ['Advert'],
        }),
    })
})

// export {  } = advertsApiSlice;
