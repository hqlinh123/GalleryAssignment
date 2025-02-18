import { all, call, put, takeEvery } from 'redux-saga/effects';
import GalleryAPI from '../services/api'; // Adjust to your API service
import { Photo } from '../redux/types';
import { fetchListPhotosRequest, searchPhotosRequest } from '../redux/actions';
import { fetchListPhotosFailed, incrementPage, searchPhotosFailed, setHasMore, setSearchResults, updateListPhotos } from '../features/DashBoard/gallerySlice';

// Fetch photos Saga (handle load more)
function* fetchListPhotosSaga(action: ReturnType<typeof fetchListPhotosRequest>) {
    try {
      const response: Photo[] = yield call(GalleryAPI.fetchListPhotos, action.payload); // API call
      yield put(updateListPhotos(response)); // Update photos in the state
      yield put(incrementPage()); // Increment the page number for next request
  
      // Determine if there are more photos to load (e.g., if the response has fewer than the requested number)
      if (response.length < 20) {
        yield put(setHasMore(false)); // Set hasMore to false if no more data
      } else {
        yield put(setHasMore(true)); // Keep hasMore true if there are more photos
      }
    } catch (error: any) {
      yield put(fetchListPhotosFailed(error.message)); // Handle API error
    }
  }
  
  // Search photos Saga (no change needed for search)
  function* searchPhotosSaga(action: ReturnType<typeof searchPhotosRequest>) {
    try {
      const response: Photo[] = yield call(GalleryAPI.searchPhotos, action.payload);
      yield put(setSearchResults(response)); // Update search results
    } catch (error: any) {
      yield put(searchPhotosFailed(error.message)); // Handle search error
    }
  }
// Watcher Sagas
function* watchFetchListPhotos() {
    yield takeEvery('gallery/fetchListPhotosRequest', fetchListPhotosSaga);
  }
  
  function* watchSearchPhotos() {
    yield takeEvery('gallery/searchPhotosRequest', searchPhotosSaga);
  }
  
  // Combine multiple sagas
  export default function* gallerySagas() {
    yield all([
      watchFetchListPhotos(),  // Watch for fetching list photos
      watchSearchPhotos(),     // Watch for search photos
    ]);
  }
