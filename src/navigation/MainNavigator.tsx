import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import MainTabNavigator from './MainTabNavigator';
import {SCREEN_KEY} from './initScreens';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name={SCREEN_KEY.MAIN_TAB}
        component={MainTabNavigator}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
