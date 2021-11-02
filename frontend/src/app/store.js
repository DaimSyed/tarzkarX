import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducers, { fetchAllData } from "../features/alldata";
import { navReducer } from "../features/nav";
import { cartReducer } from "../features/cart";

export const store = configureStore({
  reducer: {
    store: dataSliceReducers,
    nav: navReducer,
    cart: cartReducer,
  },
});

store.dispatch(fetchAllData());
