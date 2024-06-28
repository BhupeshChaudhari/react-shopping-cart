import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
// import { CartReducer } from "./slices/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
