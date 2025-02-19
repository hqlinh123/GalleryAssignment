import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {AuthStackScreens} from './AuthStackScreens';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      {AuthStackScreens.map(({name, component}) => (
        <AuthStack.Screen key={name} name={name} component={component} />
      ))}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
