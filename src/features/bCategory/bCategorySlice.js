import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import bCategoryService from "./bCategoryService";

// Get all Blogs Category
export const getBlogCategories = createAsyncThunk(
  "blogCategory/get-bCategories",
  async (thunkAPI) => {
    try {
      return await bCategoryService.getBlogCategory();  
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Create a Blogs Category
export const createBlogCategories = createAsyncThunk(
  "blogCategory/create-bCategories",
  async (bCategoryData, thunkAPI) => {
    try {
      return await bCategoryService.createBlogCategory(bCategoryData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get a Blog Category
export const getABlogCategories = createAsyncThunk(
  "blogCategory/get-abCategories",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.getABlogCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update a Blog Category
export const updateBlogCategories = createAsyncThunk(
  "blogCategory/update-bCategories",
  async (bCategory, thunkAPI) => {
    try {
      return await bCategoryService.updateBlogCategory(bCategory);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Delete a Blog Category
export const deleteBlogCategories = createAsyncThunk(
  "productCategory/delete-pCategories",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.deleteBlogCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_All");
const initialState = {
  bCategory: [],
  createdBlogCategory: "",
  bcategoryName: "",
  updatedbCategory: "",
  deletedbCategory: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogCategorySlice = createSlice({
  name: "bCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bCategory = action.payload;
      })
      .addCase(getBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdBlogCategory = action.payload;
      })
      .addCase(createBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getABlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bcategoryName = action.payload.title;
      })
      .addCase(getABlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedbCategory = action.payload;
      })
      .addCase(updateBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedbCategory = action.payload;
      })
      .addCase(deleteBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default blogCategorySlice.reducer;
