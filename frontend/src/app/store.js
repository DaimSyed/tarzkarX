import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducers, { fetchAllData } from "../features/alldata";
import { navReducer } from "../features/nav";

export const store = configureStore({
  reducer: {
    store: dataSliceReducers,
    nav: navReducer,
  },
});

store.dispatch(fetchAllData());
