import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../components/auth/token/getToken";
//CREATE_TOPIC//
export const keywordRequests = createApi({
  reducerPath: "keywordRequests",
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
    createTopics: builder.mutation({
      query: (payload) => ({
        url: "create-topic",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});
//EDIT_TOPIC//
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    editTopics: builder.mutation({
      query: (payload) => ({
        url: "topic",
        method: "PUT",
        body: payload,
      }),
      prepareHeaders: (headers) => {
        const token = getToken();
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
  }),
});
//GET_USER_COMPANY//
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    getUserCompany: builder.query({
      query: () => `get-user-company`,
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
//GET_TOPICS//
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    getTopics: builder.query({
      query: () => `get-topics`,
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
//GET_SEARCH//
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({ query }) => `get-search?query=${query}`,
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
//DELETE_TOPIC
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    deleteTopics: builder.mutation({
      query: ({ id }) => ({
        method: "DELETE",
        url: `delete-topic/${id}`,
      }),
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
//TOPIC_DETAIL//
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    getTopicDetail: builder.query({
      query: ({ id }) => `topic-detail/${id}`,
    }),
  }),
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
//GET_KEYWORDS//
keywordRequests.injectEndpoints({
  endpoints: (builder) => ({
    getKeywords: builder.query({
      query: ({ id }) => `get-keywords/${id}`,
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
//RESULT_KEYWORDS//
keywordRequests.injectEndpoints({
    endpoints:(builder)=>({
        getKeywordResults:builder.query({
            query:()=>`result-keywords`
        })
    })
})
export const {
  useCreateTopicsMutation,
  useEditTopicsMutation,
  useGetUserCompanyQuery,
  useGetTopicsQuery,
  useGetSearchQuery,
  useDeleteTopicsMutation,
  useTopicDetailQuery,
  useGetKeywordsQuery,
} = keywordRequests;
