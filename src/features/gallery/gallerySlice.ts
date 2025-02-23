import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryState, Photo, SaveListPhotosResponse } from './models';

const initialState: GalleryState = {
    listPhotos: [],
    searchResults: [],
    loading: false,
    error: null,
    hasMore: false,
    page: 0,
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        saveListPhotos: (state: GalleryState, action: PayloadAction<SaveListPhotosResponse>) => {
            state.listPhotos = action.payload.listPhotos;
        },
    },
});

export const { saveListPhotos } = gallerySlice.actions;
export default gallerySlice.reducer;
