import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from '../sagas/sagas';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    gallery: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Add saga middleware
});

sagaMiddleware.run(rootSaga); // Run the sagas

export default store;
