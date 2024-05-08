import { configureStore } from "@reduxjs/toolkit";
import { apiRequests } from "./api/apiRequest";
import { authRequests } from "./api/auth";
import { censusRequests } from "./api/census";
import { keywordRequests } from "./api/keywords";
export const store = configureStore({
  reducer: {
    [apiRequests.reducerPath]: apiRequests.reducer,
    [authRequests.reducerPath]: authRequests.reducer,
    [censusRequests.reducerPath]: censusRequests.reducer,
    [keywordRequests.reducerPath]: keywordRequests.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiRequests.middleware,
      authRequests.middleware,
      censusRequests.middleware,
      keywordRequests.middleware
    ),
});
