import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducers, { fetchAllData } from "../features/alldata";
import { navReducer } from "../features/nav";
import { cartReducer } from "../features/cart";
import { getUserId, userIdReducer } from "../features/userKey";

export const store = configureStore({
  reducer: {
    store: dataSliceReducers,
    nav: navReducer,
    cart: cartReducer,
    userId: userIdReducer,
  },
});

store.dispatch(fetchAllData());
store.dispatch(getUserId());
