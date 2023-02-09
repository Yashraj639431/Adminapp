import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customer/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import productCategoryReducer from "../features/pCategory/pCategorySlice";
import blogCategoryReducer from "../features/bCategory/bCategorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    customer: customerReducer,
    brand: brandReducer,
    pCategory: productCategoryReducer,
    bCategory: blogCategoryReducer,
  },
});
