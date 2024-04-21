// cartReducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeProductFromCart } from "../actions/cartActions";
import { Product } from "../../types";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(removeProductFromCart, (state, action) => {
      // Convert action.payload to a string for comparison
      const productId = action.payload.toString();
      state.items = state.items.filter(item => item.ID !== productId);
    });
});

export default cartReducer;
