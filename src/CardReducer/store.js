import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, wishSlice} from "./CardReducer"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedCardReducer = persistReducer(persistConfig, cartSlice);
const persistedWishReducer = persistReducer(persistConfig, wishSlice)

export const store = configureStore({
  reducer: {
    cart: persistedCardReducer,
    wish: persistedWishReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
