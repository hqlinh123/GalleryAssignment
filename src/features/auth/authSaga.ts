import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {loginApi} from '../../api/authApi';
import * as Actions from './action';
import {loginSuccess} from './authSlice';
import * as Models from './models';
import {ApiError} from '../../utils/models';

// Tạo action
export const login = createAction<Models.IActionLoginPayload>(Actions.LOGIN);

function* handleLogin(action: PayloadAction<Models.IActionLoginPayload>) {
  const {onSuccess, onFail, variables} = action.payload;
  try {
    const {response, error} = yield call(loginApi, variables);
    if (!error) {
      yield put(loginSuccess(response));
      onSuccess && onSuccess(response);
    }
  } catch (error) {
    console.error('Login failed', error);
    onFail && onFail(error as ApiError);
  }
}

export default function* authSaga() {
  yield takeLatest(login, handleLogin); // Fix lỗi ở đây
}
