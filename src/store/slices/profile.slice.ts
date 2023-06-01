import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserNameType, UserType } from "../../types/UserType";

const profileState: UserType = {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    repeatPassword: "",
    contactInfo: "",
};

const profileNameState:UserNameType = {
  firstName: "",
  lastName: "",
  contactInfo: "",
};

const slice = createSlice({
  name: "profile",
  initialState: {
    profile: profileState,
    profileName: profileNameState,
  },
  reducers: {
    setProfile: (
        state, 
        action: PayloadAction<UserType>
    ) => {
      state.profile = action.payload;
    },
    setProfileName: (
      state, 
      action: PayloadAction<UserType>
  ) => {
    state.profileName = action.payload;
  },
  },
});

export const profileActions = slice.actions;

export default slice.reducer;
