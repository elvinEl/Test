import { configureStore } from "@reduxjs/toolkit";
import { authRequests } from "./api/auth";
import { censusRequests } from "./api/census";
import { keywordRequests } from "./api/keywords";
import { profileRequest } from "./api/profile";
import { scheduleRequest } from "./api/scheduleReport";
import { exportRequests } from "./api/exports";
export const store = configureStore({
  reducer: {
    [authRequests.reducerPath]: authRequests.reducer,
    [censusRequests.reducerPath]: censusRequests.reducer,
    [keywordRequests.reducerPath]: keywordRequests.reducer,
    [profileRequest.reducerPath]: profileRequest.reducer,
    [scheduleRequest.reducerPath]: scheduleRequest.reducer,
    [exportRequests.reducerPath]: exportRequests.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authRequests.middleware,
      censusRequests.middleware,
      keywordRequests.middleware,
      profileRequest.middleware,
      scheduleRequest.middleware,
      exportRequests.middleware
    ),
});
