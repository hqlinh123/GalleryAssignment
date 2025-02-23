import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import gallerySaga from '../features/gallery/gallerySaga';

export default function* rootSaga() {
    yield all([authSaga(), gallerySaga()]);
}
