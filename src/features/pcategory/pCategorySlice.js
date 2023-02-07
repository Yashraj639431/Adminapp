import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import pCatService from "./pCategoryService";

export const getProductCat = createAsyncThunk(
  "productCategories/get-categories",
  async (thunkAPI) => {
    try {
      return await pCatService.getProductCat();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProCat = createAsyncThunk(
  "productCategories/create-categories",
  async (procatData, thunkAPI) => {
    try {
      return await pCatService.createProCat(procatData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_All");
const initialState = {
  proCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const proCategories = createSlice({
  name: "productsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.proCategories = action.payload;
      })
      .addCase(getProductCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createProCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.CreatedproCategories = action.payload;
      })
      .addCase(createProCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default proCategories.reducer;
