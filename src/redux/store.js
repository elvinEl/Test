import { configureStore } from "@reduxjs/toolkit";
import { apiRequests } from "./api/apiRequest";
import { registerApi } from "./api/register";
export const store = configureStore({
  reducer: {
    [apiRequests.reducerPath]: apiRequests.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiRequests.middleware,
      registerApi.middleware
    ),
});
