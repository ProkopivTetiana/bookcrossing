import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from "./api/auth.api";
import authSlice from "./slices/auth.slice";

const apiReducers = {
  [authApi.reducerPath]: authApi.reducer,
  // [Api.Path]: Api.reducer,
  // [Api.Path]: Api.reducer,
};

const sliceReducers = {
  auth: authSlice,
  // : Slice,
  // : Slice,
};

export const reducers = combineReducers({
  ...apiReducers,
  ...sliceReducers,
});
