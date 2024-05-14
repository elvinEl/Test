import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { getToken } from "../../components/auth/token/getToken";

//PROFILE//
export const profileRequest = createApi({
  reducerPath: "profileRequest",
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
    getProfile: builder.query({
      query: () => `profile`,
    }),
  }),
});
//CHANGE PASSWORD//
profileRequest.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (payload) => ({
        url: "change-password",
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

//PROFILE UPDATE//
profileRequest.injectEndpoints({
  endpoints: (builder) => ({
    profileUpdate: builder.mutation({
      query: (payload) => ({
        url: "profile-update",
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

export const {
  useGetProfileQuery,
  useChangePasswordQuery,
  useProfileUpdateQuery,
} = profileRequest;
