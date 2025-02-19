import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigator.tsx';
import {persistor, store} from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator size="large" />}
      persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default App;
