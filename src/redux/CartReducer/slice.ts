import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../types/Cart";

interface CartState {
  cart: Cart;
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const products = state.cart.filter(
        (product) => product.id !== action.payload.id
      );

      state.cart = products;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
