import { createReducer, createAction } from "@reduxjs/toolkit";

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUserId = createAction("user/id");

const initialState = {
  id: "",
};
export const userIdReducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserId, (state, action) => {
    const savedUserId = localStorage.getItem("userUid");
    if (savedUserId) {
      state.id = savedUserId;
    } else {
      let uid = "id";
      for (let i = 0; i < 3; i++) {
        uid = uid + "-" + Math.random().toString(16);
      }
      console.log(uid);
      localStorage.setItem("userUid", uid);
    }
  });
});
