import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../components/auth/token/getToken";
//GET SCHEDULE REPORT//
export const scheduleRequest = createApi({
  reducerPath: "scheduleRequest",
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
    getSchedule: builder.query({
      query: ({ id }) => `get-schedule-report/${id}`,
    }),
  }),
});
//GET TELEGRAM REPORT//
scheduleRequest.injectEndpoints({
  endpoints: (builder) => ({
    getTelegramReport: builder.query({
      query: ({ id }) => `get-telegram-report/${id}`,
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
//POST SCHEDULE REPORT//
scheduleRequest.injectEndpoints({
  endpoints: (builder) => ({
    postSchedule: builder.mutation({
      query: (payload) => ({
        url: "schedule-report",
        method: "POST",
        body: payload,
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
//POST TELEGRAM REPORT//
scheduleRequest.injectEndpoints({
  endpoints: (builder) => ({
    postTelegramReport: builder.mutation({
      query: (payload) => ({
        url: "telegram-report",
        method: "POST",
        body: payload,
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
export const {
  useGetScheduleQuery,
  useGetTelegramQuery,
  usePostScheduleQuery,
  usePostTelegramQuery,
} = scheduleRequest;
