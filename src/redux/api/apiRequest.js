import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const apiRequests = createApi({
  reducerPath: "apiRequests",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const tokenCookies = Cookies.get("token");
      if (tokenCookies) {
        headers.set("Authorization", `Bearer ${JSON.parse(tokenCookies)}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopics: builder.query({
      query: () => `get-topics`,
    }),
  }),
});
//LOGIN_METHOD
apiRequests.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useGetTopicsQuery, useLoginMutation } = apiRequests;
