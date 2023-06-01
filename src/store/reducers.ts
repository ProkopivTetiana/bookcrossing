import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from "./api/auth.api";
import authSlice from "./slices/auth.slice";
import { profileApi } from "./api/profile.api";
import profileSlice from "./slices/profile.slice";
import { advertisementApi } from "./api/advertisement.api";
import advertisementSlice from "./slices/advertisement.slice";
import { categoryAdvertisementApi } from "./api/category.advertisement.api";
import categoryAdvertisementSlice from "./slices/category.advertisement.slice";




const apiReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [advertisementApi.reducerPath]: advertisementApi.reducer,
  [categoryAdvertisementApi.reducerPath]: categoryAdvertisementApi.reducer,
  // [Api.reducerPath]: Api.reducer,
};

const sliceReducers = {
  auth: authSlice,
  profile : profileSlice,
  advertisement : advertisementSlice,
  categoryAdvertisement : categoryAdvertisementSlice,
  // : Slice,
  // : Slice,
};

export const reducers = combineReducers({
  ...apiReducers,
  ...sliceReducers,
});
