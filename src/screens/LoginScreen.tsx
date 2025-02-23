import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSaga';
import { SCREEN_KEY } from '../navigation/initScreens';
import * as NavigationServices from '../navigation/navigationService';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(
            login({
                variables: {
                    email: email,
                    password: password,
                    deviceId: undefined,
                    otp: undefined,
                },
                onSuccess: () =>
                    setTimeout(() => NavigationServices.navigate(SCREEN_KEY.DASH_BOARD)),
            }),
        );
    };
    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                testID="email"
                accessibilityLabel="email-input"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                testID="password"
                accessibilityLabel="password-input"
            />
            <Button
                title="Login"
                onPress={handleLogin}
                testID="login-button"
                accessibilityLabel="login-button"
            />
        </View>
    );
};

export default LoginScreen;
