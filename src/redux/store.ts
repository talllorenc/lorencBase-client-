import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import userSlice from "./slices/userSlice";
import { listenerMiddleware } from "@/middleware/auth";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware);
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
