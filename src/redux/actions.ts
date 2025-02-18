import { Photo } from './types';

export const fetchListPhotosRequest = (page: number) => ({
  type: 'gallery/fetchListPhotosRequest',
  payload: page,
});

export const searchPhotosRequest = (query: string) => ({
  type: 'gallery/searchPhotosRequest',
  payload: query,
});

export const updateListPhotos = (photos: Photo[]) => ({
  type: 'gallery/updateListPhotos',
  payload: photos,
});

export const setSearchResults = (results: Photo[]) => ({
  type: 'gallery/setSearchResults',
  results,
});

export const fetchListPhotosFailed = (message: string) => ({
  type: 'gallery/fetchListPhotosFailed',
  message,
});

export const searchPhotosFailed = (message: string) => ({
  type: 'gallery/searchPhotosFailed',
  message,
});
