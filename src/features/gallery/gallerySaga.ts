import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {call, takeLatest} from 'redux-saga/effects';
import * as GalleryServices from '../../api/galleryApi';
import * as Actions from './action';
import * as Models from './models';
import {ApiError} from '../../utils/models';

// Tạo action
export const getPhotos = createAction<Models.GetPhotosPayload>(
  Actions.GET_PHOTOS,
);

function* handGetPhotos(action: PayloadAction<Models.GetPhotosPayload>) {
  const {onSuccess, onFail, params} = action.payload;
  try {
    const {response, error} = yield call(GalleryServices.getPhotos, params);
    if (!error) {
      onSuccess && onSuccess(response);
    }
  } catch (error) {
    console.error('Login failed', error);
    onFail && onFail(error as ApiError);
  }
}

export default function* authSaga() {
  yield takeLatest(getPhotos, handGetPhotos); // Fix lỗi ở đây
}
