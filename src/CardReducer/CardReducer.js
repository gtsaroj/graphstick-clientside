import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const WishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtowishlist: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removewishlist: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = CartSlice.actions;
export const { addtowishlist, removewishlist } = WishSlice.actions;

export const cartSlice =  CartSlice.reducer;
export const wishSlice = WishSlice.reducer;
