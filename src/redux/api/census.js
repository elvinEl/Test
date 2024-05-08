import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../components/auth/token/getToken";
//SENTIMENT//
export const censusRequests = createApi({
  reducerPath: "censusRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSentiment: builder.query({
      query: ({ id, dataStart, dataEnd }) =>
        `sentiment/${id}/${dataStart}/${dataEnd}`,
    }),
  }),
});
//ARTICLES//
censusRequests.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: ({ id, dataStart, dataEnd }) =>
        `articles/${id}/${dataStart}/${dataEnd}`,
    }),
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
});
//SOURCE//
censusRequests.injectEndpoints({
  endpoints: (builder) => ({
    getSource: builder.query({
      query: ({ id, dataStart, dataEnd }) =>
        `source-distribution/${id}/${dataStart}/${dataEnd}`,
    }),
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
});
export const { useGetSentimentQuery, useGetArticlesQuery, useGetSourceQuery } =
  censusRequests;
