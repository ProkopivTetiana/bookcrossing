import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authActions } from "../store/slices/auth.slice";
import { profileActions } from "../store/slices/profile.slice";
import { advertisementActions } from "../store/slices/advertisement.slice";
import { categoryAdvertisementActions } from "../store/slices/category.advertisement.slice";

// import { Actions } from "./../store/slices/.slice";

const allActions = {
  ...authActions,
  ...profileActions,
  ...advertisementActions,
  ...categoryAdvertisementActions,
  // ...Actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch); 
};
