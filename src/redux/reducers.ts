import { combineReducers } from "@reduxjs/toolkit";
import galleryReducer from "../features/DashBoard/gallerySlice";

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
