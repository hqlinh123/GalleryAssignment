import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../store/rootReducer';
import rootSaga from '../store/rootSaga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

// Cấu hình Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Lưu dữ liệu vào AsyncStorage
  whitelist: ['auth'], // Chỉ persist reducer 'auth'
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Khởi tạo store với persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store, persistor};
