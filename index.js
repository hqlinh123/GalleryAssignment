/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
if (__DEV__) {
    require('./ReactotronConfig');
}
const RootApp = () => {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <App />
            </GestureHandlerRootView>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => RootApp);
