import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { store } from '@redux/store';
import { persistor } from '@redux/store';
import AppNavigator from '@navigation/AppNavigator';
const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator size="large" />}
      persistor={persistor}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </PersistGate>
  </Provider>
);

export default App;
