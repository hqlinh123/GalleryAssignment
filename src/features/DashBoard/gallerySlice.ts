import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GalleryState, Photo} from '../../redux/types';

const initialState: GalleryState = {
  listPhotos: [],
  searchResults: [],
  loading: false,
  error: null,
  hasMore: false,
  page: 1,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    // Update the list of photos by appending new data
    updateListPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.listPhotos = [...state.listPhotos, ...action.payload]; // Append new photos to existing list
    },
    setSearchResults: (state, action: PayloadAction<Photo[]>) => {
      state.searchResults = action.payload;
    },
    fetchListPhotosFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    searchPhotosFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // Optional: You may also want to set pagination flags for hasMore and page here
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    incrementPage: state => {
      state.page += 1; // Increment the page number for pagination
    },
  },
});

export const {
  updateListPhotos,
  setSearchResults,
  fetchListPhotosFailed,
  searchPhotosFailed,
  setHasMore,
  incrementPage,
} = gallerySlice.actions;

export default gallerySlice.reducer;
