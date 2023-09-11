import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cart from "./cart";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});