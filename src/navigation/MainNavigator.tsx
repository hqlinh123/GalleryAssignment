import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '@navigation/types';
import { SCREEN_KEY } from './initScreens';
import MainTabNavigator from './MainTabNavigator';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name={SCREEN_KEY.DASH_BOARD} component={MainTabNavigator} />
        </MainStack.Navigator>
    );
};

export default MainNavigator;
