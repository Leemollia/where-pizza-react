import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/Leemollia/where-pizza/master/database.json' }),
    endpoints: (builder) => ({
        getAllCards: builder.query({
            query: () => ''
        })
    })
})

export const { useGetAllCardsQuery } = cardsApi;