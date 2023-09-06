import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/productReducer";
import cartReducer from "../Features/cartReducer";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});


