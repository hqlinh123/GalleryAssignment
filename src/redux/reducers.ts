import { combineReducers } from '@reduxjs/toolkit';
import galleryReducer from '../features/gallery/gallerySlice';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    gallery: galleryReducer,
    auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
