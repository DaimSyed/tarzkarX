import { createSlice } from "@reduxjs/toolkit";

const nav = createSlice({
  name: "showNav",
  initialState: { show: false },
  reducers: {
    showNav: (state, action) => {
      state.show = true;
    },
    hideNav: (state) => {
      state.show = false;
    },
  },
});

export const { showNav, hideNav } = nav.actions;

export const navReducer = nav.reducer;
