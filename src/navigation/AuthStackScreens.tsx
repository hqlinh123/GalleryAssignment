import LoginScreen from '@screens/LoginScreen';
import { SCREEN_KEY } from '@navigation/initScreens';

export const AuthStackScreens = [
    {
        name: SCREEN_KEY.LOGIN,
        component: LoginScreen,
    },
] as const;
