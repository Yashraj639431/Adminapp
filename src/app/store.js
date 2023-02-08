import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customer/customerSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
// import productReducer from "../features/product/productSlice";
// import brandReducer from "../features/brand/brandSlice";
// import proCategoriesReducer from "../features/pcategory/pCategorySlice";
// import colorReducer from "../features/color/colorSlice";
// import blogReducer from "../features/blog/blogSlice";
// import blogCategoriesReducer from "../features/bCategory/blogCatSlice";
// import orderReducer from "../features/auth/authSlice";
// import uploadReducer from "../features/upload/uploadSlice";
// import couponReducer from "../features/coupon/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    enquiry: enquiryReducer,
    // product: productReducer,
    // brand: brandReducer,
    // pCategory: proCategoriesReducer,
    // bCategory: blogCategoriesReducer,
    // color: colorReducer,
    // blog: blogReducer,
    // order: orderReducer,
    // upload: uploadReducer,
    // coupon: couponReducer,
  },
});
