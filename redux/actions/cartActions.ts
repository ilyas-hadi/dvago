// cartActions.ts
import { createAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

// Define action creators
export const addToCart = createAction<Product>("addToCart");
export const removeProductFromCart = createAction<number>("removeProductFromCart");
