import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryAdvertisementType, CategoryType } from "../../types/CategoryType";

const categoryAdvertisementState: CategoryAdvertisementType[] = [{
  categoryId: "",
  advertisementId: "",
}];
const categoryState: CategoryType = {
  id: "",
  name: "",
};
const categoriesState: CategoryType[] = [{
  id: "",
  name: "",
}];

const slice = createSlice({
  name: "categoryAdvertisement",
  initialState: {
    category: categoryState,
    categories: categoriesState,
    categoryAdvertisement: categoryAdvertisementState,
  },
  reducers: {
    setCategory: (
        state, 
        action: PayloadAction<CategoryType>
    ) => {
      state.category = action.payload;
    },
    setCategories: (
        state, 
        action: PayloadAction<CategoryType[]>
    ) => {
      state.categories = action.payload;
    },
    setCategoryAdvertisement: (
      state, 
      action: PayloadAction<CategoryAdvertisementType[]>
  ) => {
    state.categoryAdvertisement = action.payload;
  },
  },
});

export const categoryAdvertisementActions = slice.actions;

export default slice.reducer;
