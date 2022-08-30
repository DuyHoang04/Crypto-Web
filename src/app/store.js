import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cyptoApi";
import { cryptoNewsApi } from "../services/ctyptoNew";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
