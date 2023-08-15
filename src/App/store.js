import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/productReducer";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});


