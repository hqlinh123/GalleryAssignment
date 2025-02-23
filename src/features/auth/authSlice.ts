import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './models';

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<{ token: string }>) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
