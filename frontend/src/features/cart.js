import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, { payload: data }) => {
      const checkWithpdId = state.filter((pd) => pd.id === data.id);
      if (checkWithpdId) {
        if (checkWithpdId.find((pd) => pd.colorId === data.colorId)) {
          return state.map((pb) => {
            if (pb.id === data.id && pb.colorId === data.colorId) {
              return { ...pb, quantity: pb.quantity + (data?.increment || 1) };
            }
            return pb;
          });
        } else {
          state.push({ ...data, quantity: data?.increment || 1 });
        }
      } else {
        state.push({ ...data, quantity: data?.increment || 1 });
      }
    },
    removeFromCart: (state, { payload: data }) => {
      return state
        .map((pd) => {
          if (pd.id === data.id && pd.colorId === data.colorId) {
            if (pd.quantity === 1) {
              return null;
            }
            return { ...pd, quantity: pd.quantity - 1 };
          }
          return pd;
        })
        .filter(Boolean);
    },
    resetCart: (state, action) => {
      console.log(state, "yess");
      state.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cart.actions;
export const cartReducer = cart.reducer;
