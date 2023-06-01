import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdvertisementType } from "../../types/Advertisement";

const advertisementState: AdvertisementType = {
  id: 0,
  title: "",
  authorFullName: "",
  publicationYear: 0,
  userId: "",
  description: "",
  time: "",
  photo: "",
  publicationDate: "",
  categoryId: "",
};

const advertisementListState: AdvertisementType[] = [
  {
    id: 0,
    title: "",
    authorFullName: "",
    publicationYear: 0,
    userId: "",
    description: "",
    time: "",
    photo: "",
    publicationDate: "",
    categoryId: "",
  }
]


const slice = createSlice({
  name: "advertisement",
  initialState: {
    advertisement: advertisementState,
    advertisementList: advertisementListState,
  },
  reducers: {
    setAdvertisement: (
        state, 
        action: PayloadAction<AdvertisementType>
    ) => {
      state.advertisement = action.payload;
    },
    setAdvertisementList: (
      state, 
      action: PayloadAction<AdvertisementType[]>
    ) => {
      state.advertisementList = action.payload;
    },
  },
});

export const advertisementActions = slice.actions;

export default slice.reducer;
