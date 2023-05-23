import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authActions } from "../store/slices/auth.slice";

// import { Actions } from "./../store/slices/.slice";

const allActions = {
  ...authActions,
  // ...Actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch); 
};
