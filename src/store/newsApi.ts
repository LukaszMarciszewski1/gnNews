import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsApiResponse } from 'models/news';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://newsapi.org/v2/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', '68b907e7a07c40f7af324ff1405041f6');
      return headers
    },
  }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsApiResponse, void>({
      query: () => `everything?q=bitcoin`,
      providesTags: ['News'],
    }),
    getCountryNews: builder.query<NewsApiResponse, string>({
      query: (id: string) => `top-headlines?country=${id}`,
      providesTags: ['News'],
    }),
  }),
})

export const {useGetAllNewsQuery, useGetCountryNewsQuery} = newsApi