import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  love: [],
};

export const loveSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const item = state.love.find((single) => single.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      }
      state.love.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.love.filter((single) => single.id !== action.payload);
    },
    reset: (state) => {
      state.love = [];
    },
  },
});

export const { addToFavourite, removeFavourite, reset } = loveSlice.actions;
export default loveSlice.reducer;
