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
export const getAProductCat = createAsyncThunk(
  "category/get-procategory",
  async (id, thunkAPI) => {
    try {
      return await pCatService.getAProCat(id);
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
export const updateProductCat = createAsyncThunk(
  "category/update-category",
  async (category, thunkAPI) => {
    try {
      return await pCatService.updateProCat(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteProductCat = createAsyncThunk(
  "category/delete-category",
  async (id, thunkAPI) => {
    try {
      return await pCatService.deleteProCat(id);
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
        state.createdproCategories = action.payload;
      })
      .addCase(createProCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProductCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProductCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categoryName = action.payload.title;
      })
      .addCase(getAProductCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateProductCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedproCategories = action.payload;
      })
      .addCase(updateProductCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteProductCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedproCategories = action.payload;
      })
      .addCase(deleteProductCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default proCategories.reducer;
