import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pCategoryService from "./pCategoryService";

export const getProductCategories = createAsyncThunk(
  "productCategory/get-pCategories",
  async (thunkAPI) => {
    try {
      return await pCategoryService.getProductCategory();  
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  pCategory: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productCategorySlice = createSlice({
  name: "pCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pCategory = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productCategorySlice.reducer;
