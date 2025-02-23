import { ScreenParams } from './initScreens';

export interface DetailScreenParams {
    id: number;
}

export interface ProfileScreenParams {
    userId: string;
}

// 🔥 RootStackParamList tự động lấy params từ ScreenParams
export type RootStackParamList<T extends keyof ScreenParams = keyof ScreenParams> = {
    [K in T]: ScreenParams[K];
};
