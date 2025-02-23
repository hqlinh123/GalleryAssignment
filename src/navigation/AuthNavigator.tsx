import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStackScreens } from '@navigation/AuthStackScreens';
import { RootStackParamList } from '@navigation/types';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            {AuthStackScreens.map(({ name, component }) => (
                <AuthStack.Screen key={name} name={name} component={component} />
            ))}
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
