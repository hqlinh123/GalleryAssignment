/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabScreens} from './BottomTabScreens';
import {RootStackParamList} from './types';
import {SCREEN_KEY} from './initScreens';

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_KEY.MAIN_TAB}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const screen = BottomTabScreens.find(s => s.name === route.name);
          return screen ? (
            <Ionicons name={screen.icon as any} size={size} color={color} />
          ) : (
            <View />
          );
        },
        headerShown: false, // Hide top header bar
      })}>
      {BottomTabScreens.map(({name, component}) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
