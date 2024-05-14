import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../components/auth/token/getToken";
//PACKAGES//
export const packagesRequests = createApi({
  reducerPath: "packagesRequests",
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
    getPackages: builder.query({
      query: () => "packages",
    }),
  }),
});
export const { useGetPackagesQuery } = packagesRequests;
