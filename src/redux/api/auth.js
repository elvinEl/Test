import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../components/auth/token/getToken";
//REGISTER//
export const authRequests = createApi({
  reducerPath: "authRequests",
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
    register: builder.mutation({
      query: (payload) => ({
        url: "auth/register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});
//LOGIN//
authRequests.injectEndpoints({
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
//LOGOUT//
authRequests.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
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
//RESET_PASSWORD//
authRequests.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: "auth/reset-password",
        method: "POST",
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
export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
} = authRequests;
