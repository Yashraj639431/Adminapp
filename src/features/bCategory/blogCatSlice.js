import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCatService from "./blogCatService";

export const getBlogCat = createAsyncThunk(
  "blogCategories/get-blogcategories",
  async (thunkAPI) => {
    try {
      return await bCatService.getBlogCat();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  blogCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const blogCategories = createSlice({
  name: "blogsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories = action.payload;
      })
      .addCase(getBlogCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default blogCategories.reducer;