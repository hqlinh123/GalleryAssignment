import { all } from "redux-saga/effects";
import gallerySagas from "./gallerySagas";

// Combine multiple sagas
export default function* rootSaga() {
  yield all([
    gallerySagas()
  ]);
}