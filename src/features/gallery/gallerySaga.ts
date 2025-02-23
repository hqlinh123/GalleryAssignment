import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ApiError } from '../../utils/models';
import * as Actions from './action';
import * as Models from './models';
import * as GalleryServices from '../../api/galleryApi';
import { saveListPhotos } from './gallerySlice';
// Tạo action
export const getPhotos = createAction<Models.GetPhotosPayload>(Actions.GET_PHOTOS);

function* handGetPhotos(action: PayloadAction<Models.GetPhotosPayload>) {
    const { onSuccess, onFail, params } = action.payload;
    try {
        const { response, error } = yield call(GalleryServices.getPhotos, params);
        if (!error) {
            yield put(saveListPhotos({ listPhotos: response }));
            onSuccess && onSuccess(response);
        }
        onFail && onFail(error as ApiError);
    } catch (error) {
        onFail && onFail(error as ApiError);
    }
}

export default function* gallerySaga() {
    yield takeLatest(getPhotos, handGetPhotos);
}
