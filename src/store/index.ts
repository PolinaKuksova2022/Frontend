import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { TCartItem } from "../types";

const setCartItems = createAction<TCartItem[]>("setCartItems");
const cartItems = createReducer(new Array<TCartItem>(), (builder) => {
  builder.addCase(setCartItems, (state, action) => action.payload);
});

const showCart = createAction<boolean>("showCart");
const cart = createReducer(false, (builder) => {
  builder.addCase(showCart, (state, action) => action.payload);
});

export const action = {
  setCartItems,
  showCart,
};

const reduxStateStore = localStorage.getItem("reduxStateStore");
const preloadedState = reduxStateStore ? JSON.parse(reduxStateStore) : {};

export const store = configureStore({
  reducer: {
    cartItems,
    cart,
  },
  devTools: true,
  preloadedState,
});

export { useDispatch, useSelector };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  localStorage.setItem("reduxStateStore", JSON.stringify(store.getState()));
});
