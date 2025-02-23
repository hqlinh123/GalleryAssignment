import { ProfileScreenParams } from './types';

export const SCREEN_KEY = {
    DASH_BOARD: 'DashBoard',
    LOGIN: 'Login',
    PROFILE: 'Profile',
    MAIN_TAB: 'MainTabs',
} as const;

// 🔥 Generic type để ánh xạ params cho từng màn hình
export type ScreenParams = {
    [SCREEN_KEY.DASH_BOARD]: undefined;
    [SCREEN_KEY.PROFILE]: ProfileScreenParams;
    [SCREEN_KEY.LOGIN]: undefined;
    [SCREEN_KEY.MAIN_TAB]: undefined;
};
