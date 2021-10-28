import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducers, { fetchAllData } from "../features/alldata";

export const store = configureStore({
  reducer: {
    store: dataSliceReducers,
  },
});

store.dispatch(fetchAllData());
