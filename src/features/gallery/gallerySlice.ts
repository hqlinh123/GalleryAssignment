import {createSlice} from '@reduxjs/toolkit';
import {GalleryState} from './models';

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
  reducers: {},
});

export const {} = gallerySlice.actions;
export default gallerySlice.reducer;
