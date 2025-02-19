import {IActionCallback} from '../../utils/models';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

export type IActionLoginPayload<T = unknown> = {
  variables: {
    email: string;
    password: string;
    deviceId?: string;
    otp?: string;
  };
} & IActionCallback<T>;

export type LoginResponse = {
  userId: number;
  token: string;
};
